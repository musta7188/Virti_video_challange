import React from "react";
import { connect } from "react-redux";
import image2 from "./image2.png";
import RenderImage from "./RenderImage";
import {transitionImage2,animationImage2} from './animations'
function Image2({ timeVideoPlayed, videoPlay, VideoTime }) {

  return (
    <>
      {timeVideoPlayed < 3 &&
      videoPlay &&
      VideoTime >= 6.0 &&
      VideoTime <= 8.0 ? (
        <RenderImage
        animation={animationImage2}
        transition={transitionImage2}
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
