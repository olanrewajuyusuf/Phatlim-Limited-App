'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { BsSearch } from 'react-icons/bs';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative w-full md:w-[80%]">
        <input 
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        placeholder="Search..." 
        className="w-full pl-8 pr-3 py-2 border border-grey rounded-md text-blue" 
        />
        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-ex"/>
    </div>
  );
}
