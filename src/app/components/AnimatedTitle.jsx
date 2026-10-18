'use client';

import { motion } from 'framer-motion';

export default function AnimatedTitle({
  title,
}) {

  return (

    <motion.h2
      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      className="text-4xl md:text-5xl font-bold mb-16"
    >

      {title
        .split(' ')
        .map(
          (
            word,
            index
          ) => (

            <motion.span
              key={index}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay:
                  index * 0.15,
              }}

              className="inline-block mr-4"
            >

              {word}

            </motion.span>

          )
        )}

    </motion.h2>

  );

}