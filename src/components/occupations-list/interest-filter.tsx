import { InterestOption } from "./types";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

// RIASEC interest areas with their descriptions
const interestOptions: Record<string, InterestOption> = {
  R: {
    value: "R",
    label: "Realistic",
    description:
      "Practical, hands-on problem solver who likes working with tools, plants, or animals",
  },
  I: {
    value: "I",
    label: "Investigative",
    description: "Analytical, intellectual, scientific, and explorative",
  },
  A: {
    value: "A",
    label: "Artistic",
    description: "Creative, original, independent, and chaotic",
  },
  S: {
    value: "S",
    label: "Social",
    description: "Cooperative, supporting, healing, and nurturing",
  },
  E: {
    value: "E",
    label: "Enterprising",
    description: "Competitive environments, leadership, persuading, and status",
  },
  C: {
    value: "C",
    label: "Conventional",
    description: "Detail-oriented, organized, and clerical",
  },
};

// Interest Filter component for when browseBy is 'interests'
export const InterestFilter = ({
  onSearch,
}: {
  onSearch: (interests: string[]) => void;
}) => {
  const [firstInterest, setFirstInterest] = useState<string>("R");
  const [secondInterest, setSecondInterest] = useState<string>("I");
  const [thirdInterest, setThirdInterest] = useState<string>("A");

  const handleSearch = () => {
    onSearch([firstInterest, secondInterest, thirdInterest]);
  };

  // Helper function to render select dropdown with tooltips
  const renderInterestSelect = (
    label: string,
    value: string,
    onChange: (value: string) => void
  ) => (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-white border-gray-200 hover:border-[#3FA1D8]/50 focus:ring-[#00B24B]/20">
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(interestOptions).map(([key, option]) => (
            <TooltipProvider key={key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SelectItem
                    value={option.value}
                    className="focus:bg-[#00B24B]/10 cursor-help"
                  >
                    {option.value} — {option.label}
                  </SelectItem>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs p-2 bg-gray-100 text-gray-800 rounded-md shadow-lg border border-gray-200 z-50">
                  <p className="text-sm font-medium">{option.label}</p>
                  <p className="text-xs">{option.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="w-full mx-auto bg-blue-50/50 rounded-xl border border-gray-200/30 p-4 sm:p-6 shadow-sm">
      {/* <h2 className="text-lg font-medium text-primary-green-600 mb-2">
        Have a three-letter interest code?
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        You can focus your search by choosing up to three interest areas, to see
        the occupations which match your choices.
      </p> */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {renderInterestSelect(
          "First interest",
          firstInterest,
          setFirstInterest
        )}
        {renderInterestSelect(
          "Second interest",
          secondInterest,
          setSecondInterest
        )}
        {renderInterestSelect(
          "Third interest",
          thirdInterest,
          setThirdInterest
        )}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSearch}
          className="bg-[#00B24B] hover:bg-[#00B24B]/90 text-white rounded-xl"
        >
          Find occupations
        </Button>
      </div>
    </div>
  );
};
