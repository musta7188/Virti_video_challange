import React from 'react'
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { transitionWelcome, animationWelcome } from "../images/animations";
function Welcome({user, setUserName}) {
  
  return (
    <motion.div animate={animationWelcome} transition={transitionWelcome}>
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={() => setUserName(null)}>Log out</button>
    </div>
    </motion.div>
  )
}

const mapStateToProps = (state) => {
  return {

    user: state.user
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (user) => dispatch({ type: "SET_USER", payload: { user } }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
