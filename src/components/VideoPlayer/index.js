import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const initializePlayer = () => {
      if (videoRef.current) {
        console.log("Initializing video.js");
        playerRef.current = videojs(videoRef.current, {
          controls: true,
          autoplay: false,
          preload: "auto",
        });

        playerRef.current.on('ready', () => {
          console.log("Player is ready");
          setIsPlayerReady(true);
        });
      } else {
        console.log("Video element is not in the DOM.");
      }
    };

    // Initialize player after a short delay to ensure DOM update
    const timeoutId = setTimeout(initializePlayer, 100);

    return () => {
      clearTimeout(timeoutId);
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (playerRef.current && isPlayerReady) {
      console.log("Updating video source");
      playerRef.current.src({ src, type: "application/x-mpegURL" });
      playerRef.current.load(); // Ensure the player loads the new source
    }
  }, [src, isPlayerReady]);

  console.log("src", src);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js"></video>
    </div>
  );
};

export default VideoPlayer;
