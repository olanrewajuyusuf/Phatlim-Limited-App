'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart4 } from "react-icons/bs";
import { FaBorderAll } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { MdDelete, MdFavorite, MdOutlineCategory } from "react-icons/md";
import { useState } from "react";
import { useStore } from "@/app/context/StoreContext";
import Image from "next/image";

const navlinksA = [
  { title: "All", icon: <FaBorderAll />, link: "/products" },
  { title: "Categories", icon: <MdOutlineCategory />, link: "/products/categories" },
];

export default function ProductsNav() {
  const pathname = usePathname();
  const { cart, favorites, removeFavorite } = useStore();
  const [favOpen, setFavOpen] = useState(false);

  return (
    <nav className="text-blue flex justify-between items-center gap-5 border-y border-grey px-2 md:px-5 relative">
      {/* Left side */}
      <div className="flex items-center gap-1">
        {navlinksA.map((nav) => (
          <Link
            href={nav.link}
            key={nav.title}
            className={`px-3 py-2 rounded-md hover:bg-grey hover:text-blue ${
              pathname === nav.link ? "bg-blue text-grey" : "bg-none"
            } flex items-center gap-2`}
          >
            <span>{nav.title}</span>
            <span>{nav.icon}</span>
          </Link>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 relative">
        <Link
          href="/products/cart"
          className="hidden md:flex items-center flex-nowrap gap-2 border border-grey hover:bg-gray-100 rounded-2xl py-1 px-2 text-sm"
        >
          <span>Request for quotation</span>
          <span className="border border-grey bg-grey rounded-sm p-1">📝</span>
        </Link>
        <Link
          href="/products/cart"
          className="md:hidden"
        >
          <span className="border border-grey bg-grey rounded-sm p-2">📝</span>
        </Link>
        
        {/* Search */}
        <Link
          href="/search-product"
          className="border border-grey rounded-2xl p-2 flex items-center gap-1 my-1"
        >
          <span className="hidden md:block">Search</span>
          <FiSearch />
        </Link>

        {/* Cart */}
        <Link
          href="/products/cart"
          className="border border-grey rounded-2xl p-2 flex items-center gap-1 my-1 relative"
        >
          <span className="hidden md:block">Cart</span>
          <BsCart4 />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Favorite with Dropdown */}
        <button
          onClick={() => setFavOpen((prev) => !prev)}
          className="border border-grey rounded-2xl p-2 flex items-center gap-1 my-1 relative cursor-pointer"
        >
          <span className="hidden md:block">Favorite</span>
          <MdFavorite />
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </button>

        {/* Dropdown */}
        {favOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-md border rounded-xl w-[300px] max-h-80 overflow-y-auto z-50">
            <div className="p-3 font-semibold border-b">Favorite Items</div>
            {favorites.length === 0 ? (
              <div className="p-3 text-sm text-gray-500">No favorites yet</div>
            ) : (
              <ul className="divide-y">
                {favorites.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center px-3 py-2 hover:bg-gray-100">
                    <div className="flex items-center gap-2 w-[200px]">
                      <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-s-sm"/>
                      <span className="truncate">{item.name}</span>
                    </div>
                    <button
                      onClick={() => removeFavorite(item.name)}
                      className="text-red-500 text-lg cursor-pointer"
                    >
                      <MdDelete />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
