import React, { ReactNode } from 'react';
import { Footer, Navbar } from "@/components";
import { Toaster } from 'react-hot-toast';



interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
      
<Toaster />
    </div>
  );
};

export default Layout;