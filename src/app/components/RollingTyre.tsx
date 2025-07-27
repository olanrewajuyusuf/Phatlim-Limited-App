'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const tyres = [
  { id: 1, speed: 6, size: 'w-20 sm:w-24 md:w-28', top: 'top-0' },
  { id: 2, speed: 8, size: 'w-16 sm:w-20 md:w-24', top: 'top-16' },
  { id: 3, speed: 10, size: 'w-12 sm:w-16 md:w-20', top: 'top-32' },
]

export default function RollingTyres() {
  return (
    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
      {tyres.map((tyre) => (
        <motion.div
          key={tyre.id}
          className={`absolute ${tyre.top} left-[-100px]`}
          animate={{
            x: '110vw',
            rotate: 360,
            y: [0, -8, 0, 6, 0], // subtle bounce
          }}
          transition={{
            x: { repeat: Infinity, duration: tyre.speed, ease: 'linear' },
            rotate: { repeat: Infinity, duration: 1.2, ease: 'linear' },
            y: {
              repeat: Infinity,
              duration: 1.6,
              ease: 'easeInOut',
            },
          }}
        >
          <div className={`${tyre.size} rounded-full`}>
            <Image
              src="/dunlop.png"
              alt={`Tyre ${tyre.id}`}
              width={128}
              height={128}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
