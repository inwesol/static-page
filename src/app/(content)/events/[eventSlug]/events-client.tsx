"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  User,
  CheckCircle,
  ChevronRight,
  Calendar,
  CreditCard,
  Mail,
  Search,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define the event type based on the data structure in events.ts
type EventInstructor = {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
};

type EventSession = {
  session?: number;
  date?: string;
  topic?: string;
  time?: string;
  activity?: string;
};

type EventTestimonial = {
  name: string;
  position: string;
  quote: string;
};

type EventLocation =
  | {
      venueName?: string;
      address?: string;
      city?: string;
      state?: string;
      zipCode?: string;
      country?: string;
      directions?: string;
    }
  | string;

type EventOffer = {
  heading: string;
  description: string;
};

type Event = {
  id: string;
  slug: string;
  type: string;
  title: string;
  description: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  duration: string;
  format: string;
  price: number;
  currency: string;
  location: EventLocation;
  seats: number;
  seatsRemaining: number;
  instructor: EventInstructor;
  schedule?: EventSession[];
  agenda?: EventSession[];
  includes?: string[];
  testimonials?: EventTestimonial[];
  registrationUrl?: string;
  offers?: EventOffer[];
  facilitates?: EventOffer[];
  achieves?: EventOffer[];
};

// Registration form schema
const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  specialRequirements: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface EventsClientProps {
  event: Event;
}

