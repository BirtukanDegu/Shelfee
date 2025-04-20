import React from "react";
import { marcellus } from "@/fonts/font";
import { motion } from "framer-motion";


function Hero() {

  const EASING = [0.83, 0, 0.17, 1];

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.5,
      },
    },
  };

  // const scale = {
  //   initial: {
  //     scaleX: 0,
  //   },
  //   animate: {
  //     scaleX: 1,
  //     transition: {
  //       duration: 1,
  //       ease: easeInOut,
  //       delay: 0.7,
  //     },
  //   },
  // };

  // const appear = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       ease: easeInOut,
  //       delay: 0.7,
  //     },
  //   },
  // };

  return (
        <div className="mx-auto">
          {/* <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`${marcellus.className} leading-[1] font-black text-center text-[4vw] sm:text-[3vw] text-brand-green`}
            >
              Start <span className="">Shelving With</span>
            </motion.h1>
          </div> */}
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`${marcellus.className} leading-[1] font-black text-center text-[4vw] sm:text-[3vw] text-transparent bg-clip-text bg-gradient-to-br from-brand-green to-brand-light-green`}
            >
              <span className=""></span>- Shelfee -
            </motion.h1>
          </div>
        </div>
  );
}

export default Hero;
