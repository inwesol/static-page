"use client";

import { motion, MotionStyle } from "framer-motion";

interface AnimationContainerProps {
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
  className?: string;
  viewport?: boolean;
  extraStyles?: MotionStyle;
}

const AnimationContainer = ({
  children,
  className,
  reverse,
  delay,
  viewport = false,
  extraStyles = {}, // ✅ Accept extra styles dynamically
}: AnimationContainerProps) => {
  return (
    <motion.div
      className={className}
      style={extraStyles} // ✅ Apply extra styles here
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: viewport }}
      transition={{
        duration: 0.2,
        delay: delay,
        ease: "easeInOut",
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
