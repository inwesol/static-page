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
  time?: string;
  duration: string;
  format: string;
  price: number;
  currency: string;
  location: EventLocation;
  seats?: number;
  seatsRemaining?: number;
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
  occupation: z.string().optional(),
  company: z.string().optional(),
  specialRequirements: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface EventsClientProps {
  event: Event;
}

const WebinarClient: React.FC<EventsClientProps> = ({ event }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const router = useRouter();

  // Form setup
  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      occupation: "",
      company: "",
      specialRequirements: "",
    },
  });

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (event.testimonials && event.testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % event.testimonials!.length
        );
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [event.testimonials]);

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

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "/api/submit-form?for=webinar-registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");

      // Reset form with explicit default values
      form.reset({
        fullName: "",
        email: "",
        phone: "",
        occupation: "",
        company: "",
        specialRequirements: "",
      });
      setSubmitSuccess(true);

      // Reset success message after 5 seconds
      //   setTimeout(() => {
      //     setSubmitSuccess(false);
      //   }, 5000);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Event details */}
          <div>
            <div className="mb-6">
              <Badge className="mb-2 bg-primary-green-100 text-primary-green-800 hover:bg-primary-green-200">
                {getEventTypeLabel(event.type)}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {event.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{event.description}</p>

              {/* <div className="grid grid-cols-1 gap-4 mb-8"> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center">
                  <Timer className="h-5 w-5 text-primary-green-600 mr-2" />
                  <span>{event.duration}</span>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-green-600 mr-2" />
                  <span>{getLocationString()}</span>
                </div>
              </div>
            </div>

            {/* Instructor information */}
            {event.instructor && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  Workshop Instructor
                </h3>
                <Card className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl">
                  <CardContent className="p-6 bg-primary-green-50 rounded-xl">
                    <div className="flex flex-col md:flex-row gap-6 ">
                      <div className="md:w-1/4 w-1/3 mx-auto md:mx-0">
                        <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center bg-primary-green-100 text-primary-green-800">
                            <Image
                              src={event.instructor.imageUrl}
                              alt={event.instructor.name}
                              width={200}
                              height={200}
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
                        <p className="text-gray-600">{event.instructor.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Event testimonials if any */}
            {event.testimonials && event.testimonials.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  What Participants Say
                </h3>
                <Card className="border border-gray-200 hover:shadow-md transition-shadow rounded-xl">
                  <CardContent className="p-6">
                    <div className="relative">
                      <div className="testimonial-slider">
                        <div className="text-center py-4">
                          <p className="text-gray-600 italic mb-6">
                            &quot;
                            {event.testimonials[currentTestimonialIndex].review}
                            &quot;
                          </p>
                          <p className="font-medium">
                            {event.testimonials[currentTestimonialIndex].name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {
                              event.testimonials[currentTestimonialIndex]
                                .position
                            }
                          </p>
                        </div>
                      </div>
                      {event.testimonials.length > 1 && (
                        <div className="flex justify-center mt-4 gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={goToPreviousTestimonial}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={goToNextTestimonial}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Right side - Registration form */}
          <div>
            <Card className="shadow-md border-none bg-gray-50 rounded-xl">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary-green-800 mt-2 text-center">
                  Register for Free Workshop
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-medium text-green-800 mb-2">
                        Registration Successful!
                      </h3>
                      <p className="text-green-700">
                        Thank you for registering for {event.title}. We&apos;ve
                        sent you a confirmation email with all the details.
                      </p>
                    </div>
                    <Button
                      className="bg-primary-green-600 hover:bg-primary-green-700 hover:text-white rounded-xl transition-all duration-400 transform hover:scale-115 hover:shadow-md animate-pulse-subtle"
                      onClick={() => router.push("/events/cohort/")}
                    >
                      Book Free Cohort Session
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                className="border-gray-300 bg-white focus:border-primary-green-500 focus:ring-primary-green-500 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your email address"
                                className="border-gray-300 bg-white focus:border-primary-green-500 focus:ring-primary-green-500 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your phone number"
                                className="border-gray-300 bg-white focus:border-primary-green-500 focus:ring-primary-green-500 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              Occupation (optional)
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your occupation"
                                className="border-gray-300 bg-white focus:border-primary-green-500 focus:ring-primary-green-500 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              Company (optional)
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your company name"
                                className="border-gray-300 bg-white focus:border-primary-green-500 focus:ring-primary-green-500 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialRequirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              Your Message (optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Let us know if you have any thoughts or questions"
                                className="min-h-[125px] border-gray-300 bg-white focus:border-primary-green-500 focus:ring-primary-green-500 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-primary-blue-600 hover:bg-primary-blue-700 hover:text-white rounded-xl transition-all duration-400 transform hover:scale-115 hover:shadow-md animate-pulse-subtle"
                        disabled={isSubmitting || registrationClosed}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : registrationClosed ? (
                          "Registration Closed"
                        ) : (
                          "Register Now"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
              <CardFooter className="flex flex-col">
                <p className="text-xs text-gray-500 text-center">
                  By registering, you agree to our terms and conditions. Your
                  information will be handled as described in our privacy
                  policy.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarClient;
