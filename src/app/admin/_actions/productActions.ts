"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import cloudinary from "@/lib/cloudinary";

const fileSchema = z
  .instanceof(File, { message: "File is required." })
  .refine(
    (file) => file.size > 0 && file.type.startsWith("image/"),
    { message: "Only image files are allowed." }
  );

const addSchema = z.object({
  name: z.string().min(1, "Product name is required."),
  category: z.string().min(1, "Please select a category."),
  type: z.string().optional(),
  file: fileSchema,
});

// type AddState = {
//   errors?: Record<string, string[]>; // More generic than old flattened type
//   message?: string | null;
// };

export async function addProductAction(
  prevState: unknown,
  formData: FormData
) {
  const result = addSchema.safeParse({
    name: formData.get("name"),
    category: formData.get("category"),
    type: formData.get("type"),
    file: formData.get("file"),
  });

  if (!result.success) {
    return result.error.issues
  }

  const data = result.data;

  let imageUrl: string | null = null;
  const file = data.file;

  if (file) {
    // Convert File -> Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const uploadResponse = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "products" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    imageUrl = uploadResponse.secure_url;
  }

  await prisma.product.create({
    data: {
      name: data.name,
      category: data.category,
      type: data.type || "",
      imagePath: imageUrl || "",
    },
  });

  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}
