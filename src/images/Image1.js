import React from "react";
import image1 from "./image1.png";
import { connect } from "react-redux";
import { motion } from "framer-motion"

function Image1({ timeVideoPlayed, videoPlay, VideoTime }) {


  const bounceTransition = {
    y: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeIn"
    }
  }


  return (
    <motion.div 
    transition={bounceTransition}
    animate={{
      y:["0em", "12.8em"]
    }} >
    <div className="image_1">
      {timeVideoPlayed < 2 &&
        videoPlay &&
        VideoTime >= 3.5 &&
        VideoTime <= 8.5 ? (
        <img src={image1} />
      ) : (
        ""
      )}
    </div>
    </motion.div>
  );
}

const mapStateToProps = (state) => {
  return {
    timeVideoPlayed: state.timeVideoPlayed,
    videoPlay: state.videoPlay,
    VideoTime: state.VideoTime,
  };
};

export default connect(mapStateToProps)(Image1);
