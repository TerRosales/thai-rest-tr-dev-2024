"use client";
import GoogleMapComponent from "./GoogleMapComponent";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

const MapTab = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4` bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Title Section */}
      <h4 className="text-4xl font-bold text-red-500 mb-6">Find Us</h4>

      <div className="flex base:flex-col">
        {/* Business Hours */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-lg ">
          <h4 className="text-2xl font-semibold text-red-500 mb-4">
            Business Hours
          </h4>
          <ul className="list-disc list-inside text-gray-700 py-6 mb-5">
            <li className="text-lg py-2">Monday - Thursday: 11 AM - 10 PM</li>
            <li className="text-lg py-2">Friday - Saturday: 11 AM - 11 PM</li>
            <li className="text-lg py-2">Sunday: 11 AM - 9 PM</li>
          </ul>
          <strong className="mt-2 text-gray-600">
            <span className="text-red-500">Phone:</span> (260) 555-0123
          </strong>
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-lg">
          <h4 className="text-2xl font-semibold text-red-500 mb-2">
            Visit Us Today!
          </h4>
          <p className="text-gray-600 mb-4 text-center">
            Experience our delicious menu and inviting atmosphere. We
            can&rsquo;t wait to serve you!
          </p>
          <Image
            src="/images/deepfriedImg5.jpg"
            alt="Restaurant"
            className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
            width={600}
            height={400}
          />
          <Button className="mt-2" variant="contained" color="error">
            Make a Reservation
          </Button>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default MapTab;
