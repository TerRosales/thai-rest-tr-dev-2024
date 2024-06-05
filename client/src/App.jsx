import "./global.css";
import { Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import ScrollBtn from "./components/ScrollBtn";

import TopDishes from "./components/sidebarMenus/TopDishes";
import ThaiCourses from "./components/sidebarMenus/ThaiCourses";
import FilipinoCourses from "./components/sidebarMenus/FilipinoCourses";
import MyanmarCourses from "./components/sidebarMenus/MyanmarCourses";
import Beverages from "./components/sidebarMenus/Beverages";
import Appetizers from "./components/sidebarMenus/Appetizers";
import Dessert from "./components/sidebarMenus/Dessert";

function App() {
  return (
    <div className="">
      <HeroSection />
      <ScrollBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/*" element={<Menu />}>
          <Route path="top-dishes" element={<TopDishes />} />
          <Route path="thai-courses" element={<ThaiCourses />} />
          <Route path="filipino-courses" element={<FilipinoCourses />} />
          <Route path="myanmar-courses" element={<MyanmarCourses />} />
          <Route path="beverages" element={<Beverages />} />
          <Route path="appetizers" element={<Appetizers />} />
          <Route path="dessert" element={<Dessert />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
