"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Target,
  Brain,
  TrendingUp,
  CheckCircle,
  Zap,
  Calendar,
  BarChart3,
  Compass,
  Focus,
  LineChart,
  ListChecks,
  Sparkles,
  ArrowRight,
  Clock,
  Trophy,
  Activity,
} from "lucide-react";
import { Footer, Navbar } from "@/components";
import ScrollToEnquiryButton from "../school/ScrollToEnquiryButton";
import EnquireyForm from "../school/EnquiryForm";

export default function BehavioralToolsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <Target className="size-6 sm:size-8" />,
      title: "Goal Tracking",
      description:
        "Set and monitor daily, weekly, and monthly goals with visual progress indicators to stay motivated.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
    },
    {
      icon: <Brain className="size-6 sm:size-8" />,
      title: "Mindfulness Exercises",
      description:
        "Access guided activities designed to help you stay calm, centered, and present throughout your day.",
      color: "from-primary-green-500 to-primary-green-600",
      bgColor: "bg-primary-green-50",
    },
    {
      icon: <BarChart3 className="size-6 sm:size-8" />,
      title: "Progress Analytics",
      description:
        "Visualize your growth with comprehensive dashboards that track behavioral patterns and improvements.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Calendar className="size-6 sm:size-8" />,
      title: "Daily Routines",
      description:
        "Build productive habits with customizable daily planners and routine builders tailored to your lifestyle.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Compass className="size-6 sm:size-8" />,
      title: "Career Strategy Library",
      description:
        "Learn proven strategies and techniques to advance your career and make informed professional decisions.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
    },
    {
      icon: <Focus className="size-6 sm:size-8" />,
      title: "Focus Enhancers",
      description:
        "Utilize scientifically-backed tools and techniques to improve concentration and maintain productivity.",
      color: "from-primary-green-500 to-primary-green-600",
      bgColor: "bg-primary-green-50",
    },
  ];

  const journeySteps = [
    {
      phase: "Discover",
      description: "Identify your current patterns and areas for growth",
      icon: <Compass className="size-5" />,
      color: "from-primary-blue-500 to-primary-blue-600",
    },
    {
      phase: "Build",
      description: "Establish positive habits and productive routines",
      icon: <TrendingUp className="size-5" />,
      color: "from-primary-green-500 to-primary-green-600",
    },
    {
      phase: "Sustain",
      description: "Maintain progress with ongoing support and tracking",
      icon: <CheckCircle className="size-5" />,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const toolCategories = [
    {
      name: "Productivity Tools",
      tools: ["Task Manager", "Time Blocker", "Priority Matrix", "Focus Timer"],
      icon: <ListChecks className="size-6" />,
    },
    {
      name: "Wellness Tools",
      tools: ["Mood Tracker", "Stress Monitor", "Sleep Logger", "Energy Check"],
      icon: <Activity className="size-6" />,
    },
    {
      name: "Growth Tools",
      tools: ["Skill Tracker", "Goal Planner", "Reflection Journal", "Win Log"],
      icon: <Trophy className="size-6" />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white overflow-hidden">
        {/* Hero Section */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ minHeight: "calc(100vh - 56px)" }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green-600 via-primary-blue-500 to-primary-green-400">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 left-16 w-56 h-56 bg-primary-blue-300/20 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-primary-green-300/30 rounded-full blur-xl animate-pulse"></div>
          </div>

          <div className="relative container mx-auto px-4 lg:px-8 z-10 py-20">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                <Sparkles className="size-4 mr-2" />
                Transform Your Daily Habits
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
                Behavioral{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Tools
                </span>{" "}
                for Growth
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
                Stay productive, focused, and on track with science-backed tools designed for behavioral change. Support your self-discovery journey and accelerate your career progress.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <ScrollToEnquiryButton />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 max-w-3xl mx-auto">
                {[
                  { number: "15+", label: "Behavioral Tools" },
                  { number: "95%", label: "User Success Rate" },
                  { number: "24/7", label: "Progress Tracking" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20"
                  >
                    <p className="text-2xl sm:text-4xl font-bold text-white">{stat.number}</p>
                    <p className="text-white/80 text-xs sm:text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-10 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center py-2 px-3 sm:py-3 sm:px-6 bg-gradient-to-r from-primary-green-100 to-primary-blue-100 rounded-full text-primary-blue-700 font-semibold mb-6 text-sm sm:text-base">
                <Zap className="size-4 sm:size-5 mr-2" />
                Comprehensive Toolkit
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Everything You Need to{" "}
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Succeed
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Our behavioral tools are designed to support you at every stage of your personal and professional development journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white rounded-xl sm:rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-primary-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-10 sm:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center py-2 px-3 sm:py-3 sm:px-6 bg-gradient-to-r from-primary-blue-100 to-primary-green-100 rounded-full text-primary-green-700 font-semibold mb-6 text-sm sm:text-base">
                <Clock className="size-4 sm:size-5 mr-2" />
                Your Journey
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Three Phases to{" "}
                <span className="bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
                  Transform
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Our structured approach ensures lasting behavioral change through continuous support and measurable progress.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-2xl`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {step.phase}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Categories */}
        <section className="py-10 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Explore Our{" "}
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Tool Categories
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {toolCategories.map((category, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white rounded-xl sm:rounded-2xl"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-blue-500 to-primary-green-500 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                      {category.name}
                    </h3>
                    <ul className="space-y-3">
                      {category.tools.map((tool, idx) => (
                        <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                          <CheckCircle className="size-4 sm:size-5 text-primary-green-600 mr-3 flex-shrink-0" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 sm:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-6">
                {[
                  {
                    question: "How do behavioral tools help with productivity?",
                    answer:
                      "Our tools use evidence-based techniques to help you build sustainable habits, manage time effectively, and maintain focus throughout your day. By tracking patterns and providing insights, you can optimize your workflow and achieve more with less stress.",
                  },
                  {
                    question: "Can I customize the tools to fit my needs?",
                    answer:
                      "Absolutely! All our tools are highly customizable. You can adjust settings, create personalized routines, and configure tracking parameters to match your unique goals and lifestyle preferences.",
                  },
                  {
                    question: "How long does it take to see results?",
                    answer:
                      "Most users report noticeable improvements in focus and productivity within 2-3 weeks of consistent use. However, lasting behavioral change typically develops over 8-12 weeks as new habits become ingrained.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-[10px] sm:rounded-xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 sm:px-8 sm:py-6 text-left hover:no-underline group hover:bg-gradient-to-r hover:from-primary-green-50 hover:to-primary-blue-50 transition-all duration-300">
                      <span className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-primary-green-600 transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 sm:px-8 sm:py-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section with Enquiry Form */}
        <section
          id="enquiry"
          className="py-10 sm:py-20 bg-gradient-to-br from-gray-900 via-primary-blue-900 to-primary-green-900 relative overflow-hidden"
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
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="text-white space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Ready to Transform?
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Start Your Journey to{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Better Habits
                    </span>
                  </h2>
                  
                  <p className="text-base sm:text-xl text-white/90 leading-relaxed">
                    Join thousands of users who have transformed their lives with our behavioral tools. Start building the habits that lead to lasting success.
                  </p>
                </div>
              </div>

              {/* Enquiry Form */}
              <EnquireyForm />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}