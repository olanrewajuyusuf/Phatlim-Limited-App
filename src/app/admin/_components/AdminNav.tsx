'use client';

import Link from "next/link";
import Logo from "@/app/components/Logo";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import LogoutButton from "./LogoutButton";

export default function AdminNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { href: "/admin/dashboard", label: "Dashboard", icon: <BiSolidDashboard /> },
    { href: "/admin/customers", label: "Customers", icon: <IoIosPeople className="text-2xl" /> },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-0.5 md:gap-1 text-3xl text-blue md:text-grey-ex hover:text-blue-600 transition-colors border hover:border-blue-600 rounded-md p-1 md:p-2 cursor-pointer"
          >
            <FaUserCircle />
            {open ? (
              <IoIosArrowUp className="text-base" />
            ) : (
              <IoIosArrowDown className="text-base" />
            )}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20 overflow-hidden">
              <Link
                href="/admin/profile"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setOpen(false)}
              >
                <FaUserEdit className="text-blue-500" />
                Edit Profile
              </Link>

              {/* Divider */}
              <div className="border-t border-gray-200"></div>

              <LogoutButton />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
