// React and Next.js imports
// import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/images/ai-assistance.webp";

const ServiceFour = () => {
  return (
    <Section className="border-b">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-32">
          <h3 className="!my-0">Personalised Wellbeing Assistance</h3>
          <p className="font-light leading-[1.4] opacity-70">
            An AI Agent monitors progress and nudges toward a balanced
            lifestyle. Receive tailored support for holistic well-being and
            career success.
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
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="ai-assistance"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default ServiceFour;
