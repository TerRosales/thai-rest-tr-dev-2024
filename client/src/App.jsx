import "./global.css";
import { Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import ScrollBtn from "./components/ScrollBtn";

function App() {
  return (
    <div className="">
      <HeroSection />
      <ScrollBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
