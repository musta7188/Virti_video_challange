import React from 'react'
import video from './Big_Buck_Bunny_1080_10s_5MB.mp4'
export default function Video() {
  return (
    <div>
      <video  width="420" height="440"  controls autostart autoPlay src={video} type="video/mp4" />
    </div>
  )
}
