import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const HeroStatement = () => {
  return (
    <div className="heroStatement mb-20 pb-24">
      <section className="flex flex-col md:flex-row mt-14">
        <div className="md:w-3/5 w-full h-96 md:h-auto">
          <Image
            src="/images/apologyImg.png"
            alt="Large homepage image"
            className="w-full h-full object-cover xs:mt-10"
            width={500}
            height={500}
          />
        </div>

        <div className="md:w-2/5 w-full flex flex-col justify-center items-start p-8">
          <h4 className="text-5xl font-bold mb-4 text-red-500">
            We Carry a Platera
            <br /> of Dishes
          </h4>
          <p
            className="mb-6 text-lg text-neutral-900
          "
          >
            Only made from Authentic Chef&rsquo;s from around the world, we
            devote our time to make sure you get the best quality food and
            choose from the finest of menus.
          </p>
          <Button
            variant="outlined"
            color="error"
            endIcon={<BsArrowUpRightCircleFill />}
          >
            Let&rsquo;s Order
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HeroStatement;
