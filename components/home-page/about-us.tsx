// import Link from "next/link";

// import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
// import { Button } from "../ui/button";
// import { Badge } from "../ui/badge";

const AboutUs = () => {
  return (
    <Section id="problems" className="relative backdrop-blur-sm">
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
        <h1 className="!mb-0">Why Inwesol?</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Inwesol makes career guidance accessible for everyone, especially in
          rural India. We help people explore different careers and solve
          job-related challenges through personalized coaching. Our goal is to
          support individuals in discovering their capabilities and finding
          meaningful work that contributes to long-term growth and well-being.
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
