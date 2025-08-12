import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Shield,
  Clock,
  Trophy,
  Download,
  ArrowRight,
  BrainCog,
  Activity,
  GraduationCap,
  CircleCheck,
  DownloadCloudIcon,
  Handshake,
} from "lucide-react";
import { Footer, Navbar } from "@/components";
import CoachCTAButton from "./CoachCTAButton";
import CoachFAQAccordion from "./CoachFAQAccordion";

const infoCardItems = [
  {
    icon: CircleCheck,
    title: "Smart Dashboard",
    description:
      "CoCo helps you pause, reflect, and think clearly through life and career decisions. With a thoughtful coaching approach, CoCo guides you to your own answers - with clarity and confidence.",
  },
  {
    icon: GraduationCap,
    title: "Automated Communication",
    description:
      "From course information to career paths, CoCo gives you information from reliable sources. Ask anything, CoCo is here to guide, not judge.",
  },
  {
    icon: Activity,
    title: "AI-Powered reports",
    description:
      "CoCo supports you in managing your priorities and wellbeing. Because your wellbeing matters just as much as your next big step. It gently connects you to a human coach.",
  },
  {
    icon: BrainCog,
    title: "Mobile First Platform",
    description:
      "CoCo is brought to you by blending the science of psychology with the power of AI, designed to listen with empathy, respond with compassion, while protecting your privacy every step of the way. And when you need deeper support.",
  },
];

