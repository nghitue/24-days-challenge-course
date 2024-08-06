import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Playlist = ({ tracks }) => {
  return <ReactAudioPlayer src={tracks} autoPlay controls />;
};

export default Playlist;
