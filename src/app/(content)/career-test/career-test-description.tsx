"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CareerTestDescription: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const router = useRouter();

  const handleStartAssessment = (): void => {
    router.push("/career-test/questionnaire");
  };

  return (
    <motion.div
      className="max-w-4xl px-4 py-12 mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden bg-white border border-gray-200 shadow-xl rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold sm:text-3xl text-primary-green-600 md:text-4xl">
            Career Maturity Test
          </CardTitle>
          <CardDescription className="mt-2 text-sm text-gray-600 md:text-base">
            Discover your readiness for making career decisions
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 px-6 pb-0 text-sm text-gray-700 md:text-base">
          <div className="p-4">
            <h3 className="mb-1 text-lg font-semibold text-primary-green-600">
              What is Career Maturity?
            </h3>
            <p>
              Career maturity is your ability to make informed, confident, and
              well-prepared decisions about your future career. It reflects how
              ready you are to explore options, plan ahead, seek guidance, and
              take ownership of your career path.
            </p>
          </div>
          <div className="p-4 pt-0">
            <h3 className="mb-1 text-lg font-semibold text-primary-green-600">
              What does this test assess?
            </h3>
            <p className="mb-4">
              Career maturity test is developed by Mark L. Savickas, explores
              how individuals develop readiness to make informed and appropriate
              career decisions.
            </p>
            <p>
              This test measures four key components:{" "}
              <strong className="text-primary-green-600">Concern,</strong>{" "}
              <strong className="text-primary-green-600">Curiosity,</strong>{" "}
              <strong className="text-primary-green-600">Confidence,</strong>{" "}
              and{" "}
              <strong className="text-primary-green-600">Consultation</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
            <div className="p-4 border border-gray-100 shadow-sm bg-gray-50 rounded-xl">
              <h4 className="mb-2 font-semibold text-primary-green-600">
                24 Simple Questions
              </h4>
              <p>
                Answer agree/disagree to statements about your career planning
                approach.
              </p>
            </div>
            <div className="p-4 border border-gray-100 shadow-sm bg-gray-50 rounded-xl">
              <h4 className="mb-2 font-semibold text-primary-green-600">
                Instant Results
              </h4>
              <p>Get immediate feedback on your career maturity profile.</p>
            </div>
            <div className="p-4 border border-gray-100 shadow-sm bg-gray-50 rounded-xl">
              <h4 className="mb-2 font-semibold text-primary-green-600">
                Downloadable Report
              </h4>
              <p>Save your results for future reference and planning.</p>
            </div>
          </div>
          <div className="inline-block px-4 py-3 bg-blue-50 rounded-xl">
            <p className="flex items-center justify-center font-medium text-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Completing this test takes approximately 5-10 minutes.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center py-6">
          <Button
            variant="primary"
            size="lg"
            className="px-8 py-4 text-lg font-semibold text-white transition-all transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 hover:shadow-xl hover:-translate-y-1"
            onClick={handleStartAssessment}
          >
            Start Assessment
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CareerTestDescription;
