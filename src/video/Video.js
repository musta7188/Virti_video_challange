import React, { useState, useEffect } from "react";
import video from "./Big_Buck_Bunny_1080_10s_5MB.mp4";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

function Video({setPlaying, stopPlaying, showImageOne, showImageTwo, showImageThree}) {
 
  const handelProgress = (element) =>{
      const time = element.nativeEvent.path[0].currentTime
      showImageOne(time)

  }

  return (
    <>
      <video src={video}
        controls
              onPlay={() => setPlaying()}
              onEnded={() => stopPlaying()}
              onTimeUpdate={handelProgress}      
          />
      <button className="button"> Fullscreen mode</button>
      </>
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