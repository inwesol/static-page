"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Task {
  task_id: string | number;
  task: string;
}

interface Skill {
  example: string;
  hot_technology: "Y" | "N";
}

interface Tool {
  example: string;
}

interface RelatedOccupations {
  onetsoc_code: string;
  related_onetsoc_code: string;
  relatedness_tier: string;
  related_index: string;
  title: string;
}

interface Interest {
  element_name: string;
  description: string;
  data_value: string;
}

interface Work {
  dwa_title: string;
}

type Tab =
  | "tasks"
  | "skills"
  | "tools"
  | "work"
  | "interests"
  | "occupations"
  | "titles";

const OccupationDetails: React.FC = () => {
  const params = useParams();

  const [activeTab, setActiveTab] = useState<Tab>("tasks");
  const [visibleItems, setVisibleItems] = useState<number>(10);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [work, setWork] = useState<Work[]>([]);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [occupations, setOccupations] = useState<RelatedOccupations[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [titleState, setTitleState] = useState({
    title: "",
    description: "",
    loading: true,
    error: "",
    alternateTitles: [] as Record<"alternate_title", string>[],
  });

  const ITEMS_PER_LOAD: number = 10;

  const loadMore = (): void => setVisibleItems((prev) => prev + ITEMS_PER_LOAD);

  type AllData =
    | Task[]
    | Skill[]
    | Tool[]
    | Work[]
    | Interest[]
    | RelatedOccupations[];

  const fetchData = async (id: string, dataType: string) => {
    try {
      const response = await fetch(`/api/testing?id=${id}&data=${dataType}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch data");
      }

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const fetchInitialData = (id: string) => {};

  const fetchTabData = async (id: string, activeTab: Tab) => {
    if (activeTab === "titles") return;

    setError(null);
    setIsLoading(true);

    try {
      let fetchedData;

      switch (activeTab) {
        case "tasks":
          fetchedData = await fetchData(id, "tasks");

          setTasks(fetchedData);
          break;
        case "skills":
          fetchedData = await fetchData(id, "skills");

          setSkills(fetchedData);
          break;
        case "tools":
          fetchedData = await fetchData(id, "tools");

          setTools(fetchedData);
          break;
        case "work":
          fetchedData = await fetchData(id, "work");

          setWork(fetchedData);
          break;
        case "interests":
          fetchedData = await fetchData(id, "interest");

          setInterests(fetchedData);
          break;
        case "occupations":
          fetchedData = await fetchData(id, "occupation");

          setOccupations(fetchedData);
          break;
        default:
          throw new Error("Invalid tab");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let id = params?.id;
    let isMounted = true;

    if (!id) return;

    if (Array.isArray(id)) id = id[0];

    if (!isMounted) return;

    fetchTabData(id, activeTab);

    fetchTitleAndDescriptionData(id);

    return () => {
      isMounted = false;
    };
  }, [params.id]);

  const getAlternateTitles = async (id: string) => {
    const alternateTitlesApiResponse = await fetch(
      `/api/testing?id=${id}&data=alternateTitles`
    );
    const alternateTitles = await alternateTitlesApiResponse.json();

    return alternateTitles;
  };

  const fetchTitleAndDescriptionData = async (id: string) => {
    try {
      setTitleState((prev) => ({
        ...prev,
        error: "",
        loading: true,
      }));

      const response = await fetch(
        `/api/occupation-title-description?id=${id}`
      );
      const data = await response.json();

      const alternateTitles = await getAlternateTitles(id);

      if (!response.ok) {
        setTitleState((prev) => ({
          ...prev,
          error: "Failed to fetch",
          loading: false,
        }));

        return;
      }

      setTitleState((prev) => ({
        ...prev,
        error: "",
        loading: false,
        title: data[0]?.title,
        description: data[0]?.description,
        alternateTitles,
      }));
    } catch (error) {
      setTitleState((prev) => ({
        ...prev,
        error: "Failed to fetch",
        loading: false,
      }));
      throw error;
    }
  };

  console.log(titleState.alternateTitles);

  const getCurrentData = (activeTab: Tab) => {
    switch (activeTab) {
      case "interests":
        return interests;
      case "skills":
        return skills;
      case "tools":
        return tools;
      case "work":
        return work;
      case "tasks":
        return tasks;
      case "occupations":
        return occupations;
      case "titles":
        return titleState.alternateTitles;
      default:
        return [];
    }
  };

  const titleMapper = {
    tasks: "Key Tasks",
    skills: "Required Skills",
    tools: "Tools Used",
    work: "Work Activities",
    interests: "Interests",
    titles: "Alternate Titles",
    occupations: "Related Occupations",
  };

  const currentData = getCurrentData(activeTab);

  return (
    <main className="max-w-5xl mx-auto py-4 pt-10 px-2 sm:py-8 sm:pt-14 sm:px-4 font-sans min-h-[50vh] relative">
      {titleState.loading && (
        <div className="absolute inset-0 bg-opacity-80 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 border-2 border-[#3FA1D8] border-t-transparent mx-auto mb-4"></div>
            <p className="text-[#3FA1D8] text-base sm:text-lg md:text-xl">
              Loading occupation data...
            </p>
          </div>
        </div>
      )}

      {/* Full Page Error State */}
      {titleState.error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <p className="text-red-400 text-base sm:text-lg mb-4">
              {titleState.error}
            </p>
            <button
              onClick={() => fetchInitialData(params.id as any)}
              className="px-4 sm:px-6 py-2 bg-[#3FA1D8] text-white rounded-full font-medium hover:bg-[#2F8BCF] transition-all duration-200"
            >
              Retry Loading
            </button>
          </div>
        </div>
      )}

      {!titleState.loading && !titleState.error && (
        <>
          <div className="w-full max-w-6xl mx-auto">
            <a
              href="/explorer"
              className="inline-flex justify-center items-center px-4 py-2 text-primary1 rounded-md text-base font-bold"
            >
              ← Back to Explorer
            </a>
          </div>

          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-[#3FA1D8] mb-2">
              {titleState.title}
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {titleState.description}
            </p>
          </header>

          <nav className="flex justify-center mb-4 px-2">
            <div
              className="inline-flex bg-gray-100 p-1 rounded-full 
    overflow-x-auto whitespace-nowrap gap-2 custom-scrollbar"
            >
              {(
                [
                  "tasks",
                  "skills",
                  "tools",
                  "work",
                  "interests",
                  "titles",
                  "occupations",
                ] as const
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    if (isLoading) return;
                    setActiveTab(tab);
                    setVisibleItems(10);
                    fetchTabData(params.id as any, tab);
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-full 
          transition-all duration-200 
          sm:px-4 sm:text-sm
          ${
            activeTab === tab
              ? "bg-[#3FA1D8] text-white"
              : "text-gray-600 hover:text-[#3FA1D8]"
          }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </nav>

          <section className="bg-white rounded-lg p-4 shadow-md border-t-2 border-[#3FA1D8]">
            <h2 className="text-xl font-semibold text-[#00B24B] mb-3">
              {titleMapper[activeTab] ?? "NA"}
            </h2>

            {isLoading && (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3FA1D8]"></div>
              </div>
            )}

            {error && (
              <div className="py-4 text-center">
                <p className="text-red-600 mb-2">{error}</p>
                <button
                  onClick={() => fetchTabData(params.id as any, activeTab)}
                  className="px-4 py-1 text-sm text-[#3FA1D8] border border-[#3FA1D8] rounded-full hover:bg-[#3FA1D8] hover:text-white transition-all duration-200"
                >
                  Retry
                </button>
              </div>
            )}

            {!isLoading && !error && (
              <>
                {activeTab === "tasks" && (
                  <div className="space-y-2">
                    {tasks.slice(0, visibleItems).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="w-2 h-2 bg-[#3FA1D8] rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-800 flex-1">
                          {(item as Task).task}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "work" && (
                  <div className="space-y-2">
                    {work.slice(0, visibleItems).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="w-2 h-2 bg-[#3FA1D8] rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-800 flex-1">
                          {(item as Work).dwa_title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "interests" && (
                  <div className="space-y-4">
                    {interests.slice(0, visibleItems).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="w-2 h-2 bg-[#3FA1D8] rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-800 flex-1 font-bold">
                          {(item as Interest).element_name} -{" "}
                          <span className="font-normal">
                            {(item as Interest).description}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "occupations" && (
                  <div className="space-y-4">
                    {occupations.slice(0, visibleItems).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-200"
                      >
                        <a
                          href={`/explorer/${
                            (item as RelatedOccupations).related_onetsoc_code
                          }`}
                          className="decoration-"
                        >
                          <span className="text-sm flex-1 text-[#3FA1D8] hover:text-[#00B24B] transition-all font-medium underline">
                            {(item as RelatedOccupations).title}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentData.slice(0, visibleItems).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="text-sm text-gray-800 flex-1">
                          {(item as Skill).example}
                        </span>
                        {(item as Skill).hot_technology === "Y" && (
                          <span className="ml-2 text-xs text-[#00B24B] bg-green-100 px-2 py-0.5 rounded-full">
                            Hot Tech
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "tools" && (
                  <div className="flex flex-wrap gap-2">
                    {tools.slice(0, visibleItems).map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-gray-50 text-sm text-gray-800 rounded-full hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="w-2 h-2 bg-[#3FA1D8] rounded-full mr-2 flex-shrink-0" />
                        {(item as Tool).example}
                      </span>
                    ))}
                  </div>
                )}

                {activeTab === "titles" && (
                  <div className="flex flex-wrap gap-2">
                    {titleState.alternateTitles
                      .slice(0, visibleItems)
                      .map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 bg-gray-50 text-sm text-gray-800 rounded-full hover:bg-gray-100 transition-all duration-200"
                        >
                          <span className="w-2 h-2 bg-[#3FA1D8] rounded-full mr-2 flex-shrink-0" />
                          {item.alternate_title}
                        </span>
                      ))}
                  </div>
                )}

                {visibleItems < currentData.length && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={loadMore}
                      className="px-4 py-1 text-sm text-[#3FA1D8] border border-[#3FA1D8] rounded-full hover:bg-[#3FA1D8] hover:text-white transition-all duration-200"
                    >
                      Load More ({currentData.length - visibleItems})
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default OccupationDetails;
