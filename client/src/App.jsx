import "./global.css";
import { Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import ScrollBtn from "./components/ScrollBtn";

function App() {
  return (
    <div className="">
      <HeroSection />
      <ScrollBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
