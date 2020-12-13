import "./App.css";
import React from "react";
import Video from "./video/Video";
import { connect } from "react-redux";
import Image1 from "./images/Image1";
import Image2 from "./images/Image2";
import Image3 from "./images/Image3";

function App({ videoPlay }) {
  return (
    <>
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

const mapStateToProps = (state) => {
  return {
    videoPlay: state.videoPlay,
  };
};

export default connect(mapStateToProps)(App);
