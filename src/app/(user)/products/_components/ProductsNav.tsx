'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart4 } from "react-icons/bs";
import { FaBorderAll } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { MdFavorite, MdOutlineCategory } from "react-icons/md";

const navlinksA = [
  {title: 'All', icon: <FaBorderAll />, link: '/products'},
  {title: 'Categories', icon: <MdOutlineCategory />, link: '/products/categories'},
]
const navlinksB = [
  {title: 'Search', icon: <FiSearch />, link: '/search-product'},
  {title: 'Cart', icon: <BsCart4 />, link: '/products/cart'},
  {title: 'Favorite', icon: <MdFavorite />, link: '/products/favorite'},
]

export default function ProductsNav() {
  const pathname = usePathname();

  return (
    <nav className="text-blue flex justify-between items-center gap-5 overflow-scroll hide-scrollbar border-y border-grey px-2 md:px-5">
      <div className="flex items-center gap-1">
        {navlinksA.map(nav => (
          <Link 
          href={nav.link} 
          key={nav.title}
          className={`px-3 py-2 rounded-md hover:bg-grey hover:text-blue ${pathname === nav.link ? "bg-blue text-grey" : "bg-none"} flex items-center gap-2`}
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
          className="md:hidden hover:bg-grey rounded-2xl p-2 my-1"
          >
            <span>{nav.icon}</span>
          </Link>
        ))}
        {navlinksB.map(nav => (
          <Link 
          href={nav.link} 
          key={nav.title}
          className="hidden border border-grey rounded-2xl p-2 md:flex items-center gap-1 my-1"
          >
            <span>{nav.title}</span>
            <span>{nav.icon}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}