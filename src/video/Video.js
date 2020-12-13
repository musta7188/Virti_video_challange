import React, { useState, useEffect, useRef} from "react";
import video from "./Big_Buck_Bunny_1080_10s_5MB.mp4";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

function Video({setPlaying, stopPlaying, setCurrentTimeVideo}) {


  let fullScreenREg = useRef(null)
 
  const handelProgress = (element) =>{
      const time = element.nativeEvent.path[0].currentTime
      setCurrentTimeVideo(time)

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
    setCurrentTimeVideo: (currentState) => dispatch({ type: "VIDEO_TIMESTAMP", payload: {currentState}}),
  };
};

export default connect(null, mapDispatchToProps)(Video);