"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useFormContextData } from "@/context/pydi/FormContext";
import PersonalInfoForm from "./personal-info-form";
import CustomDialog from "./custom-dialog";
import Question from "./question";
import { questions } from "./questionsData";

const QUESTIONS_PER_PAGE = 11;

export default function PYDITest() {
  const [formOpen, setFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const { allAnswers, setAllAnswers } = useFormContextData();

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const endIndex = Math.min(startIndex + QUESTIONS_PER_PAGE, questions.length);
  const currentQuestions = questions.slice(startIndex, endIndex);

  const handleSubmitTest = (): void => {
    const unansweredQues = questions.find((q) => !allAnswers?.[q.id]);
    if (unansweredQues) {
      toast.dismiss();
      
      // Calculate which page the unanswered question is on
      const questionIndex = questions.findIndex((q) => q.id === unansweredQues.id);
      const targetPage = Math.floor(questionIndex / QUESTIONS_PER_PAGE);
      
      // Navigate to the page with the unanswered question
      setCurrentPage(targetPage);
      
      // Scroll to the question after a brief delay to allow page change
      setTimeout(() => {
        const ref = questionRefs.current[unansweredQues.id];
        ref?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      
      toast.error("Please answer all the questions before submitting.", {
        description: "Navigated to the unanswered question.",
        className: "bg-red-200 border border-red-600 text-red-700 px-2",
      });
      return;
    }
    setFormOpen(true);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Calculate answered questions for current page
  const answeredOnCurrentPage = currentQuestions.filter(
    (q) => allAnswers?.[q.id]
  ).length;

  return (
    <>
      <motion.div
        className="max-w-5xl py-4 mx-auto sm:py-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-white border border-gray-200 shadow-xl rounded-2xl">
          <CardHeader className="p-8 text-center">
            <CardTitle className="text-2xl font-bold md:text-4xl sm:text-3xl text-primary-green-600">
              Check Strengths & Difficulties
            </CardTitle>
            <CardDescription className="mt-2 text-sm text-gray-600 md:text-base">
              This questionnaire is designed to help you learn more about your
              strengths and how you are growing in different areas of your life.
              There are no right or wrong answers; just be honest about how you
              feel. For each statement, choose how much you agree, from 1
              (strongly disagree) to 4 (strongly agree). Take your time and
              reflect on your own experiences as you respond.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* Page Navigation Dots */}
            <div className="flex flex-wrap gap-1.5 justify-center mb-6">
              {Array.from({ length: totalPages }).map((_, index) => {
                // Check if all questions on this page are answered
                const pageStartIndex = index * QUESTIONS_PER_PAGE;
                const pageEndIndex = Math.min(pageStartIndex + QUESTIONS_PER_PAGE, questions.length);
                const pageQuestions = questions.slice(pageStartIndex, pageEndIndex);
                const isPageCompleted = pageQuestions.every((q) => allAnswers?.[q.id]);
                
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      setCurrentPage(index);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`
                      size-8 rounded-lg font-bold text-xs transition-all duration-300 hover:scale-105 flex justify-center items-center
                      ${
                        index === currentPage
                          ? "bg-gradient-to-r from-primary-blue-500 to-primary-green-500 text-white shadow-md"
                          : isPageCompleted
                          ? "bg-primary-green-100 text-primary-green-700 hover:bg-primary-green-200"
                          : "bg-white text-slate-500 hover:bg-slate-200"
                      }
                    `}
                  >
                    {isPageCompleted && index !== currentPage ? (
                      <CheckCircle className="size-4" />
                    ) : (
                      index + 1
                    )}
                  </Button>
                );
              })}
            </div>

            {/* Progress Info
            <div className="mb-4 text-center">
              <p className="text-sm text-gray-600">
                Page {currentPage + 1} of {totalPages} • Questions{" "}
                {startIndex + 1}-{endIndex} of {questions.length}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Answered on this page: {answeredOnCurrentPage} /{" "}
                {currentQuestions.length}
              </p>
            </div> */}

            {/* Questions */}
            <div className="flex flex-col gap-4">
              {currentQuestions.map((ques) => (
                <div
                  key={ques.id}
                  ref={(el) => {
                    questionRefs.current[ques.id] = el;
                  }}
                >
                  <Question
                    ques={ques}
                    allAnswers={allAnswers}
                    setAllAnswers={setAllAnswers}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col gap-3 pt-6 mt-6 border-t sm:flex-row border-slate-200">
              {/* Previous Button */}
              <Button
                type="button"
                onClick={goToPreviousPage}
                disabled={currentPage === 0}
                className="flex items-center justify-center w-full h-10 gap-2 font-medium transition-all duration-200 bg-white border rounded-lg sm:flex-1 border-slate-300 hover:bg-slate-50 text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <ArrowLeft className="transition-transform duration-200 size-4 group-hover:-translate-x-1" />
                Previous
              </Button>

              {/* Next Button */}
              {currentPage === totalPages - 1 ? (
                <Button
                  type="button"
                  onClick={handleSubmitTest}
                  className="w-full sm:flex-1 h-10 bg-gradient-to-r from-primary-green-500 to-primary-green-600 hover:from-primary-green-600 hover:to-primary-green-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  Submit Response
                  <CheckCircle className="transition-transform duration-200 size-4 group-hover:rotate-12" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={goToNextPage}
                  className="w-full sm:flex-1 h-10 bg-gradient-to-r from-primary-blue-500 to-primary-blue-600 hover:from-primary-blue-600 hover:to-primary-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  Next
                  <ArrowRight className="transition-transform duration-200 size-4 group-hover:translate-x-1" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <CustomDialog isOpen={formOpen} onClose={() => setFormOpen(false)}>
        <PersonalInfoForm />
      </CustomDialog>
    </>
  );
}