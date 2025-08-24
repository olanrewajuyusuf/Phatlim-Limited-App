import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";

  if (!query) return NextResponse.json([]);

  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query?.toLowerCase() || '' } },
        { category: { contains: query?.toLowerCase() || '' } },
        { type: { contains: query?.toLowerCase() || '' } },
      ],
    },
    take: 10,
  });

  return NextResponse.json(products);
}
