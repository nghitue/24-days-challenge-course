"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import VideoPlayer from "@/components/VideoPlayer";
import Playlist from "@/components/Playlist";

export default function Home() {
  const [data, setData] = useState(null);
  const [videoSrc, setVideoSrc] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [active, setActive] = useState("1");

  useEffect(() => {
    // Fetch data from the public directory
    fetch("/moke/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChangeVideo = (item) => {
    console.log("item", item);
    setVideoSrc(item);
    item.index && setActive(item.index);
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  console.log("active", active, typeof(active));

  const renderByType = (videoSrc) => {
    if (videoSrc?.type == "read") {
      return (
        <div className="img-wrapper">
          <div className="title">
            <h1>{videoSrc?.title}</h1>
            <button onClick={handleShowAnswer}>
              <Icon icon="ph:seal-question" width="20" height="20" />
            </button>
          </div>
          <figure className="quiz">
            <img src={videoSrc?.img} alt={videoSrc?.title} />
          </figure>
          {showAnswer && (
            <figure>
              <img src={videoSrc?.answer} alt={videoSrc?.answer} />
            </figure>
          )}
        </div>
      );
    } else if (videoSrc?.type == "listen") {
      return (
        <div className="video-wrapper">
          <div className="title">
            <h1>{videoSrc?.title}</h1>
            <button onClick={handleShowAnswer}>
              <Icon icon="ph:seal-question" width="20" height="20" />
            </button>
          </div>
          <figure className="quiz">
            <img src={videoSrc?.img} alt={videoSrc?.title} />
          </figure>
          {videoSrc?.mp3 && <Playlist tracks={videoSrc?.mp3} />}
          {showAnswer && (
            <figure>
              <img src={videoSrc?.answer} alt={videoSrc?.answer} />
            </figure>
          )}
        </div>
      );
    } else {
      return (
        <div className="video-wrapper">
          <h1>{videoSrc?.title}</h1>
          <VideoPlayer
            src={
              videoSrc?.url ??
              "https://course3.alexdsing.com/24day/video/intro_1/playlist.m3u8?v=5"
            }
          />
        </div>
      );
    }
  };

  return (
    <div className="lecture-wrapper">
      <div className="lecture-wrapper-ins">
        {videoSrc && renderByType(videoSrc)}
      </div>
      <div className="lecture-wrapper-ins">
        <ul className="list-top">
          {data &&
            data["lectureGroup"].map((lec, index) => {
              return (
                <li key={lec.id}>
                  <span className="lec-title">{lec.title}</span>
                  <ul className="lec-list">
                    {data["lecture"][index].map((item, index) => {
                      return (
                        <li
                          key={item.title}
                          onClick={() => handleChangeVideo(item)}
                          className={active == item?.index ? "active" : ""}
                        >
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          <li></li>
        </ul>
      </div>
    </div>
  );
}
