import React from 'react'
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { transitionWelcome, animationWelcome } from "../images/animations";
import './Welcome.css'
function Welcome({user, setUserName, videoPlay}) {
  
  return (
    <motion.div animate={animationWelcome} transition={transitionWelcome}>
    <div 
    className={videoPlay
    ? `welcome swap_on`
    : `welcome swap_off`}
    
    >
      <h1>Welcome {user}</h1>
      <button className="welcome_button" onClick={() => setUserName(null)}>Log out</button>
    </div>
    </motion.div>
  )
}

const mapStateToProps = (state) => {
  return {

    user: state.user,
    videoPlay: state.videoPlay,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (user) => dispatch({ type: "SET_USER", payload: { user } }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
