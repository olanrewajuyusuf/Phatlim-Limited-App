'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar() {
    const pathname = usePathname();

    const navlinks = [
        {title: 'Power Train', link: '/products/categories'},
        {title: 'Brake System', link: '/products/categories/brake-system'},
        {title: 'Fuel System', link: '/products/categories/fuel-system'},
        {title: 'Electrical System', link: '/products/categories/electrical-system'},
        {title: 'Carbin & Body Parts', link: '/products/categories/carbin-body-part'},
        {title: 'Steering & Suspension', link: '/products/categories/steering-suspension'},
        {title: 'Tyres', link: '/products/categories/tyres'},
        {title: 'Rims', link: '/products/categories/rims'},
        {title: 'Trailer Spares', link: '/products/categories/trailer-spares'},
        {title: 'Others', link: '/products/categories/others'},
    ]
    return (
        <nav className="w-[150px] md:w-[300px] h-screen overflow-scroll hide-scrollbar bg-[#f4fcfe] border-r border-[#c9d0de] p-2 md:p-5">
            <div className="border border-[#c9d0de] rounded-md flex flex-col">
                {navlinks.map(nav => (
                    <Link 
                    key={nav.title}
                    href={nav.link}
                    className={`text-sm md:text-[16px] p-3 border-b border-[#c9d0de] hover:bg-gray-100 ${pathname === nav.link ? 'bg-[#c9d0de]' : 'bg-none'}`}
                    >
                        {nav.title}
                    </Link>
                ))}
            </div>
        </nav>
    )
}