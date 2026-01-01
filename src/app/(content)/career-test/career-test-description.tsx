"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info, CheckCircle2, Clock, FileText, Download } from "lucide-react";
import { AnimationContainer } from "@/components";

const CareerTestDescription: React.FC = () => {
  const router = useRouter();
  const [isFirstPopoverOpen, setIsFirstPopoverOpen] = useState(false);
  const [isSecondPopoverOpen, setIsSecondPopoverOpen] = useState(false);

  const handleStartAssessment = (): void => {
    router.push("/career-test/questionnaire");
  };

  const handleStartAssessment2 = (): void => {
    router.push("/career-test/PYDI");
  };

  return (
    <div className="w-full">
      <AnimationContainer delay={0.2}>
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
            Teenagers&apos; Guide to{" "}
            <span className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
              Future Readiness
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover how ready you are for life after school. Understand your
            strengths and readiness for the future.
          </p>
        </div>
      </AnimationContainer>

      {/* Assessment Cards */}
      <div className="flex flex-col gap-8 lg:gap-10 items-center lg:flex-row lg:justify-center lg:items-stretch">
        <AnimationContainer delay={0.3}>
          <Card className="w-full max-w-[720px] overflow-hidden bg-white border-2 border-gray-200 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader className="text-center relative pb-8">
              <Popover
                open={isFirstPopoverOpen}
                onOpenChange={setIsFirstPopoverOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 h-9 w-9 rounded-full hover:bg-white/80 backdrop-blur-sm transition-all"
                    onMouseEnter={() => setIsFirstPopoverOpen(true)}
                    onMouseLeave={() => setIsFirstPopoverOpen(false)}
                  >
                    <Info className="h-5 w-5 text-gray-600" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-80 sm:w-96 p-0 bg-white shadow-xl rounded-xl"
                  align="end"
                  onMouseEnter={() => setIsFirstPopoverOpen(true)}
                  onMouseLeave={() => setIsFirstPopoverOpen(false)}
                >
                  <div className="grid gap-6 p-6 text-sm text-gray-700 md:text-base">
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-primary-green-600">
                        What is Career Maturity?
                      </h3>
                      <p>
                        Career maturity is your ability to make informed,
                        confident, and well-prepared decisions about your future
                        career. It reflects how ready you are to explore
                        options, plan ahead, seek guidance, and take ownership
                        of your career path.
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <h3 className="mb-2 text-lg font-semibold text-primary-green-600">
                        What does this test assess?
                      </h3>
                      <p>
                        Career maturity test is developed by Mark L. Savickas,
                        explores how individuals develop readiness to make
                        informed and appropriate career decisions.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary-green-600 mb-3">
                Check Future Readiness
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 md:text-base leading-relaxed">
                Understand your future readiness with the Career Maturity Test.{" "}
                See how prepared you are for career decisions.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 px-6 pb-0 text-sm text-gray-700 md:text-base flex-grow">
              <div className="p-5 border-2 border-primary-green-100 shadow-sm bg-gradient-to-br from-primary-green-50/50 to-primary-blue-50/50 rounded-xl">
                <p className="text-base">
                  This test measures four key components:{" "}
                  <strong className="text-primary-green-600">Concern,</strong>{" "}
                  <strong className="text-primary-green-600">Curiosity,</strong>{" "}
                  <strong className="text-primary-green-600">
                    Confidence,
                  </strong>{" "}
                  and{" "}
                  <strong className="text-primary-green-600">
                    Consultation
                  </strong>
                  .
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
                <div className="p-5 border-2 border-gray-100 shadow-sm bg-white rounded-xl hover:border-primary-green-200 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl border border-primary-green-500 bg-gray-50 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary-green-500" />
                  </div>
                  <h4 className="mb-2 font-semibold text-primary-green-600 text-base">
                    24 Simple Questions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Agree and disagree with statements about how you plan your
                    career.
                  </p>
                </div>
                <div className="p-5 border-2 border-gray-100 shadow-sm bg-white rounded-xl hover:border-primary-green-200 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl border border-primary-green-500 bg-gray-50 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary-green-500" />
                  </div>
                  <h4 className="mb-2 font-semibold text-primary-green-600 text-base">
                    Instant Feedback
                  </h4>
                  <p className="text-sm text-gray-600">
                    Receive your career maturity results right after you finish
                    the test.
                  </p>
                </div>
                <div className="p-5 border-2 border-gray-100 shadow-sm bg-white rounded-xl hover:border-primary-green-200 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl border border-primary-green-500 bg-gray-50  flex items-center justify-center ">
                    <Download className="w-4 h-4 text-primary-green-500" />
                  </div>
                  <h4 className="mb-2 font-semibold text-primary-green-600 text-base">
                    Download Report
                  </h4>
                  <p className="text-sm text-gray-600">
                    Save your results to see where you are now and plan your
                    next steps.
                  </p>
                </div>
              </div>
              <div className="inline-block px-5 py-4 bg-gradient-to-r from-primary-blue-50 to-primary-green-50 border border-primary-blue-100 rounded-xl">
                <p className="flex items-center justify-center font-medium text-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-primary-green-600" />
                  Completing this test takes approximately 5-10 minutes.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center py-6 px-6">
              <Button
                variant="primary"
                size="lg"
                className="w-full max-w-sm px-8 py-6 text-lg font-semibold text-white transition-all transform rounded-full shadow-lg bg-gradient-to-r from-primary-blue-600 to-primary-green-600 hover:from-primary-blue-700 hover:to-primary-green-700 hover:shadow-xl hover:-translate-y-1"
                onClick={handleStartAssessment}
              >
                Take Assessment
              </Button>
            </CardFooter>
          </Card>
        </AnimationContainer>
        <AnimationContainer delay={0.4}>
          <Card className="w-full max-w-[720px] overflow-hidden bg-white border-2 border-gray-200 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader className="text-center relative pb-8">
              <Popover
                open={isSecondPopoverOpen}
                onOpenChange={setIsSecondPopoverOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 h-9 w-9 rounded-full hover:bg-white/80 backdrop-blur-sm transition-all"
                    onMouseEnter={() => setIsSecondPopoverOpen(true)}
                    onMouseLeave={() => setIsSecondPopoverOpen(false)}
                  >
                    <Info className="h-5 w-5 text-gray-600" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-80 sm:w-96 p-0 bg-white shadow-xl rounded-xl"
                  align="end"
                  onMouseEnter={() => setIsSecondPopoverOpen(true)}
                  onMouseLeave={() => setIsSecondPopoverOpen(false)}
                >
                  <div className="grid gap-6 p-6 text-sm text-gray-700 md:text-base">
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-primary-green-600">
                        What is Positive Youth Development (PYD) Test?
                      </h3>
                      <p>
                        Positive Youth Development highlights your growth in
                        confidence, skills, caring for others, and building
                        strong relationships. It reflects your readiness to grow
                        and make good choices.
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <h3 className="mb-2 text-lg font-semibold text-primary-green-600">
                        What does this test assess?
                      </h3>
                      <p>
                        The PYD test, developed by Arnold, Nott & Meinhold,
                        helps you discover your strengths and understand how you
                        are growing in different areas of your life.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary-green-600 mb-3">
                Know Your Strengths
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 md:text-base leading-relaxed">
                Discover your strengths with the Positive Youth Development
                Test. Identify your key areas of strengths.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 px-6 pb-0 text-sm text-gray-700 md:text-base flex-grow">
              <div className="p-5 border-2 border-primary-blue-100 shadow-sm bg-gradient-to-br from-primary-blue-50/50 to-primary-green-50/50 rounded-xl">
                <p className="text-base">
                  This test measures six key components:{" "}
                  <strong className="text-primary-green-600">
                    Competence,
                  </strong>{" "}
                  <strong className="text-primary-green-600">
                    Confidence,
                  </strong>{" "}
                  <strong className="text-primary-green-600">Character,</strong>{" "}
                  <strong className="text-primary-green-600">
                    Connection,
                  </strong>{" "}
                  <strong className="text-primary-green-600">Caring,</strong>{" "}
                  and{" "}
                  <strong className="text-primary-green-600">
                    Contribution
                  </strong>
                  .
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
                <div className="p-5 border-2 border-gray-100 shadow-sm bg-white rounded-xl hover:border-primary-green-200 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl border border-primary-green-500 bg-gray-50 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary-green-500" />
                  </div>
                  <h4 className="mb-2 font-semibold text-primary-green-600 text-base">
                    55 Simple Questions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Strongly agree, Agree, Disagree, and Strongly disagree with
                    statements.
                  </p>
                </div>
                <div className="p-5 border-2 border-gray-100 shadow-sm bg-white rounded-xl hover:border-primary-green-200 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl border border-primary-green-500 bg-gray-50 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary-green-500" />
                  </div>
                  <h4 className="mb-2 font-semibold text-primary-green-600 text-base">
                    Instant Feedback
                  </h4>
                  <p className="text-sm text-gray-600">
                    Receive your PYD results right after you finish the test.
                  </p>
                </div>
                <div className="p-5 border-2 border-gray-100 shadow-sm bg-white rounded-xl hover:border-primary-green-200 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl border border-primary-green-500 bg-gray-50 flex items-center justify-center">
                    <Download className="w-4 h-4 text-primary-green-500" />
                  </div>
                  <h4 className="mb-2 font-semibold text-primary-green-600 text-base">
                    Download Report
                  </h4>
                  <p className="text-sm text-gray-600">
                    Save your results to understand your strengths and growth.
                  </p>
                </div>
              </div>
              <div className="inline-block px-5 py-4 bg-gradient-to-r from-primary-green-50 to-primary-blue-50 border border-primary-green-100 rounded-xl">
                <p className="flex items-center justify-center font-medium text-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-primary-green-600" />
                  Completing this test takes approximately 10-15 minutes.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center py-6 px-6">
              <Button
                variant="primary"
                size="lg"
                className="w-full max-w-sm px-8 py-6 text-lg font-semibold text-white transition-all transform rounded-full shadow-lg bg-gradient-to-r from-primary-blue-600 to-primary-green-600 hover:from-primary-blue-700 hover:to-primary-green-700 hover:shadow-xl hover:-translate-y-1"
                onClick={handleStartAssessment2}
              >
                Take Assessment
              </Button>
            </CardFooter>
          </Card>
        </AnimationContainer>
      </div>
    </div>
  );
};

export default CareerTestDescription;
