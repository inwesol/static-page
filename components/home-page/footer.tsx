// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "../ui/button";

// Icon imports
import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
import Logo from "@/public/in-bg.svg";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              {/* <h3 className="sr-only">brijr/components</h3> */}
              <Image
                src={Logo}
                alt="Logo"
                width={272}
                height={136}
                className="transition-all hover:opacity-75 dark:invert -ml-16 -mb-12"
              ></Image>
            </Link>
            <p>
              <Balancer>
                Contact: contact@inwesol.com | +91 8331089712
                <br />
                Address: Hyderabad, India
              </Balancer>
            </p>
          </div>
          {/* <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div> */}
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          {/* <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Link href="https://www.linkedin.com/company/inwesol/about">
                <Linkedin />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
            <Button variant="outline" size="icon">
              <Instagram />
            </Button>
          </div> */}
          <p className="text-muted-foreground">
            Copyright © 2024 Inwesol. All rights reserved.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
