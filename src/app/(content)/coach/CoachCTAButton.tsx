import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CoachCTAButtonProps {
  buttonText: string;
  icon: React.ElementType<{ className?: string }>;
}
export default function CoachCTAButton({
  buttonText,
  icon: Icon,
}: CoachCTAButtonProps) {
  return (
    <a href="https://app.inwesol.com" target="_blank" rel="noopener noreferrer">
      <Button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 hover:from-primary-green-600 hover:to-primary-blue-600 text-white sm:font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out text-sm sm:text-lg sm:px-10 sm:py-7">
        <div className="flex items-center gap-2">
          <Icon className="size-4 sm:size-5 " />
          <span>{buttonText}</span>
        </div>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

        {/*shine effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
      </Button>
    </a>
  );
}
