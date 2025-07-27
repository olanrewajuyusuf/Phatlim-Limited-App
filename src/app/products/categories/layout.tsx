import SideBar from "../_components/SideBar";

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex items-start'>
        <SideBar />
        {children}
    </main>  
  )
}
