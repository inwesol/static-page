"use client";

import React, { useState, useEffect } from "react";
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
  ChevronLeft,
  Timer,
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
// import RotatingBorderButton from "@/components/ui/rotating-border-button";

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
  review: string;
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
  bannerImageUrl: string;
  startDate?: string;
  endDate?: string;
  registrationEndDate?: string;
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

const CohortClient: React.FC<EventsClientProps> = ({ event }) => {
  const [isScheduling, setIsScheduling] = useState(false);
  const [schedulingComplete, setSchedulingComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [showMobileDialog, setShowMobileDialog] = useState<boolean>(false);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const [desktopIframeLoaded, setDesktopIframeLoaded] =
    useState<boolean>(false);
  const router = useRouter();

  // Open dialog automatically on page load
  useEffect(() => {
    const handleResize = () => {
      let timerId;
      if (window.innerWidth >= 640) {
        setShowMobileDialog(false);
        setIframeLoaded(false);
      } else {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
          setShowMobileDialog(true);
        }, 3000);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // <-- Call once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleDrawerChange(isOpen: boolean) {
    setShowMobileDialog(isOpen);
    if (!isOpen) {
      setIframeLoaded(false); // Reset when closing
    }
  }

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (event.testimonials && event.testimonials.length > 1 && !isHovered) {
      const interval = setInterval(() => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % event.testimonials!.length
        );
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [event.testimonials, isHovered]);

  const goToPreviousTestimonial = () => {
    if (event.testimonials && event.testimonials.length > 1) {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? event.testimonials!.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNextTestimonial = () => {
    if (event.testimonials && event.testimonials.length > 1) {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % event.testimonials!.length
      );
    }
  };

  const isRegistrationClosed = () => {
    if (!event.registrationEndDate) return false;

    const today = new Date();
    const endDate = parseISO(event.registrationEndDate);
    return today > endDate;
  };

  const registrationClosed = isRegistrationClosed();

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
    <>
      <div className="relative">
        {/* Banner Image */}
        <div className="w-full h-[200px] md:h-[300px] lg:h-[350px] relative mb-0">
          <Image
            src={event.bannerImageUrl}
            alt={event.title}
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-green-800/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col">
            {/* Main content - 2/3 width on desktop */}
            {/* <div className=""> */}
            <div className="mb-6">
              <Badge className="mb-2 bg-primary-green-100 text-primary-green-800 hover:bg-primary-green-200">
                {getEventTypeLabel(event.type)}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {event.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{event.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* nothing is getitng rendered here as startDate and endDate or date is missing */}
                {event.startDate && event.endDate ? (
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 text-primary-green-600 mr-2" />
                    <span>
                      {formatDate(event.startDate)} -{" "}
                      {formatDate(event.endDate)}
                    </span>
                  </div>
                ) : event.date ? (
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 text-primary-green-600 mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                ) : null}

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary-green-600 mr-2" />
                  <span>{event.duration}</span>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-green-600 mr-2" />
                  <span>{getLocationString()}</span>
                </div>

                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-green-600 mr-2" />
                  <span>
                    {event.seatsRemaining} seats remaining out of {event.seats}
                  </span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="offers" className="mb-10">
              {/* <div className=" border-gray-200 mb-8">
                  <div className="overflow-x-auto scrollbar-hide md:overflow-visible pb-1"> */}
              <TabsList className="bg-transparent !flex flex-wrap max-w-4xl mr-auto justify-start ">
                {event.offers && (
                  <TabsTrigger
                    value="offers"
                    className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                  >
                    What&apos;s Inside?
                  </TabsTrigger>
                )}
                {event.facilitates && (
                  <TabsTrigger
                    value="facilitates"
                    className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                  >
                    Why This Program?
                  </TabsTrigger>
                )}
                {event.achieves && (
                  <TabsTrigger
                    value="achieves"
                    className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                  >
                    What&apos;ll You Get?
                  </TabsTrigger>
                )}

                <TabsTrigger
                  value="instructor"
                  className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                >
                  Program Coach
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                >
                  Pricing
                </TabsTrigger>
                {/* right now not here so nothing rendered form this block */}
                {(event.schedule || event.agenda) && (
                  <TabsTrigger
                    value="schedule"
                    className="px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent"
                  >
                    {event.schedule ? "Schedule" : "Agenda"}
                  </TabsTrigger>
                )}
              </TabsList>
              {/* </div> */}
              {/* </div> */}

              <div className="mt-4">
                {event.offers && (
                  <TabsContent value="offers">
                    <div>
                      {/* <h3 className="text-xl font-semibold mb-4">
                            What&apos;s Inside?
                        </h3> */}
                      <Card className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl">
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {event.offers.map((offer, index) => (
                              <li key={index} className="flex items-start">
                                <Search className="h-5 w-5 text-primary-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-medium text-primary-green-600 mb-1">
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
                      {/* <h3 className="text-xl font-semibold mb-4">
                            Why This Program?
                        </h3> */}
                      <Card className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl">
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {event.facilitates.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <ChevronRight className="h-5 w-5 text-primary-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-medium text-primary-green-600 mb-1">
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
                      {/* <h3 className="text-xl font-semibold mb-4">
                            What&apos;ll You Get?
                        </h3> */}
                      <Card className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl">
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {event.achieves.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-medium text-primary-green-600 mb-1">
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

                <TabsContent value="pricing">
                  <div>
                    {/* <h3 className="text-xl font-semibold mb-4">
                        What&apos;s the Price?
                        </h3> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* One Time Payment Card */}
                      <Card className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl lg:rounded-2xl">
                        <CardHeader className="bg-primary-green-50 border-b border-gray-200 rounded-t-xl lg:rounded-t-2xl">
                          <CardTitle className="text-lg text-primary-green-700">
                            One Time Payment
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-gray-800 mb-2">
                              ₹12000{"  "}
                              <span className="text-gray-600 font-normal text-sm">
                                + GST (18%)
                              </span>
                            </p>
                            {/* <p className="text-gray-600">+ GST (18%)</p> */}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary-green-600 mr-2" />
                                <span className="text-sm">
                                  Complete access to program
                                </span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary-green-600 mr-2" />
                                <span className="text-sm">
                                  Simple one-time payment
                                </span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary-green-600 mr-2" />
                                <span className="text-sm">
                                  No additional fees
                                </span>
                              </li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Two Time Payment Card */}
                      <Card className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl lg:rounded-2xl">
                        <CardHeader className="bg-primary-blue-50 border-b border-gray-200 rounded-t-xl lg:rounded-t-2xl">
                          <CardTitle className="text-lg text-primary-blue-700">
                            Two Time Payment
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                              <div className="flex items-center">
                                <div className="bg-primary-blue-100 text-primary-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 font-semibold text-sm">
                                  1
                                </div>
                                <span className="text-gray-700">
                                  First Installment
                                </span>
                              </div>
                              <div>
                                <p className="font-semibold text-lg text-gray-800">
                                  ₹6500
                                </p>
                                <p className="text-xs text-gray-600">
                                  + GST (18%)
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between pb-2">
                              <div className="flex items-center">
                                <div className="bg-primary-blue-100 text-primary-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 font-semibold text-sm">
                                  2
                                </div>
                                <span className="text-gray-700">
                                  Second Installment
                                </span>
                              </div>
                              <div>
                                <p className="font-semibold text-lg text-gray-800">
                                  ₹6500
                                </p>
                                <p className="text-xs text-gray-600">
                                  + GST (18%)
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 italic">
                      *Terms and conditions applied
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="instructor">
                  <Card className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl">
                    <CardContent className="p-6 bg-primary-green-50 rounded-xl">
                      <div className="flex flex-col md:flex-row gap-6 ">
                        <div className="md:w-1/4 w-1/3 mx-auto md:mx-0">
                          <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center bg-primary-green-100 text-primary-green-800">
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
                          <p className="text-primary-green-700 mb-4">
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
                                    <p className="font-medium text-primary-green-600">
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

            {/* himanshu schedule */}
            <div className="hidden sm:flex flex-col gap-2 mb-10">
              <h1 className="text-2xl font-bold">Schedule Your Free Session</h1>
              <p className="text-primary-green-600 text-sm">
                Choose a time that works for you
              </p>
              {/* shimmer effect instead of loader*/}
              {/* {!desktopIframeLoaded && <div className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl min-h-[680px] overflow-hidden self-stretch bg-white flex">
                
              </div> } */}
              <div
                className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl min-h-[640px] overflow-hidden self-stretch"
                style={{ display: desktopIframeLoaded ? "block" : "none" }}
              >
                <iframe
                  src="https://scheduler.zoom.us/akarshedpsy/coachingsession?embed=true"
                  // loading="lazy"
                  style={{
                    width: "100%",
                    minHeight: "inherit",
                    border: "none",
                  }}
                  title="zoom scheduler"
                  onLoad={() => setDesktopIframeLoaded(true)}
                ></iframe>
              </div>
            </div>

            {/* Testimonials Section */}
            {event.testimonials && event.testimonials.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">What People Say</h2>
                <div className="relative">
                  <Card className="bg-primary-green-50/50 border-none shadow-sm rounded-xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <svg
                            className="h-8 w-8 text-primary-green-400"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>

                        {/* Testimonial content - use display method instead of absolute positioning */}
                        {event.testimonials.map((testimonial, index) => (
                          <div
                            key={index}
                            className={`transition-all duration-500 ease-in-out ${
                              index === currentTestimonialIndex
                                ? "opacity-100 transform-none"
                                : "hidden"
                            }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <p className="text-gray-700 italic mb-4">
                              &ldquo;{testimonial.review}&rdquo;
                            </p>
                            <div>
                              <p className="font-semibold">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {event.testimonials.length > 1 && (
                    <>
                      {/* Navigation controls - uncomment if you want button navigation */}
                      {/* <div className="absolute inset-y-0 left-0 flex items-center">
                                <Button
                                variant="ghost"
                                size="icon"
                                onClick={goToPreviousTestimonial}
                                className="h-8 w-8 rounded-full bg-white/80 shadow-sm hover:bg-white transition-all duration-200"
                                aria-label="Previous testimonial"
                                >
                                <ChevronLeft className="h-4 w-4 text-primary-green-600" />
                                </Button>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <Button
                                variant="ghost"
                                size="icon"
                                onClick={goToNextTestimonial}
                                className="h-8 w-8 rounded-full bg-white/80 shadow-sm hover:bg-white transition-all duration-200"
                                aria-label="Next testimonial"
                                >
                                <ChevronRight className="h-4 w-4 text-primary-green-600" />
                                </Button>
                            </div> */}

                      {/* Indicator dots */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {event.testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTestimonialIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentTestimonialIndex
                                ? "bg-primary-green-600 w-4"
                                : "bg-gray-300 hover:bg-gray-400 w-2"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Free Webinar Card */}
            {/* <div className="mt-12 mb-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Upcoming Free Webinar
                  </h2>
                  <div
                    className="cursor-pointer rounded-xl lg:rounded-2xl transform transition-all duration-200 hover:scale-[1.01] hover:shadow-md"
                    onClick={() =>
                      router.push("/events/webinar-know-your-why/")
                    }
                  >
                    <Card className="border border-primary-blue-100 shadow-sm rounded-xl overflow-hidden">
                      <CardHeader className="bg-primary-blue-50 border-b border-primary-blue-100 pb-4">
                        <CardTitle className="text-xl text-primary-blue-700">
                          Online Workshop: Know Your Why
                        </CardTitle>
                        <CardDescription>
                          Is purpose the missing link in your journey? <br />{" "}
                          Join our webinar to learn what your &quot;why&quot; is
                          and how to find it for a purpose-driven career.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            <CalendarDays className="h-5 w-5 text-primary-blue-600 mr-2" />
                            <span>April 05, 2025</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-primary-blue-600 mr-2" />
                            <span>11:00 AM - 1:00 PM IST</span>
                          </div>
                          <div className="flex items-center">
                            <Timer className="h-5 w-5 text-primary-blue-600 mr-2" />
                            <span>2 hours</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 text-primary-blue-600 mr-2" />
                            <span>Zoom Webinar</span>
                          </div>
                          <div className="flex items-center">
                            <CreditCard className="h-5 w-5 text-primary-blue-600 mr-2" />
                            <span className="font-medium">Free</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div> */}
            {/* </div> */}

            {/* Registration card - 1/3 width on desktop, sticky on desktop */}
            {/* <div className="lg:block hidden"> */}
            {/* <div className="sticky top-48"> */}

            {/* <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Start Your Journey Now!
                  </CardTitle>

                  <CardDescription>
                    This is your chance to truly understand yourself, build your
                    own path, and take charge of your future.
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
                    <Separator /> */}
            {/* for future*/}
            {/* <div className="flex justify-between">
                      <span className="text-gray-600">
                        Registration Closing Date
                      </span>
                      <span className="font-medium">
                        {event.registrationEndDate
                          ? formatDate(event.registrationEndDate)
                          : "N/A"}
                      </span>
                    </div> */}
            {/* till here */}
            {/* </div>
                </CardContent> 
                <CardFooter className="flex flex-col space-y-2">
                  <div className="w-full text-center">
                    <p className="font-medium text-primary-blue-500">
                      Experience a Free Session
                    </p> */}
            {/* for future */}
            {/* <p className="text-xs text-gray-500 mb-2">
                        (condition applied)
                        </p> */}
            {/* till here */}
            {/* <Button
                      className="w-full bg-primary-blue-500 hover:bg-primary-blue-600 rounded-xl transition-all duration-400 transform hover:scale-115 hover:shadow-md animate-pulse-subtle"
                      disabled={registrationClosed}
                      onClick={() =>
                        setShowDesktopDialog((prevState) => !prevState)
                      }
                    >
                      {registrationClosed
                        ? "Registration Closed"
                        : "Schedule Now"}
                    </Button> */}
            {/* </div>
                  <Dialog
                    open={showDesktopDialog}
                    onOpenChange={setShowDesktopDialog}
                  >
                    <DialogContent className="sm:max-w-[900px] bg-gradient-to-r from-primary-green-200 to-white"> */}
            {/* not needed for now */}
            {/* <DialogHeader>
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
                      </DialogHeader> */}
            {/* till here  */}
            {/* <div>
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
                          <div className="space-y-8 flex justify-center flex-col items-center">
                            <iframe
                              src="https://scheduler.zoom.us/akarshedpsy/coachingsession?embed=true"
                              style={{
                                width: "100%",
                                height: "360px",
                                borderRadius: "12px",
                              }}
                              className="self-stretch shadow-md border"
                            ></iframe>
                            <div className="space-y-4">
                              <h4 className="font-medium">
                                After Schedule Checklist:
                              </h4>
                              <div className="flex flex-row gap-4">
                                <div className="flex items-start">
                                  <Mail className="h-5 w-5 text-primary-blue-700 mr-2 mt-0.5" />
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
                                  <Calendar className="h-5 w-5 text-primary-blue-700 mr-2 mt-0.5" />
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
                                  <CheckCircle className="h-5 w-5 text-primary-blue-700 mr-2 mt-0.5" />
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
                      </div> */}
            {/* not needed for now  */}
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
            {/* till here */}
            {/* </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card> */}
            {/* </div> */}
            {/* // </div> */}
          </div>
        </div>

        {/* Mobile sticky registration button */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="text-center mb-1">
            <p className="text-sm text-primary-blue-500 mb-1">
              Experience a Free Session
            </p>
            <Button
              className="w-full bg-primary-blue-500 hover:bg-primary-blue-600 rounded-xl transition-all duration-400 transform hover:scale-115 hover:shadow-md animate-pulse-subtle"
              disabled={registrationClosed}
              onClick={() => {
                if (window.innerWidth < 640) setShowMobileDialog(true);
                setIframeLoaded(false);
              }}
            >
              {registrationClosed ? "Registration Closed" : "Schedule Now"}
            </Button>
          </div>
          <Drawer open={showMobileDialog} onOpenChange={handleDrawerChange}>
            <DrawerContent className="bg-gradient-to-r from-primary-green-200 to-white">
              <div className="mx-auto w-full max-w-lg z-80">
                <DrawerHeader className="!pb-0">
                  <DrawerTitle className="!text-center">
                    {schedulingComplete
                      ? "Scheduling Complete!"
                      : "Schedule Your Free Session"}
                  </DrawerTitle>
                  <DrawerDescription className="text-center text-gray-600">
                    {schedulingComplete
                      ? "Thank you for scheduling your session"
                      : `Choose a time that works for you.`}
                  </DrawerDescription>
                </DrawerHeader>

                <div className="p-4">
                  {schedulingComplete ? (
                    <div className="space-y-6">
                      {/* <Alert className="bg-green-50 border-green-200">
                      <AlertDescription className="text-green-700">
                        Your session is scheduled! We&apos;ve sent a
                        confirmation email with all the details.
                      </AlertDescription>
                    </Alert> */}

                      <div className="space-y-4 py-8">
                        <h4 className="font-medium">
                          After Schedule Checklist:
                        </h4>
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-primary-blue-700 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Check Your Email</p>
                            <p className="text-sm text-gray-500">
                              We&apos;ve sent detailed instructions to your
                              email
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 text-primary-blue-700 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Add to Your Calendar</p>
                            <p className="text-sm text-gray-500">
                              Accept the calendar invite to your email
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-blue-700 mr-2 mt-0.5" />
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
                      {!iframeLoaded && (
                        <div
                          className="flex justify-center items-center bg-white rounded-xl"
                          style={{ height: "460px" }}
                        >
                          {/* shimmer effect instead of loading */}
                          <Loader2 className="animate-spin h-8 w-8 text-primary-blue-500" /> 
                        </div>
                      )}
                      <div
                        className="min-h-[460px] rounded-xl border overflow-hidden"
                        style={{ display: iframeLoaded ? "block" : "none" }}
                      >
                        <iframe
                          src="https://scheduler.zoom.us/akarshedpsy/coachingsession?embed=true"
                          title="zoom scheduler"
                          style={{
                            width: "100%",
                            minHeight: "inherit",
                            maxWidth: "750px",
                          }}
                          onLoad={() => setIframeLoaded(true)}
                        />
                      </div>
                      <Button
                        onClick={() => {
                          setSchedulingComplete(true);
                        }}
                        className="w-full bg-primary-blue-500 hover:bg-primary-blue-600 rounded-xl"
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
    </>
  );
};

export default CohortClient;

{
  /* <div className="flex flex-col items-center bg-gradient-to-r from-primary-blue-300 to white p-4 rounded-xl gap-2 mx-auto max-w-5xl border">
                <h1 className="text-2xl font-medium">
                  Schedule your Free Session
                </h1>
                <p className="text-gray-600 text-sm">
                  Choose a time that works for you
                </p>
                <div className="self-stretch shadow-md border min-h-96 rounded-xl overflow-hidden">
                  <iframe
                    src="https://scheduler.zoom.us/akarshedpsy/coachingsession?embed=true"
                    style={{
                      width: "100%",
                      minHeight: "inherit",
                      // borderRadius: "12px",
                      border: "none",
                    }}
                    title="zoom scheduler"
                  ></iframe>
                </div>
              </div> */
}

{
  /* <h2 className="self-start font-medium text-lg mt-2">After Schedule Checklist :</h2>
        <div className="flex justify-between self-stretch">
          <div>
            <p className="flex gap-2 items-center font-medium text-base">
              <Mail className="h-5 w-5 text-primary-blue-700" />
              <span>Check Your Email</span>
            </p>
            <p className="text-gray-600 text-sm">We&apos;ve sent detailed instructions to your email</p>
          </div>
          <div>
            <p className="flex gap-2 items-center font-medium text-base">
              <Calendar className="h-5 w-5 text-primary-blue-700" />
              <span>Add to Your Calendar</span>
            </p>
            <p className="text-gray-600 text-sm">Accept the calendar invite to your email</p>
          </div>
          <div>
            <p className="flex gap-2 items-center font-medium text-base">
              <CheckCircle className="h-5 w-5 text-primary-blue-700" />
              <span>Download Attached Goodie</span>
            </p>
            <p className="text-gray-600 text-sm">Download the attached pdf to your email</p>
          </div>
        </div> */
}
