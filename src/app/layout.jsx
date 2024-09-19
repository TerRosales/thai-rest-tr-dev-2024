import React from "react";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import FooterNav from "@/components/FooterNav";
const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="h-[500vh]">
        <Navbar />
        <main>{children}</main>
        <FooterNav />
      </body>
    </html>
  );
};

export default RootLayout;
