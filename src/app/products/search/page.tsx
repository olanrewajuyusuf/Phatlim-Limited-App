'use client';

import { useState } from "react"

export default function SearchPage() {
    const [search, setSearch] = useState('');

    return (
        <div>
            <h1>Search Page</h1>
            <form>
                <input 
                type="text" 
                id="search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for product name, brand or categories"
                />
            </form>
            <div>
                <h3>{search}</h3>
            </div>
        </div>
    )
}