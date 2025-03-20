import { Footer, Navbar } from "@/components";
import React from "react";
import { BentoGrid, BentoItem } from "./events-list-client";
import { Video, Ticket, Presentation } from "lucide-react";

const eventsList: BentoItem[] = [
  {
    title: "Cohort",
    meta: "80 registered",
    description:
      "Real-time metrics with AI-powered insights and predictive analytics",
    icon: <Presentation className="w-4 h-4 text-blue-500" />,
    status: "Premium",
    tags: ["Date: 25th March 2025"],
    slug: "cohort",
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Seminar",
    meta: "50 registered",
    description: "Automated workflow management with priority scheduling",
    icon: <Ticket className="w-4 h-4 text-red-500" />,
    status: "Free",
    tags: ["Date: 25th March 2025"],
    slug: "seminar",
  },
  {
    title: "Webiner 1",
    meta: "50 registered",
    description: "Cloud storage with intelligent content processing",
    icon: <Video className="w-4 h-4 text-purple-500" />,
    status: "Free",
    tags: ["Date: 25th March 2025"],
    slug: "webiner-1",
  },
  {
    title: "Webiner 2",
    meta: "50 registered",
    description: "Automated workflow management with priority scheduling",
    icon: <Video className="w-4 h-4 text-purple-500" />,
    status: "Free",
    tags: ["Date: 25th March 2025"],
    slug: "webiner-2",
  },
  {
    title: "Webiner 3",
    meta: "50 registered",
    description: "Multi-region deployment with edge computing",
    icon: <Video className="w-4 h-4 text-purple-500" />,
    status: "Free",
    tags: ["Date: 25th March 2025"],
    slug: "webiner-3",
  },
];

const EventPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto bg-primary1/30 rounded-xl shadow-lg p-16 md:p-24 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Events
            </h1>
            <p className="text-lg text-gray-600 text-center mb-12">
              Check out our upcoming and past events
            </p>
            {/* <BentoGrid items={itemsSample} /> */}
            {/* <div
              className="absolute top-0 right-0 w-1/2 h-1/2 opacity-60 z-0 hidden sm:block"
              style={{
                backgroundImage: "url('/events-list.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div> */}
          </div>
          <BentoGrid items={eventsList} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
