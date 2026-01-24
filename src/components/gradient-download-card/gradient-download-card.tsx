"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileDown } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface GradientDownloadCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  imageUrl?: string;
  pdfUrl: string;
  downloadFileName?: string;
  gradientColors?: {
    from: string;
    via?: string;
    to: string;
  };
  className?: string;
}

export default function GradientDownloadCard({
  icon,
  title,
  description,
  imageUrl,
  pdfUrl,
  downloadFileName,
  gradientColors = {
    from: "from-pink-500",
    via: "via-purple-500",
    to: "to-primary-blue-600",
  },
  className = "",
}: GradientDownloadCardProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download =
      downloadFileName ||
      title.replace(/[^a-z0-9]/gi, "-").toLowerCase() + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const gradientClass = `bg-gradient-to-br ${gradientColors.from} ${gradientColors.via || ""} ${gradientColors.to}`;

  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-2xl hover:-translate-y-3 ${gradientClass} rounded-xl cursor-pointer overflow-hidden relative ${className}`}
      onClick={handleDownload}
    >
      <CardContent className="p-0 relative z-10">
        {/* Overlay with same gradient but with opacity for better text readability */}
        <div className={`absolute inset-0 ${gradientClass} opacity-90`}></div>
        <div className="grid md:grid-cols-2 gap-0 relative z-10">
          {/* Left side - Content */}
          <div className="p-6 sm:p-10 sm:pt-12 sm:pb-12 flex flex-col justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-[6px] sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-5 text-white font-bold transition-colors">
              {title}
            </h3>
            <p className="text-base sm:text-lg text-white/90 sm:leading-relaxed mb-4 sm:mb-6">
              {description}
            </p>
            <div className="mt-auto flex items-center text-white font-semibold transition-colors">
              <FileDown className="size-4 sm:size-5 mr-2" />
              <span className="text-base sm:text-lg">Click to download PDF</span>
            </div>
          </div>
          {/* Right side - Image */}
          {imageUrl && (
            <div className="relative h-full min-h-[300px] sm:min-h-[400px] md:min-h-0 md:h-auto overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
