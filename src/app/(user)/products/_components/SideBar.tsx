'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar() {
  const pathname = usePathname();

  const navlinks = [
    { title: 'Power Train', link: '/products/categories' },
    { title: 'Brake System', link: '/products/categories/brake-system' },
    { title: 'Fuel System', link: '/products/categories/fuel-system' },
    { title: 'Electrical System', link: '/products/categories/electrical-system' },
    { title: 'Carbin & Body Parts', link: '/products/categories/carbin-body-part' },
    { title: 'Steering & Suspension', link: '/products/categories/steering-suspension' },
    { title: 'Tyres', link: '/products/categories/tyres' },
    { title: 'Rims', link: '/products/categories/rims' },
    { title: 'Trailer Spares', link: '/products/categories/trailer-spares' },
    { title: 'Others', link: '/products/categories/others' },
  ];

  const isActive = (link: string) => {
    if (link === '/products/categories') {
      // ✅ exact match only for main "Power Train"
      return pathname === link;
    }
    // ✅ for others, allow sub-routes
    return pathname.startsWith(link);
  };

  return (
    <nav className="w-[150px] md:w-[300px] h-screen overflow-scroll hide-scrollbar border-r border-[#c9d0de] p-2 md:p-5">
      <div className="border border-grey rounded-md flex flex-col">
        {navlinks.map((nav) => (
          <Link
            key={nav.title}
            href={nav.link}
            className={`text-sm md:text-[16px] p-3 border-b border-grey hover:bg-gray-100 transition-colors ${
              isActive(nav.link) ? 'bg-grey font-semibold border-l-4 border-blue-600' : ''
            }`}
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
