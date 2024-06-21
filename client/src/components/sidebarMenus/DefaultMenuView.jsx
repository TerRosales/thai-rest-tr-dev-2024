import { useState } from "react";
import images from "../../assets/images.js";
import "../../global.css";
import "./styles/defaultView.css";
import MenuCards from "../MenuCards";

const DefaultMenuView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePickMenuItem = () => {
    setIsOpen(true);
    console.log("Pick a menu item");
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="defaultView w-full h-[70vh] p-2 flex flex-col text-center items-center">
        <div className="sectionBg shadow rounded-2xl py-5 px-2 flex flex-col w-[100%] text-center justify-center items-center">
          <h2 className="mb-10 mainTitle text-center">Thai Rest. 24</h2>
          <img
            src={images.utility.thaiBrand}
            alt="Thai food"
            className="logo w-[40%] h-[300px] object-fit"
          />
          <h3 className="my-5 text-xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quam itaque at.
          </h3>
        </div>
        <MenuCards
          isOpen={isOpen}
          handlePickMenuItem={handlePickMenuItem}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </>
  );
};

export default DefaultMenuView;
