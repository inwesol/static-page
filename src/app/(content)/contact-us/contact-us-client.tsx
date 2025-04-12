"use client";

import { Footer, Navbar } from "@/components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building, Phone, Mail, Loader2 } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.enum(
    ["General Inquiry", "Support", "Feedback", "Partnership", "Other"],
    {
      errorMap: () => ({ message: "Please select a subject" }),
    }
  ),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactUsClient = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: "General Inquiry",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form?for=contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");

      // Reset form with explicit default values
      form.reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phone: "",
        subject: "General Inquiry",
      });
      setIsSubmitted(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // You could add error handling UI here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                  Get in touch
                </h1>
                <p className="text-gray-600 mb-8">
                  Have questions or want to learn more about our services?
                  We&apos;re here to help. Reach out to us using the contact
                  information below or fill out the form.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Building className="h-6 w-6 text-primary1" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700">Hyderabad</p>
                      <p className="text-gray-700">Telangana, IN 500081</p>
                    </div>
                  </div>

                  {/* <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary1" />
                    <div className="ml-4">
                      <p className="text-gray-700">+91 87128 88132</p>
                    </div>
                  </div> */}

                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary1" />
                    <div className="ml-4">
                      <p className="text-gray-700">contact@inwesol.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Image with Opacity */}
              <div
                className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-60 z-0 hidden sm:block"
                style={{
                  backgroundImage: "url('/contact-us.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">
                            First name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">
                            Last name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>

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
                            type="email"
                            placeholder="Enter your email address"
                            className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl"
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
                          Phone number (optional)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Subject
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white ">
                            <SelectItem
                              value="General Inquiry"
                              className="data-[highlighted]:bg-primary1 data-[highlighted]:text-white"
                            >
                              General Inquiry
                            </SelectItem>
                            <SelectItem
                              value="Support"
                              className="data-[highlighted]:bg-primary1 data-[highlighted]:text-white"
                            >
                              Support
                            </SelectItem>
                            <SelectItem
                              value="Feedback"
                              className="data-[highlighted]:bg-primary1 data-[highlighted]:text-white"
                            >
                              Feedback
                            </SelectItem>
                            <SelectItem
                              value="Partnership"
                              className="data-[highlighted]:bg-primary1 data-[highlighted]:text-white"
                            >
                              Partnership
                            </SelectItem>
                            <SelectItem
                              value="Other"
                              className="data-[highlighted]:bg-primary1 data-[highlighted]:text-white"
                            >
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here..."
                            rows={5}
                            className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-primary-blue-500 hover:bg-primary-blue-600 font-medium py-2 px-6 rounded-xl transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send message"
                      )}
                    </Button>
                  </div>

                  {isSubmitted && (
                    <Alert
                      variant="default"
                      className="bg-green-50 border-green-200"
                    >
                      <AlertDescription className="text-green-700">
                        Thank you for your message! We&apos;ll get back to you
                        soon.
                      </AlertDescription>
                    </Alert>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsClient;
