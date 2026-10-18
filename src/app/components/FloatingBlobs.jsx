'use client';

import { motion } from 'framer-motion';

export default function FloatingBlobs() {

  return (
    <>

      {/* Blue */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fixed z-0 top-20 left-10 w-[180px] h-[180px] bg-blue-500/10 blur-[60px] rounded-full pointer-events-none"
      />

      {/* Purple */}

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fixed z-0 top-[40%] right-0 w-[220px] h-[220px] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"
      />

      {/* Cyan */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fixed z-0 bottom-0 left-[30%] w-[180px] h-[180px] bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none"
      />

    </>
  );
}