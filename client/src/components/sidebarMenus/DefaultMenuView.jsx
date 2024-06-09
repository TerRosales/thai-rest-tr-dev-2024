import React from "react";
import { Button } from "flowbite-react";
import images from "../../assets/images.js";
import "../../global.css";
import "./styles/defaultView.css";

const DefaultMenuView = () => {
  return (
    <div className="defaultView max-w-6xl h-[70vh] p-10 flex flex-col text-center items-center">
      <div className="sectionBg shadow rounded-2xl py-5 flex flex-col m-4 w-[100%] text-center justify-center items-center">
        <h2 className="mb-10 text-3xl font-bold text-center">Thai Rest. 24</h2>
        <img
          src={images.utility.thaiBrand}
          alt="Thai food"
          className="w-[40%] h-[300px] object-fit"
        />
        <h3 className="my-5 text-xl font-bold text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          quam itaque at.
        </h3>
      </div>
    </div>
  );
};

export default DefaultMenuView;
