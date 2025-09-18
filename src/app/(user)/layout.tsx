import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar />
        <main className='overflow-hidden'>{children}</main>
        <Footer />
    </>
  )
}
