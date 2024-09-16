import { Button, Modal } from "flowbite-react";
import images from "../assets/images.js";
import "../global.css";

const MenuCards = ({ isOpen, handlePickMenuItem, handleCloseModal }) => {
  return (
    <div>
      <section>
        <Button
          className="border-[0.5px] border-yellow-200"
          gradientDuoTone="pinkToOrange"
          onClick={handlePickMenuItem}
        >
          Open Menu Item
        </Button>
      </section>
      <Modal show={isOpen} onClose={handleCloseModal}>
        <Modal.Header title="Hello" />
        <Modal.Body>
          <section className="flex flex-col text-center">
            <p className="titleItem mt-2 mb-10">Calamari</p>
            <section className="menuItem flex flex-row">
              <figure className="flex justify-center">
                <img
                  className="menuItemImg rounded-3xl w-[80%] h-[85%]"
                  src={images.menu.calamariGrilled}
                  alt="sample"
                />
              </figure>
              <section className="textItem menuItemIngridients p-2 flex flex-col text-left">
                <p className="text-center">Ingredients:</p>
                <span>
                  calamari, oyster sauce, soy sauce, salt, black pepper, lemon
                  grass, lemon juice...
                </span>
              </section>
            </section>
          </section>
          <section className="heatAndPrice flex mx-6 justify-between">
            <section className="heat w-[10%] flex">
              <img src={images.utility.thaiBrand} alt="sample" />
              <img src="" alt="" />
              <img src={images.utility.thaiBrand} alt="sample" />
              <img src="" alt="" />
              <img src={images.utility.thaiBrand} alt="sample" />
              <img src={images.utility.thaiBrand} alt="sample" />
              <img src="" alt="" />
              <img src={images.utility.thaiBrand} alt="sample" />
            </section>
            <section className="flex p-2">
              <p className="text-red-950 pr-2">Calamari</p>
              <span className="text-red-500 text-xl">&nbsp;|&nbsp;</span>
              <span>16.99</span>
            </section>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button gradientDuoTone="pinkToOrange" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MenuCards;
