"use client";
import { useFormContextData } from "@/context/personal-info-context/FormContext";
import PersonalInfoForm from "./personal-info-form";
import CustomDialog from "./custom-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Question from "./question";
import { useState, useRef } from "react";
import { questions } from "./questionsData";

export default function CareerMaturityTest() {
  const [formOpen, setFormOpen] = useState(false);
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const { allAnswers, setAllAnswers } = useFormContextData();

  const handleSubmitTest = (): void => {
    const unansweredQues = questions.find((q) => !allAnswers?.[q.id]);
    if (unansweredQues) {
      toast.dismiss();
      const ref = questionRefs.current[unansweredQues.id];
      ref?.scrollIntoView({ behavior: "smooth", block: "center" });
      toast.error("Please answer all the questions before submitting.", {
        description: "Scroll to the unanswered question.",
        className: "bg-red-200 border border-red-600 text-red-700 px-2",
      });
      return;
    }
    setFormOpen(true);
  };

  return (
    <>
      <motion.div
        className="max-w-5xl mx-auto py-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="shadow-xl border border-gray-200 bg-white rounded-2xl">
          <CardHeader>
            <CardTitle className="md:text-4xl sm:text-3xl text-2xl font-bold text-primary-green-600">
              Career Maturity Test
            </CardTitle>
            <CardDescription className="text-gray-600 md:text-base mt-2 text-sm">
              There are 24 statements about choosing the kind of job or work
              that you will probably do when you finish school. Read each
              statement. If you agree or mostly agree with it, then choose agree
              next to it. If you disagree or mostly disagree with it, then
              choose disagree next to it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {questions.map((ques) => (
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
          </CardContent>
          <CardFooter className="justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 hover:from-primary-green-700 hover:to-primary-blue-700 text-white font-semibold px-4 py-1 rounded-full transition-all duration-300 md:px-6 md:py-3"
              onClick={handleSubmitTest}
            >
              Submit Test
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <CustomDialog isOpen={formOpen} onClose={() => setFormOpen(false)}>
        <PersonalInfoForm />
      </CustomDialog>
    </>
  );
}
