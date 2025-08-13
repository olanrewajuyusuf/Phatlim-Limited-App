import '../globals.css'
import { josefin } from '../ui/font';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefin.className} antialiased`}>
        <div className='min-h-screen md:min-h-[800px] bg-white'>
            {children}
        </div>
      </body>
    </html>
  )
}

