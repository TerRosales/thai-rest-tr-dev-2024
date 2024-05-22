import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import "./styles/header.css";
import images from "../assets/images.js";
const Header = () => {
  return (
    <Navbar fluid rounded className="w-full h-14">
      <Navbar.Brand href="/" className="flex flex-col">
        <img
          src={images.utility.thaiBrand}
          alt="thai rest logo"
          className="w-24 h-24"
        />
        {/* <span className="absolute font-extrabold text-[14px] text-orange-700 mt-16 bg-gradient-to-tl from-yellow-200 to-purple-400 p-1 rounded-xl border-2 border-purple-900">
          Thai-Rest
        </span> */}
      </Navbar.Brand>
      {/* <Button className="" gradientDuoTone="purpleToPink" outline>
        Combo Builder
      </Button> */}
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link>
        <Link to="/">
          Home
        </Link>
        </Navbar.Link>
        <Navbar.Link>
        <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link>
        <Link to="/menu">Menu</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
