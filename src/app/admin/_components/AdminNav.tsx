'use client';

import Link from "next/link";
import LogoutButton from "../_components/LogoutButton";
import Logo from "@/app/components/Logo";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();

  const links = [
    { href: "/admin/dashboard", label: "Dashboard", icon: <BiSolidDashboard /> },
    { href: "/admin/customers", label: "Customers", icon: <IoIosPeople className="text-2xl" /> },
  ];

  return (
    <div className="border-b border-grey shadow-md shadow-grey">
      <nav className="w-full max-w-[900px] flex justify-between items-end px-5 py-2 mx-auto">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-5 text-lg">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "bg-blue text-white shadow-sm"
                      : "text-grey-ex hover:bg-gray-100 hover:text-blue-600"
                  }`}
                >
                  <span className="hidden md:block">{link.label}</span>
                  {link.icon}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout */}
        <div className="flex items-center gap-2">
          <p className="text-lg text-grey-ex hidden md:block">Logout</p>
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
}
