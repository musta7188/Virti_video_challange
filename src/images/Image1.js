import React from "react";
import image1 from "./image1.png";
import { connect } from "react-redux";

function Image1({ timeVideoPlayed, videoPlay, VideoTime }) {
  return (
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
