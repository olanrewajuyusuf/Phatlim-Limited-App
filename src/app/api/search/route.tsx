import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";

  if (!query) return NextResponse.json([]);

  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query || '', mode: "insensitive", } },
        { category: { contains: query || '', mode: "insensitive", } },
        { type: { contains: query || '', mode: "insensitive", } },
      ],
    },
    take: 10,
  });

  return NextResponse.json(products);
}
