'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Header = {
  readonly text: string;
}

function Header({ text }: Header) {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex space-x-0.5 justify-center">
      <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.h2 
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={gradual}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-3xl md:text-[46px] leading-[1] font-semibold text-brand-green`}
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.h2>
            ))}
      </AnimatePresence>
    </div>
  )
}

export default Header