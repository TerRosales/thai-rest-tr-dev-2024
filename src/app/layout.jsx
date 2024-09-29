import React from "react";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import FooterNav from "@/components/FooterNav";

export const metadata = {
  title: "Food Zone",
  description: "Food Zone",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="">
        <Navbar />
        <main>{children}</main>
        <FooterNav />
      </body>
    </html>
  );
};

export default RootLayout;
