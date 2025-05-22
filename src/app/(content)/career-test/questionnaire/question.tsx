"use client";
import { Dispatch, SetStateAction } from "react";
import type { QuestionType } from "./questionsData";

interface QuestionProps {
  ques: QuestionType;
  allAnswers: Record<number, "agree" | "disagree" | undefined>;
  setAllAnswers: Dispatch<
    SetStateAction<Record<number, "agree" | "disagree" | undefined>>
  >;
}

export default function Question({
  ques,
  allAnswers,
  setAllAnswers,
}: QuestionProps) {
  const handleAnswerClick = (choice: "agree" | "disagree") => {
    setAllAnswers((prevState) => ({
      ...prevState,
      [ques.id]: choice,
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
          onClick={() => handleAnswerClick("agree")}
          className={`w-[120px] px-4 py-1 rounded-3xl border transition border-primary-blue-600 text-sm ${
            selectedChoice === "agree"
              ? "bg-primary-blue-600 text-white"
              : "text-primary-blue-600"
          }`}
          aria-pressed={selectedChoice === "agree"}
        >
          Agree
        </button>
        <button
          onClick={() => handleAnswerClick("disagree")}
          className={`w-[120px] px-4 py-1 rounded-3xl border transition border-primary-blue-600 text-sm ${
            selectedChoice === "disagree"
              ? "bg-primary-blue-600 text-white"
              : "text-primary-blue-600"
          }`}
          aria-pressed={selectedChoice === "disagree"}
        >
          Disagree
        </button>
      </div>
    </div>
  );
}
