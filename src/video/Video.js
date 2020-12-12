import React, { useState, useEffect } from "react";
import video from "./Big_Buck_Bunny_1080_10s_5MB.mp4";
import ReactPlayer from "react-player";
export default function Video() {
  const player = React.createRef();

  const [completedWatch, setCompletedWatch] = useState(false)

  const handleTimePlayed = ({played}) =>{

      console.log( (played * 10).toFixed(4) < 3.500)
    
  }

  return (
    <div className="'player-wrapper">
      <ReactPlayer
        className="react-player"
        url={video}
        ref={player}
        autoplay
        controls={true}
        onProgress={handleTimePlayed}
      />
      </div>
  );
}
