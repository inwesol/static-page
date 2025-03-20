import { Footer, Navbar } from "@/components";
import React from "react";
import EventsClient from "./events-client";
import { availableEvents } from "./events";
import { notFound } from "next/navigation";

// This makes the page dynamic so it re-evaluates for each request
export const dynamic = "force-dynamic";

// Define the props for the page component
interface EventPageProps {
  params: {
    eventSlug: string;
  };
}

const EventPage = ({ params }: EventPageProps) => {
  const { eventSlug } = params;

  // Get the event data based on the slug
  const event = availableEvents[eventSlug as keyof typeof availableEvents];

  // If event doesn't exist, show 404 page
  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <EventsClient event={event} />
      <Footer />
    </>
  );
};

export default EventPage;
