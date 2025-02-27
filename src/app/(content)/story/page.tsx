import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { AnimationContainer, MaxWidthWrapper } from "@/components";

const people = [
  {
    id: 1,
    name: "Akarsh Sriramoju",
    designation: "CEO",
    link: "https://www.linkedin.com/in/akarshedpsy/",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGN-jy_w3V1Xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719295230949?e=1744848000&v=beta&t=dUfTD4siiUqBlRlP024wrIOIcQg7N7JLfvbfHVuNQDc",
  },
  {
    id: 2,
    name: "Goutham Toondla",
    designation: "COO",
    link: "https://www.linkedin.com/in/goutham-toondla-2a2112123/",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQEj7oGVSpHxkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1598375667648?e=1744848000&v=beta&t=Nj8_Z5xQoUzNIWxuaTu-SmDSYlrGYfYVmKQsutGr6rs",
  },
];

const motto = [
  {
    title: "Purpose",
    description:
      "We aim to foster the well-being of individuals and empower them in realising their capabilities for achieving their goals.",
  },
  {
    title: "Vision",
    description:
      "A world where every individual thrives by making informed decisions and taking meaningful actions.",
  },
  {
    title: "Mission",
    description:
      "By integrating psychology, technology, and community, we enable decision-making that fosters well-being and drives behavioural change to navigate crucial transitions in individuals' educational and professional journeys.",
  },
];

const values = [
  {
    keyword: "Own It",
    description: "Take responsibility and deliver with accountability.",
  },
  {
    keyword: "Stay Curious",
    description: "Explore, innovate, and think beyond limits.",
  },
  {
    keyword: "Do What's Right",
    description: "Act with integrity and uphold ethics in all you do.",
  },
  {
    keyword: "Be a Coach",
    description: "Guide, support, and inspire to realise capabilities.",
  },
  {
    keyword: "Empathy First",
    description: "Prioritize understanding and compassion in every action.",
  },
  {
    keyword: "Be Inclusive",
    description:
      "Embrace inclusivity at every step for both customers and employees.",
  },
  {
    keyword: "Trust the Evidence",
    description: "Let science and research guide your actions.",
  },
  {
    keyword: "Think Stakeholders",
    description: "Focus on creating value for everyone, not just profits.",
  },
  {
    keyword: "Problem First",
    description: "Prioritize understanding and solving the core issue.",
  },
];

const OurStory = () => {
  return (
    <MaxWidthWrapper className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mb-40 overflow-hidden">
      <AnimationContainer delay={0.1} className="w-full">
        <div className="flex flex-col-reverse items-center justify-between">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-10 text-center text-gray-900">
            Our Story
          </h1>

          <Image
            src={"/think_different.svg"}
            alt="Think Different"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>

        <section className="rounded-xl border bg-primary1/5 border-gray-200 shadow-xl mx-auto relative px-6 sm:px-0">
          <section className="max-w-4xl mx-auto my-12 space-y-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-2">
              Why Inwesol?
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              We are 90s kids, and like many others, we were inspired by{" "}
              <em>3 Idiots</em> when it came out in 2009. It clearly depicts the
              pressure young people face in education and career paths. Even
              though the movie came out 15 years ago, things haven&apos;t
              changed much. The academic pressure and confusion about career
              choices are still very real for today&apos;s youth.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              After talking to many young people, we learned that most
              don&apos;t know which course to take or what job suits them. They
              often make decisions based on family or friends, not their
              interests and strengths. And when they face challenges,
              there&apos;s little support. Society pushes them to chase success,
              forgetting that every individual is unique and must find their
              path.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              One line from <em>3 Idiots</em> that stuck with us is:
            </p>

            <AnimationContainer delay={0.2}>
              <blockquote className="bg-gray-100 border-l-4 border-primary pl-4 py-4 italic font-semibold text-lg text-gray-800">
                &quot;Success ke peeche mat bhaago, excellence ka peecha karo,
                <br />
                success jhak maarke tumhare peeche ayegi.&quot;
                <br />
                <span className="block mt-2 text-sm text-gray-600">
                  (Don&apos;t chase success; focus on excellence, and success
                  will follow you.)
                </span>
              </blockquote>
            </AnimationContainer>

            <p className="text-lg leading-8 text-gray-700">
              At Inwesol, we believe this is the key to empowering young people
              to thrive. Our objective is to guide individuals in
              self-discovery, help them realize their capabilities, support them
              in achieving their goals, and enable them to work toward
              excellence. We focus on prevention and development, creating
              solutions that foster well-being and drive positive behavioral
              change.
            </p>
          </section>
        </section>

        <section className="max-w-4xl mx-auto mt-16 space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Our Motto</h2>
            <p className="text-3xl font-extrabold text-transparent mt-4 bg-gradient-to-r from-primary1 to-accent bg-clip-text inline-bloc">
              <span className="text-gray-500">&quot;</span>Self-discovery leads
              to excellence.<span className="text-gray-500">&quot;</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {motto.map((item, index) => (
              <div
                key={index}
                className="relative p-6 shadow-sm rounded-xl border border-gray-200 transition-all hover:shadow-md"
              >
                <AnimationContainer
                  key={index}
                  className="w-full h-full"
                  delay={(index + 1) * 0.2}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </AnimationContainer>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Our Values
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-white rounded-xl shadow-xl transition-all duration-300 before:absolute before:-inset-1 before:bg-gradient-to-r before:from-primary/30 before:to-transparent before:rounded-xl before:-z-10"
              >
                <AnimationContainer delay={(idx + 1) * 0.1}>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">{value.keyword}</span>
                    {" - "}
                    {value.description}
                  </p>
                </AnimationContainer>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mt-32">
          <div className="w-full flex flex-col items-center my-12 space-y-8">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Meet Our Leaders
            </h2>

            <div className="flex gap-6 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-2">
              {people.map((person, index) => (
                <div
                  key={person.id}
                  className="relative w-36 sm:w-48 md:w-56 h-auto group flex-shrink-0"
                >
                  <Link href={person.link} target="_blank">
                    <AnimationContainer delay={(index + 1) * 0.2}>
                      <div className="w-full aspect-square rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:brightness-110 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                        <Image
                          src={person.image}
                          alt={person.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </AnimationContainer>

                    <div className="absolute top-full mt-2 text-center w-full">
                      <div className="">
                        <p className="text-lg font-semibold text-gray-900">
                          {person.name}
                        </p>
                        <p className="text-base font-extrabold text-accent drop-shadow-sm">
                          {person.designation}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center w-full pt-16 sm:pt-12">
            <Link href="/">
              <Button className="px-6 py-3 bg-[#3FA1D8] text-white rounded-xl font-semibold shadow-lg hover:bg-[#00B24B] transition-all">
                Back to homepage
              </Button>
            </Link>
          </div>
        </section>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default OurStory;
