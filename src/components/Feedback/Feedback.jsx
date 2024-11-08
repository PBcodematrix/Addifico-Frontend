import React, { useRef } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards, Navigation, Autoplay } from "swiper/modules";

const Feedback = () => {
  // Refs for the navigation buttons
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className="w-full h-full p-[2em] flex flex-col justify-center items-center">
      <div className="w-[85%] flex ">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[#dcefd8] font-medium text-[4.5em] w-[70%] leading-[1em]">
            Hear it from our clients
          </h1>
        </div>
        <div className="w-[65%] relative flex flex-col items-center cursor-grab justify-center">
          <Swiper
            effect={"cards"}
            modules={[EffectCards, Navigation, Autoplay]}
            className="w-[26em] h-[36em]"
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            autoplay={{
              delay: 3000, // Time in ms between slides
              disableOnInteraction: false, // Keeps autoplay even if navigation is clicked
              pauseOnMouseEnter: true, // Pauses autoplay on hover
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
          <div className="w-[114%] absolute flex justify-between">
            {/* Left arrow button */}
            <div
              ref={prevButtonRef}
              className="w-[3em] h-[3em] cursor-pointer"
            >
              <div className="w-full h-full flex flex-col justify-center items-center rounded-full bg-[#00000033] text-white opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-left"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </div>
            </div>
            {/* Right arrow button */}
            <div
              ref={nextButtonRef}
              className="w-[3em] h-[3em] cursor-pointer"
            >
              <div className="w-full h-full flex flex-col justify-center items-center rounded-full bg-[#00000033] text-white opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
