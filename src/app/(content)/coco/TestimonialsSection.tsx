import { Heart } from "lucide-react";
import SimpleSlider from "./SimpleSlider";

export default function TestimonialsSection() {
  return (
    <>
      <div className="flex flex-col gap-3 items-center mb-10">
        {/* <div className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 p-3 rounded-full">
          <Heart className="size-5 text-white" />
        </div> */}
        {/* animated label */}
        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[2.5px] focus:outline-none select-none">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00B24B_0%,#3FA1D8_50%,#00B24B_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium backdrop-blur-3xl gap-2 text-slate-900">
            <Heart className="size-4" /> Voices of CoCo
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-green-600 text-center">
          How CoCo&apos;s Making a Difference?
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 font-medium text-center">
          Real Stories. Real Impact
        </p>
      </div>
      <SimpleSlider />
    </>
  );
}
