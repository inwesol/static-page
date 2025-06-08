"use client";
import React, { createContext, useContext, useState } from "react";
import { z } from "zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Category } from "@/app/(content)/career-test/questionnaire/questionsData";

export const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  gender: z.string().nonempty({ message: "Gender is required" }),
  age: z.preprocess(
    (val) => Number(val),
    z
      .number({ invalid_type_error: "Age must be a number" })
      .min(1, { message: "Minimum age is 1" })
      .max(100, { message: "Maximum age is 100" })
  ),
  phoneNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9]{10}$/.test(val), {
      message: "Phone number must be 10 digits",
    }),
});

export type PersonalInfoFormValues = z.infer<typeof formSchema>;
type AnswerMap = Record<number, "agree" | "disagree" | undefined>;
type Results = Record<Category, number>;

interface FormContextType {
  form: UseFormReturn<PersonalInfoFormValues>;
  submittedData: PersonalInfoFormValues | null;
  setSubmittedData: (data: PersonalInfoFormValues | null) => void;
  allAnswers: AnswerMap;
  setAllAnswers: React.Dispatch<React.SetStateAction<AnswerMap>>;
  testScore: Results;
  setTestScore: React.Dispatch<React.SetStateAction<Results>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContextData = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContextData must be used inside FormProvider");
  }
  return context;
};

const emptyResults: Results = {
  Concern: 0,
  Curiosity: 0,
  Confidence: 0,
  Consultation: 0,
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const form = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      gender: "",
      age: undefined,
      phoneNumber: "",
    },
  });

  const [submittedData, setSubmittedData] =
    useState<PersonalInfoFormValues | null>(null);
  const [allAnswers, setAllAnswers] = useState<AnswerMap>({});
  const [testScore, setTestScore] = useState<Results>(emptyResults);

  return (
    <FormContext.Provider
      value={{
        form,
        submittedData,
        setSubmittedData,
        allAnswers,
        setAllAnswers,
        testScore,
        setTestScore,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
