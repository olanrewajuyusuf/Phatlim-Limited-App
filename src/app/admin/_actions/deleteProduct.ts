"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProductAction(id: string) {
  await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/admin/dashboard"); // refresh table
}
