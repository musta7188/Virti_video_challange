import React, { useState, useEffect, useRef} from "react";
import video from "./Big_Buck_Bunny_1080_10s_5MB.mp4";
import { connect } from "react-redux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Video({setPlaying, stopPlaying, setCurrentTimeVideo}) {


  const handle = useFullScreenHandle();
 
  const handelProgress = (element) =>{
      const time = element.nativeEvent.path[0].currentTime
      setCurrentTimeVideo(time)

  }

  

  return (
    <>
    <FullScreen handle={handle}>
      <video src={video}
        controls
              onPlay={() => setPlaying()}
              onEnded={() => stopPlaying()}
              onTimeUpdate={handelProgress}  
              
          />
    </FullScreen>
     
          <button onClick={handle.enter} className="button"> Fullscreen mode</button>

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