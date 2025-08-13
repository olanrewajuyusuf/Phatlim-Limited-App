"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import fs from "fs/promises";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

  await fs.mkdir("public/products", { recursive: true });
  const filePath = `/products/${crypto.randomUUID()}-${data.file.name}`;
  await fs.writeFile(
    `public${filePath}`,
    Buffer.from(await data.file.arrayBuffer())
  );

  await prisma.product.create({
    data: {
      name: data.name,
      category: data.category,
      type: data.type || "",
      imagePath: filePath,
    },
  });

  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}
