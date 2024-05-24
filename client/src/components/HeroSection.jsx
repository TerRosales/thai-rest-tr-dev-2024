import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import "./styles/hero.css";
import "../global.css";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 1.2 }}
      className="heroSection shadow"
    >
      <div className="header pt-[22%] pb-[5vh]">
        <Header />
      </div>
      <div>
        <h2>Taste</h2>
      </div>
    </motion.section>
  );
};

export default HeroSection;
