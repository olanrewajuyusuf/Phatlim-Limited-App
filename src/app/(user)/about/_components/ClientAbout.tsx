'use client';

import { FaBookReader } from "react-icons/fa";
import Brands from "@/app/components/Brands";
import { motion } from 'framer-motion';
import { FaHammer, FaScrewdriverWrench, FaTape, FaToolbox } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function ClientAbout() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on page load or when path changes
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => {
      setIsVisible(false);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <>
    <div className="overflow-y-scroll hide-scrollbar" style={{ backgroundImage: 'url(/vehicle-parts.jpg)', backgroundSize: 'cover', height: '100vh' }}>
      <div
        className="gradient py-20 md:pt-10 md:pb-0 px-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center justify-center md:justify-between gap-32 md:gap-0"
      >
        <div key={pathname} className="text-center md:text-left">
          {/* First Button - animate from left */}
          <motion.button
            type='button'
            className='flex items-center gap-2 px-3 py-1 mx-auto md:mx-0 rounded-full bg-pink-200 text-pink-700'
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaBookReader /> About
          </motion.button>

          {/* H2 Heading - animate from right */}
          <motion.h2
            className="text-7xl md:text-8xl mt-2 md:mt-10 text-blue font-bold"
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Phatlim <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #facc15, #ec4899)'
              }}
            >
              Ventures
            </span>
          </motion.h2>

          {/* Second Button - animate from left */}
          <motion.button
            className="text-white bg-gradient-to-r from-blue to-pink-500 px-4 py-2 rounded-lg mt-5"
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Your Goal is our Commitment.
          </motion.button>
        </div>

        <div className="utility md:w-[300px] md:h-[300px] grid place-items-center">
          <Image src='/profile.jpg' alt="profile-image" width={250} height={250} className="rounded-full" />
          <span className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-700 shadow-md grid place-items-center absolute -top-14 left-1/2 -translate-x-1/2"><FaScrewdriverWrench /></span>
          <span className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-pink-500 shadow-md grid place-items-center absolute -left-14 top-1/2 -translate-y-1/2"><FaHammer /></span>
          <span className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-950 to-gray-500 shadow-md grid place-items-center absolute -bottom-14 left-1/2 -translate-x-1/2"><FaToolbox /></span>
          <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-950 shadow-md grid place-items-center absolute -right-14 top-1/2 -translate-y-1/2"><FaTape /></span>
        </div>
      </div>

      {/* cards */}
      <div className="bg-white pb-10 pt-20 px-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="relative w-full h-[500px] rounded-2xl shadow-lg overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: "url(/doc1.jpg)" }}
          />
          
          <div className="absolute bottom-0 left-0 h-[160px] p-7 rounded-t-3xl bg-white/50 backdrop-blur-md text-black text-xl md:text-2xl z-10">
            We provide bespoke services to customers depending on their needs. Customers goal is our commitment.
          </div>
        </div>
        <div className="relative w-full h-[500px] rounded-2xl shadow-lg overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: "url(/doc2.webp)" }}
          />
          
          <div className="absolute bottom-0 left-0 h-[160px] p-7 rounded-t-3xl bg-white/50 backdrop-blur-md text-black text-xl md:text-2xl z-10">
            We provide our customers with O.E.M and best of aftermarkets spares for European, American and Chinese trucks.
          </div>
        </div>
      </div>
    </div>
    <Brands />
    </>
  )
}