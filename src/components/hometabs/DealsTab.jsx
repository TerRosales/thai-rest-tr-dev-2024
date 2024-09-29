"use client";
import React, { useState, useEffect } from "react";
import { addOns } from "@/assets/data/data";
import { Modal, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { MdFileOpen } from "react-icons/md";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

const DealsTab = () => {
  const [open, setOpen] = useState(false);
  const [addOns, setAddOns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddOns = async () => {
      try {
        const response = await fetch("/api/menu/add-ons");
        if (!response.ok) {
          throw new Error("Failed to fetch add-ons");
        }

        if (response.ok) {
          console.log("response ok");
          const data = await response.json();
          setAddOns(data);
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAddOns();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className="max-w-7xl mx-auto py-12">
      {/* <!-- Title --> */}
      <h4 className="text-4xl font-bold text-center text-red-500 mb-12">
        Our Price Tiers
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg relative p-8 text-center transform transition duration-300 hover:scale-105">
          <Image
            src="/images/basic-deals.png"
            alt="Basic Combo"
            className="w-full h-auto rounded-lg mb-4"
            width={150}
            height={150}
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white font-bold text-xl px-4 py-2 rounded-lg">
            $12.99
          </div>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Basic Combo
          </h2>
          <ul className="list-none mb-6 space-y-2">
            <li>
              <span className="font-semibold text-red-500">1 Main </span> Combo
              Meal
            </li>
            <li>
              Choice of <em>Filipino Chicken Adobo</em>,{" "}
              <em>Thai Basil Chicken</em>, <em>Burmese Noodles</em>, or{" "}
              <em>Sweet & Sour Pork</em>
            </li>
            <li>
              <span className="font-semibold text-red-500">1 Drink: </span>
              <em>Thai Iced Tea</em>, <em>Filipino Sago&rsquo;t Gulaman</em>, or{" "}
              <em>Soda</em>
            </li>
          </ul>
          <p className="italic text-gray-600">
            Perfect for lunch breaks or casual dining!
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg relative p-8 text-center transform transition duration-300 hover:scale-105">
          <Image
            src="/images/deluxe-deals.png"
            alt="Deluxe Combo"
            className="w-full h-auto rounded-lg mb-4"
            width={150}
            height={150}
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white font-bold text-xl px-4 py-2 rounded-lg">
            $18.99
          </div>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Deluxe Combo
          </h2>
          <ul className="list-none mb-6 space-y-2">
            <li>
              <span className="font-semibold text-red-500">1 Main </span> Combo
              Meal
            </li>
            <li>
              <span className="font-semibold text-red-500">1 Appetizer: </span>
              <em>Burmese Samosa</em>, <em>Thai Spring Rolls</em>, or{" "}
              <em>Pork Siomai</em>
            </li>
            <li>
              <span className="font-semibold text-red-500">1 Drink: </span>{" "}
              <em>Thai Iced Tea</em>, <em>Filipino Sago&rsquo;t Gulaman</em>, or{" "}
              <em>Soda</em>
            </li>
          </ul>
          <p className="italic text-gray-600">
            Ideal for a full meal experience with a delightful starter!
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg relative p-8 text-center transform transition duration-300 hover:scale-105">
          <Image
            src="/images/premium-deals.png"
            alt="Premium Feast Combo"
            className="w-full h-auto rounded-lg mb-4"
            width={150}
            height={150}
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white font-bold text-xl px-4 py-2 rounded-lg">
            $24.99
          </div>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Premium Feast Combo
          </h2>
          <ul className="list-none mb-6 space-y-2">
            <li>
              <span className="font-semibold text-red-500">1 Main </span> Combo
              Meal
            </li>
            <li>
              <span className="font-semibold text-red-500">1 Appetizer: </span>{" "}
              <em>Burmese Samosa</em>, <em>Thai Spring Rolls</em>, or{" "}
              <em>Pork Siomai</em>
            </li>
            <li>
              <span className="font-semibold text-red-500">1 Soup: </span>{" "}
              <em>Tom Yum Soup</em> or <em>Chinese Hot and Sour Soup</em>
            </li>
            <li>
              <span className="font-semibold text-red-500">1 Drink: </span>
              <em>Thai Iced Tea</em>, <em>Filipino Sago and Gulaman</em>, or{" "}
              <em>Soda</em>
            </li>
          </ul>
          <p className="italic text-gray-600">
            Perfect for date nights or when you want a little bit of everything!
          </p>
        </div>
      </div>

      {/* <!-- Add-ons Section --> */}
      <div className="bg-white shadow-lg rounded-lg p-8 mt-12 text-center">
        <button
          className="text-2xl font-semibold text-red-500 mb-4 shadow-md hover:translate-y-[-1px]"
          onClick={handleOpen}
        >
          <span className="flex p-2 border-[1px] border-red-500 rounded-lg">
            <span>Add Ons</span>{" "}
            <MdFileOpen className="ml-1 translate-y-[6px]" />
          </span>
        </button>
        <p className="text-gray-600 mb-2">
          Add a dessert like <em>Halo-Halo</em> or{" "}
          <em>Sticky Rice with Mango</em> for just $4.99!
        </p>
        <p className="text-gray-600">
          Make your meal extra special with a premium drink upgrade for only $2!
        </p>
      </div>
      <div>
        {/* Modal Component */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="add-ons-modal-title"
          aria-describedby="add-ons-modal-description"
        >
          <Box sx={modalStyle} className="custom-scrollbar">
            <Typography
              id="add-ons-modal-title"
              variant="h6"
              component="h2"
              className="mb-4 text-red-400 text-center"
            >
              Mouth Watering Add Ons
            </Typography>
            {/* Add-ons Grid - Tailwind Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {addOns.length > 0 ? (
                addOns.map((addOn, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-100 rounded-lg shadow flex flex-col justify-between"
                  >
                    <Typography variant="subtitle1" className="font-semibold">
                      {addOn.name}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600">
                      {addOn.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="mt-2 text-red-500 text-right"
                    >
                      {addOn.price}
                    </Typography>
                  </div>
                ))
              ) : (
                <Typography variant="body1" className="text-center">
                  No add-ons available.
                </Typography>
              )}
            </div>
            {/* Close Button */}
            <Button
              onClick={handleClose}
              variant="contained"
              color="error"
              className="mt-6"
            >
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    </section>
  );
};

export default DealsTab;
