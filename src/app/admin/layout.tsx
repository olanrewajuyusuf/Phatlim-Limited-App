
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen md:min-h-[800px] bg-white'>
        {children}
    </div>
  )
}

