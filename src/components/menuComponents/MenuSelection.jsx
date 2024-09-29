"use client";

import { HoverEffect } from "../ui/card-hover-effect";
import { hasFlag } from "country-flag-icons";

hasFlag("CH") === true;
hasFlag("PH") === true;
hasFlag("MM") === true;
hasFlag("TH") === true;

export function MenuSelection() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={menus} />
    </div>
  );
}

export const menus = [
  {
    title: "Philippine Menu",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/PH.svg",
    description:
      "Embark on a flavorful journey through the Philippines with savory classics like adobo, sinigang, and lechon. Each dish is a celebration of vibrant spices and rich culinary heritage, bringing the warmth of Filipino hospitality to your table.",
    link: "http://localhost:3000/menu/view",
  },
  {
    title: "Thailand Menu",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg",
    description:
      "Immerse yourself in the bold, exotic flavors of Thailand. From the aromatic spices of pad thai to the creamy delight of green curry, our Thai menu is a tantalizing adventure for your taste buds, balancing sweet, sour, salty, and spicy in every bite.",
    link: "http://localhost:3000/menu/view",
  },
  {
    title: "Myanmar Menu",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/MM.svg",
    description:
      "Discover the hidden gem of Southeast Asian cuisine with our Myanmar-inspired menu. Delight in the earthy, aromatic spices and unique textures of menu like mohinga and tea leaf salad, offering a perfect harmony of bold flavors and tradition.",
    link: "http://localhost:3000/menu/view",
  },
  {
    title: "Chinese Menu",
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg",
    description:
      "Elevate your dining experience with our exclusive Special Menu Tiers, offering a curated selection of premium dishes and unique culinary creations. Each tier unlocks a world of indulgence, designed to cater to the most discerning palates, making your meal truly extraordinary.",
    link: "http://localhost:3000/menu/view",
  },
  {
    title: "Catering Menu",
    image: "/images/catering-flag.png",
    description:
      "Bring the world’s finest flavors to your event with our bespoke catering services. Whether it’s a small gathering or a grand celebration, we curate personalized menus that showcase the best of Filipino, Thai, and Myanmar cuisine, ensuring your occasion is unforgettable.",
    link: "https://restaurant.com/catering-services",
  },
  {
    title: "Extras",
    image: "/images/dessert-flag.png",
    description:
      "Indulge in a delightful array of appetizers and desserts that perfectly complement your meal. From crispy spring rolls to luscious coconut-infused sweets, every bite is a journey through the tropical flavors of Southeast Asia.",
    link: "https://restaurant.com/desserts-appetizers",
  },
];
