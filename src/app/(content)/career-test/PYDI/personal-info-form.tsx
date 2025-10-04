"use client";
import { useFormContextData } from "@/context/pydi/FormContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  questions as questionFields,
  categoryMap,
  Category,
  AnswerChoice,
} from "./questionsData";
import { Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

type Results = {
  Competence: number;
  Character: number;
  Connection: number;
  Caring: number;
  Confidence: number;
  Contribution: number;
};

export default function PersonalInfoForm() {
  const { form, setSubmittedData, allAnswers, setTestScore } =
    useFormContextData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("Generating...");
  const router = useRouter();

  function calculateScore(): Results {
    const categoryScores: Results = {
      Competence: 0,
      Character: 0,
      Connection: 0,
      Caring: 0,
      Confidence: 0,
      Contribution: 0,
    };

    const scoreMap: Record<AnswerChoice, number> = {
      "strongly-disagree": 1,
      "disagree": 2,
      "agree": 3,
      "strongly-agree": 4,
    };

    for (const questionId in allAnswers) {
      const answer = allAnswers[Number(questionId)];
      if (answer) {
        const score = scoreMap[answer as AnswerChoice];
        if (score) {
          (Object.keys(categoryMap) as Category[]).forEach((category) => {
            if (categoryMap[category].includes(Number(questionId))) {
              categoryScores[category] += score;
            }
          });
        }
      }
    }

    // Calculate average scores for each category
    (Object.keys(categoryScores) as Category[]).forEach((category) => {
      const categoryQuestions = categoryMap[category];
      
      if (categoryQuestions && categoryQuestions.length > 0) {
        const itemCount = categoryQuestions.length;
        categoryScores[category] = parseFloat(
          (categoryScores[category] / itemCount).toFixed(2)
        );
      } else {
        console.warn(`Category "${category}" not found in categoryMap`);
        categoryScores[category] = 0;
      }
    });

    return categoryScores;
  }

  const handleGenerateReport = async (formData: any) => {
    setIsSubmitting(true);
    const localTestScore = calculateScore();
    setTestScore(localTestScore);
    try {
      const payload = {
        ...formData,
        ...localTestScore,
      };
      const res = await fetch("/api/submit-form?for=pydi-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmittedData(formData);
        setButtonStatus("Woohoo! Done!");
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: [
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ffff00",
            "#00ffff",
            "#ff00ff",
          ],
          shapes: ["star", "circle"],
        });
        setTimeout(() => {
          setIsSubmitting(false);
          setButtonStatus("Generating...");
          router.push("/career-test/result-pydi");
        }, 2000);
      } else {
        setIsSubmitting(false);
        console.error("API returned error:", data.message);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
      <div className="rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-primary-green-600 via-primary-blue-500 to-primary-green-600 px-8 py-4 mb-6">
          <h2 className="text-2xl font-bold text-white">Just a step away!</h2>
          <p className="text-white text-sm py-2">
            Please fill out the form below to get your instant report.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleGenerateReport)}
            className="space-y-5 p-8 pt-0"
          >
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>
                    Full Name <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      className="placeholder:text-gray-400 border border-gray-400 rounded-[4px] bg-white"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="absolute top-[68px] text-[12px] text-red-600" />
                </FormItem>
              )}
            />

            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>
                    Gender <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="border border-gray-400 rounded-[4px] bg-white data-[placeholder]:text-gray-400">
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                      <SelectContent className="bg-white rounded-[4px]">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="non-binary">Non-binary</SelectItem>
                        <SelectItem value="prefer not to say">
                          Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="absolute top-[68px] text-[12px] text-red-600" />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>
                    Email <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="placeholder:text-gray-400 border border-gray-400 rounded-[4px] bg-white"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="absolute top-[68px] text-[12px] text-red-600" />
                </FormItem>
              )}
            />

            {/* Age */}
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>
                    Age <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? Number(e.target.value) : ""
                        )
                      }
                      value={field.value || ""}
                      placeholder="Enter your age"
                      className="placeholder:text-gray-400 border border-gray-400 rounded-[4px] bg-white"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="absolute top-[68px] text-[12px] text-red-600" />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>
                    Phone Number{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      {...field}
                      className="placeholder:text-gray-400 border border-gray-400 rounded-[4px] bg-white"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="absolute top-[68px] text-[12px] text-red-600" />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-base px-4 py-2
    font-semibold rounded-full shadow-lg hover:shadow-xl
    transition-all duration-300 transform hover:-translate-y-1 flex gap-2 justify-center items-center ${
      isSubmitting
        ? buttonStatus === "Woohoo! Done!"
          ? "bg-primary-green-600 text-white disabled:cursor-not-allowed disabled:opacity-100"
          : "bg-primary-blue-600 text-white disabled:opacity-60 disabled:cursor-not-allowed"
        : "bg-gradient-to-r from-primary-blue-600 to-primary-green-600 text-white hover:from-primary-blue-700 hover:to-primary-green-700"
    }
  `}
              >
                {isSubmitting && buttonStatus === "Woohoo! Done!" ? (
                  <>
                    <Check color="yellow" strokeWidth={3}/>
                    {buttonStatus}
                  </>
                ) : isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {buttonStatus}
                  </>
                ) : (
                  "Generate Report"
                )}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}