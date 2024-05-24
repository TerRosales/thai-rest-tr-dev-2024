import { useState } from "react";
import { Button, Timeline, Carousel } from "flowbite-react";
import images from "../assets/images.js";
import _ from "lodash";
import "../global.css";
import "./styles/home.css";

const Home = () => {
  // display all existing menu items
  const menuImages = Object.values(images.menu);

  const shuffledImages = _.shuffle(menuImages);
  return (
    <div className="homepage flex">
      <section className="min-h-screen flex h-[95vh] text-black-600 w-3/5">
        <div className="homeIntro shadow rounded-2xl flex flex-col marginLarge p-10 bg-[rgba(245,245,245,0.6)]">
          {/* Talk about the diverse menu */}
          <section className="flex flex-col">
            <h2 className="mainTitle">Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae quis libero eaque ipsa accusamus deleniti blanditiis
              harum quasi, consequuntur enim?
            </p>
          </section>
        </div>
      </section>
      <section className="w-2/5 marginLarge">
        <div className="flex flex-col marginSmal">
          <h2 className="titleItem">Our Top Specialties</h2>
          <p className="marginSmall bg-gradient-to-tl from-yellow-100 to-red-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            necessitatibus inventore minus eum recusandae! Accusantium suscipit
            quod voluptatibus modi ducimus ad nesciunt quo quibusdam totam
            soluta? Quo at saepe, nisi ipsa deserunt quae harum ex incidunt
            architecto, libero vero perferendis sit voluptate delectus iure!
          </p>
        </div>
        <div className="my-5 h-60 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            {shuffledImages.map((src, index) => (
              <div
                key={index}
                className="showCaseImg"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                alt={`Menu item ${index}`}
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Home;
