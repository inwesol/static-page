"use client";
import { useEffect, ReactNode, MouseEvent } from "react";
import { createPortal } from "react-dom";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function CustomDialog({ isOpen, onClose, children }: CustomDialogProps) {
  // Disable background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Don’t render if not open
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-lg m-4 p-0 relative"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} // prevent closing on inner click
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
