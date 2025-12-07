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
  const allGuides = [
    {
      icon: <Zap className="size-5 sm:size-8" />,
      title: "Teenagers Ultimate Guide",
      description:
        "Understand your behaviours to grow, and protect what's matters to you.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      pdfUrl: "/pdfs/growth-starts-with-understanding-your-behaviour.pdf",
      section: "Guides",
    },
    {
      icon: <Heart className="size-5 sm:size-8" />,
      title: "Growth Starts with Understanding Your Behaviour",
      description:
        "Understand your behaviours to grow, and protect what's matters to you.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
      pdfUrl: "/pdfs/growth-starts-with-understanding-your-behaviour.pdf",
      section: "EBT",
    },
    {
      icon: <User className="size-5 sm:size-8" />,
      title: "To Know Yourself, Know Your Feelings",
      description: "A self-awareness guide for understanding your emotions.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
      pdfUrl: "/pdfs/to-know-yourself-know-your-feelings.pdf",
      section: "EBT",
    },
    {
      icon: <Brain className="size-5 sm:size-8" />,
      title: "Clarity Starts with Your Thoughts",
      description: "A gentle guide to noticing & growing your thoughts.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
      pdfUrl: "/pdfs/clarity-starts-with-your-thoughts.pdf",
      section: "EBT",
    },
    {
      icon: <AlertTriangle className="size-5 sm:size-8" />,
      title: "Future Readiness: Concern",
      description:
        "A guide to understand how your choices now impact your career path.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      pdfUrl: "/pdfs/concern.pdf",
      section: "4C",
    },
    {
      icon: <MessageSquare className="size-5 sm:size-8" />,
      title: "Future Readiness: Consultation",
      description: "A guide to seek support to choose what's right for you.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      pdfUrl: "/pdfs/consultation.pdf",
      section: "4C",
    },
    {
      icon: <Lightbulb className="size-5 sm:size-8" />,
      title: "Future Readiness: Curiosity",
      description:
        "A guide to being open to new possibilities & continuously seek knowledge.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      pdfUrl: "/pdfs/curiosity.pdf",
      section: "4C",
    },
    {
      icon: <Crown className="size-5 sm:size-8" />,
      title: "Future Readiness: Confidence",
      description:
        'A guide to say "I can handle this," even when something feels tough.',
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      pdfUrl: "/pdfs/confidence.pdf",
      section: "4C",
    },
  ];

  // Group guides by section
  const guidesBySection = allGuides.reduce((acc, guide) => {
    if (!acc[guide.section]) {
      acc[guide.section] = [];
    }
    acc[guide.section].push(guide);
    return acc;
  }, {} as Record<string, typeof allGuides>);

  const handleDownload = (pdfUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = title.replace(/[^a-z0-9]/gi, "_").toLowerCase() + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const sections = ["Guides", "EBT", "4C"];
  const sections = {
    Guides: "Guide to Shaping Your Mindset & Future",
    EBT: "Guide to Knowing Yourself Better",
    "4C": "Guide to Understanding Your Future Readiness",
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-24 relative">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
          Your Guides To Be {/* <br />{" "} */}
          <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
            Future Ready
          </span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore our comprehensive collection of guides designed to help you
          understand yourself better and prepare for your future.
        </p>
      </div>

      {/* Guides Section */}
      <div className="space-y-12 mt-12">
        {Object.keys(sections).map((sectionName: string) => (
          <div key={sectionName} className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap">
                {sections[sectionName as keyof typeof sections]}
              </h3>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {guidesBySection[sectionName]?.map((offering, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border border-gray-200 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm rounded-xl cursor-pointer"
                  onClick={() =>
                    handleDownload(offering.pdfUrl, offering.title)
                  }
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
                    <div className="mt-4 flex items-center text-primary-green-600 text-sm font-medium group-hover:text-primary-green-700 transition-colors">
                      <FileDown className="size-4 mr-2" />
                      Click to download PDF
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
