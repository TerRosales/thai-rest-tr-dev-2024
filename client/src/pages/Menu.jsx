import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Drawer, Button, Sidebar } from "flowbite-react";
import images from "../assets/images.js";
import { HiViewBoards } from "react-icons/hi";
import "../global.css";
import "./styles/menu.css";
// Import content components
import TopDishes from "../components/sidebarMenus/TopDishes";
import ThaiCourses from "../components/sidebarMenus/ThaiCourses";
import FilipinoCourses from "../components/sidebarMenus/FilipinoCourses";
import BurmeseCourses from "../components/sidebarMenus/BurmeseCourses";
import Beverages from "../components/sidebarMenus/Beverages";
import Appetizers from "../components/sidebarMenus/Appetizers";
import Dessert from "../components/sidebarMenus/Dessert";

const menuItems = [
  {
    route: "top-dishes",
    title: "Top Dishes",
    icon: images.utility.sidebar[0],
  },
  {
    route: "thai-courses",
    title: "Thai Courses",
    icon: images.utility.sidebar[1],
  },
  {
    route: "filipino-courses",
    title: "Filipino Courses",
    icon: images.utility.sidebar[2],
  },
  {
    route: "burmese-courses",
    title: "Burmese Courses",
    icon: images.utility.sidebar[3],
  },
  {
    route: "beverages",
    title: "Beverages",
    icon: images.utility.sidebar[4],
  },
  {
    route: "appetizers",
    title: "Appetizers",
    icon: images.utility.sidebar[5],
  },
  {
    route: "dessert",
    title: "Dessert",
    icon: images.utility.sidebar[0],
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* main MENU body */}
      <div className="flex flex-col items-center gap-10 p-10 justify-center">
        <div className="selectedMenu">
          <Outlet />
        </div>
        <Button
          className="w-[95] h-[43px] border-[1px] border-yellow-200"
          gradientDuoTone="pinkToOrange"
          onClick={() => setIsOpen(true)}
        >
          Select Dish
        </Button>
      </div>
      {/* Drawers */}
      <Drawer open={isOpen} onClose={handleClose} className="gradient-flip">
        <img
          className="w-[54%] h-[18%] mx-auto"
          src={images.utility.thaiBrand}
          alt=""
        />
        <Drawer.Header title="Menu" />
        <Drawer.Items>
          <Sidebar aria-label="sidebarThai">
            <ul className="w-full p-4">
              {menuItems.map((item, index) => (
                <li className="flex flex-row" key={index}>
                  <img src={item.icon} alt="" className="w-[30px]" />
                  <span className="sidebarLink">
                    <Link to={`/menu/${item.title}`}>{item.title}</Link>
                  </span>
                </li>
              ))}
            </ul>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Menu;
