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
      initial={{ scale: 0, y: 150, opacity: 0.1 }}
      animate={{ opacity: 1, y: 0, scale: 0.8 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className=""
    >
      <Navbar
        fluid
        className="flex bg-[rgba(255,255,255,0])] shadow-red-500/60 rounded-2xl w-[90%] mx-auto justify-between"
      >
        <Link to="/" className="mb-2">
        <motion.img
          initial={{ opacity: 0.9, rotate: -10 }}
          animate={{ opacity: 1, rotate: [35, 30, -15] }}
          src={images.utility.thaiBrand}
          transition={{ delay: 1,duration: 3, type: "spring", stiffness: 500 }}
          alt="thai rest logo"
          className="h-[9rem] w-[9rem] lg:w-[12rem] lg:h-[12rem]"
        />
        </Link>
        <Navbar.Toggle className="h-10 text-red-600 gradient shadow" />
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
