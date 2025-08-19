"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";
import { ZoomSessionSkeletonCard } from "./zoom-session-skeleton-card";
import {
  CalendarDays,
  Clock,
  MapPin,
  CheckCircle,
  ChevronRight,
  Calendar,
  CreditCard,
  Mail,
  Search,
  ChevronLeft,
  Timer,
  MonitorCheck,
  Star,
  ArrowRight,
  CalendarClock,
  Sparkles,
  User,
  BookOpen,
  Award,
  Target,
  Zap,
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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
// import RotatingBorderButton from "@/components/ui/rotating-border-button";
import SimpleSlider from "./../../coco/SimpleSlider";
import { motion } from "framer-motion";
import { useIsDesktop } from "./UseIsDesktop";

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
  quote: string;
  name: string;
  title: string;
  company?: string;
  avatar: string;
  rating: number;
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
  prerequisite?: EventOffer[];
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
  // const [showMobileDialog, setShowMobileDialog] = useState<boolean>(false);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  // const [desktopIframeLoaded, setDesktopIframeLoaded] =
  // useState<boolean>(false);
  const router = useRouter();
  // const [isDesktopDialogOpen, setIsDesktopDialogOpen] =
  useState<boolean>(false);
  const isDesktop = useIsDesktop();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Open dialog automatically on page load
  // const timerIdRef = useRef<number | null>(null);
  // const prevWidthRef = useRef<number>(
  //   typeof window !== "undefined" ? window.innerWidth : 0
  // );
  // const isFirstRun = useRef(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const currentWidth = window.innerWidth;
  //     // only skip if not first-time run and width hasnt changed
  //     if (!isFirstRun.current && prevWidthRef.current === currentWidth) return;

  //     prevWidthRef.current = currentWidth; // update ref

  //     if (currentWidth >= 640) {
  //       setIsDialogOpen(false);
  //       setIframeLoaded(false);
  //       if (timerIdRef.current) {
  //         clearTimeout(timerIdRef.current);
  //         timerIdRef.current = null;
  //       }
  //     } else {
  //       if (timerIdRef.current) clearTimeout(timerIdRef.current);
  //       timerIdRef.current = window.setTimeout(() => {
  //         setIsDialogOpen(true);
  //       }, 3000);
  //       isFirstRun.current = false; // After first run, set to false
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // call once on mount

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     if (timerIdRef.current) clearTimeout(timerIdRef.current);
  //   };
  // }, []);

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
        return "Coaching Session";
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

  const handleDialogState = () => {
    setIsDialogOpen(true);
    setIframeLoaded(false);
  };

  return (
    <>
      <div className="relative">
        {/* new */}
        <div className="bg-gray-50">
          <div className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="Learning Workshop"
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-primary-green-900/90 via-primary-blue-800/85 to-primary-green-600/90"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-green-500/10 to-transparent animate-pulse"></div>

            <div className="absolute top-16 left-4 sm:top-20 sm:left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100"></div>
            <div className="absolute top-32 right-4 sm:top-40 sm:right-20 w-3 h-3 bg-primary-green-300/40 rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-24 left-4 sm:bottom-32 sm:left-20 w-1 h-1 bg-primary-green-300/50 rounded-full animate-bounce delay-500"></div>

            <motion.div
              className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex justify-center mb-3 sm:mb-6">
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-green-400 via-blue-500 to-green-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative flex items-center space-x-1 sm:space-x-2 bg-white/15 backdrop-blur-lg border border-white/30 rounded-full px-3 py-2 sm:px-6 sm:py-3 hover:bg-white/20 transition-all duration-300">
                      <Sparkles
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-spin"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
                        PREMIUM WORKSHOP
                      </span>
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block text-white drop-shadow-lg">
                      Cultivating Learning
                    </span>
                    <span className="block bg-gradient-to-r from-green-200 via-blue-200 to-primary-green-200 bg-clip-text text-transparent animate-pulse">
                      Mindset
                    </span>
                  </h1>

                  <div className="flex justify-center">
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary-green-400 to-primary-blue-400 rounded-full"></div>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed font-light px-2">
                  Discover your unique strengths and ignite your passions
                  through our transformative workshop designed to
                  <span className="text-green-300 font-medium">
                    {" "}
                    build self-awareness
                  </span>{" "}
                  and
                  <span className="text-blue-300 font-medium">
                    {" "}
                    shape your extraordinary future
                  </span>
                  .
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-8">
                  <Button
                    className="group relative overflow-hidden bg-gradient-to-r from-primary-green-500 to-primary-blue-600 hover:from-primary-green-400 hover:to-primary-blue-500 text-white font-semibold px-4 py-2 sm:px-10 sm:py-7 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-sm sm:text-base"
                    onClick={handleDialogState}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div className="relative flex items-center space-x-2 sm:space-x-3">
                      <CalendarClock className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Book Free Session</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Button>
                </div>

                <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-4 sm:pt-8 opacity-90">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white/50"
                        ></div>
                      ))}
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      500+ Success Stories
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      4.9/5 Rating
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
          </div>
        </div>
        {/* new */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col">
            <div className="mb-6">
              <Badge className="mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-green-600 via-primary-blue-600 to-primary-green-600 text-white shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border border-white/20">
                {getEventTypeLabel(event.type)}
              </Badge>
              <br />
              <h1 className="mb-4 text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-primary-green-600 to-primary-blue-600 inline-block">
                {event.title}
              </h1>
              <p className="mb-6 text-sm sm:text-base md:text-lg text-slate-600">
                {event.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* nothing is getitng rendered here as startDate and endDate or date is missing */}
                {event.startDate && event.endDate ? (
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-2 text-primary-green-600" />
                    <span>
                      {formatDate(event.startDate)} -{" "}
                      {formatDate(event.endDate)}
                    </span>
                  </div>
                ) : event.date ? (
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-2 text-primary-green-600" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                ) : null}

                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-green-600" />
                  <span>{event.duration}</span>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-green-600" />
                  <span>{getLocationString()}</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="offers" className="mb-10 ">
              <div className="relative overflow-x-auto bg-muted scrollbar-hide pb-2">
                <TabsList className="bg-transparent max-w-4xl mr-auto">
                  {event.offers && (
                    <TabsTrigger
                      value="offers"
                      className="sm:px-4 md:text-base  data-[state=active]:text-primary-green-600 data-rap[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent flex items-center px-2 py-3 font-semibold text-sm lg:text-base whitespace-nowrap transition-all duration-300"
                    >
                      <BookOpen className="size-4 mr-2" />
                      What&apos;s Inside?
                    </TabsTrigger>
                  )}
                  {event.facilitates && (
                    <TabsTrigger
                      value="facilitates"
                      className="sm:px-4 py-3 px-2 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                    >
                      <Search className="size-4 mr-2" />
                      Why This Program?
                    </TabsTrigger>
                  )}
                  {event.achieves && (
                    <TabsTrigger
                      value="achieves"
                      className="sm:px-4 py-3 px-2 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                    >
                      <Target className="size-4 mr-2" />
                      What&apos;ll You Get?
                    </TabsTrigger>
                  )}

                  <TabsTrigger
                    value="instructor"
                    className="sm:px-4 py-3 px-2 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                  >
                    <Award className="size-4 mr-2" />
                    Program Coach
                  </TabsTrigger>
                  {event.prerequisite && (
                    <TabsTrigger
                      value="prerequisite"
                      className="sm:px-4 py-3 px-2 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent "
                    >
                      <User className="size-4 mr-2" />
                      Let&apos;s Get Ready
                    </TabsTrigger>
                  )}

                  {/* right now not here so nothing rendered form this block */}
                  {(event.schedule || event.agenda) && (
                    <TabsTrigger
                      value="schedule"
                      className="sm:px-4 py-3 px-2 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:text-primary-green-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-green-600 border-b-2 border-transparent"
                    >
                      {event.schedule ? "Schedule" : "Agenda"}
                    </TabsTrigger>
                  )}
                </TabsList>
              </div>

              <div className="sm:mt-4 mt-2">
                {event.offers && (
                  <TabsContent value="offers">
                    <div className="animate-in fade-in-50 duration-300">
                      <div className="bg-white rouned-[6px] lg:rounded-2xl rounded-[6px] sm:rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary-green-500 to-primary-green-600 p-3 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                            <BookOpen className="size-5 sm:size-7 mr-3" />
                            What's Inside?
                          </h3>
                        </div>
                        <div className="p-4 sm:p-6 lg:p-8">
                          <div className="grid gap-4 sm:gap-6">
                            {event.offers.map((offer, index) => (
                              <div
                                key={index}
                                className="group flex items-start p-3 sm:p-6 bg-gradient-to-r from-primary-green-50 to-primary-green-100/50 rounded-[6px] sm:rounded-2xl border border-primary-green-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                              >
                                <div className="p-2 sm:p-3 bg-primary-green-500 rounded-[6px] lg:rounded-xl sm:rounded-xl mr-2 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                                  <Search className="size-5 sm:size-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-base sm:text-lg font-bold text-primary-green-800 sm:mb-1">
                                    {offer.heading}
                                  </h4>
                                  <p className="text-slate-700 text-sm sm:text-base">
                                    {offer.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* new */}
                  </TabsContent>
                )}

                {event.facilitates && (
                  <TabsContent value="facilitates">
                    <div className="animate-in fade-in-50 duration-300">
                      <div className="bg-white rouned-[6px] lg:rounded-2xl rounded-[6px] sm:rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary-blue-500 to-primary-blue-600 p-3 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                            <Target className="size-5 sm:size-7 mr-3" />
                            Why Choose This Program?
                          </h3>
                        </div>
                        <div className="p-4 sm:p-6 lg:p-8">
                          <div className="grid gap-4 sm:gap-6">
                            {event.facilitates.map((item, index) => (
                              <div
                                key={index}
                                className="group flex items-start p-3 sm:p-6 bg-gradient-to-r from-primary-blue-50 to-primary-blue-100/50 rounded-[6px] sm:rounded-2xl border border-primary-blue-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                              >
                                <div className="p-2 sm:p-3 bg-primary-blue-500 rounded-[6px] lg:rounded-xl sm:rounded-xl mr-2 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                                  <ChevronRight className="size-5 sm:size-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-base sm:text-lg font-bold text-primary-blue-800 sm:mb-1">
                                    {item.heading}
                                  </h4>
                                  <p className="text-slate-700 text-sm sm:text-base">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                )}

                {event.achieves && (
                  <TabsContent value="achieves">
                    <div className="animate-in fade-in-50 duration-300">
                      <div className="bg-white rouned-[6px] lg:rounded-2xl rounded-[6px] sm:rounded-xl shadow-lg border border-slate-100 overflow-hidden ">
                        <div className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 p-3 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                            <Award className="size-5 sm:size-7 mr-3" />
                            What You'll Achieve
                          </h3>
                        </div>
                        <div className="p-4 sm:p-6 lg:p-8">
                          <div className="grid gap-4 sm:gap-6">
                            {event.achieves.map((item, index) => (
                              <div
                                key={index}
                                className="group flex items-start p-3 sm:p-6 bg-gradient-to-r from-primary-green-50 via-white to-primary-blue-50 border border-slate-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-[6px] sm:rounded-2xl"
                              >
                                <div className="p-2 sm:p-3  bg-gradient-to-r from-primary-green-500 to-primary-blue-500 rounded-[6px] sm:rounded-xl mr-2 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                                  <CheckCircle className="size-5 sm:size-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-base sm:text-lg  font-bold bg-gradient-to-r from-primary-green-700 to-primary-blue-700 bg-clip-text text-transparent sm:mb-1">
                                    {item.heading}
                                  </h4>
                                  <p className="text-slate-700 text-sm sm:text-base">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                )}

                <TabsContent value="instructor">
                  {/* new */}
                  <div className="animate-in fade-in-50 duration-300">
                    <div className="bg-white rouned-[6px] lg:rounded-2xl rounded-[6px] sm:rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary-green-500 to-primary-blue-500 p-3 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                          <User className="size-5 sm:size-7 mr-3" />
                          Meet Your Program Coach
                        </h3>
                      </div>
                      <div className="p-4 sm:p-6 lg:p-8">
                        <div className="bg-gradient-to-br from-primary-green-50 via-white to-primary-blue-50 rounded-[6px] sm:rounded-2xl p-3 sm:p-6 border border-slate-200/50">
                          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center lg:items-start">
                            <div className="relative group">
                              <div className="absolute inset-0 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                  src={event.instructor.imageUrl}
                                  alt={event.instructor.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                            </div>
                            <div className="flex-1 text-center lg:text-left">
                              <h4 className="text-xl sm:text-3xl font-bold text-slate-900 sm:mb-2 mb-1">
                                {event.instructor.name}
                              </h4>
                              <p className="text-lg sm:text-xl text-primary-green-600 font-semibold mb-3 sm:mb-6">
                                {event.instructor.title}
                              </p>
                              <p className="text-slate-700 text-sm sm:text-lg">
                                {event.instructor.bio}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* new */}
                </TabsContent>

                {event.prerequisite && (
                  <TabsContent value="prerequisite">
                    <div className="animate-in fade-in-50 duration-300">
                      <div className="bg-white rounded-[6px] lg:rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary-blue-600 to-primary-green-600 p-3 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                            <Zap className="size-5 sm:size-7 mr-3" />
                            Let's Get You Ready
                          </h3>
                        </div>
                        <div className="p-4 sm:p-6 lg:p-8">
                          <div className="grid gap-4 sm:gap-6">
                            {event.prerequisite.map((item, index) => (
                              <div
                                key={index}
                                className="group flex items-start bg-gradient-to-r from-primary-blue-50 to-primary-green-50 rounded-[6px] lg:rounded-2xl border border-slate-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-3 sm:p-6"
                              >
                                <div className="p-2 sm:p-3 bg-gradient-to-r from-primary-blue-500 to-primary-green-500 rounded-xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                                  <MonitorCheck className="size-5 sm:size-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary-blue-700 to-primary-green-700 bg-clip-text text-transparent sm:mb-1">
                                    {item.heading}
                                  </h4>
                                  <p className="text-slate-700 text-sm sm:text-base">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                )}

                {(event.schedule || event.agenda) && (
                  <TabsContent value="schedule">
                    <div>
                      <h3 className="mb-4 text-xl font-semibold">
                        {event.schedule ? "Program Schedule" : "Event Agenda"}
                      </h3>
                      <div className="space-y-4">
                        {(event.schedule || event.agenda)?.map(
                          (item, index) => (
                            <Card key={index}>
                              <CardContent className="p-4">
                                <div className="flex flex-col justify-between md:flex-row md:items-center">
                                  <div>
                                    <p className="font-medium text-primary-green-600">
                                      {item.topic || item.activity}
                                    </p>
                                    {item.session && (
                                      <p className="text-sm text-slate-500">
                                        Session {item.session}
                                      </p>
                                    )}
                                  </div>
                                  <div className="mt-2 text-sm text-slate-600 md:mt-0">
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

            {/* dialog */}
            {isDesktop ? (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="md:max-w-3xl lg:max-w-4xl bg-gradient-to-br from-primary-green-100 via-white to-primary-green-100 md:rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-green-600 to-primary-blue-600">
                      Schedule Your Free Session
                    </DialogTitle>
                    <DialogDescription className="text-slate-600 text-sm text-center">
                      Choose a time that works for you
                    </DialogDescription>
                  </DialogHeader>

                  {!iframeLoaded && (
                    <div className="border border-slate-200 hover:shadow-md transition-shadow rounded-xl h-[640px] overflow-hidden self-stretch bg-white flex">
                      <ZoomSessionSkeletonCard />
                    </div>
                  )}
                  <div
                    className="border border-slate-200 hover:shadow-md transition-shadow rounded-xl min-h-[640px] overflow-hidden self-stretch"
                    style={{ display: iframeLoaded ? "block" : "none" }}
                  >
                    <iframe
                      src="https://scheduler.zoom.us/akarshedpsy/coachingsession?embed=true"
                      style={{
                        width: "100%",
                        minHeight: "inherit",
                        border: "none",
                      }}
                      onLoad={() => setIframeLoaded(true)}
                      title="zoom scheduler"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Drawer open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DrawerContent className="bg-gradient-to-br from-primary-green-100 via-white to-primary-green-100">
                  <div className="mx-auto w-full max-w-3xl z-80">
                    <DrawerHeader className="!pb-0">
                      <DrawerTitle>
                        <div className="text-center">
                          <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary-green-600 to-primary-blue-600">
                            {schedulingComplete
                              ? "Scheduling Complete!"
                              : "Schedule Your Free Session"}
                          </p>
                        </div>
                      </DrawerTitle>
                      <DrawerDescription className="text-center text-slate-600">
                        {schedulingComplete
                          ? "Thank you for scheduling your session"
                          : `Choose a time that works for you.`}
                      </DrawerDescription>
                    </DrawerHeader>

                    <div className="p-4">
                      {schedulingComplete ? (
                        <div className="space-y-6">
                          <div className="space-y-4 py-8">
                            <h4 className="font-medium">
                              After Schedule Checklist:
                            </h4>
                            <div className="flex items-start">
                              <Mail className="h-5 w-5 text-primary-blue-700 mr-2 mt-0.5" />
                              <div>
                                <p className="font-medium">Check Your Email</p>
                                <p className="text-sm text-slate-500">
                                  We&apos;ve sent detailed instructions to your
                                  email
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Calendar className="h-5 w-5 text-primary-blue-700 mr-2 mt-0.5" />
                              <div>
                                <p className="font-medium">
                                  Add to Your Calendar
                                </p>
                                <p className="text-sm text-slate-500">
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
                                <p className="text-sm text-slate-500">
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
                              className="flex justify-center items-center bg-white rounded-xl border"
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
                            className="group relative overflow-hidden bg-gradient-to-r from-primary-green-500 to-primary-blue-600 hover:from-primary-green-400 hover:to-primary-blue-500 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-sm w-full"
                            onClick={() => {
                              setSchedulingComplete(true);
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <div className="relative flex items-center space-x-2">
                              <CalendarClock className="w-4 h-4" />
                              <span>Confirm Scheduling</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            )}

            <div className="max-w-7xl mx-auto mb-8">
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-900">
                  Disover Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-green-600 via-primary-blue-600 to-primary-green-600">
                    WHY ?
                  </span>
                </h1>
                <p className="text-center text-slate-600 text-sm sm:text-lg">
                  Unlock the deeper meaning behind your career choices and
                  well-being journey
                </p>
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-primary-green-500 to-primary-blue-600 hover:from-primary-green-400 hover:to-primary-blue-500 text-white font-semibold px-4 py-2 sm:px-10 sm:py-7 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-sm sm:text-base mt-4"
                  onClick={handleDialogState}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 "></div>
                  <div className="relative flex items-center space-x-2 sm:space-x-3">
                    <CalendarClock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Book Free Session</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Button>
              </div>
            </div>

            {/* Testimonials Section */}
            {event.testimonials && event.testimonials.length > 0 && (
              <div className="mb-8">
                <Badge className="mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-green-600 via-primary-blue-600 to-primary-green-600 text-white shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border border-white/20">
                  Testimonials
                </Badge>
                <br />
                <h2 className="mb-4 text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-primary-green-600 to-primary-blue-600 inline-block">
                  What People Say?
                </h2>
                {/* glass design around testimonial */}
                {/* <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-lg backdrop-blur-md">
                  <div className="absolute -top-16 -left-20 w-72 h-72 bg-primary-green-400 opacity-20 rounded-full blur-3xl z-0"></div>
                  <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-primary-blue-500 opacity-20 rounded-full blur-3xl z-0"></div>

                  <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-green-300/30 via-transparent to-blue-400/0 rounded-full blur-[120px] z-0"></div>

                  <div className="relative z-10 py-6 sm:px-6 md:p-10"> */}
                {event.testimonials?.length > 0 && (
                  <SimpleSlider
                    testimonials={event.testimonials}
                    slidesToShow={1}
                    isNavigation={true}
                  />
                )}
                {/* </div> */}
              </div>
              // </div>
            )}
          </div>
        </div>

        {/* mobile sticky registration button */}
        {!isDesktop && (
          <div className="block md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-lg z-50">
            <div className="text-center mb-1">
              <p className="text-sm text-primary-blue-500 mb-1">
                Experience a Free Session
              </p>
              <Button
                className="group relative overflow-hidden bg-gradient-to-r from-primary-green-500 to-primary-blue-600 hover:from-primary-green-400 hover:to-primary-blue-500 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-sm w-full"
                disabled={registrationClosed}
                onClick={handleDialogState}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-center space-x-2 ">
                  <CalendarClock className="w-4 h-4" />
                  <span>
                    {registrationClosed
                      ? "Registration Closed"
                      : "Schedule Now"}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CohortClient;
