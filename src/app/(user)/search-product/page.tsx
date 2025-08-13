'use client';

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {products} from '@/app/_lib/data'
import { Clock } from "lucide-react";

export default function SearchPage() {
    const [search, setSearch] = useState('');

    const possibleSearch = products.filter(product => search.length !== 0 && product.name.toLowerCase().includes(search.toLowerCase()));
    console.log(possibleSearch);
    

    return (
        <div className="h-screen bg-white grid place-items-center">
            <div className="w-full max-w-[700px] h-[calc(100vh-100px)] md:h-[calc(100vh-150px)] md:bg-grey rounded-lg p-5">
                <form className="w-full">
                    <div className="relative">
                        <input 
                        type="text" 
                        id="search"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for product name, brand or categories"
                        className="w-full bg-white text-blue border border-blue rounded-md py-2 pl-14 pr-5 outline-0"
                        />
                        <span className="absolute top-1/2 left-0 -translate-y-1/2 text-blue text-2xl border-r border-blue rounded-md h-full px-3 grid place-items-center"><FiSearch /></span>
                    </div>
                </form>
                {possibleSearch.length > 0 && <div className="bg-white mt-3 rounded-md p-3 max-h-[calc(100vh-250px)] overflow-y-scroll">
                    <ul>
                        {possibleSearch.map((search, ind) => (
                            <li key={ind} className="flex items-center gap-2 text-grey-ex py-2 border-b border-grey-ex">
                                <Clock />
                                {search.name}
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
        </div>
    )
}