"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Building2 } from "lucide-react";

export default function EnquireyForm() {
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
  });
  const onSubmit = async (data: EnquiryForm) => {
    console.log("Form submitted:", data);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you for your enquiry! We will get back to you soon.");
    reset();
  };

  return (
    <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0 rounded-xl ">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl sm:text-3xl text-gray-900 text-center">
          Get Started Today
        </CardTitle>
        <p className="text-gray-600 text-center text-sm sm:text-base ">
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </p>
      </CardHeader>
      <CardContent className="p-4 pt-0 sm:p-8 sm:pt-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="name"
                {...register("name")}
                className="border-gray-300 rounded-[10px] bg-white placeholder:text-slate-400"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Phone <span className="text-red-600">*</span>
              </Label>
              <Input
                id="phone"
                {...register("phone")}
                className="border-gray-300 rounded-[10px] bg-white placeholder:text-slate-400"
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email <span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="border-gray-300 rounded-[10px] bg-white placeholder:text-slate-400"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="instituteName"
              className="text-gray-700 font-medium"
            >
              Institute Name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="instituteName"
              {...register("instituteName")}
              className="border-gray-300 rounded-[10px] bg-white placeholder:text-slate-400"
              placeholder="Name of your institution"
            />
            {errors.instituteName && (
              <p className="text-sm text-red-600">
                {errors.instituteName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700 font-medium">
              Message <span className="text-red-600">*</span>
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              className="border-gray-300 min-h-[120px] rounded-[10px] bg-white placeholder:text-slate-400"
              placeholder="Tell us about your educational goals and how we can help transform your institution..."
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message.message}</p>
            )}
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
        </form>
      </CardContent>
    </Card>
  );
}
