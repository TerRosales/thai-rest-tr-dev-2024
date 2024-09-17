import React from "react";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import Divider from "@mui/material/Divider";
import HomeTabs from "@/components/HomeTabs";
import HeroStatement from "@/components/HeroStatement";

const HomePage = () => {
  return (
    <div className="relative">
      <HeroParallaxDemo />
      <HeroStatement />
      <Divider className="bg-[#0b0b0b]" />
      <HomeTabs />
    </div>
  );
};

export default HomePage;
