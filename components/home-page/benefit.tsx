// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";

// Icon imports
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Resolve Career Dilemmas",
    href: "/",
    description:
      "Get clarity in your career choices through personalized coaching.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Explore Different Careers",
    href: "/",
    description:
      "Discover various paths that match your interests and strengths.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Discover Meaningful Work",
    href: "/",
    description: "Find fulfillment by aligning your career with your values.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Manage Well-being",
    href: "/",
    description:
      "Maintain a healthy balance of personal and professional lives.",
    cta: "Learn More",
  },
];

const Benefit = () => {
  return (
    <Section id="benefits" className="border-b">
      <Container className="flex flex-col gap-8">
        <h1 className="!mb-0">What you get?</h1>
      </Container>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          {/* <h3 className="text-4xl">
            <Balancer>What you get?</Balancer>
          </h3> */}
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>A holistic solution for career guidance</Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {/* {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )} */}
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Benefit;
