import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Academic", "Personal", "Social"];

export default function HeroHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <h1 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 leading-snug md:leading-tight lg:leading-[1.15] max-w-[880px] mx-auto">
        <span className="inline-block sm:whitespace-nowrap">
          Transforming Student
          {/* <br className="block sm:hidden" />{" "} */}
        </span>
        <br className="block sm:hidden" />{" "}
        <span className="relative">
          <span
            className="relative inline-flex items-center justify-center overflow-hidden"
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
          Outcomes
          {/* <svg
            className="absolute -bottom-2 left-0 w-full h-[10px] sm:h-[16px]"
            viewBox="0 0 180 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 40 18, 90 10 T 180 10"
              stroke="#00B24B"
              strokeWidth="2"
              fill="none"
            />
          </svg> */}
        </span>
      </h1>
    </div>
  );
}
