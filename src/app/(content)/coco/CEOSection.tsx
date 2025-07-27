import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function CEOSection() {
  return (
    <>
      <Card className="relative overflow-hidden bg-gradient-to-br from-white via-primary-blue-50/30 to-primary-green-50/30 border backdrop-blur-sm shadow-lg border-slate-200 rounded-[6px] sm:rounded-xl">
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch">
          <div className="w-full lg:w-2/5 relative p-4 lg:p-10 flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-500 to-primary-green-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-xl border border-white/50 group-hover:scale-105 transition-transform duration-500">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 relative">
                  <Image
                    src="/assets/chatbot.svg"
                    alt="AI Chatbot"
                    fill
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue-900/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 p-4 lg:p-10 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6">
              {/* quote icon */}
              {/* <div className="flex justify-start">
                <div className="p-3 bg-gradient-to-r from-primary-blue-500 to-primary-green-500 rounded-full shadow-lg">
                  <Quote className="size-5 text-white" />
                </div>
              </div> */}
              <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[2.5px] focus:outline-none select-none">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00B24B_0%,#3FA1D8_50%,#00B24B_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium backdrop-blur-3xl gap-2 text-slate-900">
                  <Quote className="size-4" /> From Our CEO
                </span>
              </div>

              {/* headings */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary-green-600 to-primary-green-700 bg-clip-text text-transparent leading-tight">
                  Our Intent, Your Ally
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-primary-blue-600 to-primary-blue-700 bg-clip-text text-transparent">
                  Hear from our CEO
                </h2>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  We created{" "}
                  <span className="font-semibold bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
                    CoCo
                  </span>{" "}
                  with a simple but powerful intention: to provide young people
                  with a supportive space to pause, reflect, and think clearly.
                  In a world that moves fast and demands quick decisions, we
                  need an everyday ally to help us navigate both life and career
                  decisions with clarity, calm, and confidence.
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  That&apos;s where{" "}
                  <span className="font-semibold bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
                    CoCo
                  </span>{" "}
                  comes in. As your first line of support, this conversational
                  assistant is designed to listen without judgment, ask
                  thoughtful questions, and nudge you toward better choices. And
                  beyond just decisions, CoCo gently reminds you to care for
                  your well-being because managing stress is just as important
                  as the next big step.
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
                  Rooted in psychology and powered by AI,{" "}
                  <span className="font-semibold bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
                    CoCo
                  </span>{" "}
                  is here to walk with you, helping you by asking the right
                  questions, leading you towards clarity.
                </p>
              </div>

              <div className="rounded-[6px] sm:rounded-xl">
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="text-right space-y-1">
                      <p className="text-lg font-bold text-slate-800">
                        Akarsh Sriramoju
                      </p>
                      <p className="text-sm font-medium text-primary-blue-600">
                        Co-founder & CEO
                      </p>
                      <p className="text-sm text-slate-600">
                        Inwesol Global Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
