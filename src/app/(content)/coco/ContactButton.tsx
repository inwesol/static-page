"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function ContactButton() {
  const router = useRouter();
  return (
    <Button
      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 hover:from-primary-green-600 hover:to-primary-blue-600 text-white sm:font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out text-sm sm:text-lg sm:px-10 sm:py-7"
      onClick={() => router.push("/contact-us")}
    >
      Contact Support
      <MessageCircle className="ml-2 w-4 h-4" />
    </Button>
  );
}
