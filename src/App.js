import "./App.css";
import React, {useState} from 'react'
import Video from "./video/Video";
import { connect } from "react-redux";
import Image1 from './images/Image1'
import Image2 from "./images/Image2";
import Image3 from "./images/Image3";
import { motion } from "framer-motion"
import {useSpring, animated} from 'react-spring'


function App({videoPlay}) {
  const props = useSpring({
    from: {opacity: 0},
    to: {opacity: 1 },
  
  })

  const bounceTransition = {
    y: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeIn"
    }
  }

  return (
    <>
      <div className={videoPlay? `main_container background_on`:`main_container background_off`}>

        <Image3/>
        <Image2/>
        <motion.div 
        transition={bounceTransition}
        animate={{
          y:["0em", "12.8em"]
        }}
        >
        <Image1/> 
        </motion.div>
       


        <animated.div style={props}><Video /></animated.div>
        

     
      </div>
      </>
  );
}

const mapStateToProps = (state) => {
  return {
    videoPlay: state.videoPlay,
  };
};

export default connect(mapStateToProps)(App);

