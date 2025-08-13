import { Footer, Navbar } from "@/components";
import React from "react";
import EventsClient from "./events-client";
import { availableEvents } from "./events";
import { notFound } from "next/navigation";
import CohortClient from "./cohort-client";
import WebinarClient from "./webinar-client";

// This makes the page dynamic so it re-evaluates for each request
// export const dynamic = "force-dynamic";


// export const revalidate = false; // To make the page fully static

export const dynamicParams = false;

// static site generation
export function generateStaticParams() {
  return [
    {
      eventSlug: "coaching",
    },
    {
      eventSlug: "seminar",
    },
    {
      eventSlug: "webinar-1",
    },
    {
      eventSlug: "webinar-2",
    },
    {
      eventSlug: "webinar-3",
    },
  ];
}

// Define the props for the page component
interface EventPageProps {
  params: {
    eventSlug: string;
  };
}

const EventPage = ({ params }: EventPageProps) => {
  const { eventSlug } = params;
  console.log("rendering on server");

  // Get the event data based on the slug
  const event = availableEvents[eventSlug as keyof typeof availableEvents];

  // If event doesn't exist, show 404 page
  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />
      {event.type === "cohort_based" ? (
        <CohortClient event={event} />
      ) : event.type === "online_webinar" ? (
        <WebinarClient event={event} />
      ) : (
        <EventsClient event={event} />
      )}
      <Footer />
    </>
  );
};

export default EventPage;
