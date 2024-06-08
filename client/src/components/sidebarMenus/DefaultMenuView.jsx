import React from "react";
import { Button } from "flowbite-react";
import images from "../../assets/images.js";
import "../../global.css";
import "./styles/defaultView.css";

const DefaultMenuView = () => {
  return (
    <div className="defaultView gradient h-[70vh] p-10 flex-col text-center items-center">
      <h2 className="mb-10 text-3xl font-bold text-center">Thai Rest. 24</h2>
      <div className="flex">
        <div className="flex flex-col m-4 w-[100%] text-center justify-center items-center">
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
        <div className="flex flex-col justify-center text-center gap-10 pr-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            quasi porro quo perferendis perspiciatis, sequi illo quisquam at
            aliquid officia!
          </p>
          <section className="flex justify-end">
            <Button
              gradientDuoTone="pinkToOrange"
              className="border-[0.5px] border-yellow-200"
            >
              Start a Basket
            </Button>
          </section>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DefaultMenuView;
