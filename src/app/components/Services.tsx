'use client';
import { motion } from 'framer-motion';
import { Wrench, BatteryCharging, FileText, Settings, Truck, Zap } from 'lucide-react';
import { FaStar } from "react-icons/fa";
import ServiceCard from './Card';
import RollingTyres from './RollingTyre';

const services = [
  { image: '/images/services/workshop-tools.png', icon: <Wrench />, title: 'Workshop Tools', desc: 'Durable tools for truck repairs & maintenance.' },
  { image: '/images/services/service1.png', icon: <BatteryCharging />, title: 'Battery & Electricals', desc: 'Reliable batteries & electrical systems.' },
  { image: '/images/services/truck.png', icon: <FileText />, title: 'Truck Documentation', desc: 'Documentation support for commercial trucks.' },
  { image: '/images/services/suspenssion.png', icon: <Settings />, title: 'Suspension & Transmission', desc: 'Parts to ensure smooth ride and gear flow.' },
  { image: '/images/services/brake-disc.png', icon: <Truck />, title: 'Brake Systems', desc: 'OEM & aftermarket braking components.' },
  { image: '/dunlop.png', icon: <Zap />, title: 'Tyres & Filters', desc: 'Premium tyres and heavy-duty filters.' },
];

export default function Services() {
  return (
    <section 
    className="py-20 relative z-20 min-h-screen overflow-visible"
    style={{
      background: 'linear-gradient(transparent 0%, #c9d0de 10%)'
    }}
    id="services"
    >
      {/* Rolling tyre component */}
      <div className="relative z-0 overflow-hidden">
        <RollingTyres />
      </div>

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
            <FaStar /> Services
          </motion.button>

          <motion.h2
            className="text-3xl md:text-6xl mt-5 mb-10 text-blue-950"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Excellence In <br /> <span className='text-transparent bg-clip-text font-bold'
            style={{
              backgroundImage: 'linear-gradient(to right, #facc15, #ec4899)'
            }}
            >Every Part</span>
          </motion.h2>
        </div>

        <motion.div 
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white rounded-2xl p-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="shadow-md hover:shadow-xl transition duration-300 card h-[400px] w-full overflow-hidden rounded-2xl flex flex-col justify-between p-5 bg-gradient-to-r from-black to-gray-950 text-white"
              whileHover={{ scale: 1.03 }}
            >
              <ServiceCard title={service.title} icon={service.icon} image={service.image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}