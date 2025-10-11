import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BarChart3,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  Search,
  Phone,
  Mail,
  Zap,
  Rocket,
  Compass,
  Network,
  HandHeart,
  Repeat,
  ClipboardCheck,
} from "lucide-react";
import { Footer, Navbar } from "@/components";
import ScrollToEnquiryButton from "./ScrollToEnquiryButton";
import EnquireyForm from "./EnquiryForm";
import Image from "next/image";

export default function SchoolsPage() {
  const processCards = [
    {
      id: 1,
      icon: <Search className="size-8" />,
      title: "Identify",
      description:
        "Assess student needs, strengths, and challenges along with school-level gaps to map opportunities for building a learning mindset ecosystem.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
      glowColor: "shadow-primary-blue-500/25",
    },
    {
      id: 2,
      icon: <TrendingUp className="size-8" />,
      title: "Empower",
      description:
        "Build awareness and skills in students, teachers, and parents to foster confidence and a learning mindset.",
      color: "from-primary-green-500 to-primary-green-600",
      bgColor: "bg-primary-green-50",
      glowColor: "shadow-primary-green-500/25",
    },
    {
      id: 3,
      icon: <HandHeart className="size-8" />,
      title: "Intervene",
      description:
        "Introduce personalised programs, coaching, and action plans to address gaps and drive positive behaviour change.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
      glowColor: "shadow-primary-blue-500/25",
    },
    {
      id: 4,
      icon: <Repeat className="size-8" />,
      title: "Sustain",
      description:
        "Embed learning mindset practices into daily routines, classrooms, and school culture for long-term impact.",
      color: "from-primary-green-500 to-primary-green-600",
      bgColor: "bg-primary-green-50",
      glowColor: "shadow-primary-green-500/25",
    },
    {
      id: 5,
      icon: <ClipboardCheck className="size-8" />,
      title: "Evaluate",
      description:
        "Use data-driven insights to measure progress, refine strategies, and ensure continuous improvement.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
      glowColor: "shadow-primary-blue-500/25",
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-700 via-primary-blue-500 to-primary-green-400">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

            {/* floating elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-green-400/20 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-blue-300/30 rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto p-4 pb-10 lg:p-8 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`space-y-8 
                }`}
              >
                <div className="space-y-6">
                  {/* <div className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
                    <Sparkles className="size-4 mr-2" />
                    Transforming Education Since 2020
                  </div> */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.15] sm:leading-tight text-white">
                    Build a <br />
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Learning Mindset
                    </span>{" "}
                    Ecosystem in Your School
                  </h1>
                  <p className="text-base sm:text-xl text-white leading-snug sm:leading-relaxed font-light">
                    We combine psychology, technology, and community to nurture
                    adolescents to be future-ready. With our personalised &
                    holistic approach, students develop a learning mindset to
                    manage stress, gain career clarity, and take confident
                    actions. This leads to stronger academic, personal and
                    social growth.
                  </p>
                </div>
                <ScrollToEnquiryButton />
              </div>

              <div className="relative">
                <Image
                  src="/school-campus.svg"
                  alt="Think Different"
                  width={1200}
                  height={800}
                  // fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* <div
                className={`relative transform transition-all duration-1000 delay-300`}
              >
                <div className="relative">
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

                  Floating Cards
                  <div className="absolute -left-2 -top-8 lg:-left-8 bg-white/90 backdrop-blur-sm rounded-[10px] p-2 shadow-xl animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-green-500 to-primary-green-600 rounded-[10px] flex items-center justify-center">
                        <Trophy className="size-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">500+</p>
                        <p className="text-xs text-gray-600">
                          Schools Transformed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-2 -bottom-8 lg:-right-8 bg-white/90 backdrop-blur-sm rounded-[10px] p-2 shadow-xl animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-blue-500 to-primary-blue-600 rounded-[10px] flex items-center justify-center">
                        <TrendingUp className="size-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">95%</p>
                        <p className="text-xs text-gray-600">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Personalised & Holistic
                </span>{" "}
                Solution
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our science-backed, integrated approach empowers students,
                parents, and schools to create a learning mindset ecosystem that
                drives lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                {
                  icon: <Compass className="size-5 sm:size-8" />,
                  title: "Student Self-Discovery Journey",
                  description:
                    "Guided program that helps students understand their strengths and abilities, bring behaviour change and create an action plan to achieve their goals.",
                  color: "from-primary-blue-500 to-primary-blue-600",
                  bgColor: "bg-primary-blue-50",
                },
                {
                  icon: <GraduationCap className="size-5 sm:size-8" />,
                  title: "Teacher & Parents Training",
                  description:
                    "Workshops and resources that strengthen the role of educators and parents in nurturing students to be future-ready.",
                  color: "from-primary-green-500 to-primary-green-600",
                  bgColor: "bg-primary-green-50",
                },
                {
                  icon: <BarChart3 className="size-5 sm:size-8" />,
                  title: "Data-Driven Student Insights",
                  description:
                    "Powerful insights that track progress, highlight concerns, and ensure holistic student development.",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                },
                {
                  icon: <Network className="size-5 sm:size-8" />,
                  title: "School-wide Ecosystem Development",
                  description:
                    "Structured frameworks and best practices that enable a culture of learning mindset in the school to transform student outcomes.",
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
                      Educational Excellence Guide
                    </h2>
                    <p className="text-sm sm:text-base text-white leading-snug sm:leading-relaxed">
                      Download our comprehensive 50-page guide packed with
                      actionable strategies, best practices, and proven
                      methodologies to transform your educational institution.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Lightbulb className="size-4 sm:size-5" />,
                        text: "Modern Teaching Methods",
                      },
                      {
                        icon: <Users className="size-4 sm:size-5" />,
                        text: "Student Engagement",
                      },
                      {
                        icon: <Target className="size-4 sm:size-5" />,
                        text: "Performance Metrics",
                      },
                      {
                        icon: <Rocket className="size-4 sm:size-5" />,
                        text: "Implementation Plans",
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
                          "50+ pages of expert insights",
                          "Real case studies & examples",
                          "Step-by-step implementation",
                          "Measurement frameworks",
                          "Technology integration tips",
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
        <section className="py-10 bg-gradient-to-b from-white to-gray-50 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center py-2 px-3 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-green-100 to-primary-blue-100 rounded-full text-primary-blue-700 font-semibold mb-6 text-sm sm:text-base">
                <Zap className="size-4 sm:size-5 mr-2" />
                Our Process
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Pathway to{" "}
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Transform Student Outcomes
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Enabling a school with learning mindset ecosystem based on a
                scientific approach that drives measurable academic, personal,
                and social growth of students.
              </p>
            </div>

            {/* Desktop Alternating Timeline View */}
            <div className="hidden md:block">
              <div className="relative max-w-6xl mx-auto">
                {/* Animated Flowing Line */}
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
                      {/* Step Number Badge */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center text-white font-bold text-xl shadow-2xl ${card.glowColor} border-4 border-white group-hover:scale-110 transition-all duration-500`}
                        >
                          {card.id}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className={`w-5/12 `}>
                        <Card
                          className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-xl hover:-translate-y-3 bg-white/90 backdrop-blur-sm hover:bg-white ${card.glowColor} hover:shadow-2xl rounded-xl`}
                        >
                          <CardContent className="p-6">
                            {/* Floating Icon */}
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

            {/* mobile screen view */}
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
        </section>

        {/* FAQ section */}
        <section className="py-10 pt-0 sm:pt-10 bg-gradient-to-b from-gray-50 to-white">
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
              <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Find answers to common questions about our solutions and
                transformation process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-6">
                {[
                  {
                    question:
                      "How is this different from traditional programs offered in schools?",
                    answer:
                      "Beyond exam preparation and one-time workshops, this is a science-backed ecosystem approach. It focuses on self-discovery, mindset development, and overall growth of students, ensuring long-term impact beyond academics.",
                  },
                  {
                    question: "What measurable outcomes can schools expect?",
                    answer:
                      "Schools see improvements in student well-being, better career clarity, and confident decision making. Over time, this leads to higher student performance and a stronger academic edge for the school.",
                  },
                  {
                    question:
                      "How much effort is required from our teachers and staff?",
                    answer:
                      "We provide structured frameworks, training, and ready-to-use tools so teachers and staff can easily adopt the program without adding extra workload. Our model is designed to support schools, not burden them.",
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
                    <AccordionContent className="px-4 py-3 sm:px-8 sm:py-6 text-gray-600 font-semibold text-base leading-snug">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* final CTA + enquiry Form */}
        <section
          id="enquiry"
          className="py-10 bg-gradient-to-br from-gray-900 via-primary-blue-900 to-primary-green-900 relative overflow-hidden"
        >
          {/* background pattern */}
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
                    Together, Let&apos;s Make Students{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Future-Ready
                    </span>
                  </h2>
                  <p className="text-base sm:text-xl text-white/90 sm:leading-relaxed">
                    Join us in cultivating a learning mindset in students.
                    Together, we can create an ecosystem where every student
                    aspires for excellence.
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
                          (+91) 8374315189
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
                          contact@inwesol.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="space-y-4">
                    {[
                      { number: "500+", label: "Schools Transformed" },
                      { number: "95%", label: "Success Rate" },
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
                  </div> */}
                </div>
              </div>

              {/* enquiry form */}
              <EnquireyForm />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
