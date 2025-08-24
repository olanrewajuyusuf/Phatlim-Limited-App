import prisma from "@/lib/prisma";

export async function getCategoriesProducts(category: string) {
  return await prisma.product.findMany({
    where: { category },
    select: { id: true, name: true, type: true, imagePath: true },
    orderBy: { type: "asc" },
  });
}