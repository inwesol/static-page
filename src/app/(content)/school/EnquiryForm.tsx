"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Building2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  instituteName: z
    .string()
    .min(2, "Institute name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const EnquireyForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  // } = useForm<EnquiryForm>({
  //   resolver: zodResolver(enquirySchema),
  // });

  const form = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
  });

  // const onSubmit = async (data: EnquiryForm) => {
  //   console.log("Form submitted:", data);
  //   // await new Promise((resolve) => setTimeout(resolve, 1000));
  //   alert("Thank you for your enquiry! We will get back to you soon.");
  //   reset();
  // };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: EnquiryForm) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form?for=school-form", {
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
        name: "",
        email: "",
        phone: "",
        instituteName: "",
        message: "",
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
    <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0 rounded-xl ">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl sm:text-3xl text-gray-900 text-center">
          Partner with Inwesol
        </CardTitle>
        <p className="text-gray-600 text-center text-sm sm:text-base ">
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </p>
      </CardHeader>
      <CardContent className="p-4 pt-0 sm:p-8 sm:pt-4 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Phone number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Your phone number"
                          className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-2">
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
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="instituteName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Institute Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name of your institution"
                        className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
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
                        placeholder="Tell us about your educational goals and how we can help transform your institution..."
                        rows={5}
                        className="border-gray-300 bg-white focus:border-primary1 focus:ring-primary1 rounded-xl resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 hover:from-primary-green-600 hover:to-primary-blue-600 text-white sm:font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out text-sm sm:text-lg sm:px-10 sm:py-7 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <>
                    Send Enquiry
                    <Building2 className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
            {isSubmitted && (
              <Alert variant="default" className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-700">
                  Thank you for your message! We&apos;ll get back to you soon.
                </AlertDescription>
              </Alert>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EnquireyForm;
