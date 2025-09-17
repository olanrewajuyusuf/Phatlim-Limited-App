'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart4 } from "react-icons/bs";
import { FaBorderAll } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { MdFavorite, MdOutlineCategory } from "react-icons/md";
import { useState } from "react";
import { useStore } from "@/app/context/StoreContext";
import FavoriteModal from "./FavoriteModal";
import SearchProductModal from "./SearchProductModal";

const navlinksA = [
  { title: "All", icon: <FaBorderAll />, link: "/products" },
  { title: "Categories", icon: <MdOutlineCategory />, link: "/products/categories" },
];

export default function ProductsNav() {
  const pathname = usePathname();
  const { cart, favorites } = useStore();
  const [favOpen, setFavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
    {favOpen && <FavoriteModal setFavOpen={setFavOpen} />}
    {searchOpen && <SearchProductModal setSearchOpen={setSearchOpen} />}
    <nav className="text-blue flex justify-between items-center gap-5 border-y border-grey px-2 md:px-5 relative overflow-x-scroll hide-scrollbar">
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
        <button
          onClick={() => setSearchOpen(true)}
          className="border border-grey rounded-2xl p-2 flex items-center gap-1 my-1 cursor-pointer"
        >
          <span className="hidden md:block">Search</span>
          <FiSearch />
        </button>

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

        {/* Favorite */}
        <button
          onClick={() => setFavOpen(true)}
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
      </div>
    </nav>
    </>
  );
}
