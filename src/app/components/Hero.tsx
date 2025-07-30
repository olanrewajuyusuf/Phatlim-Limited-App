'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineExplore } from "react-icons/md";
import { usePathname } from 'next/navigation';

export default function Hero() {
  const pathname = usePathname();

  return (
    <section key={pathname} className="pt-20 md:pt-10">
      <motion.div
        className="md:w-[70%] xl:w-[50%] mx-auto text-center text-blue md:pt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="flex-1 px-5">
          <motion.h1
            className="text-5xl md:text-7xl"
            initial={{ x: 70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Premium Truck Parts for Every <span className='text-transparent bg-clip-text font-bold'
            style={{
              backgroundImage: 'linear-gradient(to right, #facc15, #ec4899)'
            }}
            >Journey</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:mx-20 md:px-10"
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Supplying the best OEM & Aftermarket spares for European, American & Chinese trucks.
          </motion.p>
          <Link 
          href='/products'
          className='w-[250px] relative bg-blue text-white rounded-full px-5 py-3 mx-auto cursor-pointer flex items-center justify-center gap-2 mt-10 border-2 border-blue-ex hover:bg-blue-ex hover:border-blue transition-colors duration-300 z-20'
          >
            Explore Our Products 
            <span className='text-2xl'><MdOutlineExplore /></span>
          </Link>
        </div>
        <div className='hidden md:block relative h-[200px] bg-amber-300 z-10'>
          <motion.div 
          className='p-5 text-left w-[250px] h-[300px] rounded-2xl bg-gradient-to-tr from-yellow-500 to-pink-500 shadow-lg shadow-white -rotate-[30deg] md:absolute -top-0 left-5 lg:left-20'
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          >
            <h3 className='text-3xl'>Vision</h3>
            <p>First in the heart of our customers.</p>
            <Image
            src={'/vision.png'}
            alt='Vision'
            width={250}
            height={300}
            className='w-full h-[200px] object-cover'
            />
          </motion.div >
          <motion.div  
          className='reveal-right p-5 text-left text-white w-[250px] h-[300px] rounded-2xl bg-gradient-to-tr from-black to-gray-800  shadow-lg shadow-black rotate-[30deg] md:absolute -top-0 right-5 lg:right-20'
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          >
            <h3 className='text-3xl'>Mission</h3>
            <p>Delivering valued service to our customers.</p>
            <Image
            src={'/misson.png'}
            alt='Mission'
            width={250}
            height={300}
            className='w-full h-[200px] object-cover'
            />
          </motion.div >
        </div>

        <div className='md:hidden pt-10 overflow-hidden'>
          <div 
          className='reveal-left relative p-5 text-left h-[200px] rounded-t-2xl bg-gradient-to-tr from-yellow-500 to-pink-500 shadow-lg shadow-white flex justify-start items-center'
          >
            <div className='w-1/2 relative z-10'>
              <h3 className='text-3xl font-semibold mb-2'>Vision</h3>
              <p>First in the heart of our customers.</p>
            </div>
            <Image
            src={'/vision.png'}
            alt='Vision'
            width={250}
            height={300}
            className='w-full h-[200px] object-cover absolute top-0 -right-16'
            />
          </div>
          <div 
          className='reveal-right relative text-white p-5 text-left h-[200px] rounded-b-2xl bg-gradient-to-tr from-black to-gray-800  shadow-lg shadow-black flex justify-start items-center'
          >
            <div className='w-1/2 relative z-10'>
              <h3 className='text-3xl font-semibold mb-2'>Mission</h3>
              <p>Delivering valued service to our customers.</p>
            </div>
            <Image
            src={'/misson.png'}
            alt='Mission'
            width={250}
            height={200}
            className='w-full h-[200px] object-cover absolute top-0 -right-16'
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
