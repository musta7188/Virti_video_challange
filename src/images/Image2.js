import React from "react";
import { connect } from "react-redux";
import image2 from "./image2.png";
import { motion } from "framer-motion";

function Image2({ timeVideoPlayed, videoPlay, VideoTime }) {
  const animation = {
    scale: [1, 2, 2, 1],
    rotate: [0, 0, 50, 0, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  };
    const transition={
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      loop: Infinity,
      repeatDelay: 1
    }
  return (
    <motion.div animate={animation} transition={transition}>
    <div className="image_2">
      {timeVideoPlayed < 3 &&
      videoPlay &&
      VideoTime >= 6.0 &&
      VideoTime <= 8.0 ? (
        <img src={image2} />
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

export default connect(mapStateToProps)(Image2);
