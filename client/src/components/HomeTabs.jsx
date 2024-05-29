import "react-tabs/style/react-tabs.css";
import { Rating } from "flowbite-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import images from "../assets/images.js";
import "./styles/tabs.css";
import "../global.css";
import { data, defaultAvatars } from "./data.js";
import ScrollBtn from "./ScrollBtn.jsx";
import ThaiRestMap from "./ThaiRestMap.jsx";

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
                <Tab>Hard Hitter Specials</Tab>
                <Tab>Catering Specials</Tab>
                <Tab>Our Team</Tab>
                <Tab>Questions?</Tab>
              </TabList>
              <TabPanel>
                <p>Hard Hitter Specials</p>
                <img src={images.menu.padThai} alt="Pad Thai" />
              </TabPanel>
              <TabPanel>
                <p>Catering Specials</p>
                <img src={images.menu.tomYum} alt="Tom Yum" />
              </TabPanel>
              <TabPanel>
                <p>Our Team</p>
                <img src={images.menu.chopSuey} alt="Maggie Simpson" />
              </TabPanel>
              <TabPanel>
                <p>Questions?</p>
                <img src={images.menu.greenCurry} alt="Lisa Simpson" />
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>
                  <h2 className="titleItem">Reviews</h2>
                </Tab>
              </TabList>
              <TabPanel>
                <section className="reviewsTab flex flex-col">
                  <div className="reviews">
                    {limitedReviews.map((review) => (
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
                  <div className="h-[10vh]">
                    <h1 className="mainTitle">NextSection</h1>
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
                  <div className="mapContainer">
                    <ThaiRestMap />
                  </div>
                  <div className="hoursDisplay font-semibold">
                    <h2 className="titleItem">Hours</h2>
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
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex directionsSection p-5">
                  <section className="flex flex-col gap-2 mx-2">
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
