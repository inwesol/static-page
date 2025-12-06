"use client";
import React, { SVGProps } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { cn } from "@/utils/index";
import { useStickyBanner } from "@/context/sticky-banner-context";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const { isBannerOpen, setIsBannerOpen } = useStickyBanner();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll) {
      if (latest > 40) {
        setIsBannerOpen(false);
      } else if (latest <= 40) {
        setIsBannerOpen(true);
      }
    }
    // When hideOnScroll is false, don't interfere with banner state on scroll
  });

  const handleClose = () => {
    setIsBannerOpen(false);
  };

  return (
    <AnimatePresence>
      {isBannerOpen && (
        <motion.div
          className={cn(
            "sticky inset-x-0 top-0 z-[60] flex min-h-12 w-full items-center justify-center bg-transparent px-4 py-1",
            className
          )}
          initial={{
            y: -100,
            opacity: 0,
            height: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            height: "auto",
          }}
          exit={{
            y: -100,
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {children}

          <motion.button
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="absolute top-4 right-2 -translate-y-1/2 cursor-pointer"
            onClick={handleClose}
            aria-label="Close banner"
          >
            <CloseIcon className="h-5 w-5 text-white" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
