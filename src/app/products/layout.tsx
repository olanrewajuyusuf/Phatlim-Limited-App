import Marquee from "react-fast-marquee";
import ProductsNav from "./_components/ProductsNav";

export const metadata = {
  title: "Products",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-[#f4fcfe] min-h-screen pt-5 md:pt-10'>
        <Marquee 
        gradient={true}
        gradientColor="#f91052"
        className="text-black font-semibold mt-8"
        >
            <div className='flex items-center bg-white py-5 gap-40'>
            <p>Service isn’t just what we do — it’s who we are. Excellence in every part, commitment in every action.</p>
            <p>Great service is not just about fulfilling needs, it’s about exceeding expectations — every time.</p>
            </div>
        </Marquee>
        <ProductsNav />
        {children}
    </main>  
  )
}
