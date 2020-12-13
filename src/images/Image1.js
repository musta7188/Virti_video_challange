import React from "react";
import image1 from "./image1.png";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import RenderImage from './RenderImage'
function Image1({ timeVideoPlayed, videoPlay, VideoTime }) {
  const transition = {
    y: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeIn",
    },
  };
  const animation = {
    y: ["0em", "30em"],
  };

  return (
    <>
      {timeVideoPlayed < 2 &&
      videoPlay &&
      VideoTime >= 3.5 &&
      VideoTime <= 8.5 ? (
        <RenderImage animation={animation} transition={transition}
        imageNumber={1} image={image1}
        
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

export default connect(mapStateToProps)(Image1);
