import React from "react";
import image3 from "./image3.png";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import RenderImage from "./RenderImage";
function Image3({ timeVideoPlayed, videoPlay, VideoTime }) {
  const animation = {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 0, 0, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  };
  const transition = {
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    loop: Infinity,
    repeatDelay: 1,
  };
  return (
    <>
      {timeVideoPlayed < 4 &&
      videoPlay &&
      VideoTime >= 7.0 &&
      VideoTime <= 8.5 ? (
        <RenderImage
        animation={animation}
        transition={transition}
        imageNumber={3}
        image={image3}
      />
      ) : (
        ""
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    timeVideoPlayed: state.timeVideoPlayed,
    videoPlay: state.videoPlay,
    VideoTime: state.VideoTime,
  };
};

export default connect(mapStateToProps)(Image3);
