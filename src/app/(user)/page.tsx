import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Brands from '@/app/components/Brands'
import ProductsPreview from '@/app/components/ProductsPreview'
import RequestQuotation from '../components/RequestQuotation';

export const metadata = {
  title: "Home | Phatlim Limited",
};

export default async function HomePage() {  
  return (
    <div>
      <Hero />
      <Services />
      <Brands />
      <ProductsPreview />
      <RequestQuotation />
    </div>
  )
}
