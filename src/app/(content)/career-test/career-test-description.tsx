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
      className="max-w-4xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-xl border border-gray-200 bg-white rounded-2xl overflow-hidden">
        <CardHeader>
          <CardTitle className="sm:text-3xl font-bold text-primary-green-600 md:text-4xl text-2xl">
            Career Maturity Test
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm md:text-base mt-2">
            Discover your readiness for making career decisions
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 text-gray-700 text-sm md:text-base px-6 pb-0">
          <div>
            <h3 className="text-lg font-semibold text-primary-green-500 mb-1">
              What is Career Maturity?
            </h3>
            <p>
              Career maturity is your ability to make informed, confident, and
              well-prepared decisions about your future career. It reflects how
              ready you are to explore options, plan ahead, seek guidance, and
              take ownership of your career path. Developed by Mark L. Savickas. Career maturity explores how individuals develop readiness to make informed and appropriate career decisions.
            </p>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold text-primary-green-500 mb-1">
              What does this test assess?
            </h3>
            <p>
              This test measures four key components:{" "}
              <strong className="text-primary-green-600">Concern,</strong>{" "}
              <strong className="text-primary-green-600">Curiosity,</strong>{" "}
              <strong className="text-primary-green-600">Confidence,</strong>{" "}
              and{" "}
              <strong className="text-primary-green-600">Consultation</strong>.
            </p>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-primary-green-600 mb-2">
                24 Simple Questions
              </h4>
              <p>
                Answer agree/disagree to statements about your career planning
                approach.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-primary-green-600 mb-2">
                Instant Results
              </h4>
              <p>Get immediate feedback on your career maturity profile.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-primary-green-600 mb-2">
                Downloadable Report
              </h4>
              <p>Save your results for future reference and planning.</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Completing this test takes approximately{" "}
            <strong>5–10 minutes</strong>.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center py-6">
          <Button
            variant="primary"
            size="lg"
            className="bg-primary-green-600 hover:bg-primary-green-700 text-white font-semibold md:px-6 md:py-3 px-4 py-2 rounded-full transition-colors"
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
