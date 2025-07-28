import { Sparkles } from "lucide-react";
import CocoCTAButton from "./CocoCTAButon";
import Image from "next/image";

export default function Companion() {
  return (
    <>
      <>
        <div className="text-center space-y-8">
          {/* badge */}
          <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[2.5px] focus:outline-none select-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00B24B_0%,#3FA1D8_50%,#00B24B_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium backdrop-blur-3xl gap-2 text-slate-900">
              <Sparkles className="size-4" /> Your ALLY
            </span>
          </div>

          {/* heading */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find your way forward with
              <span className="block bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                clarity and confidence
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to reflect and grow? CoCo: AI Mindset Coach is here to guide
              you through meaningful conversations and insights.
            </p>
          </div>

          {/* button section*/}
          <div>
            <CocoCTAButton />
          </div>
        </div>
      </>
    </>
  );
}
