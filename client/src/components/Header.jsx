import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import "./styles/header.css";
import images from "../assets/images.js";
const Header = () => {
  return (
    // addintional styles for navbar at header.css
    <Navbar fluid className="border-red-500 border-[1px] border-t-[0]shadow-lg shadow-red-500/60 rounded-2xl w-[60%] mx-auto">
      <Navbar.Brand href="/" className="mb-2">
        <img
          src={images.utility.thaiBrand}
          alt="thai rest logo"
          className="absolute w-20 h-20"
        />
        <span className="absolute font-extrabold text-[14px] text-orange-700 mt-16 bg-gradient-to-tl from-yellow-200 to-purple-400 p-1 rounded-xl border-2 border-purple-900">
          Thai-Rest
        </span>
      </Navbar.Brand>
      {/* <Button className="" gradientDuoTone="purpleToPink" outline>
        Combo Builder
      </Button> */}
      <Navbar.Toggle className="h-10 text-red-600"/>
      <Navbar.Collapse className="h-10
      pt-2">
        <Link to="/">
          Home
        </Link>
        
        <Link to="/about">About</Link>
        
        <Link to="/menu">Menu</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
