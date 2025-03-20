import Link from "next/link";
import { AnimationContainer, Icons } from "@/components";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "../ui/button";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/inwesol/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/inwesol/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/inwesol",
    icon: Twitter,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Inwesol/61572610318840/",
    icon: Facebook,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@inwesol",
    icon: Youtube,
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center pt-4 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-12 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-start justify-center h-full md:max-w-[320px]">
            <div className="flex items-start">
              <Icons.logoWithText />
            </div>
            <p className="text-muted-foreground mt-2 text-sm text-start">
              Beyond careers, towards wellbeing.
            </p>
          </div>
        </AnimationContainer>

        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* <AnimationContainer delay={0.2}>
            <div className="">
              <h3 className="text-primary1 font-medium">Product</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Integration
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer> */}

          {/* <AnimationContainer delay={0.4}>
            <div className="">
              <h3 className="text-primary1 font-medium">Resources</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/resources/blog"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/resources/help"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer> */}

          <AnimationContainer delay={0.4}>
            <div className="">
              <h3 className="text-primary1 font-medium">Products</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/explorer/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Explorer
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/coco/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    CoCo
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/events/cohort/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Cohort Program
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.5}>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-primary1 font-medium">Company</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href="/story/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Our Story
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/privacy/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/terms/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer>
        </div>
      </div>

      <div className="my-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        {/* <AnimationContainer delay={0.6}> */}
        <div className="flex flex-col-reverse md:flex-row justify-between w-full flex-1">
          <p className="text-sm text-muted-foreground mt-4 md:mt-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Inwesol Global Pvt.Ltd All rights
            reserved.
          </p>

          <div className="flex items-center justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
              >
                <social.icon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-primary1" />
              </a>
            ))}
          </div>
        </div>
        {/* </AnimationContainer> */}
      </div>
    </footer>
  );
};

export default Footer;
