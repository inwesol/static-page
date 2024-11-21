// React and Next.js imports
import Image from "next/image";
// import Link from "next/link";
import Balancer from "react-wrap-balancer";

// UI component imports
// import * as Craft from "@/components/craft";
import { Section, Container } from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/images/career-resource.webp";

const ServiceOne = () => {
  return (
    <Section id="services">
      <Container className="flex flex-col gap-8">
        <h1 className="!mb-0 pb-8">What we offer?</h1>
      </Container>

      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="career-resource"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-32 order-first md:order-last">
          <h3 className="!my-0">Democratising Career Resources</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Access career resources through infographics, blogs, newsletters,
            and a vibrant community. Empower yourself with the knowledge to
            explore various career paths.
          </p>
          {/* <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div> */}
        </div>
      </Container>
    </Section>
  );
};

export default ServiceOne;
