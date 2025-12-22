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
          <AnimationContainer delay={0.2}>
            <div className="flex flex-col mt-4 md:mt-0">
              <h3 className="font-medium text-primary1">Features</h3>
              <ul className="mt-2 text-sm text-muted-foreground">
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
                    href="/coaching/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Coaching
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/behavioural-tools/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Behavioural Tools
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/community/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.3}>
            <div className="flex flex-col mt-6 md:mt-0">
              <h3 className="font-medium text-primary1">Company</h3>
              <ul className="mt-2 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/blog/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/coaches/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Coaches
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/story/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Our Story
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/contact-us/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.4}>
            <div className="flex flex-col mt-6 md:mt-0">
              <h3 className="font-medium text-primary1">Partners</h3>
              <ul className="mt-2 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/school/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Schools
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/parents/"
                    className="transition-all duration-300 hover:text-primary-green-600"
                  >
                    Parents
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
            reserved.{" "}
            <Link
              href="/privacy/"
              className="text-primary-green-600 hover:text-primary-green-700 underline transition-colors duration-200"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/terms/"
              className="text-primary-green-600 hover:text-primary-green-700 underline transition-colors duration-200"
            >
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link
              href="/refund-policy/"
              className="text-primary-green-600 hover:text-primary-green-700 underline transition-colors duration-200"
            >
              Refund Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/cancellation-policy/"
              className="text-primary-green-600 hover:text-primary-green-700 underline transition-colors duration-200"
            >
              Cancellation Policy
            </Link>
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
