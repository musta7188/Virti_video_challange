import React from "react";
import image3 from "./image3.png";
import { connect } from "react-redux";

function Image3({ timeVideoPlayed, videoPlay, VideoTime }) {
  return (
    <div className="image_3">
      {timeVideoPlayed < 4 &&
      videoPlay &&
      VideoTime >= 7.0 &&
      VideoTime <= 8.5 ? (
        <img src={image3} />
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

export default connect(mapStateToProps)(Image3);
