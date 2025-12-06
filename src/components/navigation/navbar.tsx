"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, NAV_LINKS } from "@/utils";
import { LucideIcon, LogInIcon, UserIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";
import { Icons } from "../global/icons";
import { Button } from "../ui/button";
import { useStickyBanner } from "@/context/sticky-banner-context";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { isBannerOpen } = useStickyBanner();

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
      title: "Sign In as Coach",
      tagline: "Access coach dashboard",
      href: "https://coach.inwesol.com/sign-in",
      icon: UserIcon,
    },
    // {
    //   title: "Sign In as Admin",
    //   tagline: "Access admin panel",
    //   href: "https://admin.inwesol.com/sign-in",
    //   icon: ShieldCheckIcon,
    // },
    // {
    //   title: "Sign In as Partner",
    //   tagline: "Access partner portal",
    //   href: "https://partner.inwesol.com/sign-in",
    //   icon: UserIcon,
    // },
  ];

  return (
    <header
      className={cn(
        "sticky inset-x-0 h-14 w-full border-b border-transparent z-50 select-none transition-all duration-300",
        isBannerOpen ? "top-12" : "top-0",
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
                    {link.menu ? (
                      <>
                        <NavigationMenuTrigger>
                          {link.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul
                            className={cn(
                              "grid bg-white gap-1 p-4 md:w-[400px] lg:w-[600px] rounded-xl lg:grid-cols-2"
                            )}
                          >
                            {link.menu.map((menuItem) => (
                              <ListItem
                                key={menuItem.title}
                                title={menuItem.title}
                                href={menuItem.href}
                                icon={menuItem.icon}
                              >
                                {menuItem.tagline}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center h-full">
            {/* Sign In Button (Desktop) */}
            <Link
              href="https://app.inwesol.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="default"
                type="button"
                aria-label="Sign In"
                className="rounded-l-xl bg-primary-green-600 text-white font-semibold hover:bg-primary-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Sign In
              </Button>
            </Link>

            {/* Divider */}
            <div className="w-px h-9 bg-white" />

            {/* Login Options (Desktop) */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "group inline-flex h-9 items-center justify-center rounded-r-xl",
                      "bg-primary-green-600 text-white font-semibold",
                      "text-base px-1",
                      "hover:bg-primary-green-700",
                      "transition-all duration-200",
                      "data-[state=open]:bg-primary-green-700",
                      "shadow-sm hover:shadow-md",
                      "[&>svg:last-child]:text-white [&>svg:last-child]:mr-2 [&>svg:last-child]:mt-1"
                    )}
                  ></NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={cn(
                        "grid bg-white gap-1 p-4 w-[320px] rounded-xl shadow-lg border border-gray-100"
                      )}
                    >
                      {loginOptions.map((option) => (
                        <ListItem
                          key={option.title}
                          title={option.title}
                          href={option.href}
                          icon={option.icon}
                        >
                          {option.tagline}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
  const isExternal = href?.startsWith("http");

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={cn(
            "block select-none space-y-1 rounded-2xl p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-primary-green-200 hover:text-primary-green-200-foreground focus:bg-primary-green-200 focus:text-primary-green-200-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-black">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-semibold !leading-none">{title}</h6>
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
