import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  MessageCircle,
  Heart,
  Lightbulb,
  Star,
  Zap,
  Globe,
  UserPlus,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Smile,
  HandHeart,
  GraduationCap,
  TrendingUp,
  Shield,
  Network,
} from "lucide-react";
import { Footer, Navbar } from "@/components";
import ScrollToEnquiryButton from "../school/ScrollToEnquiryButton";
import EnquireyForm from "../school/EnquiryForm";
export default function CommunityPage() {
  const benefits = [
    {
      icon: <Users className="size-6 sm:size-8" />,
      title: "Peer Network",
      description:
        "Connect with like-minded students who share your goals, challenges, and aspirations for mutual growth and support.",
      color: "from-primary-green-500 to-primary-green-600",
      bgColor: "bg-primary-green-50",
    },
    {
      icon: <GraduationCap className="size-6 sm:size-8" />,
      title: "Expert Mentors",
      description:
        "Get guidance from experienced professionals and educators who provide real-world insights and career advice.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
    },
    {
      icon: <MessageCircle className="size-6 sm:size-8" />,
      title: "Open Discussions",
      description:
        "Participate in meaningful conversations, ask questions freely, and share your experiences in a safe space.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Lightbulb className="size-6 sm:size-8" />,
      title: "Knowledge Sharing",
      description:
        "Learn from diverse perspectives and collective wisdom as members share their unique experiences and insights.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Heart className="size-6 sm:size-8" />,
      title: "Emotional Support",
      description:
        "Find encouragement and understanding from a community that truly gets what you're going through.",
      color: "from-primary-green-500 to-primary-green-600",
      bgColor: "bg-primary-green-50",
    },
    {
      icon: <Award className="size-6 sm:size-8" />,
      title: "Celebrate Wins",
      description:
        "Share your achievements, big or small, with people who genuinely celebrate your success and progress.",
      color: "from-primary-blue-500 to-primary-blue-600",
      bgColor: "bg-primary-blue-50",
    },
  ];

  const communityFeatures = [
    {
      title: "Safe & Supportive Space",
      description:
        "A welcoming environment where every voice matters and everyone feels valued and respected.",
      icon: <Shield className="size-12" />,
      stats: "100% Safe",
      gradient: "from-primary-blue-500 to-primary-green-500",
    },
    {
      title: "Active Engagement",
      description:
        "Daily discussions, weekly events, and monthly workshops keep the community vibrant and engaged.",
      icon: <Network className="size-12" />,
      stats: "24/7 Active",
      gradient: "from-primary-green-500 to-primary-blue-500",
    },
    {
      title: "Real Connections",
      description:
        "Build meaningful relationships that extend beyond online interactions into lasting friendships.",
      icon: <HandHeart className="size-12" />,
      stats: "10K+ Members",
      gradient: "from-purple-500 to-primary-blue-500",
    },
  ];

  const testimonials = [
    {
      quote:
        "This community changed my perspective on learning. I'm no longer afraid to ask questions or share my struggles.",
      author: "Priya S.",
      role: "Grade 11 Student",
      avatar: "bg-primary-blue-500",
    },
    {
      quote:
        "The mentors here provide practical advice that actually works. I found my career direction through their guidance.",
      author: "Rahul M.",
      role: "Grade 12 Student",
      avatar: "bg-primary-green-500",
    },
    {
      quote:
        "I found my study group here and we motivate each other daily. It's like having a second family.",
      author: "Anjali K.",
      role: "Grade 10 Student",
      avatar: "bg-purple-500",
    },
  ];

  const communityValues = [
    {
      value: "Inclusivity",
      description: "Everyone belongs here, regardless of background or experience",
      icon: <Globe className="size-6" />,
    },
    {
      value: "Respect",
      description: "We honor diverse perspectives and treat each other with kindness",
      icon: <Heart className="size-6" />,
    },
    {
      value: "Growth",
      description: "We celebrate learning from mistakes and continuous improvement",
      icon: <TrendingUp className="size-6" />,
    },
    {
      value: "Authenticity",
      description: "Be yourself and share your true thoughts and feelings",
      icon: <Smile className="size-6" />,
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
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-600 via-primary-green-500 to-primary-blue-400">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

            {/* Floating Elements */}
            <div className="absolute top-32 left-20 w-48 h-48 bg-primary-green-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-32 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary-blue-300/30 rounded-full blur-xl"></div>
          </div>

          <div className="relative container mx-auto px-4 lg:px-8 z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    <Users className="size-4 mr-2" />
                    Join 10,000+ Students
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                    You&apos;re Not{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Alone
                    </span>{" "}
                    in This Journey
                  </h1>

                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                    Community connects you with peers, mentors, and educators who understand your challenges. Get support, guidance, and inspiration as you navigate your educational journey together.
                  </p>
                </div>

                <ScrollToEnquiryButton />

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { icon: <Users className="size-5" />, label: "Active Members" },
                    { icon: <MessageCircle className="size-5" />, label: "Daily Discussions" },
                    { icon: <Star className="size-5" />, label: "Expert Mentors" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20"
                    >
                      <div className="flex justify-center text-white mb-1">
                        {item.icon}
                      </div>
                      <p className="text-white/80 text-xs">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-blue-500 to-primary-green-500 rounded-full flex items-center justify-center">
                        <Users className="size-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">Welcome Message</p>
                        <p className="text-white/70 text-sm">
                          You just joined the community!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-primary-blue-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="size-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">New Discussion</p>
                        <p className="text-white/70 text-sm">
                          &quot;How to manage exam stress?&quot;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-primary-green-500 rounded-full flex items-center justify-center">
                        <Heart className="size-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">Support Received</p>
                        <p className="text-white/70 text-sm">
                          5 members offered advice
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-10 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center py-2 px-3 sm:py-3 sm:px-6 bg-gradient-to-r from-primary-blue-100 to-primary-green-100 rounded-full text-primary-blue-700 font-semibold mb-6 text-sm sm:text-base">
                <Zap className="size-4 sm:size-5 mr-2" />
                Community Benefits
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Why Join Our{" "}
                <span className="bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the power of connection, support, and shared learning in a space designed for student success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white rounded-xl sm:rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-primary-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Features - Large Cards */}
        <section className="py-10 sm:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                What Makes Us{" "}
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Special
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {communityFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div
                      className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-all duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div className="space-y-3">
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${feature.gradient} text-white rounded-full text-sm font-bold`}>
                        {feature.stats}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Values */}
        <section className="py-10 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center py-2 px-3 sm:py-3 sm:px-6 bg-gradient-to-r from-primary-green-100 to-primary-blue-100 rounded-full text-primary-green-700 font-semibold mb-6 text-sm sm:text-base">
                <Star className="size-4 sm:size-5 mr-2" />
                Our Values
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Built on{" "}
                <span className="bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
                  Strong Principles
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {communityValues.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white rounded-xl"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-primary-blue-500 to-primary-green-500 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.value}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-10 sm:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                What Our{" "}
                <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Members Say
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl"
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="text-gray-600 italic leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-bold`}>
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
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
                    question: "How do I join the community?",
                    answer:
                      "Simply fill out the enquiry form below and we'll send you an invitation to join our community platform. Once you're in, you can immediately start connecting with peers and mentors.",
                  },
                  {
                    question: "Is the community moderated and safe?",
                    answer:
                      "Yes, absolutely! Our community is actively moderated by trained professionals who ensure a safe, respectful environment. We have strict guidelines against bullying, harassment, or any inappropriate behavior.",
                  },
                  {
                    question: "What kind of activities happen in the community?",
                    answer:
                      "We host daily discussions, weekly mentorship sessions, monthly workshops, study groups, and special events. Members also organize peer support groups and career exploration activities.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-[10px] sm:rounded-xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 sm:px-8 sm:py-6 text-left hover:no-underline group hover:bg-gradient-to-r hover:from-primary-blue-50 hover:to-primary-green-50 transition-all duration-300">
                      <span className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-primary-blue-600 transition-colors">
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
          className="py-10 sm:py-20 bg-gradient-to-br from-gray-900 via-primary-green-900 to-primary-blue-900 relative overflow-hidden"
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
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join Today
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Become Part of{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Something Amazing
                    </span>
                  </h2>

                  <p className="text-base sm:text-xl text-white/90 leading-relaxed">
                    Join our thriving community of students, mentors, and educators. Experience the support and guidance that helps you succeed.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Users className="size-5" />, label: "10,000+ Active Members" },
                    { icon: <MessageCircle className="size-5" />, label: "Daily Support" },
                    { icon: <Heart className="size-5" />, label: "Safe Environment" },
                    { icon: <Star className="size-5" />, label: "Expert Guidance" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="text-white">
                        {item.icon}
                      </div>
                      <span className="text-white font-medium text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
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