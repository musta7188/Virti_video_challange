import React from "react";
import image1 from "./image1.png";
import { connect } from "react-redux";
import RenderImage from "./RenderImage";
import { transitionImage1, animationImage1 } from "./animations";
function Image1({ timeVideoPlayed, videoPlay, VideoTime }) {
  return (
    <>
      {timeVideoPlayed < 1 &&
      videoPlay &&
      VideoTime >= 3.5 &&
      VideoTime <= 8.5 ? (
        <RenderImage
          animation={animationImage1}
          transition={transitionImage1}
          imageNumber={1}
          image={image1}
          alt={" image of a banana"}
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
