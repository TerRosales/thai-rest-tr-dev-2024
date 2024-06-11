import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import images from "../../assets/images.js";
import "../../global.css";
import "./styles/defaultView.css";

const DefaultMenuView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePickMenuItem = () => {
    setIsOpen(true);
    console.log("Pick a menu item");
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="defaultView max-w-6xl h-[70vh] p-2 flex flex-col text-center items-center">
        <div className="sectionBg shadow rounded-2xl py-5 px-2 flex flex-col w-[100%] text-center justify-center items-center">
          <h2 className="mb-10 text-3xl font-bold text-center">
            Thai Rest. 24
          </h2>
          <img
            src={images.utility.thaiBrand}
            alt="Thai food"
            className="logo w-[40%] h-[300px] object-fit"
          />
          <h3 className="my-5 text-xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quam itaque at.
          </h3>
          <Button
            className="border-[0.5px] border-yellow-200"
            gradientDuoTone="pinkToOrange"
            onClick={handlePickMenuItem}
          >
            Add To Order
          </Button>
        </div>
        <Modal show={isOpen} onClose={handleCloseModal}>
          <Modal.Header title="Hello" />
          <Modal.Body>
            <div>
              <section className="flex flex-col text-center">
                <p>Calamari</p>
                <figure className="p-5">
                  <img
                    className="rounded-3xl"
                    src={images.menu.calamariGrilled}
                    alt="sample"
                  />
                </figure>
              </section>
              <section className="flex mx-6 justify-between">
                <section className="w-[10%] flex">
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
                  <p className="text-red-800 pr-2">Calamari</p>
                  <span>16.99</span>
                </section>
              </section>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button gradientDuoTone="pinkToOrange" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default DefaultMenuView;
