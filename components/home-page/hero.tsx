"use client";

// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera, ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Asset imports
import Logo from "@/public/in-bg.svg";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const Hero = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        // Reset form or show success message
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      // Show error message to user
    }
  }

  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Logo}
          width={472}
          height={272}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <h1 className="!mb-0">
          <Balancer>Self Discovery Leads To Excellence</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Realise your capability and chart your career path.
          </Balancer>
        </h3>
        <h3 className="text-muted-foreground">
          <Balancer>Get notified when we launch.</Balancer>
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 flex h-fit items-center justify-center gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex h-fit items-center justify-center gap-2">
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="md:w-64"
                        placeholder="Your email address"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Submitting..."
                        : "Notify Me!"}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        {/* <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Lorem Ipsum
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">
              Dolor Sit Amet <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
        </div> */}
      </Container>
    </Section>
  );
};

export default Hero;
