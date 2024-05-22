import "./global.css";
import { Button, Timeline } from "flowbite-react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
