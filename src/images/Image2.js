import React from "react";
import { connect } from "react-redux";
import image2 from "./image2.png";
import RenderImage from "./RenderImage";
function Image2({ timeVideoPlayed, videoPlay, VideoTime }) {
  const animation = {
    scale: [1, 2, 2, 1],
    rotate: [0, 0, 50, 0, 0],
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
      {timeVideoPlayed < 3 &&
      videoPlay &&
      VideoTime >= 6.0 &&
      VideoTime <= 8.0 ? (
        <RenderImage
        animation={animation}
        transition={transition}
        imageNumber={2}
        image={image2}
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

export default connect(mapStateToProps)(Image2);
