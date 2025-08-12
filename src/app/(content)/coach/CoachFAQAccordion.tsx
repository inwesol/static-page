import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Shield, Clock, MessageCircle, Users } from "lucide-react";

const accordionItems = [
  {
    id: "item-1",
    ques: "Is my conversation with CoCo private and safe?",
    ans: "Absolutely. CoCo is built with privacy in mind. It's designed to listen and respond with empathy, without judgment. You can chat freely, knowing your reflections are respected. Learn more about our privacy policy here.",
    icon: Shield,
  },
  {
    id: "item-2",
    ques: "What is CoCo and how can it help me?",
    ans: "CoCo is an ally that helps you reflect, think clearly, and make meaningful career decisions. It's like having a supportive coach in your pocket - always ready to listen, coach, and empower.",
    icon: HelpCircle,
  },
  {
    id: "item-3",
    ques: "Is CoCo available 24/7?",
    ans: "Yes! CoCo is always available anytime, anywhere. Whether it's a late-night worry or a quick decision during your day, CoCo is here whenever you need a moment to think and reflect.",
    icon: Clock,
  },
  {
    id: "item-4",
    ques: "Why does CoCo ask me questions?",
    ans: "CoCo's style is to ask you questions in order to help you reflect, so you can think clearly and deeply. In this way, CoCo can help you with career guidance, skills development, and thinking through important career decisions.",
    icon: MessageCircle,
  },
  {
    id: "item-5",
    ques: "Can I make decisions based on conversations with CoCo?",
    ans: "While CoCo can assist with career guidance, skill development, and helping you think clearly and deeply about your career, important career decisions are best made with support from a human coach at Inwesol. CoCo will guide you, but will also redirect you to a human coach for support with important career decisions.",
    icon: Users,
  },
];

interface AccordionItem {
  id: string;
  ques: string;
  ans: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AccordionDemoProps {
  accordionItems?: AccordionItem[];
}

export default function CoachFAQAccordion({
  accordionItems: items = accordionItems,
}: AccordionDemoProps) {
  return (
    <>
      {/* accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        defaultValue="item-1"
      >
        {items.map((accordionItem, i) => {
          const IconComponent = accordionItem.icon;
          return (
            <AccordionItem
              value={accordionItem.id}
              key={accordionItem.id}
              className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline group bg-gradient-to-r from-slate-50 to-slate-100/80 hover:from-primary-green-50 hover:to-primary-blue-50 transition-all duration-300">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-100 to-primary-blue-100 rounded-xl flex items-center justify-center group-hover:from-emerald-200 group-hover:to-blue-200 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-primary-green-600 group-hover:text-primary-blue-600 transition-colors duration-300" />
                  </div>
                  <span className="font-semibold text-slate-800 group-hover:text-slate-900 sm:text-lg leading-relaxed text-base">
                    {accordionItem.ques}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-6 bg-white/80">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10" />{" "}
                  <div className="flex-1">
                    <p className="text-slate-700 leading-relaxed sm:text-base text-sm">
                      {accordionItem.ans}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
