import React, { useState, useEffect } from "react";
import video from "./Big_Buck_Bunny_1080_10s_5MB.mp4";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

function Video({setPlaying, stopPlaying}) {
 

  return (
    <div className="'player-wrapper">
      <ReactPlayer
        className="react-player"
        url={video}
        controls={true}
        onPlay={() => setPlaying()}
        onEnded={() => stopPlaying()}
      />
      </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlaying: () => dispatch({ type: "VIDEO_PLAY"}),
    stopPlaying: () => dispatch({ type: "VIDEO_STOP"})
  };
};

export default connect(null, mapDispatchToProps)(Video);