import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Drawer, Button, Sidebar } from "flowbite-react";
import images from "../assets/images.js";
import "../global.css";
import "./styles/menu.css";
import { menuItems } from "../components/sidebarMenus/menuData.js";
import DefaultMenuView from "../components/sidebarMenus/DefaultMenuView.jsx";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);
  const location = useLocation();

  const handleClose = () => setIsOpen(false);

  const handleMenuClick = () => {
    setMenuSelected(true);
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/menu") {
      setMenuSelected(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* main MENU body */}
      <div className="flex flex-col items-center gap-10 mb-10 justify-center">
        <div className="selectedMenu">
          {menuSelected ? <Outlet /> : <DefaultMenuView />}
        </div>
        <Button
          className="w-[95] h-[43px] border-[0.5px] border-yellow-200"
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
            <ul className="w-full p-2">
              {menuItems.map((item, index) => (
                <li className="flex flex-row m-4" key={index}>
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-[30px] mr-[15px]"
                  />
                  <span className="sidebarLink">
                    <Link to={`/menu/${item.route}`} onClick={handleMenuClick}>
                      {item.title}
                    </Link>
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
