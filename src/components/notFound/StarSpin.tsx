"use client";
import React, { useState, useEffect } from "react";
import Star from "../../../public/images/shelfee_circle.svg";
import Image from "next/image";

function StarSpin({ classNameSize, ref }: { classNameSize: string, ref?: React.MutableRefObject<null> }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${classNameSize} object-cover`} ref={ref}>
      <Image
        src={Star}
        alt="star"
        className={`w-full h-full animate-spin-slow hover:animate-none transition-all duration-500`}
      />
    </div>
  );
}

export default StarSpin;
