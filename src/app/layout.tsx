import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Phatlim Ventures',
    template: '%s | Phatlim Limited',
  },
  description: 'O.E.M and quality aftermarket spares for European, American, and Chinese trucks',
  keywords: ['Phatlim', 'Truck Spares', 'O.E.M', 'Howo', 'Actros', 'Scania'],
  openGraph: {
    title: 'Phatlim Limited',
    description: 'O.E.M and quality aftermarket spares for trucks',
    url: 'https://phatlim-ventures.com',
    siteName: 'Phatlim Ventures',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Navbar />
        <main className='overflow-hidden'>{children}</main>
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  )
}