const workingSteps = [
  {
    step: "Get Onboarded",
    description:
      "Complete our streamlined application process. We will review your credentials and match you with our quality standards.",
  },
  {
    step: "Receive Training",
    description:
      "Participate in our comprehensive training program covering our platform, best practices, and advanced coaching techniques.",
  },
  {
    step: "Start Coaching",
    description:
      "Begin your coaching sessions with matched clients. Our system handles scheduling, payments, and administrative tasks automatically.",
  },
];
export default function CoachingPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-primary-green-50 to primary-blue-50 p-3 sm:p-5">
        {/* hero section */}
        <section
          className="flex max-w-6xl mx-auto justify-center items-center"
          style={{ minHeight: "calc(100vh - 70px)" }}
        >
          <div className="flex-col flex gap-10 lg:gap-4 lg:items-center lg:flex-row">
            <div className="">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green-600 to-primary-blue-600">
                  Ignite your Impact.
                </p>
                <p>Become a Coach with Inwesol</p>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-2 mb-6">
                Deliver impact-driven career coaching using our proven framework
                and tools. Work flexibly, grow professionally.
              </p>
              <CoachCTAButton buttonText="Apply as a Coach" icon={Handshake} />
            </div>
            <div className="">
              <video
                src="/assets/coco.mp4"
                className="rounded-xl shadow-lg max-w-full h-auto max-h-[800px] border border-gray-200"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>
        </section>
        {/* features section */}
        <section className="mt-14 sm:mt-20">
          <div className="max-w-6xl mx-auto">
            <div>
              <div className="text-center mb-6 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Everything You Need to{" "}
                  <span className="text-primary-green-600">Succeed</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center">
                  Comprehensive tools and insights to elevate your coaching
                  practice
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
                {infoCardItems.map(({ icon: Icon, title, description }, i) => (
                  // Card
                  <div
                    key={i}
                    className="bg-white shadow-lg rounded-xl p-6 sm:p-8 flex flex-col items-center space-y-3 sm:space-y-4 border-primary-green-400 border hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="sm:p-4 p-3 bg-gradient-to-r from-primary-green-50 to-primary-blue-50 text-primary-green-600 rounded-full">
                      <Icon className="size-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-center">{title}</h2>
                    <p className="text-sm sm:text-base text-slate-600 text-center">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* how it works section */}
        <section className="mt-14 sm:mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center">
                How It <span className="text-primary-blue-600">Works?</span>
              </h1>
              <p className="text-center text-slate-600 sm:text-base text-sm mt-4">
                Get started in three simple steps and transform your coaching
                practice
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {workingSteps.map(({ step, description }, index) => (
                // card
                <div
                  className="bg-white rounded-xl shadow-md flex flex-col hoer:shadow-xl hover:scale-105 transition-all duration-300 p-6 sm:p-8 items-center"
                  key={step}
                >
                  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-primary-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-3xl shadow-primary-blue-200 shadow-md">
                    {index + 1}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-4 text-center">
                    {step}
                  </h2>
                  <p className="text-slate-600 sm:text-base text-sm mt-2 sm:mt-4 text-center">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* why choose inwesol section */}
        <section className="mt-14 sm:mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center">
                Why Choose{" "}
                <span className="text-primary-green-600">Inwesol?</span>
              </h1>
              <p className="text-center text-slate-600 sm:text-base text-sm mt-4 lg:text-lg">
                Join thousands of coaches who trust Inwesol to elevate their
                practice
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary-blue-50 to-white rounded-xl">
                <CardHeader className="pb-2 sm:pb-6 space-y-1 sm:space-y-1.5">
                  <div className="w-16 h-16 bg-primary-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary-blue-900">
                    Secure & Reliable
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Enterprise-grade security with 99.9% uptime guarantee. Your
                    data and your clients' information are always protected with
                    industry-leading encryption.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary-green-50 to-white rounded-xl">
                <CardHeader className="pb-2 sm:pb-6 space-y-1 sm:space-y-1.5">
                  <div className="w-16 h-16 bg-primary-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary-green-900">
                    Save Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Automate repetitive tasks and focus on what matters most -
                    coaching your clients. Save up to 10 hours per week with our
                    intelligent automation tools.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary-blue-50 to-white rounded-xl">
                <CardHeader className="pb-2 sm:pb-6 space-y-1 sm:space-y-1.5">
                  <div className="w-16 h-16 bg-primary-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary-blue-900">
                    Proven Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Coaches using Inwesol report 40% better client outcomes and
                    60% increase in client retention. Join the success stories
                    of thousands of satisfied coaches.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* downloadable guide section */}
        <section className="mt-14 sm:mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="w-12 h-12 sm:w-20 sm:h-20 bg-primary-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Download className="size-6 sm:size-10 text-primary-green-600" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Free Coach's Success Guide
              </h2>
              <p className="text-base sm:text-xl text-gray-600 mb-8">
                Download our comprehensive guide packed with proven strategies,
                best practices, and actionable insights to accelerate your
                coaching success.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Client Acquisition
                    </h4>
                    <p className="text-sm text-gray-600">
                      Proven methods to attract ideal clients
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Retention Strategies
                    </h4>
                    <p className="text-sm text-gray-600">
                      Keep clients engaged and committed
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Scaling Your Practice
                    </h4>
                    <p className="text-sm text-gray-600">
                      Grow your coaching business efficiently
                    </p>
                  </div>
                </div>
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
          </div>
        </section>

        <section className="mt-14 sm:mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-4 ">
              Ready to Transform Your Coaching Practice?
            </h2>
            <p className="tetx-base sm:text-xl text-slate-600 mb-4 sm:mb-6">
              Join thousands of successful coaches who have already elevated
              their practice with Inwesol
            </p>
            <p className="text-sm sm:text-lg text-slate-600 mb-4 sm:mb-6">
              Start your free trial today - no credit card required
            </p>

            <div className="flex justify-center">
              <CoachCTAButton
                buttonText="Apply Now - It's Free"
                icon={Handshake}
              />
            </div>
          </div>
        </section>

        <section className="mt-14 sm:mt-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 text-center">
              Frequently Asked{" "}
              <span className="text-primary-green-600">Questions</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-center mb-4 sm:mb-6">
              Find answers to common questions about CoCo and how it can support
              your career journey
            </p>
            <CoachFAQAccordion />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
