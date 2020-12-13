import React from "react";
import image3 from "./image3.png";
import { connect } from "react-redux";
import {transitionImage3,animationImage3} from './animations'
import RenderImage from "./RenderImage";

function Image3({ timeVideoPlayed, videoPlay, VideoTime }) {
  
  return (
    <>
      {timeVideoPlayed < 4 &&
      videoPlay &&
      VideoTime >= 7.0 &&
      VideoTime <= 8.5 ? (
        <RenderImage
          animation={animationImage3}
          transition={transitionImage3}
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
