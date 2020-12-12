import "./App.css";
import React from 'react'
import Video from "./video/Video";
import Image1 from './images/Image1'
import Image2 from "./images/Image2";
import Image3 from "./images/Image3";


function App() {

  return (

      <div className="main_container">
        <Image3/>
        <Image2/>
        <Image1/>
        <Video/>
      </div>
  
  );
}

export default App;
