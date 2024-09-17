import React from "react";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { HeroParallaxDemo } from "@/components/HeroParallax";
const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="h-[500vh]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
