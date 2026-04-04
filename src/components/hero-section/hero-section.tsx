"use client";

import { useEffect, useState } from "react";
import HeroVariantA from "@/components/hero-section/hero-variant-a";
import HeroVariantB from "@/components/hero-section/hero-variant-b";
import HeroVariantC from "@/components/hero-section/hero-variant-c";

type Variant = "A" | "B" | "C";

const VARIANTS: Variant[] = ["A", "B", "C"];
const LS_KEY = "hero_variant";

function pickRandom(): Variant {
  return VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const HeroSection = () => {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramRaw = params.get("hero")?.toUpperCase() as Variant | null;

    let chosen: Variant;
    if (paramRaw && VARIANTS.includes(paramRaw)) {
      chosen = paramRaw;
    } else {
      const stored = localStorage.getItem(LS_KEY) as Variant | null;
      chosen = stored && VARIANTS.includes(stored) ? stored : pickRandom();
      localStorage.setItem(LS_KEY, chosen);
    }

    setVariant(chosen);

    window.gtag?.("event", "hero_variant_assigned", { hero_variant: chosen });
  }, []);

  if (!variant) {
    return (
      <section className="flex flex-col items-center justify-center pb-16 px-4 pt-16 min-h-[480px]" />
    );
  }

  if (variant === "A") return <HeroVariantA />;
  // if (variant === "B") return <HeroVariantB />;
  return <HeroVariantC />;
};

export default HeroSection;
