"use client";
import { useState } from "react";
import ModalCTA from "@/components/ui/modal-cta";

export default function HomePageClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="h-full">
      <ModalCTA isOpen={showModal} setIsOpen={setShowModal} delay={5000} />
      {children}
    </div>
  );
}