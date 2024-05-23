import { Button, Navbar } from "flowbite-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/header.css";
import "../global.css";

import images from "../assets/images.js";
const Header = () => {
  return (
    // addintional styles for navbar at header.css
    <motion.div
      initial={{ scale: 0, y: 200, opacity: 0.1 }}
      animate={{ opacity: 1, y: 0, scale: 0.8 }}
      transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
      className=""
    >
      <Navbar
        fluid
        className="bg-[rgba(255,255,255,0)] shadow-red-500/60 rounded-2xl w-[65%] mx-auto flex justify-between"
      >
        {/* <Navbar.Brand href="/" className="mb-2">
          <img
            src={images.utility.thaiBrand}
            alt="thai rest logo"
            className="absolute w-20 h-20"
          />
          <span className="absolute h-8 font-extrabold text-[14px] text-red-600 mt-16 gradient py-[0.2rem] px-2 rounded-xl">
            Thai-Rest
          </span>
        </Navbar.Brand> */}
        {/* <Button className="" gradientDuoTone="purpleToPink" outline>
        Combo Builder
      </Button> */}
        <Navbar.Toggle className="h-10 text-red-600 bg-gradient-to-t from-yellow-200 to-red-200" />
        <Navbar.Collapse
          className="h-8
      pt-2"
        >
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/menu">Menu</Link>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default Header;
