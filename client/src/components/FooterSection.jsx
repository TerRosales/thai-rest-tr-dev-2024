import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import images from "../assets/images.js";
import "../global.css";

const FooterComponent = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={images.utility.thaiBrand}
            alt="Flowbite Logo"
            name="Thai Rest.™"
          />
          <Footer.LinkGroup>
            <Link to="/">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="Thai Rest.™" year={2024} />
      </div>
    </Footer>
  );
};

export default FooterComponent;
