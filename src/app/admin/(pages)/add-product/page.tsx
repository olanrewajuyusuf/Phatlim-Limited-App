import ProductForm from "@/app/admin/_components/ProductForm";

export default function AddProduct() {  
  return (
    <div className="w-full max-w-[700px] mx-auto p-5">
        <div className="flex justify-between items-center mb-5 rounded-md">
            <h1 className="text-blue font-bold text-xl">Add Product Page</h1>
        </div>
        <ProductForm />
    </div>
  )
}
