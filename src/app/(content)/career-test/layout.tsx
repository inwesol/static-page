import React from "react";
import { Footer, Navbar } from "@/components";
import { FormProvider as PersonalInfoFormProvider } from "@/context/personal-info-context/FormContext";
import { FormProvider as PydiFormProvider } from "@/context/pydi/FormContext";
import { Toaster } from "@/components/ui/sonner";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="h-full">
        <PersonalInfoFormProvider>
          <PydiFormProvider>{children}</PydiFormProvider>
        </PersonalInfoFormProvider>
      </main>
      {/* <Toaster position="top-right" expand /> */}
      <Footer />
    </>
  );
};

export default Layout;
