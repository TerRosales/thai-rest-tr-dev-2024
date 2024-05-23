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
    <section className="heroSection">
      <div className="pt-5 pl-5">
        <motion.img
          initial={{ x: -100, opacity: 0.9, rotate: -15 }}
          animate={{ x: [60, 40, 0], opacity: 1, rotate: [45, 30, 5] }}
          src={images.utility.thaiBrand}
          transition={{ duration: 3, type: "spring", stiffness: 500 }}
          alt="thai rest logo"
          className="h-[9rem] w-[9rem] lg:w-[12rem] lg:h-[12rem]"
        />
      </div>
      <Header />
      <motion.div
        initial={{ scale: 0, y: 200, opacity: 0 }}
        animate={{ opacity: 1, scale: 0.9, y: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
        className="heroIntro pt-[15%] pb-[7%] sm:pt-[6%]"
      >
        <motion.h1
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 1.9,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="heroTitle mainTitle mt-16"
        >
          Thai Rest<span className="text-white text-8xl">.&nbsp;</span>24
        </motion.h1>
        <p className="heroText mt-5 gradient">
          Welcome , We let you have a taste of the authentic food of Thailand,
          cooked delicately by our house chefs. Please explore our menu try out
          our combo builder, we have built this to to better serve you with only
          the amount of food you are down to eat.
        </p>
      </motion.div>

      <div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          className="scrollToButtom flex text-center items-center justify-center
      m-[5%] p-5"
        >
          <span className="absolute font-extrabold text-white z-10 textShadow">
            See More
          </span>
          <motion.img
            className="scrollBtn shadow-xl shadow-red-500 rounded-full cursor-pointer"
            src={
              isHovered ? images.utility.scrollClose : images.utility.scrollOpen
            }
            alt="scroll button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
