import React from "react";
import { motion } from "framer-motion";
function RenderImage({ animation, transition, imageNumber, image, alt }) {
  return (
    <>
      {
        ////this is a shared component between the images takes as props animations setting image class for the css and the image 
        <motion.div animate={animation} transition={transition}>
          <div className={`image_${imageNumber}`}>
            <img src={image} alt={alt}/>
          </div>
        </motion.div>
      }
    </>
  );
}

export default RenderImage;
