"use client";
import React, { useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome } from "@tabler/icons-react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Menu",
      link: "/menu",
      icon: (
        <MdOutlineRestaurantMenu className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
