import React from "react";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import { connect } from "react-redux";

function RenderImage({ timeVideoPlayed, videoPlay, VideoTime }) {


  const returnImage = () => {

    if (
      timeVideoPlayed < 2 &&
      videoPlay &&
      VideoTime >= 3.5 &&
      VideoTime <= 8.5
    ) {
      return <img src={image1} />;
    }
    if (
      timeVideoPlayed < 3 &&
      videoPlay &&
      VideoTime >= 6.0 &&
      VideoTime <= 8.0
    ) {
      return <img src={image2} />;
    }
    if (
      timeVideoPlayed < 2 &&
      videoPlay &&
      VideoTime >= 6.0 &&
      VideoTime <= 8.0
    ) {
      return <img src={image3} />;
    }


  }

  return <>{
  
    returnImage()

  }</>;
}

const mapStateToProps = (state) => {
  return {
    timeVideoPlayed: state.timeVideoPlayed,
    videoPlay: state.videoPlay,
    VideoTime: state.VideoTime,
  };
};

export default connect(mapStateToProps)(RenderImage);
