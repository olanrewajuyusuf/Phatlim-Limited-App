'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 lg:px-20 xl:px-40">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center md:text-left">
          <div className='flex justify-center md:justify-start mb-5'><Link href='/'><Logo /></Link></div>
          <p className="text-sm mt-2">Supplying premium truck parts across Africa.</p>
          <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className='text-center md:text-left'>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:underline hover:text-brand-yellow transition">Home</Link>
            <Link href="/about" className="hover:underline hover:text-brand-yellow transition">About</Link>
            <Link href="/products" className="hover:underline hover:text-brand-yellow transition">Products</Link>
            <Link href="#contact" className="hover:underline hover:text-brand-yellow transition">Contact</Link>
          </div>
          <span className='flex items-center justify-center md:justify-start gap-3 text-sm my-3.5'><Mail /> phatlimlimited@gmail.com</span>
          <span className='flex items-center justify-center md:justify-start gap-3 text-sm'><Phone /> +234 703 551 2244</span>
        </div>
      </motion.div>
    </footer>
  );
}
