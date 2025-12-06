"use client";
import React from "react";
import { Modal, ModalTrigger, ModalBody } from "@/components/ui/animated-modal";

interface StickyBannerContentProps {
  content?: string;
  pdfSrc?: string;
  pdfTitle?: string;
}

export const StickyBannerContent = ({
  content = "Announcement",
  pdfSrc = "/pdfs/Announcement.pdf",
  pdfTitle = "Announcement",
}: StickyBannerContentProps = {}) => {
  // Add URL parameters to hide PDF viewer controls
  const pdfUrlWithParams = `${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <Modal>
      <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
        {content}{" "}
        <ModalTrigger className="inline transition duration-200 hover:underline cursor-pointer font-medium p-0 bg-transparent text-white dark:text-white">
          Know more!
        </ModalTrigger>
      </p>

      <ModalBody className="max-w-6xl w-[95%] min-h-auto p-0">
        <div className="relative w-full h-full min-h-[70vh] bg-gray-100 dark:bg-gray-900 overflow-auto">
          <embed
            src={pdfUrlWithParams}
            type="application/pdf"
            className="w-full h-full min-h-[70vh]"
            aria-label={pdfTitle}
          />
        </div>
      </ModalBody>
    </Modal>
  );
};
