'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { RiContactsFill } from "react-icons/ri";
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Active check also works for sub-routes
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'; // home only exact
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu close automatically when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-white/20 shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${scrolled ? 'max-w-5xl' : 'max-w-3xl'} mx-auto px-7 py-3 flex justify-between items-center`}>
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className={`hidden md:flex gap-5 ${scrolled ? 'bg-none' : 'bg-blue border-2 border-blue-ex'} text-grey p-1 rounded-full`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-white hover:bg-blue-900 ${
                isActive(link.href)
                  ? 'bg-blue-ex px-6 py-2 rounded-full text-white'
                  : 'bg-blue px-6 py-2 rounded-full text-grey'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className={`relative group hidden md:block border-2 border-blue-ex p-3 rounded-full shadow-md hover:bg-blue-ex hover:border-blue transition ${pathname.startsWith('/contact') ? 'bg-blue-ex border-blue' : 'bg-blue'}`}>
          <Link
            href="/contact"
            className=" text-white text-2xl"
          >
            <RiContactsFill />
          </Link>

          {/* Tooltip */}
          <span className="absolute -bottom-10 mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Contact
          </span>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-950 focus:outline-none cursor-pointer"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden px-4 py-5 flex flex-col gap-4 justify-center items-center bg-blue-950 rounded-ee-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-medium transition-colors ${
                isActive(link.href) ? 'text-yellow-300' : 'text-white hover:text-yellow-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href='/contact' className={`${pathname.startsWith('/contact') ? 'text-yellow-300' : 'text-white hover:text-yellow-500'}`}>
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
