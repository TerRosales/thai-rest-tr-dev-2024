import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Drawer, Button, Sidebar } from "flowbite-react";
import images from "../assets/images.js";
import { HiViewBoards } from "react-icons/hi";
import "../global.css";
import "./styles/menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[100vh] justify-center">
        <Button
          className=" w-[95] h-[43px] border-[1px] border-yellow-200"
          gradientDuoTone="pinkToOrange"
          onClick={() => setIsOpen(true)}
        >
          Select Dish
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="gradient-flip">
        <img
          className="w-[55%] h-[20%] mx-auto"
          src={images.utility.thaiBrand}
          alt=""
        />
        <Drawer.Header title="Menu" />
        <Drawer.Items>
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  href="#"
                  label="August"
                  labelColor="failure"
                  icon={HiViewBoards}
                >
                  Top Dishes
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Thai Courses
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Filipino Courses
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Chinese Courses
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Burmses Courses
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Beverages
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Appetizers
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Dessert
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Menu;
