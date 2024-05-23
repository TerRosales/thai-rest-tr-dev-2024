import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import "./styles/hero.css";
import "../global.css";
import images from "../assets/images.js";

const HeroSection = () => {
  const [scroll, setScroll] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const boxShadow = ["0 0 10px 0 rgba(0, 0, 0, 0.5)"];

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ease: "easeIn", duration: 1.2}}
      className="heroSection shadow">
          <div className="header pt-[22%] pb-[5vh]">
            <Header />
          </div>
      {/* <motion.div
        initial={{ scale: 0, y: 200, opacity: 0 }}
        animate={{ opacity: 1, scale: 0.9, y: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
        className="heroIntro pt-[2%] pb-[2%] gradient"
      >
        <h1
          
          className="heroTitle mainTitle m-2"
        >
          Thai Rest<span className="">.&nbsp;</span>24
        </h1>
        <p className="heroText m-2 p-2">
          Welcome , We let you have a taste of the authentic food of Thailand,
          cooked delicately by our house chefs. Please explore our menu try out
          our combo builder, we have built this to to better serve you with only
          the amount of food you are down to eat.
        </p>
      </motion.div> */}
    </motion.section>
  );
};

export default HeroSection;
