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
    ques: "Who can apply to be a coach at Inwesol?",
    ans: "We welcome individuals who have completed a Master’s in Psychology (any specialization).",
    icon: HelpCircle,
  },
  {
    id: "item-2",
    ques: "Do I need prior coaching experience?",
    ans: "Not necessarily. Our training equips you with psychology-based coaching tools and platform usage to get started.",
    icon: HelpCircle,
  },
  {
    id: "item-3",
    ques: "How does Inwesol support coaches?",
    ans: "We provide training, digital tools, AI-powered insights, and continuous support, so you can focus on making an impact.",
    icon: HelpCircle,
  },
  {
    id: "item-4",
    ques: "What kind of clients will I work with?",
    ans: "You’ll work with students and individuals navigating crucial career and life transitions.",
    icon: HelpCircle,
  },
];

interface AccordionItem {
  id: string;
  ques: string;
  ans: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CoachFAQAccordionProps {
  accordionItems?: AccordionItem[];
}

export default function CoachFAQAccordion({
  accordionItems: items = accordionItems,
}: CoachFAQAccordionProps) {
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
                    <p className="text-slate-700 leading-relaxed sm:text-base text-base font-semibold">
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
