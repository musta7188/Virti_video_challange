import React, {useEffect, useState} from 'react'
import image1 from "./image1.png"
import { connect } from "react-redux";


function Image1({timeVideoPlayed, videoPlay}) {

  const [showImage, setShowImage] = useState(false)

  useEffect(() =>{
    if(videoPlay && timeVideoPlayed < 2){

      setTimeout(( ) =>{
        setShowImage(true)
      }, 3500)

      setTimeout(( ) =>{
        setShowImage(false)
      }, 8500)
    
    }
  })

  
  return (
    <>
    {showImage ? <img src={image1}/> : ""}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    timeVideoPlayed: state.timeVideoPlayed,
    videoPlay: state.videoPlay
  };
};

export default connect(mapStateToProps)(Image1);