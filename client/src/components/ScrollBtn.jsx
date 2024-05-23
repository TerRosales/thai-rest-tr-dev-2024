import { motion } from "framer-motion"
import images from "../assets/images"
import "../global.css"

const ScrollBtn = () => {
  return (
    <div className="scroller">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          className="flex text-center items-center justify-center"
        >
          <span className="scrollSpan absolute pt-4 font-extrabold text-white z-10 textShadow">
            See More
          </span>
          <motion.img
            className="scrollBtn shadow bg-red-600 rounded-full cursor-pointer"
            src={
              images.utility.scrollOpen
            }
            alt="scroll button"
          />
        </motion.div>
      </div>
  )
}

export default ScrollBtn