"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export const TagSlider = () => {
  const [mounted, setMounted] = useState(false);

  // Example SVG icons
  const CostEffectiveIcon = (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const OptimizationIcon = (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const VideoIcon = (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M10 8.5L15 12L10 15.5V8.5Z" fill="currentColor" />
    </svg>
  );

  const SlideDecksIcon = (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="3"
        y1="9"
        x2="21"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="9"
        y1="9"
        x2="9"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const SEOIcon = (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M21 21L16.65 16.65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const Tag = ({ text, svg }) => (
    <div className="px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium rounded-full bg-gray-100">
      <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-gray-700 justify-center">
        {svg}
        <span className="cursor-pointer text-center">{text}</span>
      </div>
    </div>
  );

  const slides = [
    { text: "Cost Effective", svg: CostEffectiveIcon },
    { text: "Optimization", svg: OptimizationIcon },
    { text: "Video & Motion Graphics", svg: VideoIcon },
    { text: "Slide Decks", svg: SlideDecksIcon },
    { text: "SEO", svg: SEOIcon },
    { text: "Cost Effective", svg: CostEffectiveIcon },
    { text: "Optimization", svg: OptimizationIcon },
    { text: "Video & Motion Graphics", svg: VideoIcon },
    { text: "Slide Decks", svg: SlideDecksIcon },
    { text: "SEO", svg: SEOIcon },
  ];

  if (!mounted)
    return (
      <div className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex gap-3 sm:gap-4 overflow-hidden">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex-1 min-w-0 h-10 sm:h-12 rounded-full bg-gray-200 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 w-full overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative
            [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
            sm:[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
          >
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={12}
              loop={true}
              freeMode={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 12,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
            >
              {slides.map((item, index) => (
                <SwiperSlide key={index}>
                  <Tag svg={item.svg} text={item.text} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagSlider;
