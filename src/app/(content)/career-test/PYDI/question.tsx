"use client";
import { Dispatch, SetStateAction } from "react";
import type { QuestionType, AnswerChoice } from "./questionsData";
import type { AnswerMap } from "@/context/pydi/FormContext";

interface QuestionProps {
  ques: QuestionType;
  allAnswers: AnswerMap;
  setAllAnswers: Dispatch<SetStateAction<AnswerMap>>;
}

export default function Question({
  ques,
  allAnswers,
  setAllAnswers,
}: QuestionProps) {
  const handleAnswerClick = (choice: AnswerChoice) => {
    setAllAnswers((prevState) => ({
      ...prevState,
      [ques.id]: choice,
    }));
  };

  const selectedChoice = allAnswers[ques.id] as AnswerChoice | undefined;

  const choices: { value: AnswerChoice; label: string }[] = [
    { value: "strongly-disagree", label: "Strongly Disagree" },
    { value: "disagree", label: "Disagree" },
    { value: "agree", label: "Agree" },
    { value: "strongly-agree", label: "Strongly Agree" },
  ];

  return (
    <div className="border border-gray-100 hover:shadow-md transition-shadow duration-200 h-full text-gray-600 flex justify-between p-4 gap-2 md:gap-4 flex-col">
      <p className="inline-block md:text-base text-sm font-medium">
        {ques.id}. {ques.ques}
      </p>
      <div className="inline-flex gap-2 flex-wrap items-center">
        {choices.map((choice) => (
          <button
            key={choice.value}
            onClick={() => handleAnswerClick(choice.value)}
            className={`px-4 py-2 rounded-lg border transition text-sm ${
              selectedChoice === choice.value
                ? "bg-primary-blue-600 text-white border-primary-blue-600"
                : "text-primary-blue-600 border-primary-blue-600 hover:bg-primary-blue-50"
            }`}
            aria-pressed={selectedChoice === choice.value}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}