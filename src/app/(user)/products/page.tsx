import prisma from "@/lib/prisma";
import ProductCard from "./_components/ProductCard";
import Pagination from "@/app/components/pagination";

type ProductsPageProps = {
  searchParams?: { query?: string; page?: string };
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const query = searchParams?.query ?? "";
  const page = Number(searchParams?.page ?? "1");
  const perPage = 30;

  // Prisma filtering (name, type, category)
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query.toLowerCase() } },
        { type: { contains: query.toLowerCase() } },
        { category: { contains: query.toLowerCase() } },
      ],
    },
    skip: Math.max(0, (page - 1) * perPage),
    take: perPage,
  });

  const totalProducts = await prisma.product.count({
    where: {
      OR: [
        { name: { contains: query.toLowerCase() } },
        { type: { contains: query.toLowerCase() } },
        { category: { contains: query.toLowerCase() } },
      ],
    },
  });

  const totalPages = Math.ceil(totalProducts / perPage);

  return (
    <div className="p-2 md:p-5 min-h-screen">
      {products.length > 0 ? (
        <>
          <div className="border border-grey rounded-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 p-2 md:p-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                type={product.type}
                image={product.imagePath}
              />
            ))}
          </div>

          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 mt-20">No matched products</p>
      )}
    </div>
  );
}
