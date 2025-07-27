import { Button } from "@/components/ui/button";
import {
  Activity,
  BrainCog,
  CircleCheck,
  GraduationCap,
  Sparkles,
  Smile,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InfoCardItem from "./InfoCardItem";
import { AnimationContainer } from "@/components";
import FAQAccordion from "./FAQAccordion";
import Companion from "./Companion";
import CEOSection from "./CEOSection";
import TestimonialsSection from "./TestimonialsSection";
import CocoHeroHeading from "./CocoHeroHeading";
import CocoCTAButton from "./CocoCTAButon";

const infoCardItems = [
  {
    icon: CircleCheck,
    title: "Clarity When You Need It",
    description:
      "CoCo helps you pause, reflect, and think clearly through life and career decisions. With a thoughtful coaching approach, CoCo guides you to your own answers - with clarity and confidence.",
  },
  {
    icon: GraduationCap,
    title: "Career Questions, Honest Answers",
    description:
      "From course information to career paths, CoCo gives you information from reliable sources. Ask anything, CoCo is here to guide, not judge.",
  },
  {
    icon: Activity,
    title: "Supports Your Wellbeing",
    description:
      "CoCo supports you in managing your priorities and wellbeing. Because your wellbeing matters just as much as your next big step.",
  },
  {
    icon: BrainCog,
    title: "A Thoughtful Ally, Not a Chatbot",
    description:
      "CoCo is brought to you by blending the science of psychology with the power of AI, designed to listen with empathy, respond with compassion, while protecting your privacy every step of the way. And when you need deeper support, it gently connects you to a human coach.",
  },
];
export default function CocoPage() {
  return (
    <div className="bg-gradient-to-r from-primary-green-50 to primary-blue-50 p-3 sm:p-5">
      {/* hero section  */}
      <AnimationContainer delay={0.3} reverse viewport>
        <section
          className="flex max-w-5xl mx-auto justify-center items-center"
          style={{ minHeight: "calc(100vh - 70px)" }}
        >
          <div className="flex-col flex gap-10 md:gap-4 md:items-center md:flex-row">
            <div className="w-full">
              <CocoHeroHeading />
              <p className="text-slate-600 text-sm sm:text-base mt-2 mb-6">
                CoCo is your ally, here to listen, coach, and empower. Helping
                you think through important career decisions and prioritise your
                well-being.
              </p>
              <CocoCTAButton />
            </div>
            <div className="w-full flex justify-center">
              <video
                src="/assets/coco-video.mp4"
                className="rounded-xl shadow-lg max-w-full h-auto max-h-[800px] border border-gray-200"
                autoPlay
                loop
                muted
                playsInline
                // controls
              />
            </div>
          </div>
        </section>
      </AnimationContainer>
      {/* Component 2 */}
      <section className="max-w-5xl mx-auto">
        {/* <Card className="border-none"> */}
        <Card className="bg-gradient-to-br from-white via-primary-blue-50/30 to-primary-green-50/30 shadow-lg border-slate-200 rounded-[6px] sm:rounded-xl">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-col items-center gap-3">
                {/* <div className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 rounded-full p-3 text-white">
                  <Sparkles className="size-5" />
                </div> */}
                {/* animated label */}
                <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[2.5px] focus:outline-none select-none">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00B24B_0%,#3FA1D8_50%,#00B24B_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium backdrop-blur-3xl gap-2 text-slate-900">
                    <Sparkles className="size-4" /> CoCo Insights
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary-green-600">
                  How does CoCo help you?
                </h1>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid-cols-1 sm:grid-cols-2 grid gap-2 sm:gap-6">
              {infoCardItems.map(({ icon: Icon, title, description }) => (
                <InfoCardItem
                  icon={Icon}
                  title={title}
                  description={description}
                  key={title}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      {/* component 4 */}
      <section className="flex max-w-5xl mx-auto mt-14 sm:mt-20">
        <CEOSection />
      </section>
      {/* component 5 */}
      <section className="max-w-5xl mx-auto mt-14 sm:mt-20">
        <TestimonialsSection />
      </section>
      {/* component 6 */}
      <section className="max-w-5xl mx-auto mt-14 sm:mt-20">
        <Companion />
      </section>
      {/* component 7 */}
      <section className="max-w-5xl mx-auto mt-14 sm:mt-20">
        <FAQAccordion />
      </section>
    </div>
  );
}
