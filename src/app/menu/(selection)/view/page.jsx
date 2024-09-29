import React from "react";
import HeaderTItle from "@/components/HeaderTItle";
import { seedingData } from "@/assets/data/data";

const MenuViewPage = () => {
  return (
    <div>
      <HeaderTItle title="Menu Search" />

      <section>
        <section>
          {seedingData.map((item, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-300 rounded-lg mb-4"
            >
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default MenuViewPage;
