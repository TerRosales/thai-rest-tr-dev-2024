import Header from "./Header";
import "./styles/hero.css";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <h1 className="heroTitle">Thai Rest 24</h1>
      <p className="heroIntro">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        doloribus debitis dolore nostrum maiores error, quam illum minima veniam
        accusantium laudantium iste quis delectus nemo quibusdam ad eligendi
        maxime necessitatibus. Quod nam dignissimos eligendi repudiandae! Ad,
        ipsa quibusdam. Illo, nisi.
      </p>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="scrollToButtom"></div>
    </section>
  );
};

export default HeroSection;
