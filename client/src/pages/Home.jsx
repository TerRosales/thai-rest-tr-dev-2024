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
      <section className="homeIntro h-[60vh] shadow rounded-2xl flex flex-col sectionBg gap-10 justify-center text-left marginLarge">
        <h2 className="mainTitle my-2">Thai Rest. 24</h2>
        <p className="my-2 mx-4 textItem">
          Experience the finest cuisine in a cozy and elegant atmosphere.
          Indulge in our exquisite dishes and exceptional service. We offer a
          variety of dishes to suit every taste. Our menu is carefully crafted
          to ensure that you have a memorable dining experience.
        </p>
      </section>
      {/* Slider Section */}
      <section className="homeTopSection justify-center flex flex-col h-[60vh] sectionBg shadow rounded-2xl marginLarge">
        <h2 className="mainTitle my-2">Our Top Items</h2>
        <p className="textItem my-2 mx-4">
          Our top items are carefully selected to provide you with the best
          dining experience.
        </p>

        <div className="h-60 sm:h-64 xl:h-70 2xl:h-96 mb-2">
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
      <section className="reviewsSection col-start-1 col-end-3 h-auto shadow rounded-2xl flex flex-col sectionBg marginLarge">
        <HomeTabs />
      </section>
    </div>
  );
};

export default Home;