const EventsClient: React.FC<EventsClientProps> = ({ event }) => {
  const [isScheduling, setIsScheduling] = useState(false);
  const [schedulingComplete, setSchedulingComplete] = useState(false);
  const router = useRouter();

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), "MMMM d, yyyy");
    } catch (error) {
      return dateString;
    }
  };

  const formatTime = (dateString: string) => {
    try {
      return format(parseISO(dateString), "h:mm a");
    } catch (error) {
      return "";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "cohort_based":
        return "Cohort Program";
      case "offline_seminar":
        return "In-Person Seminar";
      case "online_webinar":
        return "Online Webinar";
      default:
        return type.replace("_", " ");
    }
  };

  const getLocationString = () => {
    if (typeof event.location === "string") {
      return event.location;
    } else {
      const loc = event.location;
      return `${loc.venueName}, ${loc.address}, ${loc.city}, ${loc.state} ${loc.zipCode}`;
    }
  };

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                {getEventTypeLabel(event.type)}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {event.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{event.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {event.startDate && event.endDate ? (
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>
                      {formatDate(event.startDate)} -{" "}
                      {formatDate(event.endDate)}
                    </span>
                  </div>
                ) : event.date ? (
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                ) : null}

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>{event.duration}</span>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>{getLocationString()}</span>
                </div>

                <div className="flex items-center">
                  <Users className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>
                    {event.seatsRemaining} seats remaining out of {event.seats}
                  </span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="offers" className="mb-10">
              <div className=" border-gray-200 mb-8">
                <div className="overflow-x-auto scrollbar-hide md:overflow-visible pb-1">
                  <TabsList className="bg-transparent flex md:w-auto justify-start">
                    {event.offers && (
                      <TabsTrigger
                        value="offers"
                        className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 border-b-2 border-transparent"
                      >
                        What&apos;s Inside?
                      </TabsTrigger>
                    )}
                    {event.facilitates && (
                      <TabsTrigger
                        value="facilitates"
                        className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 border-b-2 border-transparent"
                      >
                        Why This Program?
                      </TabsTrigger>
                    )}
                    {event.achieves && (
                      <TabsTrigger
                        value="achieves"
                        className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 border-b-2 border-transparent"
                      >
                        What&apos;ll You Get?
                      </TabsTrigger>
                    )}
                    <TabsTrigger
                      value="instructor"
                      className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 border-b-2 border-transparent"
                    >
                      Instructor
                    </TabsTrigger>
                    {(event.schedule || event.agenda) && (
                      <TabsTrigger
                        value="schedule"
                        className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 border-b-2 border-transparent"
                      >
                        {event.schedule ? "Schedule" : "Agenda"}
                      </TabsTrigger>
                    )}
                  </TabsList>
                </div>
              </div>

              <div className="mt-4">
                {event.offers && (
                  <TabsContent value="offers">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        What&apos;s Inside?
                      </h3>
                      <Card>
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {event.offers.map((offer, index) => (
                              <li key={index} className="flex items-start">
                                <Search className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-medium text-indigo-600 mb-1">
                                    {offer.heading}
                                  </h4>
                                  <p className="text-gray-600">
                                    {offer.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                )}

                {event.facilitates && (
                  <TabsContent value="facilitates">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Why This Program?
                      </h3>
                      <Card>
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {event.facilitates.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <ChevronRight className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-medium text-indigo-600 mb-1">
                                    {item.heading}
                                  </h4>
                                  <p className="text-gray-600">
                                    {item.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                )}

                {event.achieves && (
                  <TabsContent value="achieves">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        What&apos;ll You Get?
                      </h3>
                      <Card>
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {event.achieves.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-medium text-indigo-600 mb-1">
                                    {item.heading}
                                  </h4>
                                  <p className="text-gray-600">
                                    {item.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                )}

                <TabsContent value="instructor">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4 w-1/3 mx-auto md:mx-0">
                          <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                            {/* Replace with actual image when available */}
                            {/* <Image
                              src={event.instructor.imageUrl}
                              alt={event.instructor.name}
                              width={300}
                              height={300}
                              className="rounded-full transition-transform duration-500 group-hover:scale-105"
                            /> */}

                            <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-800">
                              {/* <User className="h-12 w-12" /> */}
                              <Image
                                src={event.instructor.imageUrl}
                                alt={event.instructor.name}
                                width={200}
                                height={200}
                                // layout="fill"
                                // objectFit="cover"
                                className="rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="md:w-3/4 mt-4 md:mt-0 text-center md:text-left">
                          <h3 className="text-xl font-semibold mb-1">
                            {event.instructor.name}
                          </h3>
                          <p className="text-indigo-600 mb-4">
                            {event.instructor.title}
                          </p>
                          <p className="text-gray-600">
                            {event.instructor.bio}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {(event.schedule || event.agenda) && (
                  <TabsContent value="schedule">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        {event.schedule ? "Program Schedule" : "Event Agenda"}
                      </h3>
                      <div className="space-y-4">
                        {(event.schedule || event.agenda)?.map(
                          (item, index) => (
                            <Card key={index}>
                              <CardContent className="p-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                  <div>
                                    <p className="font-medium text-indigo-600">
                                      {item.topic || item.activity}
                                    </p>
                                    {item.session && (
                                      <p className="text-sm text-gray-500">
                                        Session {item.session}
                                      </p>
                                    )}
                                  </div>
                                  <div className="mt-2 md:mt-0 text-sm text-gray-600">
                                    {item.date && formatDate(item.date)}
                                    {item.time && <span>{item.time}</span>}
                                    {item.date && formatTime(item.date) && (
                                      <span> at {formatTime(item.date)}</span>
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        )}
                      </div>
                    </div>
                  </TabsContent>
                )}
              </div>
            </Tabs>
          </div>

          {/* Registration card - 1/3 width on desktop, sticky on desktop */}
          <div className="lg:block hidden">
            <div className="sticky top-48">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Start Your Journey Now!
                  </CardTitle>

                  <CardDescription>
                    This is your chance to truly understand yourself, build your
                    own path, and take charge of your future. No pre-made
                    answers—just guided discovery and real clarity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">{event.duration}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Seats Remaining</span>
                      <span className="font-medium">
                        {event.seatsRemaining} of {event.seats}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Spots are limited. Secure yours today!
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary-green-400 hover:bg-primary-green-600 rounded-xl">
                        Schedule Free Session Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[900px]">
                      <DialogHeader>
                        <DialogTitle className="text-center text-2xl">
                          {schedulingComplete
                            ? "Scheduling Complete!"
                            : "Schedule Your Free Session"}
                        </DialogTitle>
                        <DialogDescription className="text-center text-gray-600">
                          {schedulingComplete
                            ? "Thank you for scheduling your session."
                            : "Choose a time that works for you"}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="pl-12">
                        {schedulingComplete ? (
                          <div className="space-y-6">
                            <Alert className="bg-green-50 border-green-200">
                              <AlertDescription className="text-green-700">
                                Your session is scheduled! We&apos;ve sent a
                                confirmation email with all the details.
                              </AlertDescription>
                            </Alert>
                          </div>
                        ) : (
                          <div className="space-y-8">
                            <iframe
                              src="https://scheduler.zoom.us/akarshedpsy/coachingsession?embed=true"
                              style={{
                                width: "100%",
                                height: "560px",
                                maxWidth: "750px",
                              }}
                            ></iframe>
                            <div className="space-y-4">
                              <h4 className="font-medium">
                                After Schedule Checklist:
                              </h4>
                              <div className="flex flex-row gap-4">
                                <div className="flex items-start">
                                  <Mail className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                                  <div>
                                    <p className="font-medium">
                                      Check Your Email
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      We&apos;ve sent detailed instructions to
                                      your email
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start">
                                  <Calendar className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                                  <div>
                                    <p className="font-medium">
                                      Add to Your Calendar
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      Accept the calendar invite to your email
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                                  <div>
                                    <p className="font-medium">
                                      Download Attached Goodie
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      Download the attached pdf to your email
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* <DialogFooter className="flex justify-end gap-4">
                        {schedulingComplete ? (
                          <Button
                            onClick={() => router.push("/events")}
                            className="bg-primary-green-400 hover:bg-primary-green-600"
                          >
                            View All Events
                          </Button>
                        ) : (
                          <Button variant="outline">Cancel</Button>
                        )}
                      </DialogFooter> */}
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky registration button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-50">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full bg-primary-green-400 hover:bg-primary-green-600 rounded-xl">
              Schedule Free Session Now
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-lg z-80">
              <DrawerHeader>
                <DrawerTitle>
                  {schedulingComplete
                    ? "Scheduling Complete!"
                    : "Schedule Your Free Session"}
                </DrawerTitle>
                <DrawerDescription className="text-center text-gray-600">
                  {schedulingComplete
                    ? "Thank you for scheduling your session"
                    : "Choose a time that works for you"}
                </DrawerDescription>
              </DrawerHeader>

              <div className="p-4 pb-0">
                {schedulingComplete ? (
                  <div className="space-y-6">
                    {/* <Alert className="bg-green-50 border-green-200">
                      <AlertDescription className="text-green-700">
                        Your session is scheduled! We&apos;ve sent a
                        confirmation email with all the details.
                      </AlertDescription>
                    </Alert> */}

                    <div className="space-y-4 py-8">
                      <h4 className="font-medium">After Schedule Checklist:</h4>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium">Check Your Email</p>
                          <p className="text-sm text-gray-500">
                            We&apos;ve sent detailed instructions to your email
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium">Add to Your Calendar</p>
                          <p className="text-sm text-gray-500">
                            Accept the calendar invite to your email
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium">
                            Download Attached Goodie
                          </p>
                          <p className="text-sm text-gray-500">
                            Download the attached pdf to your email
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <iframe
                      src="https://scheduler.zoom.us/akarshedpsy/coachingsession?embed=true"
                      style={{
                        width: "100%",
                        height: "560px",
                        maxWidth: "750px",
                      }}
                    ></iframe>
                    <Button
                      onClick={() => {
                        setSchedulingComplete(true);
                      }}
                      className="w-full bg-primary-green-400 hover:bg-primary-green-600"
                    >
                      Confirm Scheduling
                    </Button>
                  </div>
                )}
              </div>

              {/* <DrawerFooter>
                {!schedulingComplete && (
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                )}
                {schedulingComplete && (
                  <DrawerClose asChild>
                    <Button
                      onClick={() => router.push("/events")}
                      className="bg-primary-green-400 hover:bg-primary-green-600"
                    >
                      View All Events
                    </Button>
                  </DrawerClose>
                )}
              </DrawerFooter> */}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default EventsClient;
