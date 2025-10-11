"use client";
import { useEffect, ReactNode, MouseEvent } from "react";
import { createPortal } from "react-dom";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function CustomDialog({
  isOpen,
  onClose,
  children,
}: CustomDialogProps) {
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

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-xl w-full m-4 max-w-lg p-0 relative rounded-xl overflow-hidden"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
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