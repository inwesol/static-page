import {
  AlertTriangle,
  Award,
  BookOpen,
  Brain,
  Crown,
  FileDown,
  Heart,
  Lightbulb,
  MessageSquare,
  User,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Guides: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 relative">
      <div className="text-center">
        {/* <div className="inline-flex items-center py-2 px-3 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-green-100 to-primary-blue-100 rounded-full text-primary-green-700 font-semibold mb-6 text-sm sm:text-base">
          <Zap className="size-4 sm:size-5 mr-2" />
          Download Future Readiness Guides
        </div> */}
        <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
          Download
          <br />{" "}
          <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
            Future Readiness
          </span>{" "}
          Guides
        </h2>
        {/* <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Our science-backed, integrated approach empowers students, parents,
          and schools to create a learning mindset ecosystem that drives lasting
          impact.
        </p> */}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 ">
        {[
          {
            icon: <Heart className="size-5 sm:size-8" />,
            title: "A Gentle Guide to Understanding Behaviours",
            description:
              "Understand your behaviours to grow, and protect what’s matters to you.",
            color: "from-primary-blue-500 to-primary-blue-600",
            bgColor: "bg-primary-blue-50",
          },
          {
            icon: <User className="size-5 sm:size-8" />,
            title: "Knowing Yourself Is the First Step",
            description:
              "A self-awareness guide for understanding your emotions.",
            color: "from-primary-blue-500 to-primary-blue-600",
            bgColor: "bg-primary-blue-50",
          },
          {
            icon: <Brain className="size-5 sm:size-8" />,
            title: "Let’s Talk: What’s Going On In Your Mind?",
            description: "A gentle guide to noticing & growing your thoughts.",
            color: "from-primary-blue-500 to-primary-blue-600",
            bgColor: "bg-primary-blue-50",
          },
          {
            icon: <AlertTriangle className="size-5 sm:size-8" />,
            title: "Concern & Future Readiness",
            description:
              "A guide to understand how your choices now impact your career path.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
          },
          {
            icon: <MessageSquare className="size-5 sm:size-8" />,
            title: "Consultation & Future Readiness",
            description:
              "A guide to seek support to choose what’s right for you.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
          },
          {
            icon: <Lightbulb className="size-5 sm:size-8" />,
            title: "Curiosity & Future Readiness",
            description:
              "A guide to being open to new possibilities & continuously seek knowledge.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
          },
          {
            icon: <Crown className="size-5 sm:size-8" />,
            title: "Confidence & Future Readiness",
            description:
              "A guide to say  “I can handle this,” even when something feels tough.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
          },
        ].map((offering, index) => (
          <Card
            key={index}
            className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm rounded-xl"
          >
            <CardContent className="p-4 sm:p-6 sm:pt-8 sm:pb-8">
              <div
                className={`w-10 h-10 sm:w-16 sm:h-16 rounded-[6px] sm:rounded-xl bg-gradient-to-r ${offering.color} flex items-center justify-center text-white mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {offering.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900 group-hover:text-primary-green-600 transition-colors">
                {offering.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 sm:leading-relaxed">
                {offering.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Guides;
