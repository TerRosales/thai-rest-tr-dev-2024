import "react-tabs/style/react-tabs.css";
import { Rating } from "flowbite-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import images from "../assets/images.js";
import "./styles/tabs.css";
import "../global.css";
import { data, defaultAvatars } from "./data.js";

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
  const limitedReviews = updatedReviews.slice(0, 5);

  return (
    <div className="homeTabs">
      <h2 className="mainTitle my-5">News and Updates</h2>
      <div>
        <Tabs forceRenderTabPanel>
          <TabList>
            <Tab>Our Perks</Tab>
            <Tab>Reviews</Tab>
            <Tab>Location Info</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>a </Tab>
                <Tab> b</Tab>
                <Tab> c</Tab>
                <Tab> d</Tab>
                <Tab> e</Tab>
              </TabList>
              <TabPanel>
                <p>a</p>
                <img src={images.menu.kaosoy} alt="Kao Soy" />
              </TabPanel>
              <TabPanel>
                <p>b</p>
                <img src={images.menu.padThai} alt="Pad Thai" />
              </TabPanel>
              <TabPanel>
                <p>c</p>
                <img src={images.menu.tomYum} alt="Tom Yum" />
              </TabPanel>
              <TabPanel>
                <p>d</p>
                <img src={images.menu.greenCurry} alt="Lisa Simpson" />
              </TabPanel>
              <TabPanel>
                <p>e</p>
                <img src={images.menu.chopSuey} alt="Maggie Simpson" />
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
                <section className="reviewsTab">
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
                          <p className="cardComment">
                            {review.comment}{" "}
                            <span className="cardDate">
                              &nbsp;&mdash;&nbsp; {review.date}
                            </span>
                          </p>
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
                <div>
                  <p>Map</p>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <p>Directions</p>
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