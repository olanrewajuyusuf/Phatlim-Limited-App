"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteCustomerAction(id: string) {
  await prisma.customer.delete({
    where: { id },
  });

  revalidatePath("/admin/customers"); // refresh table
}
