/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/components/Header";
import Hero from "@/components/LandingPage/Hero";
import {
  Linkedin,
  Sparkles,
  Plus,
  FolderSearch,
  Twitter,
  Library,
  NotebookPen,
  Blocks,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "../components/LandingPage/AnimatedCounter";
import StarSpin from "@/components/NotFound/StarSpin";
import { motion, easeInOut } from "framer-motion";
// import DemoPreview from "./components/demoPreview";

const Home = () => {
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
    <div className="bg-[#f7f7f7] flex justify-center items-center overflow-x-hidden">
      <div className="border-l border-r max-w-4xl w-full mx-auto border-dashed h-full flex justify-center flex-col border-gray-300">
        <div className="flex flex-col justify-center items-center mt-10">
          <Header text="Start shelving with" />
          <Hero />
        </div>
        <div className="justify-center items-center h-full flex flex-col my-10">
          <div className="border-t border-dashed border-gray-300 w-full mx-auto py-10 flex justify-center items-center relative">
            <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
            <Image
              src="/images/shelfee.svg"
              width={200}
              height={200}
              className="rounded-lg"
              alt="logo"
            />
          </div>
          <div className="relative group">
            <h1 className="font-semibold text-3xl md:text-7xl text-center w-full border-t border-b py-6 border-dashed text-balance px-4 text-black border-gray-300">
              <span className="">Let&apos;s build a lasting </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-green to-brand-light-green">
                reading habit.
              </span>
            </h1>
          </div>
          <div className="pt-10 pb-11 flex gap-3 items-center mx-auto border-gray-300 border-b w-full justify-center border-dashed relative">
            <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            <Link
              href="/my-shelf"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-brand-green text-white hover:bg-brand-green/80 hover:text-white px-6 py-2 text-lg"
            >
              Take me to the shelf
            </Link>
            <a
              target="_blank"
              href=""
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  bg-brand-light-green text-brand-green hover:bg-brand-light-green/80 border px-6 py-1.5 text-lg gap-2 border-dashed border-gray-400"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              Github
            </a>
          </div>
          <div className=" group border-b  border-dashed text-balance text-center w-full font-semibold border-gray-300 ">
            <div className="grid grid-cols-2 px-4 relative py-6 text-3xl md:text-7xl max-w-lg mx-auto">
              <div className="flex flex-col border-r border-dashed border-gray-300">
                <div className="flex justify-center items-center gap-2 text-brand-green">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Trusted by</span>
                </div>
                <span className="text-transparent bg-clip-text bg-brand-light-green">
                  <AnimatedCounter number={200} />
                </span>
                <span className="text-xs text-brand-green">users</span>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center gap-2 text-brand-green">
                  <Library className="w-4 h-4" />
                  <span className="text-xs text-brand-green">Over</span>
                </div>
                <span className="text-transparent bg-clip-text bg-brand-light-green">
                  <AnimatedCounter number={400} />
                </span>
                <span className="text-xs text-brand-green">Books Added</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">{/* <DemoPreview /> */}</div>
        <p className="font-medium text-xl md:text-3xl border-t border-gray-300 border-b border-dashed md:py-6 py-3 px-7 text-neutral-700 text-center">
          Here&apos;s why you should use Shelfee
        </p>
        <div className="grid sm:grid-cols-2 relative">
          <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
          <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
          <div className="border-r border-b border-dashed flex justify-center flex-col items-center p-7 border-gray-300">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl text-brand-green mb-5 border-gray-300 bg-gradient-to-br from-brand-light-green to-brand-cream">
              <Blocks />
            </p>
            <p className="font-bold text-xl text-brand-green">
              Move across shelves
            </p>
            <p className="text-neutral-500 mt-1 text-center">
              Organize your books into categories as you start, pause, or finish
              them.
            </p>
          </div>
          <div className="border-b border-dashed p-7 border-gray-300 flex justify-center flex-col items-center">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl text-brand-green mb-5 border-gray-300 bg-gradient-to-br from-brand-light-green to-brand-cream">
              <NotebookPen />
            </p>
            <p className="font-bold text-xl text-brand-green">
              Notes and highlights
            </p>
            <p className="text-neutral-500 mt-1 text-center">
              Jot down reflections, favorite quotes, or thoughts directly in
              your Shelfee entries.
            </p>
          </div>
          <div className="border-r border-b border-dashed flex justify-center flex-col items-center p-7 border-gray-300">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl text-brand-green mb-5 border-gray-300 bg-gradient-to-br from-brand-light-green to-brand-cream">
              <Sparkles />
            </p>
            <p className="font-bold text-xl text-brand-green">
              Minimal, distruction-free design
            </p>
            <p className="text-neutral-500 mt-1 text-center">
              Shelfee is built with simplicity in mind. No clutter. Just your
              books.
            </p>
          </div>
          <div className="border-b border-gray-300 border-dashed flex justify-center flex-col items-center p-7">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl text-brand-green mb-5 border-gray-300 bg-gradient-to-br from-brand-light-green to-brand-cream">
              <FolderSearch />
            </p>
            <p className="font-bold text-xl text-brand-green">
              Search & Filter
            </p>
            <p className="text-neutral-500 mt-1 text-center">
              Easily find books in your shelf — by title, author, or status.
            </p>
          </div>
        </div>
        <div className="px-5 py-11 flex justify-center items-center border-b border-dashed border-gray-300">
          <div className="flex justify-center rounded-2xl max-w-3xl border-dashed items-center px-4 py-10 w-full flex-col gap-4  bg-gradient-to-br from-brand-light-green to-brand-cream">
            <p className="md:max-w-2xl text-center font-semibold text-xl text-black p-4 md:text-3xl text-balance">
              Track what you&apos;re reading, what you&apos;ve finished, and
              what&apos;s next in line
            </p>
            <Link
              href="/my-shelf"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-tl from-brand-green to-brand-light-green text-white hover:bg-black/90 px-6 py-2 text-lg"
            >
              Start Shelving Now!
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-b border-dashed mb-20 border-gray-300 py-10 px-4 gap-4">
          <motion.div
            variants={appear}
            initial="initial"
            animate="animate"
            className="overflow-hidden"
          >
            <StarSpin classNameSize="w-[20vw] md:w-[15vw]" />
          </motion.div>
          <div className="flex gap-4">
            <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl text-brand-green border-gray-300">
              <a target="_blank" href="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl text-brand-green border-gray-300">
              <a target="_blank" href="">
                <Linkedin />
              </a>
            </div>
            <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl text-brand-green border-gray-300">
              <a target="_blank" href="">
                <Twitter />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
