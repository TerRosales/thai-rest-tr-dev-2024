import React from "react";
import { useParams } from "react-router-dom";
import { menuData } from "./menuData";
import images from "../../assets/images";

const GenericMenu = () => {
  const { category } = useParams();
  const menuCategory = menuData[category];

  if (!menuCategory) {
    return <div>Category not found.</div>;
  }

  return (
    <div className="genericMenu">
      <h1 className="text-3xl font-bold mb-6">{menuCategory.title}</h1>
      <p className="mb-4">{menuCategory.description}</p>
      <div className="menuItems grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuCategory.items.map((item, index) => (
          <div key={index} className="menuItem shadow rounded-lg p-4">
            <img
              src={item}
              alt={`Item ${index}`}
              className="w-full h-40 object-cover mb-2 rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenericMenu;
