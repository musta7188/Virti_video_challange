import "./App.css";
import React from "react";
import Video from "./video/Video";
import { connect } from "react-redux";
import Image1 from "./images/Image1";
import Image2 from "./images/Image2";
import Image3 from "./images/Image3";
import Form from "./Form/Form";
import Welcome from './Form/Welcome'
function App({ videoPlay, user }) {
  if (!user) {
    return (
      <div>
        <Form />
      </div>
    );
  } else {
    return (
      <>
               <Welcome/>
        <div
          className={
            ///if the video is playing color background will change
            videoPlay
              ? `main_container background_on`
              : `main_container background_off`
          }
        >
          <Image3 />
          <Image2 />
          <Image1 />
          <Video />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoPlay: state.videoPlay,
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
