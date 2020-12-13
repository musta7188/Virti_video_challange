import React from "react";
import { motion } from "framer-motion";
function RenderImage({animation, transition, imageNumber, image}) {

  return <>{
  
    <motion.div animate={animation} transition={transition}>
    <div className={`image_${imageNumber}`}>
      <img src={image} />
    </div>
  </motion.div>

  }</>;
}


export default RenderImage;
