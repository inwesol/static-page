import React from "react";
import { Footer, Navbar } from "@/components";
import { FormProvider } from "@/context/personal-info-context/FormContext";
import { Toaster } from "@/components/ui/sonner";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="h-full">
        <FormProvider>{children}</FormProvider>
      </main>
      {/* <Toaster position="top-right" expand /> */}
      <Footer />
    </>
  );
};

export default Layout;
