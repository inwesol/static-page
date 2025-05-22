"use client";
import { useFormContextData } from "@/context/personal-info-context/FormContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
  answerKey,
  questions as questionFields,
  categoryMap,
  Category,
} from "./questionsData";

type Results = Record<Category, number>;

export default function PersonalInfoForm() {
  const { form, setSubmittedData, allAnswers, setTestScore } =
    useFormContextData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  function calculateScore(): Results {
    const categoryScores: Results = {
      Concern: 0,
      Curiosity: 0,
      Confidence: 0,
      Consultation: 0,
    };

    for (const questionId in allAnswers) {
      const answer = allAnswers[Number(questionId)];
      const correctAnswer = answerKey[Number(questionId)];
      if (answer === correctAnswer) {
        (Object.keys(categoryMap) as Category[]).forEach((category) => {
          if (categoryMap[category].includes(Number(questionId))) {
            categoryScores[category] += 1;
          }
        });
      }
    }

    (Object.keys(categoryScores) as Category[]).forEach((category) => {
      categoryScores[category] = parseFloat(
        ((categoryScores[category] / 6) * 100).toFixed(2)
      );
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
      const res = await fetch("/api/submit-form?for=career-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmittedData(formData);
        router.push("/career-test/result");
      } else {
        console.error("API returned error:", data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-green-700 via-blue-500 to-green-600 px-8 py-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Just a step away!</h2>
        <p className="text-white text-sm py-2">
          Please fill out the form below to know your result
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
                  <Select onValueChange={field.onChange} value={field.value}>
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
                  Phone Number <span className="text-gray-400">(Optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...field}
                    className="placeholder:text-gray-400 border border-gray-400 rounded-[4px] bg-white"
                  />
                </FormControl>
                <FormMessage className="absolute top-[68px] text-[12px] text-red-600" />
              </FormItem>
            )}
          />

          {/* Submit */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`rounded-[4px] px-4 py-6 text-white font-medium bg-gradient-to-r from-primary-green-600 to-primary-blue-600 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary-green-700"
              }`}
            >
              {isSubmitting ? "Generating..." : "Generate Result"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
