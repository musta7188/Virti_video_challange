import React, { useState, useEffect } from "react";
import video from "./Big_Buck_Bunny_1080_10s_5MB.mp4";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

function Video({setPlaying, stopPlaying, showImageOne, showImageTwo, showImageThree}) {
 
  const handelProgress = ({played}) =>{

      const time = parseFloat((played * 10).toFixed(4))
      showImageOne( Math.floor(time*2)/2)

  }

  return (
    <div className="'player-wrapper">
      <ReactPlayer
        className="react-player"
        url={video}
        controls={true}
        onPlay={() => setPlaying()}
        onEnded={() => stopPlaying()}
        onProgress={handelProgress}
      />
      </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlaying: () => dispatch({ type: "VIDEO_PLAY"}),
    stopPlaying: () => dispatch({ type: "VIDEO_STOP"}),
    showImageOne: (currentState) => dispatch({ type: "VIDEO_TIMESTAMP", payload: {currentState}}),
  };
};

export default connect(null, mapDispatchToProps)(Video);