import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Users,
  Target,
  BarChart3,
  Download,
  GraduationCap,
  Lightbulb,
  Trophy,
  TrendingUp,
  Search,
  Eye,
  Activity,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  Brain,
  Rocket,
  DownloadCloudIcon,
  GitFork,
  Handshake,
  User,
} from "lucide-react";
import { Footer, Navbar } from "@/components";
import ScrollToEnquiryButton from "./ScrollToEnquiryButton";
import EnquiryForm from "./EnquiryForm";
import Image from "next/image";

export default function SchoolsPage() {
  const processCards = [
    {
      id: 1,
      icon: <Search className="size-8" />,
      title: "Assess",
      description:
        "Comprehensive psychological assessments and aptitude tests to identify your core strengths, interests, and personality traits.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
      glowColor: "shadow-primary-blue-500/25",
    },
    {
      id: 2,
      icon: <Eye className="size-8" />,
      title: "Analyze",
      description:
        "Deep dive into your assessment results with expert interpretation to understand your unique career compatibility and potential paths.",
      color: "from-primary-green-500 to-primary-green-600",
      bgColor: "bg-primary-green-50",
      glowColor: "shadow-primary-green-500/25",
    },
    {
      id: 3,
      icon: <Activity className="size-8" />,
      title: "Guide",
      description:
        "Receive personalized career recommendations and step-by-step action plans tailored to your psychological profile and aspirations.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
      glowColor: "shadow-primary-blue-500/25",
    },
    {
      id: 4,
      icon: <BarChart3 className="size-8" />,
      title: "Track",
      description:
        "Monitor your career development progress and receive ongoing guidance as you advance toward your ideal career path.",
      color: "from-primary-green-500 to-primary-green-600",
      bgColor: "bg-primary-green-50",
      glowColor: "shadow-primary-green-500/25",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white overflow-hidden">
        {/* hero section */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ minHeight: "calc(100vh - 56px)" }}
        >
          {/* background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-600 via-primary-blue-500 to-primary-green-700">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

            {/* floating elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-green-400/20 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-blue-300/30 rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto p-4 pb-10 lg:p-8 z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className={`space-y-8 
                }`}
              >
                <div className="space-y-6">
                  {/* <div className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
                    <Sparkles className="size-4 mr-2" />
                    Transforming Careers Since 2020
                  </div> */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.15] sm:leading-tight text-white">
                    Journey of
                    <br />{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Self-Discovery
                    </span>{" "}
                    <br />
                    to Cultivate a Learning Mindset
                  </h1>
                  <p className="text-base sm:text-xl text-white leading-snug sm:leading-relaxed font-semibold">
                    A learning mindset helps you build a meaningful career and a
                    fulfilling life. Through our self-discovery journey,
                    you&apos;ll explore your strengths, interests, and values to
                    gain clarity about your career path, learn to manage stress,
                    and take confident actions towards your goal.
                  </p>
                </div>
                <ScrollToEnquiryButton />
              </div>

              <div
                className={`relative transform transition-all duration-1000 delay-300`}
              >
                <div className="relative">
                  <Image
                    src="/coaching.svg"
                    alt="Think Different"
                    width={1200}
                    height={800}
                    // fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center border border-white/20 overflow-hidden">
                    <div className="text-center space-y-6">
                      <div className="relative">
                        <GraduationCap className="size-16 sm:size-32 text-white mx-auto drop-shadow-lg" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-white font-bold text-base sm:text-2xl">
                          Educational Excellence
                        </p>
                        <p className="text-white/80">Powered by Innovation</p>
                      </div>
                    </div>
                    <video
                      src="/assets/coco.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  </div>

                  <div className="absolute -left-2 -top-8 lg:-left-8 bg-white/90 backdrop-blur-sm rounded-[10px] p-2 shadow-xl animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-green-500 to-primary-green-600 rounded-[10px] flex items-center justify-center">
                        <Trophy className="size-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">5000+</p>
                        <p className="text-xs text-gray-600">Careers Matched</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-2 -bottom-8 lg:-right-8 bg-white/90 backdrop-blur-sm rounded-[10px] p-2 shadow-xl animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-blue-500 to-primary-blue-600 rounded-[10px] flex items-center justify-center">
                        <TrendingUp className="size-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">97%</p>
                        <p className="text-xs text-gray-600">
                          Satisfaction Rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* Inwesol offerings section */}
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white relative">
          {/* background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center py-2 px-3 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-green-100 to-primary-blue-100 rounded-full text-primary-green-700 font-semibold mb-6 text-sm sm:text-base">
                <Zap className="size-4 sm:size-5 mr-2" />
                What We Offer
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                What&apos;s Inside the{" "}
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Self-Discovery Journey
                </span>
              </h2>
              {/* <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide scientifically-backed psychological assessments and
                personalized career guidance services designed to help you
                discover your ideal career path, understand your strengths, and
                make confident decisions about your future.
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                {
                  icon: <BookOpen className="size-5 sm:size-8" />,
                  title: "One-on-One Coaching",
                  description:
                    "Reflective sessions with a Psychologist to understand yourself better and bring a change.",
                  color: "from-primary-blue-500 to-primary-blue-600",
                  bgColor: "bg-primary-blue-50",
                },
                {
                  icon: <Users className="size-5 sm:size-8" />,
                  title: "Exploratory Activities",
                  description:
                    "Engaging exercises to discover your values, strengths, and story.",
                  color: "from-primary-green-500 to-primary-green-600",
                  bgColor: "bg-primary-green-50",
                },
                {
                  icon: <Brain className="size-5 sm:size-8" />,
                  title: "Psychology Assessments",
                  description:
                    "Structured tools to identify your interests, personality, and well-being.",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                },
                {
                  icon: <Award className="size-5 sm:size-8" />,
                  title: "Guided Action Planning",
                  description:
                    "Guidance to create your own action plan and make informed decisions.",
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

          <div className="container mx-auto bg-gradient-to-r from-primary-blue-600 to-primary-green-600 text-white font-semibold py-4 px-4 mt-6 sm:rounded-3xl rounded-none">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="mb-4">
                <Download className={`w-12 h-12 mx-auto text-white`} />
              </div>

              {/* Title */}
              {/* <h2 className="text-4xl font-bold mb-4">Career Map</h2> */}

              {/* Description */}
              <p className="text-xl text-purple-100 mb-4 max-w-2xl mx-auto">
                Know more about our Self-discovery Journey
              </p>

              {/* Download Button */}
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                Download Brochure
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Horizontal strip for coach section */}
        <section className="w-full bg-[#F8F4EB] py-10 md:py-14 flex flex-col items-center gap-5 px-6">
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center py-2 px-3 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-green-100 to-primary-blue-100 rounded-full text-primary-green-700 font-semibold mb-6 text-sm sm:text-base">
                <User className="size-4 sm:size-5 mr-2" />
                Meet Coaches
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Psychology-based{" "}
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Coaching
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  icon: <BookOpen className="size-5 sm:size-8" />,
                  title: "Only & Only Psychologists",
                  description:
                    "Your coaches aren’t just from any profession, they are psychologists who truly understand human behavior- bringing expertise and empathy to every session.",
                  color: "from-primary-blue-500 to-primary-blue-600",
                  bgColor: "bg-primary-blue-50",
                },
                {
                  icon: <Users className="size-5 sm:size-8" />,
                  title: "Expertly Trained in Coaching",
                  description:
                    "Every coach goes through thorough training to support you in developing a learning mindset, using proven coaching methods to help you take confident actions.",
                  color: "from-primary-green-500 to-primary-green-600",
                  bgColor: "bg-primary-green-50",
                },
                {
                  icon: <Brain className="size-5 sm:size-8" />,
                  title: "Personalized, Ongoing Support",
                  description:
                    "From helping you understand yourself to identifying clear goals and creating an actionable plan, your coach will be with you at every step of your journey.",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
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
            <div className="flex justify-center pt-4">
              <a
                href="/coach"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <Button className=" mt-4 group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 hover:from-primary-green-600 hover:to-primary-blue-600 text-white sm:font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out text-sm sm:text-lg sm:px-10 sm:py-7">
                  <div className="flex items-center gap-2">
                    <Handshake className="size-4 sm:size-5 " />
                    <span>Know more about Coaches</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

                  {/*shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* guide download section */}
        {/* <section className="py-10 bg-gradient-to-r from-primary-green-600 via-primary-green-500 to-primary-blue-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue-400/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                <div className="text-white space-y-4 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-6">
                    <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium">
                      <Download className="w-4 h-4 mr-2" />
                      Free Resource
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                      Career Discovery Guide
                    </h2>
                    <p className="text-sm sm:text-base text-white leading-snug sm:leading-relaxed">
                      Download our comprehensive 50-page guide packed with
                      self-assessment tools, career exploration strategies, and
                      proven methodologies to discover your perfect career match
                      and create your path to success.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Lightbulb className="size-4 sm:size-5" />,
                        text: "Personality Analysis Tools",
                      },
                      {
                        icon: <Users className="size-4 sm:size-5" />,
                        text: "Skills Assessment Tests",
                      },
                      {
                        icon: <Target className="size-4 sm:size-5" />,
                        text: "Career Matching Matrix",
                      },
                      {
                        icon: <Rocket className="size-4 sm:size-5" />,
                        text: "Action Planning Templates",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-white/90"
                      >
                        <div className="w-8 h-8 bg-white/20 rounded-[10px] flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="font-medium text-sm sm:text-base">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0 rounded-xl">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 rounded-[10px] sm:rounded-xl flex items-center justify-center mx-auto">
                        <Download className="size-6 sm:size-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Get Your Free Guide
                        </h3>
                        <p className="text-gray-600">
                          Instant download, no email required
                        </p>
                      </div>

                      <div className="space-y-3 text-left">
                        {[
                          "50+ pages of career insights",
                          "Psychology-based assessments",
                          "Step-by-step career planning",
                          "Industry trend analysis",
                          "Personality type compatibility",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 hover:from-primary-green-600 hover:to-primary-blue-600 text-white sm:font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out text-sm sm:text-lg sm:px-10 sm:py-7">
                        <div className="flex items-center gap-2">
                          <DownloadCloudIcon className="size-4 sm:size-5 " />
                          <span>Download Free Guide</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section> */}
        {/* process section */}
        {/* <section className="py-10 bg-gradient-to-b from-white to-gray-50 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center py-2 px-3 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-green-100 to-primary-blue-100 rounded-full text-primary-blue-700 font-semibold mb-6 text-sm sm:text-base">
                <Zap className="size-4 sm:size-5 mr-2" />
                Our Process
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Your Journey to{" "}
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Career Clarity
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A systematic, scientifically-backed approach to career discovery
                that combines psychological assessment, personality analysis,
                and personalized guidance to help you find your perfect career
                match.
              </p>
            </div>

            <div className="hidden md:block">
              <div className="relative max-w-6xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
                  <div className="w-full h-full bg-primary-blue-600 rounded-full"></div>
                </div>

                <div className="-space-y-4">
                  {processCards.map((card, index) => (
                    <div
                      key={card.id}
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      } relative`}
                    >
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center text-white font-bold text-xl shadow-2xl ${card.glowColor} border-4 border-white group-hover:scale-110 transition-all duration-500`}
                        >
                          {card.id}
                        </div>
                      </div>

                      <div className={`w-5/12 `}>
                        <Card
                          className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-xl hover:-translate-y-3 bg-white/90 backdrop-blur-sm hover:bg-white ${card.glowColor} hover:shadow-2xl rounded-xl`}
                        >
                          <CardContent className="p-6">
                            <div
                              className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${card.glowColor} shadow-xl`}
                            >
                              <div className="group-hover:animate-bounce">
                                {card.icon}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center space-x-3">
                                <span
                                  className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${card.color} text-white rounded-full`}
                                >
                                  STEP {card.id}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900">
                                {card.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-base">
                                {card.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:hidden grid grid-cols-1 gap-4">
              {processCards.map(
                ({
                  id,
                  icon,
                  title,
                  description,
                  color,
                  bgColor,
                  glowColor,
                }) => (
                  <div
                    key={title}
                    className={`shadow-md p-4 rounded-[10px] flex flex-col items-center gap-2 ${glowColor} border border-slate-200`}
                  >
                    <div
                      className={`p-2 bg-gradient-to-r ${color} rounded-[10px] text-white`}
                    >
                      {icon}
                    </div>
                    <div
                      className={`rounded-full px-3 py-1 bg-gradient-to-r ${color} text-white font-bold text-xs`}
                    >
                      STEP {id}
                    </div>
                    <h1 className={`text-xl font-bold text-slate-900`}>
                      {title}
                    </h1>
                    <p className={`text-center text-slate-600 text-sm`}>
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section> */}
        {/* FAQ section */}
        <section className="py-10 pt-8 sm:pt-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center py-2 px-3 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-green-100 to-primary-blue-100 rounded-full text-primary-green-700 font-semibold mb-6 text-sm sm:text-base">
                <Lightbulb className="size-4 sm:size-5 mr-2" />
                FAQ
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              {/* <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Find answers to common questions about our career coaching
                services, psychological assessments, and career discovery
                process.
              </p> */}
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-6">
                {[
                  {
                    question: "How long does the program last?",
                    answer:
                      "The full journey takes place in four weeks, designed to give you time for reflection, exploration, and planning.",
                  },
                  {
                    question: "Who leads the sessions?",
                    answer:
                      "You’ll be guided by Coaches who are trained psychologists. They help you explore your interests, strengths, and through sessions, activities and assessments.",
                  },
                  {
                    question: "What kind of activities are included?",
                    answer:
                      "Expect conversations in sessions, simple questions about yourself in assessments and engaging and reflective activities.",
                  },
                  {
                    question: "Is this conducted online or in person?",
                    answer:
                      "The entire journey is online, making it convenient to participate from anywhere.",
                  },
                  {
                    question: "Can I experience a session first?",
                    answer:
                      "Yes! You can schedule a free first session to get a feel for the journey before committing. Book a Free Session",
                  },
                  {
                    question:
                      "Do the Coaches offer advice or tell me exactly what to do?",
                    answer:
                      "No. Instead of giving direct advice, coaches direct you and help you discover by yourself. All resources and tools are made available for you to explore and build positive habits.",
                  },
                  {
                    question:
                      "Is this helpful for students or working professionals?",
                    answer:
                      "Absolutely, all ages benefit. Whether you're finishing school or you’re a working professional or planning your next career move, the journey supports anyone seeking clarity.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-[10px] sm:rounded-xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 sm:px-8 sm:py-6 text-left hover:no-underline group hover:bg-gradient-to-r hover:from-primary-green-50 hover:to-primary-blue-50 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <span className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-primary-green-600 transition-colors">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 sm:px-8 sm:pb-6 text-gray-600 text-base font-semibold leading-snug">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        {/* final CTA + enquiry Form */}
        {/* <section
          id="enquiry"
          className="py-10 bg-gradient-to-br from-gray-900 via-primary-blue-900 to-primary-green-900 relative overflow-hidden"
        >

          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium">
                    <Rocket className="w-4 h-4 mr-2" />
                    Ready to Transform?
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold sm:leading-tight">
                    Discover Your{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Dream Career
                    </span>{" "}
                    Today
                  </h2>
                  <p className="text-base sm:text-xl text-white/90 sm:leading-relaxed">
                    Join thousands of individuals who have already discovered
                    their perfect career path through our comprehensive
                    psychological assessments and personalized guidance.
                    Let&apos;s unlock your true potential and find the career
                    that aligns with who you really are.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-[10px] flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">
                          Call us directly
                        </p>
                        <p className="text-white font-semibold">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-[10px] flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Email us</p>
                        <p className="text-white font-semibold">
                          careers@inwesol.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { number: "5000+", label: "Careers Matched" },
                      { number: "97%", label: "Satisfaction Rate" },
                      { number: "24/7", label: "Support Available" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center bg-white/10 backdrop-blur-sm rounded-[10px] p-3"
                      >
                        <p className="text-2xl font-bold text-white">
                          {stat.number}
                        </p>
                        <p className="text-white/70 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </section> */}

        {/* final CTA */}
        <section className="w-full bg-[#F8F4EB] py-10 md:py-14 flex flex-col items-center gap-5 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-4 ">
              Take a Step Towards Self-Discovery
            </h2>
            <p className="tetx-base sm:text-xl text-slate-600 mb-4 sm:mb-6">
              Gain clarity, manage stress and take confident actions.
            </p>
            {/* <p className="text-sm sm:text-lg text-slate-600 mb-4 sm:mb-6">
              Start your free trial today - no credit card required
            </p> */}

            <div className="flex justify-center pb-4">
              <ScrollToEnquiryButton />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
