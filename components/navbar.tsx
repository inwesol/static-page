"use client";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import ModeToggle from "./mode-toggle";

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[0.5rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Inwesol.</SheetTitle>
              <SheetDescription>
                Self Discovery Leads To Excellence
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#problems">
                  <Button variant="outline" className="w-full">
                    Problems
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#services">
                  <Button variant="outline" className="w-full">
                    Services
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#benefits">
                  <Button variant="outline" className="w-full">
                    Benefits
                  </Button>
                </Link>
              </DialogClose>
              {/* <DialogClose asChild>
                <Link href="#testimonials">
                  <Button variant="outline" className="w-full">
                    Testimonials
                  </Button>
                </Link>
              </DialogClose> */}
              {/* <DialogClose asChild>
                <Link href="#cta">
                  <Button variant="outline" className="w-full">
                    CTA
                  </Button>
                </Link>
              </DialogClose> */}
              {/* <DialogClose asChild>
                <Link href="#faq">
                  <Button variant="outline" className="w-full">
                    FAQ
                  </Button>
                </Link>
              </DialogClose> */}
              <ModeToggle />
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <h1 className="font-bold text-[#283841] dark:invert">Inwesol.</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="#problems">
            <Button variant="ghost">Problems</Button>
          </Link>
          <Link href="#services">
            <Button variant="ghost">Services</Button>
          </Link>
          <Link href="#benefits">
            <Button variant="ghost">Benefits</Button>
          </Link>
          {/* <Link href="#testimonials">
            <Button variant="ghost">Testimonials</Button>
          </Link> */}
          {/* <Link href="#cta">
            <Button variant="ghost">CTA</Button>
          </Link> */}
          {/* <Link href="#faq">
            <Button variant="ghost">FAQ</Button>
          </Link> */}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
