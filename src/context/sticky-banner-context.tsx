"use client";
import React, { createContext, useContext, useState } from "react";

interface StickyBannerContextType {
  isBannerOpen: boolean;
  setIsBannerOpen: (open: boolean) => void;
}

const StickyBannerContext = createContext<StickyBannerContextType | undefined>(
  undefined
);

export const StickyBannerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  return (
    <StickyBannerContext.Provider value={{ isBannerOpen, setIsBannerOpen }}>
      {children}
    </StickyBannerContext.Provider>
  );
};

export const useStickyBanner = () => {
  const context = useContext(StickyBannerContext);
  if (context === undefined) {
    throw new Error(
      "useStickyBanner must be used within a StickyBannerProvider"
    );
  }
  return context;
};
