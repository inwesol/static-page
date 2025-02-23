import {
  AnimationContainer,
  Footer,
  MaxWidthWrapper,
  PricingCards,
} from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightIcon, CreditCardIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Features from "../(content)/features/page";
import ExplorerCard from "../(content)/explorer-card/ExplorerCard";
import BlogPage from "./resources/blog/page";
import FeaturedBlogsCarousel from "../../components/blogs/page";
import BlogCard from "../../components/blogs/blogCard";
import BlogCarousel from "../../components/blogs/page";
import StickyScrollRevealDemo from "@/components/ui/process";
import HeroSection from "../(content)/hero/page";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div className="h-full">
      <HeroSection />

      <Features />

      <StickyScrollRevealDemo />

      {/* <BlogCarousel /> */}

      <ExplorerCard />

      <Footer />
    </div>
  );
};

export default HomePage;
