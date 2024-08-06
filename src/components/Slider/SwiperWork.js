"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Pagination, Navigation, EffectFade } from "swiper/modules";

const SwiperWork = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Function to update state with current window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handleResize initially to set initial state
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const _info = [
    {
      imgUrl: "/images/slider_work_1.jpg",
      id: 1,
    },
    {
      imgUrl: "/images/slider_work_2.jpg",
      id: 2,
    },
  ];

  const _infoSp = [
    {
      imgUrl: "/images/slider_work_1_sp.jpg",
      id: 1,
    },
    {
      imgUrl: "/images/slider_work_2_sp.jpg",
      id: 2,
    },
  ];

  const _width = windowSize.width;

  return (
    <>
      {_width > 639 ? (
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectFade]}
          className="swiper-component"
        >
          {_info.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <figure>
                  <Image
                    className="relative"
                    src={item.imgUrl}
                    alt={item.id}
                    fill
                    priority
                  />
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectFade]}
          className="swiper-component"
        >
          {_infoSp.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <figure>
                  <Image
                    className="relative"
                    src={item.imgUrl}
                    alt={item.id}
                    fill
                    priority
                  />
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default SwiperWork;
