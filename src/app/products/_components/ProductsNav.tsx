'use client';

import { FilterIcon, Search, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBorderAll } from "react-icons/fa6";
import { MdFavorite, MdOutlineCategory } from "react-icons/md";

const navlinksA = [
  {title: 'All', icon: <FaBorderAll />, link: '/products'},
  {title: 'Categories', icon: <MdOutlineCategory />, link: '/products/categories'},
]
const navlinksB = [
  {title: 'Search', icon: <Search />, link: '/products/search'},
  {title: 'Filter', icon: <FilterIcon />, link: '/products/filter'},
  {title: 'Cart', icon: <ShoppingCartIcon />, link: '/products/cart'},
  {title: 'Favorite', icon: <MdFavorite />, link: '/products/favorite'},
]

export default function ProductsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center gap-5 overflow-scroll hide-scrollbar bg-[#f4fcfe] border-y border-[#c9d0de] px-2 md:px-5">
      <div className="flex items-center gap-1">
        {navlinksA.map(nav => (
          <Link 
          href={nav.link} 
          key={nav.title}
          className={`px-3 py-2 rounded-md hover:bg-gray-200 ${pathname === nav.link ? "bg-[#c9d0de]" : "bg-none"} flex items-center gap-2`}
          >
            <span>{nav.title}</span>
            <span>{nav.icon}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {navlinksB.map(nav => (
          <Link 
          href={nav.link} 
          key={nav.title}
          className="border border-[#c9d0de] rounded-2xl p-2 flex items-center gap-2 my-1"
          >
            <span>{nav.title}</span>
            <span>{nav.icon}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}