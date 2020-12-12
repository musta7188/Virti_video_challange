import React, { useState, useEffect } from "react";
import video from "./Big_Buck_Bunny_1080_10s_5MB.mp4";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

function Video({setPlaying, stopPlaying, showImageOne, showImageTwo, showImageOneThree}) {
 
  const handelProgress = ({played}) =>{
     if((played * 10).toFixed(3) >= 3.500){
      showImageOne(true)
     }
     if(((played * 10).toFixed(3) >= 8.500)){
       showImageOne(false)
       showImageOneThree(false)
     }
     if(((played * 10).toFixed(3) >= 6.000)){
      showImageTwo(true)
     }
     if(((played * 10).toFixed(3) >= 8.000)){
      showImageTwo(false)
     }
     if(((played * 10).toFixed(3) >= 7.000)){
      showImageOneThree(true)
     }

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
    showImageOne: (currentState) => dispatch({ type: "SHOW_IMAGE_ONE", payload: {currentState}}),
    showImageTwo: (currentState) => dispatch({ type: "SHOW_IMAGE_TWO", payload: {currentState}}),
    showImageOneThree: (currentState) => dispatch({ type: "SHOW_IMAGE_TWO", payload: {currentState}})
  };
};

export default connect(null, mapDispatchToProps)(Video);