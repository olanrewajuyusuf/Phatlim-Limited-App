'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import FooterLogo from './FooterLogo';

export default function Footer() {
  return (
    <footer className="bg-blue-ex/95 text-gray-400 py-10 px-4 lg:px-20 xl:px-40">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left side */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-5">
            <Link href="/"><FooterLogo /></Link>
          </div>
          <p className="text-sm mt-2">Supplying premium truck parts across Africa.</p>
          <p className="text-sm mt-2">4, Ibrahim Jack street, Egbe, Lagos, Nigeria</p>
        </div>

        {/* Right side */}
        <div className="text-center md:text-left">
          <div className="flex gap-6 text-sm text-gray-300">
            <Link href="/" className="hover:underline hover:text-brand-yellow transition">Home</Link>
            <Link href="/about" className="hover:underline hover:text-brand-yellow transition">About</Link>
            <Link href="/products" className="hover:underline hover:text-brand-yellow transition">Products</Link>
            <Link href="#contact" className="hover:underline hover:text-brand-yellow transition">Contact</Link>
          </div>

          {/* Email */}
          <a
            href="mailto:info@pllimited.ng"
            className="flex items-center justify-center md:justify-start gap-3 text-sm my-3.5 hover:text-brand-yellow transition"
          >
            <Mail /> info@pllimited.ng
          </a>

          {/* Phone */}
          <a
            href="tel:+2347035512244"
            className="flex items-center justify-center md:justify-start gap-3 text-sm hover:text-brand-yellow transition"
          >
            <Phone /> +234 703 551 2244
          </a>
        </div>
      </motion.div>
      <div className='mt-10 text-center text-sm text-gray-400'>
        <p>Copyrights © Phatlim Limited {new Date().getFullYear()} All rights reserved.</p>
        <p><span className='text-gray-50'>Developed by</span> AstraGeo Technology Limited <span className='text-gray-300'>08069606791</span></p>
      </div>
    </footer>
  );
}
