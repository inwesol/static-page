import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, InfoIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type InterestOption = {
  value: string;
  label: string;
  description: string;
};

const interestOptions: InterestOption[] = [
  {
    value: "R",
    label: "Realistic",
    description:
      "Practical, hands-on problem solver who likes working with tools, plants, or animals",
  },
  {
    value: "I",
    label: "Investigative",
    description: "Analytical, intellectual, scientific, and explorative",
  },
  {
    value: "A",
    label: "Artistic",
    description: "Creative, original, independent, and chaotic",
  },
  {
    value: "S",
    label: "Social",
    description: "Cooperative, supporting, healing, and nurturing",
  },
  {
    value: "E",
    label: "Enterprising",
    description: "Competitive environments, leadership, persuading, and status",
  },
  {
    value: "C",
    label: "Conventional",
    description: "Detail-oriented, organized, and clerical",
  },
];
const careerTypes = [
  {
    title: "Realistic",
    description:
      "Work involves designing, building, or repairing of equipment, materials, or structures, engaging in physical activity, or working outdoors. Realistic occupations are often associated with engineering, mechanics and electronics, construction, woodworking, transportation, machine operation, agriculture, animal services, physical or manual labor, athletics, or protective services.",
    emoji: "🔧", // wrench emoji for realistic
  },
  {
    title: "Investigative",
    description:
      "Work involves studying and researching non-living objects, living organisms, disease or other forms of impairment, or human behavior. Investigative occupations are often associated with physical, life, medical, or social sciences, and can be found in the fields of humanities, mathematics/statistics, information technology, or health care service.",
    emoji: "🔬", // microscope emoji
  },
  {
    title: "Artistic",
    description:
      "Work involves creating original visual artwork, performances, written works, food, or music for a variety of media, or applying artistic principles to the design of various objects and materials. Artistic occupations are often associated with visual arts, applied arts and design, performing arts, music, creative writing, media, or culinary art.",
    emoji: "🎨", // art palette emoji
  },
  {
    title: "Social",
    description:
      "Work involves helping, teaching, advising, assisting, or providing service to others. Social occupations are often associated with social, health care, personal service, teaching/education, or religious activities.",
    emoji: "👥", // people emoji
  },
  {
    title: "Enterprising",
    description:
      "Work involves managing, negotiating, marketing, or selling, typically in a business setting, or leading or advising people in political and legal situations. Enterprising occupations are often associated with business initiatives, sales, marketing/advertising, finance, management/administration, professional advising, public speaking, politics, or law.",
    emoji: "💼", // briefcase emoji
  },
  {
    title: "Conventional",
    description:
      "Work involves following procedures and regulations to organize information or data, typically in a business setting. Conventional occupations are often associated with office work, accounting, mathematics/statistics, information technology, finance, or human resources.",
    emoji: "📊", // chart emoji
  },
];
interface InterestFilterProps {
  onSearch: (interests: string[]) => void;
  setShowPlaceholder: (value: boolean) => void;
}
export const InterestFilter = ({
  onSearch,
  setShowPlaceholder,
}: InterestFilterProps) => {
  const [selected, setSelected] = useState<string[]>(["none", "none", "none"]);
  const [expanded, setExpanded] = useState<Boolean>(true);

  const handleSelect = (index: number, value: string) => {
    const newSelected = [...selected];
    newSelected[index] = value;
    setSelected(newSelected);
  };

  const getAvailableOptions = (index: number) => {
    return interestOptions.filter(
      (option) =>
        !selected.some((val, i) => i !== index && val === option.value)
    );
  };

  const handleSearch = () => {
    setExpanded(false);
    onSearch(selected.filter((val) => val !== "none"));
    setShowPlaceholder(false);
  };

  const atLeastOneSelected = selected.some((val) => val !== "none");

  return (
    <div className="max-w-6xl mx-auto pt-4 ">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-medium text-primary-green-600 mb-2">
          Browse by Interests
        </h1>
        <p className="text-gray-600 text-sm">
          Find careers that match your interests and skills using the Holland
          Code (RIASEC).
        </p>
      </div>

      <div className="mb-4 md:mb-6 border rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-gray-200 overflow-hidden bg-blue-50/50">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className={`w-full flex items-center justify-between p-2 px-4 md:p-4 md:px-6 text-left transition-all duration-200 outline-none bg-gradient-to-r
      from-primary-blue-50 to-primary-green-50 hover:from-primary-blue-100 hover:to-primary-green-100`}
        >
          <h2 className="md:text-lg text-base font-semibold text-primary-blue-800">
            <span className="text-primary-green-600">🔍</span> Choose Your
            Interest
          </h2>
          <div
            className={`transition-transform duration-200 ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDownIcon className="text-gray-500" size={20} />
          </div>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 sm:p-6 ">
            <div className="flex justify-end">
              <Sheet>
                <SheetTrigger asChild>
                  <InfoIcon
                    className="text-gray-400 cursor-pointer hover:text-gray-500 transition-colors"
                    width="16"
                    height="16"
                  />
                </SheetTrigger>
                <SheetContent className="bg-gradient-to-r from-primary-green-200 to-primary-green-50 sm:w-96 w-full overflow-y-auto scrollbar-hide">
                  <SheetHeader>
                    <SheetTitle className="text-primary-green-600 text-xl font-medium tracking-wide">
                      Explore Your Career Interests
                    </SheetTitle>
                    <SheetDescription className="text-gray-700 text-sm">
                      {/* <p className="text-gray-700 text-sm"> */}
                        Interests are preferences for work environments and
                        outcomes. Select an interest to discover occupations
                        that support the interest area.
                      {/* </p> */}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col justify-between gap-4 mt-4">
                    {careerTypes.map((ct) => (
                      <div
                        className="rounded-xl shadow-sm hover:shadow-md border border-gray-200 bg-white p-2"
                        key={ct.title}
                      >
                        <h1 className="text-primary-green-600">
                          {ct.emoji} <span>{ct.title}</span>
                        </h1>
                        <p className="text-gray-600 text-sm">
                          {ct.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_auto] gap-6 ">
              {[0, 1, 2].map((index) => {
                const selectedValue = selected[index];
                const selectedOption =
                  interestOptions.find((o) => o.value === selectedValue) ||
                  null;
                return (
                  <div key={index} className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 mb-1">
                      {["First", "Second", "Third"][index]} interest
                    </label>
                    <Select
                      value={selectedValue}
                      onValueChange={(value) => handleSelect(index, value)}
                    >
                      <SelectTrigger className="w-full bg-white border-gray-200 hover:border-[#3FA1D8]/50 ">
                        <SelectValue placeholder={`Select interest`} />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem
                          value="none"
                          className="cursor-pointer text-gray-400 italic"
                        >
                          None
                        </SelectItem>
                        {getAvailableOptions(index).map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="cursor-pointer"
                          >
                            {option.value} — {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {/* Description area with fixed min-height for no layout shift */}
                    <div
                      className="mt-2 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 min-h-[48px] transition-all duration-200"
                      style={{ minHeight: "48px" }}
                    >
                      {selectedValue !== "none" && selectedOption ? (
                        <>
                          <span className="font-semibold">
                            {selectedOption.label}:
                          </span>{" "}
                          {selectedOption.description}
                        </>
                      ) : (
                        <span className="text-gray-400">
                          No interest selected.
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-center items-center sm:col-start-3 sm:justify-end xl:col-start-auto xl:items-start">
                <Button
                  onClick={handleSearch}
                  className="bg-[#00B24B] hover:bg-[#00B24B]/90 text-white rounded-xl xl:mt-6"
                  disabled={!atLeastOneSelected}
                >
                  Find occupations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
