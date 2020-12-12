import React from "react";
import { connect } from "react-redux";
import image2 from "./image2.png";

function Image2({ timeVideoPlayed, videoPlay, VideoTime }) {
  return (
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
