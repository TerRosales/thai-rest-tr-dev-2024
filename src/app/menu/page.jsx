"use client";
import React from "react";
import { MenuSelection } from "@/components/menuComponents/MenuSelection";
import "@/styles/menuPageStyles/menu.css";
import HeaderTItle from "@/components/HeaderTItle";

const MenuPage = () => {
  return (
    <div className="overflow-auto menuHero">
      {/* <section className="flex">
        <Link href="/">
          <Image
            className="inline-block mt-5 ml-2 lg:ml-5"
            src="/images/logo.png"
            width={160}
            height={160}
            alt="logo"
          />
        </Link>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-red-500 ml-4 lg:ml-4 mt-16">
          Our Menus
        </h1>
      </section> */}
      <HeaderTItle title="Our Menus" />
      <MenuSelection />
    </div>
  );
};

export default MenuPage;
