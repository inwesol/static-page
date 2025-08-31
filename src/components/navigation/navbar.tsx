"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn, NAV_LINKS } from "@/utils";
// import { useClerk } from "@clerk/nextjs";
import { LucideIcon, ZapIcon, ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";
import { Icons } from "../global/icons";

const Navbar = () => {
  // const { user } = useClerk();
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    //checks if page is already scrolled or not on page refresh
    if (window.scrollY > 0) {
      setScroll(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loginOptions = [
    {
      label: "Login as Admin",
      href: "https://admin-inwesol-main.vercel.app",
    },
    {
      label: "Login as Coach",
      href: "https://coach-inwesol-main.vercel.app",
    },
    {
      label: "Login as Partner",
      href: "https://partner-portal-gray.vercel.app",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-50 select-none",
        scroll && "border-background/80 bg-background/40 backdrop-blur-md"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-12">
            <Link href="/" aria-label="Go to homepage">
              <Icons.logoWithText />
            </Link>
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden lg:flex items-center h-full">
            {/* Login Button Group */}
            <div className="flex items-center bg-primary-green-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              {/* Main Login Button */}
              <Button
                onClick={() =>
                  window.open(
                    "https://app.inwesol.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="w-full rounded-xl px-4 py-2 text-white font-semibold transition-all duration-200"
                variant="primary"
                size="default"
                type="button"
                aria-label="Sign In"
              >
                <span>Sign In</span>
              </Button>

              {/* Divider */}
              {/* <div className="w-px h-5 bg-green-500/30" /> */}

              {/* Dropdown Trigger */}
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    className={cn(
                      "bg-transparent hover:bg-green-700 text-white px-2.5 py-2 h-9",
                      "border-0 shadow-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent",
                      "transition-all duration-200"
                    )}
                  >
                    <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className={cn(
                    "w-52 mt-2 rounded-xl border-0 shadow-xl",
                    "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl",
                    "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200",
                    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
                    "data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-2",
                    "p-1.5"
                  )}
                >
                  {loginOptions.map((option, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link
                        href={option.href}
                        className={cn(
                          "w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium",
                          "hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50",
                          "hover:text-green-700 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20",
                          "dark:hover:text-green-300 transition-all duration-200",
                          "flex items-center"
                        )}
                      >
                        {option.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>
          </div>
          <MobileNavbar />
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-medium !leading-none">{title}</h6>
          </div>
          <p
            title={children! as string}
            className="line-clamp-1 text-sm leading-snug text-muted-foreground"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
