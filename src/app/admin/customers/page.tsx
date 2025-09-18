import ProductsTable from "../_components/table";
import Search from "../_components/search";
import Pagination from "@/app/components/pagination";
import prisma from "@/lib/prisma";
import { Suspense } from "react";
import { ProductsTableSkeleton } from "@/app/components/skeletons";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminNav from "../_components/AdminNav";

export const metadata = {
  title: "Admin-Dashboard",
};

export default async function Customers(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  // ✅ Check cookie for user id
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    redirect("/admin");
  }

  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const pageSize = 10;

  const totalProducts = await prisma.product.count({
    where: {
      name: { 
        contains: query || "",
        mode: "insensitive",
      },
    },
  });

//   const totalCustomers = await prisma.customer.count();
  const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <div>
      <AdminNav />
      <div className="w-full max-w-[900px] mx-auto p-5">
        <div className="flex justify-between items-center gap-5 my-5">
            <h1 className="text-2xl md:text-3xl">Customers</h1>
            <Search />
        </div>

        <Suspense
          key={query + currentPage}
          fallback={<ProductsTableSkeleton />}
        >
          <ProductsTable query={query} currentPage={currentPage} />
        </Suspense>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
