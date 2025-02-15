import React from "react";
import { Footer, Navbar } from "@/components";
import HeroSection from "../(content)/hero/page";
import ExplorerCard from "../(content)/explorer-card/ExplorerCard";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <div
        id="home"
        className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#F8F4EB_1px,transparent_1px),linear-gradient(to_bottom,#F8F4EB_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full"
      />

      <Navbar />

      <main className="h-full">{children}</main>
    </>
  );
};

export default MarketingLayout;
