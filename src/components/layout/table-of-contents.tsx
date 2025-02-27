"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/utils";

export interface Heading {
  id: string;
  text: string;
  level?: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  return (
    <aside className="w-full lg:w-80 sticky top-8 h-fit">
      <Card className="bg-white rounded-xl shadow-lg border-t-4 border-[#00B24B]">
        <CardHeader className="p-4 sm:p-5">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="toc"
          >
            <AccordionItem value="toc" className="border-none">
              <AccordionTrigger
                className={cn(
                  "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#00B24B]",
                  "lg:hidden p-0 hover:no-underline focus:ring-0"
                )}
                aria-label="Toggle Table of Contents"
              >
                <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                  Table of Contents
                </CardTitle>
              </AccordionTrigger>

              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 hidden lg:block mb-3 sm:mb-4">
                Table of Contents
              </CardTitle>

              <AccordionContent className="pt-0 mt-4 sm:mt-0">
                <ul className="space-y-1 text-sm">
                  {headings.map((heading: any) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className={`flex items-center py-1 sm:py-1.5 px-2 sm:px-3 rounded-md text-gray-700 hover:text-[#00B24B] hover:bg-gray-50 transition-colors duration-200 ${
                          heading.level === 1 ? "font-semibold" : "font-medium"
                        }`}
                      >
                        <span
                          className={`flex-1 ${
                            heading.level === 1 ? "" : "ml-4"
                          }`}
                        >
                          {heading.text}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardHeader>
      </Card>
    </aside>
  );
}
