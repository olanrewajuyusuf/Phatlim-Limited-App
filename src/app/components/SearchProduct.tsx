'use client';

import { FiSearch } from "react-icons/fi";
import { Clock } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  type: string;
};

export default function SearchProduct() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

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
    <div className="h-screen bg-white grid place-items-center">
      <div className="w-full max-w-[700px] h-[calc(100vh-100px)] md:h-[calc(100vh-150px)] md:bg-grey rounded-lg p-5">
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
        {loading && <p className="mt-3 text-sm text-gray-500">Searching...</p>}

        {!loading && results.length > 0 && (
          <div className="bg-white mt-3 rounded-md p-3 max-h-[calc(100vh-250px)] overflow-y-scroll">
            <ul>
              {results.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleSelect(product.name)}
                  className="flex items-center gap-2 text-grey-ex py-2 border-b border-grey-ex cursor-pointer hover:bg-gray-100"
                >
                  <Clock />
                  <span>{product.name} — {product.category} ({product.type})</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!loading && searchParams.get("query") && results.length === 0 && (
          <p className="mt-3 text-sm text-gray-500">No matches found</p>
        )}
      </div>
    </div>
  );
}
