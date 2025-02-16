// import React from "react";

// const story = () => {
//   return <div>story</div>;
// };

// export default story;

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const people = [
  {
    id: 1,
    name: "Akarsh Sriramoju",
    designation: "CEO",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGN-jy_w3V1Xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719295230949?e=1744848000&v=beta&t=dUfTD4siiUqBlRlP024wrIOIcQg7N7JLfvbfHVuNQDc",
  },
  {
    id: 2,
    name: "Goutham Toondla",
    designation: "COO",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQEj7oGVSpHxkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1598375667648?e=1744848000&v=beta&t=Nj8_Z5xQoUzNIWxuaTu-SmDSYlrGYfYVmKQsutGr6rs",
  },
];

const OurStory = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Our Story
        </h1>
        <p className="text-sm mb-2 italic mt-20">
          Last updated: 04th February 2025
        </p>
        {/* <p className="mt-4">
          Welcome to Inwesol. These terms and conditions outline the rules and
          regulations for the use of Inwesol&apos;s website and services.
        </p> */}
        <h2 className="text-xl font-medium mt-8">Why Inwesol?</h2>
        <p className="mt-8 text-muted-foreground">
          We are 90s kids, and like many others, we were inspired by 3 Idiots
          when it came out in 2009. It clearly depicts the pressure young people
          face in education and career paths. Even though the movie came out 15
          years ago, things haven&apos;t changed much. The academic pressure and
          confusion about career choices are still very real for today&apos;s
          youth.
        </p>
        <p className="mt-8 text-muted-foreground">
          After talking to many young people, we learned that most don&apos;t
          know which course to take or what job suits them. They often make
          decisions based on family or friends, not based on their interests and
          strengths. And when they face challenges, there&apos;s not much
          support. Society pushes them to chase success, but we forget that
          every individual is unique and must find their path.
        </p>
        <p className="mt-8 text-muted-foreground">
          One line from 3 Idiots that stuck with us is: “Success ke peeche mat
          bhaago, excellence ka peecha karo, success jhak maarke tumhare peeche
          ayegi ” This translate to “Don&apos;t chase success; focus on
          excellence, and success will follow you”
        </p>
        <p className="mt-8 text-muted-foreground">
          At Inwesol, we believe this is the key to empowering young people to
          thrive. Our objective is to guide individuals in self-discovery, help
          them realise their capabilities, support them in achieving their
          goals, and enable them to work towards excellence. We focus on
          prevention and development, creating solutions that foster well-being
          and drive positive behavioural change.
        </p>
        <h2 className="text-xl font-medium mt-12">
          Our motto: Self-discovery leads to excellence.
        </h2>
        <div className="mt-8">
          <ul className="list-disc ml-8 text-muted-foreground">
            <li>
              Purpose: We aim to foster the well-being of individuals and
              empower them in realising their capabilities for achieving their
              goals.
            </li>
            <li>
              Vision: A world where every individual thrives by making informed
              decisions and taking meaningful actions.
            </li>
            <li>
              Mission: By integrating psychology, technology, and community, we
              enable decision-making that fosters well-being and drives
              behavioural change to navigate crucial transitions in
              individuals&apos; educational and professional journeys.
            </li>
          </ul>
        </div>
        <h2 className="text-xl font-medium mt-12">Our Values</h2>
        <div className="mt-8">
          <ul className="list-disc text-muted-foreground ml-8">
            <li>
              Own It – Take responsibility and deliver with accountability.
            </li>
            <li>Stay Curious – Explore, innovate, and think beyond limits.</li>
            <li>
              Do What&apos;s Right – Act with integrity and uphold ethics in all
              you do.
            </li>
            <li>
              Be a Coach – Guide, support, and inspire to unlock potential.
            </li>
            <li>
              Empathy First – Prioritize understanding and compassion in every
              action.
            </li>
            <li>
              Be Inclusive – Embrace inclusivity at every step for both
              customers and employees.
            </li>
            <li>
              Trust the Evidence – Let science and research guide your actions.
            </li>
            <li>
              Think Stakeholders – Focus on creating value for everyone, not
              just profits.
            </li>
            <li>
              Problem First – Prioritize understanding and solving the core
              issue.
            </li>
          </ul>
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Members
        </h1>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <Link href="/">
            <Button className="px-6 py-3 bg-[#3FA1D8] text-white rounded-xl font-semibold shadow-lg hover:bg-[#00B24B] transition-all">
              Back to homepage
            </Button>
          </Link>
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default OurStory;
