"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dispatch, SetStateAction } from "react";

interface QuestionType {
  id: number | string;
  ques: string;
}

interface QuestionProps {
  ques: QuestionType;
  id: number | string;
  allAnswers: Record<string | number, "agree" | "disagree" | undefined>;
  setAllAnswers: Dispatch<
    SetStateAction<Record<string | number, "agree" | "disagree" | undefined>>
  >;
}

export default function Question({
  ques,
  id,
  allAnswers,
  setAllAnswers,
}: QuestionProps) {
  const handleAnswerClick = (
    choice: "agree" | "disagree",
    id: number | string
  ) => {
    setAllAnswers((prevState) => ({
      ...prevState,
      [id]: choice,
    }));
  };

  const selectedChoice = allAnswers[ques.id];

  return (
    <div className="border border-gray-100 hover:shadow-md transition-shadow duration-200 h-full text-gray-600 flex justify-between p-2 gap-2 md:gap-4 flex-col lg:flex-row">
      <p className="inline-block md:text-base text-sm">
        {ques.id}. {ques.ques}
      </p>

      <div className="inline-flex gap-4 items-center">
        <button
          onClick={() => handleAnswerClick("agree", id)}
          className={`w-[120px] px-4 py-1 rounded-3xl border transition border-primary-blue-600 text-sm ${
            selectedChoice === "agree"
              ? "bg-primary-blue-600 text-white"
              : "text-primary-blue-600"
          }`}
        >
          Agree
        </button>
        <button
          onClick={() => handleAnswerClick("disagree", id)}
          className={`w-[120px] px-4 py-1 rounded-3xl border transition border-primary-blue-600 text-sm ${
            selectedChoice === "disagree"
              ? "bg-primary-blue-600 text-white"
              : "text-primary-blue-600"
          }`}
        >
          Disagree
        </button>
      </div>
    </div>
  );
}
