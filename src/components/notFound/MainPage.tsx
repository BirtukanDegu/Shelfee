"use client";
import React from "react";
import Link from "next/link";
import StarSpin from "./StarSpin";
import { motion, easeInOut } from "framer-motion";
import Header from "../Header";

function MainPage() {
  const line1 = "Sorry, this page";
  const line2 = "doesn't exist.";

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

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.7,
      },
    },
  };

  return (
    <section className="h-[85vh] flex flex-col justify-center">
      <div className="w-[70%] mx-auto mt-auto">
        <div className="flex justify-center items-center gap-[1vw]">
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`text-[30vw] md:text-[23vw] leading-[1] mb-[-.25em] text-brand-green`}
            >
              4
            </motion.h1>
          </div>
          <motion.div
            variants={appear}
            initial="initial"
            animate="animate"
            className="overflow-hidden"
          >
            <StarSpin classNameSize="w-[20vw] md:w-[15vw]" />
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`text-[30vw] md:text-[23vw] leading-[1] mb-[-.25em] text-brand-green`}
            >
              4
            </motion.h1>
          </div>
        </div>
        <div className="mt-16">
          <Header text={line1} />
          <Header text={line2} />
        </div>
      </div>
      <motion.div
        variants={appear}
        initial="initial"
        animate="animate"
        className="flex justify-center mt-auto"
      >
        <Link href={"/"}>
          <div className="flex items-center gap-6 hover:gap-8 duration-300 cursor-pointer">
            <h4 className="text-[4vw] xs:text-[2vw] sm:text-[2vw] tracking-tighter text-brand-green hover:text-brand-green/80">
              TAKE ME HOME
            </h4>
            {/* <Next className="w-[8vw] xs:w-[6vw] sm:w-[4vw]" /> */}
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default MainPage;
