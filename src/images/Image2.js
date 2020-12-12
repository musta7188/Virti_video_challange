import React from 'react'
import { connect } from "react-redux";
import image2 from './image2.png'

function Image2({timeVideoPlayed, videoPlay , showImage2}) {
  return (
   <div className="image_2">
   {timeVideoPlayed < 3 && videoPlay && showImage2? <img src={image2}/>: ""}
   </div>
  )
}

const mapStateToProps = (state) => {
  return {
    timeVideoPlayed: state.timeVideoPlayed,
    videoPlay: state.videoPlay,
    showImage2: state.showImage2
  };
};


export default connect(mapStateToProps)(Image2);