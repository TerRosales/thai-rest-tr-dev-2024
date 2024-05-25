import { Footer } from "flowbite-react";
import images from "../assets/images.js";

const FooterComponent = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={images.utility.thaiBrand}
            alt="Flowbite Logo"
            name="Thai Rest. 24"
          />
          <Footer.LinkGroup>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="/menu">Menu</Footer.Link>
            <Footer.Link href="/contact">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="Thai Rest.™" year={2024} />
      </div>
    </Footer>
  );
};

export default FooterComponent;
