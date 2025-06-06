import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

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

export const InterestFilter = ({
  onSearch,
}: {
  onSearch: (interests: string[]) => void;
}) => {
  const [selected, setSelected] = useState<string[]>(["none", "none", "none"]);

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
    onSearch(selected.filter((val) => val !== "none"));
  };

  const atLeastOneSelected = selected.some((val) => val !== "none");

  return (
    <div className="w-full mx-auto bg-blue-50/50 rounded-xl border border-gray-200/30 p-4 sm:p-6 shadow-sm">
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger>
            <InfoIcon
              className="text-gray-500 cursor-pointer"
              width="20"
              height="20"
            />
          </DialogTrigger>
          <DialogContent className="bg-white sm:rounded-xl max-h-[95vh] overflow-y-auto sm:max-w-[600px] lg:max-w-[840px]">
            <DialogHeader>
              <DialogTitle className="text-primary-green-600">Explore Your Career Interests</DialogTitle>
              <DialogDescription className="">
                Interests are preferences for work environments and outcomes. Select an interest to discover occupations that support the interest area.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <div>
                <h2 className="text-primary-blue-600 text-base font-semibold">Realistic</h2>
                <p className="text-gray-500 text-sm">Work involves designing, building, or repairing of equipment, materials, or structures, engaging in physical activity, or working outdoors. Realistic occupations are often associated with engineering, mechanics and electronics, construction, woodworking, transportation, machine operation, agriculture, animal services, physical or manual labor, athletics, or protective services.</p>
              </div>
              <div>
                <h2 className="text-primary-blue-600 text-base font-semibold">Investigative</h2>
                <p className="text-gray-500 text-sm">Work involves studying and researching non-living objects, living organisms, disease or other forms of impairment, or human behavior. Investigative occupations are often associated with physical, life, medical, or social sciences, and can be found in the fields of humanities, mathematics/statistics, information technology, or health care service.</p>
              </div>
              <div>
                <h2 className="text-primary-blue-600 text-base font-semibold">Artistic</h2>
                <p className="text-gray-500 text-sm">Work involves creating original visual artwork, performances, written works, food, or music for a variety of media, or applying artistic principles to the design of various objects and materials. Artistic occupations are often associated with visual arts, applied arts and design, performing arts, music, creative writing, media, or culinary art.</p>
              </div>
              <div>
                <h2 className="text-primary-blue-600 text-base font-semibold">Social</h2>
                <p className="text-gray-500 text-sm">Work involves helping, teaching, advising, assisting, or providing service to others. Social occupations are often associated with social, health care, personal service, teaching/education, or religious activities.</p>
              </div>
              <div>
                <h2 className="text-primary-blue-600 text-base font-semibold">Enterprising</h2>
                <p className="text-gray-500 text-sm">Work involves managing, negotiating, marketing, or selling, typically in a business setting, or leading or advising people in political and legal situations. Enterprising occupations are often associated with business initiatives, sales, marketing/advertising, finance, management/administration, professional advising, public speaking, politics, or law.</p>
              </div>
              <div>
                <h2 className="text-primary-blue-600 text-base font-semibold">Conventional</h2>
                <p className="text-gray-500 text-sm">Work involves following procedures and regulations to organize information or data, typically in a business setting. Conventional occupations are often associated with office work, accounting, mathematics/statistics, information technology, finance, or human resources.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_auto] gap-6 ">
        {[0, 1, 2].map((index) => {
          const selectedValue = selected[index];
          const selectedOption =
            interestOptions.find((o) => o.value === selectedValue) || null;
          return (
            <div key={index} className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                {["First", "Second", "Third"][index]} interest
              </label>
              <Select
                value={selectedValue}
                onValueChange={(value) => handleSelect(index, value)}
              >
                <SelectTrigger className="w-full bg-white border-gray-200 hover:border-[#3FA1D8]/50 focus:ring-[#00B24B]/20">
                  <SelectValue placeholder={`Select interest`} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem
                    value="none"
                    className="cursor-pointer text-gray-400 italic focus:bg-[#00B24B]/10"
                  >
                    None
                  </SelectItem>
                  {getAvailableOptions(index).map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="focus:bg-[#00B24B]/10 cursor-pointer"
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
                  <span className="text-gray-400">No interest selected.</span>
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
  );
};
