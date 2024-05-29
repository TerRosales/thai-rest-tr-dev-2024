import { motion } from "framer-motion";
import images from "../assets/images";
import "../global.css";
import { useRef, useEffect, useState } from "react";

const ScrollBtn = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setElementIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !elementIsVisible) {
          setElementIsVisible(true);
          setShouldRender(true);
        }
      },
      { threshold: 0.9 }
    );
    observer.observe(myRef.current);
  }, []);

  // variants

  const scrollVariants = {
    initial: { y: 0, opacity: 1 },
    animate: {
      y: [-5, 10, -5],
      transition: { duration: 1.5, repeat: Infinity },
    },
    spinAndShrink: {
      rotate: [0, 360],
      y: [-25, 30, 0],
      scale: [1.4, 0],
      transition: { duration: 0.8, ease: "easeInOut", repeat: 0 },
    },
  };

  return (
    <div className="scroller">
      <div className="flex text-center items-center justify-center">
        <motion.img
          variants={scrollVariants}
          initial="initial"
          animate={shouldRender ? "spinAndShrink" : "animate"}
          ref={myRef}
          exit={{ opacity: 0 }}
          className="scrollBtn shadow bg-red-600 rounded-full cursor-pointer"
          src={images.utility.scrollOpen}
          alt="scroll button"
        />
      </div>
    </div>
  );
};

export default ScrollBtn;
