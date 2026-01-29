"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { images } from "@/public/assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export const CardSlider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="mt-20 mx-4 flex gap-4 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[407px] rounded-xl bg-gray-300 animate-pulse shimmer"
          ></div>
        ))}
      </div>
    );

  return (
    <div className="mt-20 mx-4 mySwiper z-2 ">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        freeMode={true}
        speed={4000} // smoother continuous scroll
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <ProjectCard image={images.wisemarket} text="Wise Market" />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard image={images.worldtone} text="World Tone" />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            image={images.PriceinPakistan}
            text="Price In Pakistan"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard image={images.yimpy} text="Yimpy" />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard image={images.mylink} text="My Link" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
