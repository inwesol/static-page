// React and Next.js imports
import Image from "next/image";
// import Link from "next/link";
import Balancer from "react-wrap-balancer";

// UI component imports
import * as Craft from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/images/career-resource.webp";

const ServiceOne = () => {
  return (
    <Craft.Section id="services">
      <Craft.Container className="flex flex-col gap-8">
        <h1 className="!mb-0">What we offer?</h1>
        {/* <h3 className="text-4xl">
          <Balancer>What we offer?</Balancer>
        </h3> */}
      </Craft.Container>

      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-32">
          <h3 className="!my-0">Accessible Career Resources</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Democratizing career information through a guided platform with
            infographics, blogs and newsletters.
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
      </Craft.Container>
    </Craft.Section>
  );
};

export default ServiceOne;
