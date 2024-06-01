import { useState } from "react";
import { Navbar } from "flowbite-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./styles/header.css";
import "../global.css";

import images from "../assets/images.js";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

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
        <NavLink to="/" className="mb-2">
          <motion.img
            initial={{ opacity: 0.9, rotate: -10 }}
            animate={{ opacity: 1, rotate: [25, 20, -15] }}
            src={images.utility.thaiBrand}
            transition={{
              delay: isHovered ? 0 : 1,
              duration: 3,
              type: "spring",
              stiffness: 500,
              repeat: 0,
            }}
            whileHover={{
              scale: isHovered ? 1.12 : 1,
              rotate: isHovered ? 25 : 0,
              transition: {
                duration: 0.3,
              },
            }}
            onHoverStart={() => setIsHovered(true)}
            alt="thai rest logo"
            className="thaiRestLogo h-[9rem] w-[9rem] lg:w-[12rem] lg:h-[12rem]"
          />
        </NavLink>
        <Navbar.Toggle className="flex mx-2 h-10 text-red-900 gradient shadow  text-center gap-2 p-2" />
        <Navbar.Collapse
          className="text-black h-8
      pt-2"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default Header;
