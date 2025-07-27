import {products} from '@/app/_lib/data'
import ProductCard from './_components/ProductCard'

export default function ProductsPage() {
  return (
    <div className="p-2 md:p-5 bg-[#f4fcfe] min-h-screen">
      <div className="border border-[#c9d0de] rounded-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 p-2 md:p-5">
        {products.map((product, ind) =>
          (
            <ProductCard key={ind} name={product.name} type={product.type} image={product.image} brand={product.brand} />
          )
        )}
      </div>
    </div>
  )
}