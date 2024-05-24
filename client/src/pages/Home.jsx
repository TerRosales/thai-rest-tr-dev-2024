import { useState } from "react";
import { Button, Timeline } from "flowbite-react";
import images from "../assets/images.js";
import _ from "lodash";
import "../global.css";
import "./styles/home.css";

const Home = () => {
  // display all existing menu items
  const menuImages = Object.values(images.menu);

  const shuffledImages = _.shuffle(menuImages).slice(0, 4);
  return (
    <div className="homepage">
      <div className="min-h-screen flex w-full h-[95vh] py-5 text-black-600">
        <section className="flex flex-col w-2/5 marginLarge p-10 border-4 bg-[rgba(255,255,255,0.8)]">
          {/* Talk about the diverse menu */}
          <section className="flex flex-col">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae quis libero eaque ipsa accusamus deleniti blanditiis
              harum quasi, consequuntur enim?
            </p>
          </section>
          <section className="flex flex-wrap justify-end overflow-x-auto">
            {shuffledImages.map((src, index) => (
              <img
                key={index}
                className="showCaseImg"
                src={src}
                alt={`Menu item ${index}`}
              />
            ))}
          </section>
        </section>
        <div className="bgDisplay w-3/5 ">
          <img src={images.menu.avocTemp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
