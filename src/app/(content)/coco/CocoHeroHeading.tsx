"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Wellbeing", "Journey"];

export default function CocoHeroHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold md:leading-snug text-slate-900 leading-tight ">
        An Ally for <br/><span >your Career</span>
        <span
          className="relative inline-flex overflow-hidden"
          style={{
            width: `5.2em`,
            height: "1.2em",
            clipPath: "inset(0 0 0 0)",
          }}
        >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="inline-block text-[#3FA1D8]"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
        </span>
      </h1>
    </>
  );
}
