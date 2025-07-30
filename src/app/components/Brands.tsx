'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCrown } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const brandLogos = [
  { src: '/images/brands/continental.png', alt: 'Continental' },
  { src: '/images/brands/meritor.png', alt: 'Meritor' },
  { src: '/images/brands/autopart.jpg', alt: 'Autopart Battery' },
  { src: '/images/brands/vosla.png', alt: 'Vosla' },
  { src: '/images/brands/clas.png', alt: 'Clas' },
  { src: '/images/brands/castrol.png', alt: 'Castrol' },
  { src: '/images/brands/frasle.png', alt: 'Frasle' },
  { src: '/images/brands/hengst.png', alt: 'Hengst' },
  { src: '/images/brands/sachs.jpg', alt: 'Sachs' },
];

export default function Brands() {
  return (
    <section id="brands" className="bg-white py-16">
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
            <FaCrown /> Brands
          </motion.button>
          
          <motion.h2
            className="text-3xl md:text-6xl mt-5 mb-10 text-blue"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Every Part, <br /> <span className='text-transparent bg-clip-text font-bold'
            style={{
              backgroundImage: 'linear-gradient(to right, #facc15, #ec4899)'
            }}
            >A Promise</span>
          </motion.h2>
        </div>

        <div
        >
          <Marquee 
          className='h-[130px] md:h-[170px]'
          gradient={true}
          gradientColor="white"
          pauseOnHover={true}
          >
            {brandLogos.map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-2 md:p-4 transition-transform duration-300"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="shade w-[100px] md:w-[120px] h-[80px] md:h-[100px] bg-[#f4fcfe] p-5 rounded-md object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </Marquee>
          <div
        >
          <Marquee 
          className='h-[130px] md:h-[170px]'
          gradient={true}
          gradientColor="white"
          pauseOnHover={true}
          direction="right"
          speed={100}
          >
            {brandLogos.map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-2 md:p-4 transition-transform duration-300"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="shade w-[100px] md:w-[120px] h-[80px] md:h-[100px] bg-[#fef4f7] p-5 rounded-md object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </Marquee>
        </div>
        </div>
      </div>
      <Marquee 
      gradient={true}
      gradientColor="#f91052"
      className="text-black font-semibold mt-10"
      >
        <div className='flex items-center gap-40'>
          <p>Powering Every Journey with Precision.</p>
          <p>Built to Perform. Trusted to Last.</p>
          <p>Driven by Quality. Backed by Expertise.</p>
        </div>
      </Marquee>
    </section>
  );
}
