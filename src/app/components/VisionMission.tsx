'use client';
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <motion.section
      className="py-12 px-20 bg-white dark:bg-gray-500 flex flex-col md:flex-row gap-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
      }}
    >
      <motion.div className="bg-blue-700 text-white p-20 rounded-xl flex-1 shadow-2xl border-2 border-blue-800 hover:border-2 hover:border-blue-950" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <h3 className="text-3xl font-bold mb-2">Vision</h3>
        <p>First in the heart of our customers.</p>
      </motion.div>
      <motion.div className="bg-yellow-300 text-blue-700 p-20 rounded-xl flex-1 shadow-2xl border-2 border-yellow-400 hover:border-2 hover:border-yellow-700" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <h3 className="text-3xl font-bold mb-2">Mission</h3>
        <p>Delivering valued service to our customers.</p>
      </motion.div>
    </motion.section>
  );
}