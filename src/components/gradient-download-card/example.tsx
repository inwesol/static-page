/**
 * Example usage of GradientDownloadCard component
 * 
 * This component creates a beautiful gradient card with an optional image
 * that matches the Teenagers Ultimate Guide card design.
 */

import GradientDownloadCard from "./gradient-download-card";
import { Zap, Download, BookOpen } from "lucide-react";

export default function GradientDownloadCardExample() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-24">
      <div className="grid grid-cols-1 gap-4 sm:gap-8 max-w-4xl mx-auto">
        {/* Example 1: With image (like Teenagers Ultimate Guide) */}
        <GradientDownloadCard
          icon={<Zap className="size-5 sm:size-8" />}
          title="Teenagers Ultimate Guide"
          description="Understand your behaviours to grow, and protect what's matters to you."
          imageUrl="/teenagers-ultimate-guide.png"
          pdfUrl="/pdfs/teen-guide.pdf"
        />

        {/* Example 2: Without image */}
        <GradientDownloadCard
          icon={<BookOpen className="size-5 sm:size-8" />}
          title="Parent as a Mentor"
          description="Learn to mentor your teenager and support them in cultivating a learning mindset."
          pdfUrl="/pdfs/parents-guide.pdf"
          downloadFileName="parents-guide.pdf"
        />

        {/* Example 3: Custom gradient colors */}
        <GradientDownloadCard
          icon={<Download className="size-5 sm:size-8" />}
          title="Custom Gradient Card"
          description="This card uses custom gradient colors for a unique look."
          pdfUrl="/pdfs/example.pdf"
          gradientColors={{
            from: "from-blue-500",
            via: "via-indigo-500",
            to: "to-purple-600",
          }}
        />
      </div>
    </div>
  );
}
