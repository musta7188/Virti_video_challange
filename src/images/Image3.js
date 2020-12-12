import React from 'react'
import image3 from "./image3.png"
import { connect } from "react-redux";


function Image3({timeVideoPlayed, videoPlay , showImage3}) {
  
  return (
    <div className="image_3">
    {true? <img src={image3}/> : ""}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    timeVideoPlayed: state.timeVideoPlayed,
    videoPlay: state.videoPlay,
    // showImage3: state.showImage3
  };
};

export default connect(mapStateToProps)(Image3);