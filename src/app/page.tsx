import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Brands from '@/app/components/Brands'
import ProductsPreview from '@/app/components/ProductsPreview'

export const metadata = {
  title: "Home | Phatlim Limited",
};

export default function HomePage() {
  return (
    
    <div>
      <Hero />
      <Services />
      <Brands />
      <ProductsPreview />
    </div>
  )
}
