import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ProductForm from "../_components/ProductForm";

export default function AddProduct() {  
  return (
    <div className="w-full max-w-[700px] mx-auto p-5">
        <div className="flex justify-between items-center mb-5 rounded-md">
            <h1 className="text-blue text-xl">Add Product Page</h1>
            <Link href="/admin/dashboard">
                <FaArrowLeft className="text-blue" />
            </Link>
        </div>
        <ProductForm />
    </div>
  )
}
