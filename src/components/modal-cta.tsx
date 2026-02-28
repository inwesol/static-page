import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Compass, Sparkles, X } from "lucide-react";

interface ModalLink {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
  gradient?: string;
}

interface Props {
  isOccupationsList?: boolean;
  isTestResult?: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  delay?: number;
}

const links: ModalLink[] = [
  {
    title: "Future Readiness",
    description:
      "Tests for students to discover their strengths and readiness for the future",
    href: "/be-future-ready",
    icon: <Target className="w-4 h-4" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Explorer",
    description: "One stop solution for students' career info research",
    href: "/explorer",
    icon: <Compass className="w-4 h-4" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "CoCo Mindset Coach",
    description: "Everyday ally for students to listen, coach, and empower",
    href: "https://app.inwesol.com/chat",
    external: true,
    icon: <Sparkles className="w-4 h-4" />,
    gradient: "from-emerald-500 to-teal-500",
  },
];

const ModalCTA: React.FC<Props> = ({
  isOccupationsList,
  isTestResult,
  isOpen,
  setIsOpen,
  delay = 0,
}) => {
  const [shouldShow, setShouldShow] = React.useState(!delay);

  React.useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setShouldShow(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  const filteredLinks = isTestResult
    ? links.filter((l) => l.href !== "/be-future-ready")
    : isOccupationsList
      ? links.filter((l) => l.external === true)
      : links;

  const visible = isOpen && shouldShow;
  if (!visible) return null;

  return (
    <div
      className="fixed right-4 bottom-4 z-50 w-[280px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-200"
      aria-label="Begin the journey"
      role="complementary"
    >
      <Card className="rounded-xl overflow-hidden border-0 shadow-xl bg-gradient-to-br from-primary-blue-50 to-primary-green-50 max-h-[calc(100vh-2rem)] flex flex-col">
        <div className="relative p-3 pr-9">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 rounded-sm opacity-70 hover:opacity-100 transition-opacity p-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <h2 className="text-lg font-bold text-gray-800 mb-0.5">
            Begin The Journey
          </h2>
          <p className="text-gray-600 text-xs">
            Tools for students to progress and grow
          </p>
        </div>

        <div className="px-3 pb-0.5 flex flex-col gap-1.5 overflow-y-auto overflow-x-hidden flex-1 min-h-0">
          {filteredLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-2.5 p-3">
                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}
                >
                  {link.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5 mb-0.5">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-primary-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-xs text-gray-600 leading-snug">
                    {link.description}
                  </p>
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </a>
          ))}
        </div>

        <div className="px-3 pb-3 pt-0.5 shrink-0">
          <p className="text-[10px] text-center text-gray-500">
            Choose an option to continue exploring your potential
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ModalCTA;
