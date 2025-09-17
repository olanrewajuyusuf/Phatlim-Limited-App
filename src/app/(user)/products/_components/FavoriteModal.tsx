'use client';

import Image from "next/image";
import { MdDelete, MdClose } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { useStore } from "@/app/context/StoreContext";
import { useRef } from "react";

export default function FavoriteModal({ setFavOpen }: { setFavOpen: (open: boolean) => void }) {
  const { favorites, removeFavorite, addToCart } = useStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setFavOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] backdrop-blur-sm px-7"
      onClick={handleBackdropClick}
    >
      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md max-h-[500px] bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent clicks inside from closing
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b">
          <h2 className="font-semibold">Favorite Items</h2>
          <button
            onClick={() => setFavOpen(false)}
            className="text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <MdClose size={20} />
          </button>
        </div>

        {/* Content */}
        {favorites.length === 0 ? (
          <div className="p-3 text-sm text-gray-500">No favorites yet</div>
        ) : (
          <ul className="divide-y max-h-[60vh] overflow-y-auto">
            {favorites.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-baseline-last px-3 py-2 hover:bg-gray-50"
              >
                <div className="flex items-baseline-last gap-2 w-[200px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <span>
                    <p className="truncate">{item.name}</p>
                    <small className="truncate text-grey-ex">{item.type}</small>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-grey p-2 rounded-sm text-green-600 hover:text-green-800 text-xl cursor-pointer"
                    title="Add to Cart"
                  >
                    <BsCartPlus />
                  </button>

                  {/* Remove Favorite */}
                  <button
                    onClick={() => removeFavorite(item.name)}
                    className="bg-grey p-2 rounded-sm text-red-500 hover:text-red-700 text-xl cursor-pointer"
                    title="Remove from Favorites"
                  >
                    <MdDelete />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
