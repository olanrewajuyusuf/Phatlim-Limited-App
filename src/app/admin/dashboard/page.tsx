import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import ProductsTable from "../_components/table";
import Card from "../_components/Card";
import Search from "../_components/search";
import Pagination from "@/app/components/pagination";
import prisma from "@/lib/prisma";
import { Suspense } from "react";
import { CardSkeleton, ProductsTableSkeleton } from "@/app/components/skeletons";

export const metadata = {
  title: "Admin-Dashboard",
};

export default async function Dashboard(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
        }>;
    }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const pageSize = 10;

    const totalProducts = await prisma.product.count({
        where: {
        name: {
            contains: query?.toLowerCase() || '',
        },
        },
    });

    const totalCustomers = await prisma.customer.count();

    const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <div>
        <nav className="border-b border-grey shadow-md shadow-grey">
            <div className="w-full max-w-[900px] flex justify-between items-end px-5 py-2 mx-auto">
                <h1 className="font-bold text-xl md:text-2xl text-blue">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <span className="w-10 h-10 grid place-items-center rounded-full bg-blue text-sm text-white">AD</span>
                    <hr className="h-7 w-[2px] bg-grey-ex" />
                    <p className="text-lg text-grey-ex">Admin</p>
                </div>
            </div>
        </nav>
        <div className="w-full max-w-[900px] mx-auto p-5">
            <div className="grid grid-cols-2 gap-5 text-grey-ex text-lg">
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="All Products" amt={totalProducts} />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="All Customers" amt={totalCustomers} />
                </Suspense>
            </div>
            <div className="flex justify-between items-center gap-5 my-5">
                <Search />
                
                <Link href="/admin/add-product" className="w-[20%] hidden md:block">
                    <span className="flex justify-center items-center gap-1 px-2 py-2 rounded-md border border-blue text-white bg-blue hover:bg-grey hover:text-blue">
                        <BsPlus className="text-2xl" />
                        Add Product
                    </span>
                </Link>
                <Link href="/admin/add-product" className="md:hidden">
                    <span className="w-14 h-10 grid place-items-center rounded-md border border-blue text-white bg-blue hover:bg-grey hover:text-blue">
                        <BsPlus />
                    </span>
                </Link>
            </div>

            <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
                <ProductsTable query={query} currentPage={currentPage} />
            </Suspense>

            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    </div>
  )
}
