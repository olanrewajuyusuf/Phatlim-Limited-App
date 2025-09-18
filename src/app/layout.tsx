import './globals.css'
import { Toaster } from 'react-hot-toast';
import { josefin } from './ui/font';

export const metadata = {
  title: {
    default: 'Phatlim Ventures',
    template: '%s | Phatlim Limited',
  },
  description: 'O.E.M and quality aftermarket spares for European, American, and Chinese trucks',
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // for iOS Safari homescreen
  },
  keywords: ['Phatlim', 'Truck Spares', 'O.E.M', 'Howo', 'Actros', 'Scania', 'Volvo', 'Foton', 'Sinotruk', 'Aftermarket Parts', 'Trucks', 'Commercial Vehicles', 'Heavy Duty', 'Truck Maintenance', 'Spare Parts Supplier', 'Phatlim Limited', 'Brakes', 'Engine Parts', 'Transmission', 'Suspension', 'Truck Accessories', 'Tyres', 'Truck Repair', 'Fleet Management', 'Logistics', 'Transportation', 'Truck Components', 'Truck Service', 'Truck Parts Online', 'Phatlim Ventures', 'Rims', 'Truck Upgrades'],
  openGraph: {
    title: 'Phatlim Limited',
    description: "Trusted supplier of O.E.M and aftermarket truck parts",
    url: 'https://phatlimlimited.com',
    siteName: 'Phatlim Limited',
    locale: 'en_US',
    images: ["/favicon-256x256.png"],
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Phatlim Ventures",
    description: "Trusted supplier of OEM and aftermarket spares for European, American, and Chinese trucks",
    images: ["/favicon-256x256.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefin.className} antialiased`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  )
}
