"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Pagination, Navigation, EffectFade } from "swiper/modules";

const SwiperComponent = () => {
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
      title: "ENTERTAINMENT & EXPERIENCE",
      list_prog: [
        {
          imgUrl: "/images/prog_1.png",
          progTitle: "Bác có khỏe không",
        },
        {
          imgUrl: "/images/prog_2.png",
          progTitle: "Chuyện chưa kể",
        },
        {
          imgUrl: "/images/prog_3.png",
          progTitle: "Dare you",
        },
        {
          imgUrl: "/images/prog_4.png",
          progTitle: "Du hành ký ức",
        },
        {
          imgUrl: "/images/prog_5.png",
          progTitle: "Gõ cửa thăm nhà",
        },
        {
          imgUrl: "/images/prog_6.png",
          progTitle: "Sàn đấu ý tưởng",
        },
      ],
    },
    {
      title: "FAMILY/PARENTS & KIDS",
      list_prog: [
        {
          imgUrl: "/images/family_1.png",
          progTitle: "Biệt đội cao lớn",
        },
        {
          imgUrl: "/images/family_2.png",
          progTitle: "Chat với mẹ bỉm sửa",
        },
        {
          imgUrl: "/images/family_3.png",
          progTitle: "Tình trăm năm",
        },
        {
          imgUrl: "/images/family_4.png",
          progTitle: "Vợ chồng son",
        },
      ],
    },
    {
      title: "LGBT",
      list_prog: [
        {
          imgUrl: "/images/lgbt_1.png",
          progTitle: "Come out",
        },
      ],
    },
    {
      title: "LOVE/DATING",
      list_prog: [
        {
          imgUrl: "/images/date_1.jpg",
          progTitle: "Love House",
        },
        {
          imgUrl: "/images/date_2.png",
          progTitle: "Lunch Date",
        },
        {
          imgUrl: "/images/date_3.png",
          progTitle: "Wanna Date",
        },
      ],
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
              <SwiperSlide key={item.title}>
                <div className="slider-item">
                  <h2>{item.title}</h2>
                  <div className="list-program">
                    {item.list_prog.map((prog) => {
                      return (
                        <div className="item" key={prog.progTitle}>
                          <figure className="banner-img">
                            <Image
                              className="relative"
                              src={prog.imgUrl}
                              alt={prog.progTitle}
                              fill
                              priority
                            />
                          </figure>
                          <h3 className="prog-title">{prog.progTitle}</h3>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <>
          {_info.map((item) => {
            return (
              <div className="list-program-wrapper" key={item.title}>
                <h2>{item.title}</h2>
                <div className="list-program">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={16}
                    modules={[Pagination, Navigation, EffectFade]}
                    className="swiper-component"
                  >
                    {item.list_prog.map((prog) => {
                      return (
                        <SwiperSlide key={prog.progTitle}>
                          <div className="item">
                            <figure className="banner-img">
                              <Image
                                className="relative"
                                src={prog.imgUrl}
                                alt={prog.progTitle}
                                fill
                                priority
                              />
                            </figure>
                            <h3 className="prog-title">{prog.progTitle}</h3>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default SwiperComponent;
