import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import FooterComponent from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollBtn from "./components/ScrollBtn";
import DefaultMenuView from "./components/sidebarMenus/DefaultMenuView";
import GenericMenu from "./components/sidebarMenus/GenericMenu";

function App() {
  return (
    <div className="">
      <HeroSection />
      <ScrollBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/*" element={<Menu />}>
          <Route path="default-view" element={<DefaultMenuView />} />
          <Route path=":category" element={<GenericMenu />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
