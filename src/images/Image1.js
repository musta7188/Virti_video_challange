import React from 'react'
import image1 from "./image1.png"
import { connect } from "react-redux";


function Image1({timeVideoPlayed, videoPlay , showImage1}) {
  
  return (
    <div className="image_1">
    {timeVideoPlayed < 2 && videoPlay && showImage1 ? <img src={image1}/> : ""}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    timeVideoPlayed: state.timeVideoPlayed,
    videoPlay: state.videoPlay,
    showImage1: state.showImage1
  };
};

export default connect(mapStateToProps)(Image1);