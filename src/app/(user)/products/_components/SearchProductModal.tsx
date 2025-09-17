'use client';

import { FiSearch } from "react-icons/fi";
import { Clock } from "lucide-react";
import { MdClose } from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { useRef } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  type: string;
};

export default function SearchProductModal({ setSearchOpen }: { setSearchOpen: (open: boolean) => void }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setSearchOpen(false);
    }
  };

  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback(async (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
      setLoading(true);

      // fetch from API that queries Prisma
      const res = await fetch(`/api/search?query=${encodeURIComponent(term)}`);
      const data = await res.json();
      setResults(data);
      setLoading(false);
    } else {
      params.delete("query");
      setResults([]);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleSelect = (value: string) => {
    router.push(`/products?query=${encodeURIComponent(value)}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] backdrop-blur-sm px-7"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-md max-h-[500px]">
      <button
        onClick={() => setSearchOpen(false)}
        className="text-white text-4xl hover:text-gray-50 cursor-pointer "
      >
        <MdClose size={20} />
      </button>
      {/* Modal Card */}
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent clicks inside from closing
      >
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            const query = searchParams.get("query");
            if (query) handleSelect(query);
          }}
        >
          <div className="relative">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              defaultValue={searchParams.get("query")?.toString()}
              placeholder="Search for product name, brand or categories"
              className="w-full bg-white text-blue border border-blue rounded-md py-2 pl-14 pr-5 outline-0"
            />
            <span className="absolute top-1/2 left-0 -translate-y-1/2 text-blue text-2xl border-r border-blue rounded-md h-full px-3 grid place-items-center">
              <FiSearch />
            </span>
          </div>
        </form>

        {/* Search results */}
        {loading && <p className="mt-3 text-sm text-gray-500 p-3">Searching...</p>}

        {!loading && results.length > 0 && (
          <div className="bg-white mt-3 rounded-md p-3 max-h-[400px] overflow-y-auto">
            <ul>
              {results.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleSelect(product.name)}
                  className="flex items-center gap-2 text-grey-ex py-2 border-b border-grey-ex cursor-pointer hover:bg-gray-100"
                >
                  <Clock />
                  <span className="w-[80%]">{product.name} — {product.category} ({product.type})</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!loading && searchParams.get("query") && results.length === 0 && (
          <p className="mt-3 text-sm text-gray-500 p-3">No match found</p>
        )}
      </div>
      </div>
    </div>
  );
}
