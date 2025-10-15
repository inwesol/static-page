import React from "react";
import { DialogContent } from "@/components/ui/dialog";
import Modal from "@/components/ui/modal";
import { ArrowRight, Target, Compass, Sparkles } from "lucide-react";

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
    href: "/career-test",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Explorer",
    description: "One stop solution for students' career info research",
    href: "/explorer",
    icon: <Compass className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "CoCo Mindset Coach",
    description: "Everyday ally for students to listen, coach, and empower",
    href: "https://app.inwesol.com/chat",
    external: true,
    icon: <Sparkles className="w-6 h-6" />,
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
    ? links.filter((l) => l.href !== "/career-test")
    : isOccupationsList
    ? links.filter((l) => l.external === true)
    : links;

  return (
    <Modal isOpen={isOpen && shouldShow} setIsOpen={setIsOpen}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden !rounded-2xl bg-gradient-to-br from-primary-blue-50 to-primary-green-50">
        <div className=" p-6 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Begin The Journey
          </h2>
          <p className="text-gray-600 text-sm">
            Tools for students to progress and grow
          </p>
        </div>

        <div className="p-4 flex flex-col gap-3">
          {filteredLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 p-5">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {link.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-primary-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
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

        <div className="px-6 pb-6 pt-2">
          <p className="text-xs text-center text-gray-500">
            Choose an option to continue exploring your potential
          </p>
        </div>
      </DialogContent>
    </Modal>
  );
};

export default ModalCTA;
