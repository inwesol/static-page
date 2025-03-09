import React from "react";
import { Footer, Navbar } from "@/components";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main className="h-full">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
