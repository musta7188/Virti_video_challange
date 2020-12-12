import React, {useEffect, useState} from 'react'
import image1 from "./image1.png"
import { connect } from "react-redux";


function Image1({timeVideoPlayed, videoPlay}) {

  const [play, setPlay] = useState(false)

useEffect(() =>{
  if(timeVideoPlayed < 2 && videoPlay){
    setTimeout(() =>{

    })
  }
})
  

  return (
    <>
     {play? <Image1/> : "" }
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