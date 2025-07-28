'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';

const products = [
  {
    name: 'OEM Brake Pads',
    image: '/images/products/brake-pads.jpg',
    description: 'Durable and high-performance OEM brake pads for heavy-duty trucks.',
  },
  {
    name: 'Heavy-duty Filters',
    image: '/images/products/filter.png',
    description: 'Engine and air filters built to last, ensuring clean performance.',
  },
  {
    name: 'Truck Tyres',
    image: '/images/products/tyres.jpg',
    description: 'Long-lasting truck tyres for various terrains and conditions.',
  },
  {
    name: 'Battery',
    image: '/images/products/battery2.jpg',
    description: 'Long-lasting truck tyres for various terrains and conditions.',
  },
  {
    name: 'Suspenssion Parts',
    image: '/images/products/suspension.jpg',
    description: 'Long-lasting suspenssion for various terrains and conditions.',
  },
  {
    name: 'Transmission Parts',
    image: '/images/products/transmission.png',
    description: 'Long-lasting transmission for various terrains and conditions.',
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-20 bg-gray-950" id="products">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 xl:px-40">
        <div>
          <motion.button
            type='button'
            className='flex items-center gap-2 px-3 py-1 rounded-full bg-pink-200 text-pink-700'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <FaCartShopping /> Products
          </motion.button>

          <motion.h2
            className="text-3xl md:text-6xl mt-5 mb-10 text-[#c9d0de]"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Service that keeps <br /> <span className='text-transparent bg-clip-text font-bold'
            style={{
              backgroundImage: 'linear-gradient(to right, #facc15, #ec4899)'
            }}
            >you moving</span>
          </motion.h2>
        </div>

        <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-sm text-gray-300">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className='flex justify-center items-center mt-20'>
        <Link href="/products">
          <motion.button
            className="flex items-center gap-3 border border-white text-white px-6 py-3 cursor-pointer rounded-full shadow-md transition"
            whileHover={{ scale: 1.05 }}
          >
            View all products
            <ArrowRight />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
