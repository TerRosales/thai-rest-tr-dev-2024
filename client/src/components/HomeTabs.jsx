import "react-tabs/style/react-tabs.css";
import { Rating } from "flowbite-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import images from "../assets/images.js";
import "./styles/tabs.css";
import "../global.css";
import { data, defaultAvatars } from "./data.js";
import ScrollBtn from "./ScrollBtn.jsx";
import ThaiRestMap from "./ThaiRestMap.jsx";
import SpecialsTab from "./SpecialsTab.jsx";

const HomeTabs = () => {
  // randomizer for default avatars
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
    return defaultAvatars[randomIndex];
  };

  const updatedReviews = data.reviews.map((review) => ({
    //add "index" to the parameters if you want to use the other option below -- for src: defaultAvatars[index % defaultAvatars.length]
    ...review,
    avatar: { src: getRandomAvatar() }, // other option -- defaultAvatars[index % defaultAvatars.length]
  }));

  // Limit the number of reviews to 4
  const limitedReviews = updatedReviews.slice(0, 6);

  return (
    <div className="homeTabs">
      <div className="secondScroller">
        <ScrollBtn />
      </div>
      <h2 className="mainTitle my-5">News and Updates</h2>
      <div>
        <Tabs forceRenderTabPanel>
          <TabList>
            <Tab>Latest News</Tab>
            <Tab>Reviews</Tab>
            <Tab>Location Info</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Specials</Tab>
                <Tab>Catering Specials</Tab>
              </TabList>
              <TabPanel>
                <div className="specialsTab">
                  <SpecialsTab />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="cateringSpecialsTab flex flex-col gap-4 👉">
                  <p className="titleItem">Catering Specials</p>
                  <p>👉 We price our caterings orders per container. </p>
                  <p>👉 Each container serves 10 people.</p>
                  <p>
                    👉 Call{" "}
                    <span className="underline underline-offset-2">
                      000-000-0000
                    </span>{" "}
                    for more information
                  </p>
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Reviews</Tab>
              </TabList>
              <TabPanel>
                <section className="reviewsTab flex flex-col">
                  <div className="reviews">
                    {updatedReviews.map((review) => (
                      <div key={review.userId} className="reviewCard">
                        <section className="cardUser">
                          <img
                            className="avatar"
                            src={review.avatar.src}
                            alt={review.username}
                          />
                          <p>{review.username}</p>
                        </section>
                        <Rating className="ratings">
                          {[...Array(review.rating)].map((_, i) => (
                            <Rating.Star key={i} />
                          ))}
                          {[...Array(5 - review.rating)].map((_, i) => (
                            <Rating.Star key={i} filled={false} />
                          ))}
                          <p className="reviewStars ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            {review.rating} out of 5
                          </p>
                          <div className="comment">
                            <p className="cardComment">
                              {review.comment}{" "}
                              <span className="cardDate">
                                &nbsp;&mdash;&nbsp; {review.date}
                              </span>
                            </p>
                          </div>
                        </Rating>
                      </div>
                    ))}
                  </div>
                </section>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList>
                <Tab>Map</Tab>
                <Tab>Directions</Tab>
              </TabList>
              <TabPanel>
                <div className="mapSection flex gap-10">
                  <section className="mapContainer">
                    <div className="flex">
                      <p className="titleItem">We are located at:&nbsp;</p>
                      <p className="titleItem mx-2 hover:bg-yellow-100 rounded-xl">
                        📍 9999 NotKnown Ave. IDK, 49999
                      </p>
                    </div>
                    <ThaiRestMap />
                  </section>
                  <section className="hoursDisplay font-semibold">
                    <h2 className="titleItem">Business Hours</h2>
                    <p>Monday: 9am to 11pm</p>
                    <p>Tuesday: 9am to 11pm</p>
                    <p>Wednesday: 9am to 11pm</p>
                    <p>Thursday: 9am to 11pm</p>
                    <p>Friday: 9am to 11pm</p>
                    <p>Saturday: 9am to 11pm</p>
                    <p>Sunday: 9am to 11pm</p>
                    <p>
                      Questions? Please Call{" "}
                      <span className="underline underline-offset-2">
                        000-000-0000
                      </span>
                    </p>
                  </section>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex directionsSection p-5">
                  <section className="flex flex-col gap-2 mx-2">
                    <h2 className="titleItem">
                      We Apologize for the Inconvenience!
                    </h2>
                    <span className="underline underline-offset-2">
                      Need more help locating us?
                    </span>
                    <p>
                      Call us at{" "}
                      <span className="underline underline-offset-2">
                        000-000-0000
                      </span>
                    </p>
                    <p>
                      One of our associates will be more than happy to assist
                      you.
                    </p>
                    <p>
                      We apologize in advance,We Hope to serve you soon, Thank
                      you for choosing us!
                    </p>
                  </section>
                  <section>
                    <img
                      className="apologyImg"
                      src={images.design.apologyImg}
                      alt=""
                    />
                  </section>
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeTabs;
