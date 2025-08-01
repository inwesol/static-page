import Link from "next/link";
import { AnimationContainer, Icons } from "@/components";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "../ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

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

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-start justify-center h-full md:max-w-[320px]">
            <div className="flex items-start">
              <Icons.logoWithText />
            </div>
            <p className="mt-2 text-sm text-muted-foreground text-start">
              Ally for Young Minds to Excel.
            </p>
          </div>
        </AnimationContainer>

        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* <AnimationContainer delay={0.2}>
            <div className="">
              <h3 className="font-medium text-primary1">Product</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Integration
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer> */}

          {/* <AnimationContainer delay={0.4}>
            <div className="">
              <h3 className="font-medium text-primary1">Resources</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/resources/blog"
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/resources/help"
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer> */}

          <AnimationContainer delay={0.4}>
            <div className="">
              <h3 className="font-medium text-primary1">Products</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/explorer/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Explorer
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/coco/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    CoCo
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/events/coaching/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Coaching Session
                  </Link>
                </li>
                {/* <li className="mt-2">
                  <Link
                    href="/events/webinar-know-your-why/"
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Free Workshop
                  </Link>
                </li> */}
              </ul>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.5}>
            <div className="flex flex-col mt-10 md:mt-0">
              <h3 className="font-medium text-primary1">Company</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href="/story/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Our Story
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/privacy/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/terms/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer>
        </div>
      </div>

      <div className="w-full pt-4 my-8 border-t border-border/40 md:pt-8 md:flex md:items-center md:justify-between">
        {/* <AnimationContainer delay={0.6}> */}
        <div className="flex flex-col-reverse justify-between flex-1 w-full md:flex-row">
          <p className="mt-4 text-sm text-center text-muted-foreground md:mt-0 md:text-left">
            &copy; {new Date().getFullYear()} Inwesol Global Pvt.Ltd All rights
            reserved.
          </p>

          <div className="flex items-center justify-center gap-4 md:justify-end">
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
