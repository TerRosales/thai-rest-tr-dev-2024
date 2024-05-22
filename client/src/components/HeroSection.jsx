import { useState } from "react";
import { motion, spring } from "framer-motion";
import Header from "./Header";
import "./styles/hero.css";
import images from "../assets/images.js";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div
        
        >
        <motion.img 
          initial={{ x: -100, opacity: 0.9, rotate: -15 }}
          animate={{x: 0, opacity: 1, rotate: [45,30,5], x: 0}} src={images.utility.thaiBrand} 
          transition={{ duration: 2,  type: "spring", stiffness: 300  }}
          alt="thai rest logo" className="absolute h-[10rem] w-[10rem]"/>
      </div>
      <div className="heroIntro pt-[14%] pb-[7%] sm:pt-[6%]">
      <h1 className="heroTitle">Thai Rest<span className="text-white text-6xl">.&nbsp;</span>24</h1>
      <p className="heroText mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        doloribus debitis dolore nostrum maiores error, quam illum minima veniam
        accusantium laudantium iste quis delectus nemo quibusdam ad eligendi
        maxime necessitatibus. Quod nam dignissimos eligendi repudiandae! Ad,
        ipsa quibusdam. Illo, nisi.
      </p>
      </div>
        <Header />
      <div className="scrollToButtom"></div>
    </section>
  );
};

export default HeroSection;
