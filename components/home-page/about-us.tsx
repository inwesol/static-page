// import Link from "next/link";

// import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
// import { Button } from "../ui/button";
// import { Badge } from "../ui/badge";

const AboutUs = () => {
  return (
    <Section id="aboutus" className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        {/* <Badge className="not-prose w-fit" variant="outline">
          <Link
            className="group flex items-center gap-1"
            href="https://9d8.dev"
          >
            Lorem ipsum dolor sit amet
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge> */}
        <h1 className="!mb-0">About Us</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          At Inwesol, we are passionate about helping professionals at all
          stages find their true north. Our team of experienced career coaches
          combines industry insights with personalized strategies to guide you
          towards your dream career.
        </h3>

        {/* <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div> */}
      </Container>
    </Section>
  );
};

export default AboutUs;
