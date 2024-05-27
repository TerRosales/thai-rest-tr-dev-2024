import { Carousel } from "flowbite-react";
import images from "../assets/images.js";
import _ from "lodash";
import "../global.css";
import "./styles/home.css";
import HomeTabs from "../components/HomeTabs.jsx";

const Home = () => {
  // display all existing menu items
  const menuImages = Object.values(images.menu);

  const shuffledImages = _.shuffle(menuImages);
  return (
    <div className="homepage grid grid-cols-2 justify-center items-center">
      {/* Intro Section */}
      <section className="homeIntro h-[60vh] shadow rounded-2xl flex flex-col bg-[rgba(255,255,255,0.7)] justify-center text-left marginLarge">
        <h2 className="mainTitle my-2">Lorem, ipsum dolor.</h2>
        <p className="my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          quis libero eaque ipsa accusamus deleniti blanditiis harum quasi,
          consequuntur enim?
        </p>
        <div className="relative flex mb-10">
          <p className="absolute left-[55%] top-full mt-2 textItem">
            Choose Your Heat Level
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="homeTopSection justify-center flex flex-col h-[60vh] bg-[rgba(255,255,255,0.7)] shadow rounded-2xl marginLarge">
        <h2 className="mainTitle my-2">Our Top Items</h2>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          necessitatibus inventore minus eum recusandae!
        </p>
        <div className="h-60 sm:h-64 xl:h-80 2xl:h-96 mb-2">
          <Carousel
            pauseOnHover={true}
            slideInterval={3000}
            className="carousel"
          >
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

      {/* reviews */}
      <section className="reviewsSection col-start-1 col-end-3 h-auto shadow rounded-2xl flex flex-col bg-[rgba(255,255,255,0.7)] marginLarge">
        <HomeTabs />
      </section>
    </div>
  );
};

export default Home;
