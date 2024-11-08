import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Resources = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="p-[1em] w-full z-[3]  text-[#dcefd8] relative">
      <div className="rounded-[24px] w-full h-full p-[1em] bg-[#fff] pt-20 flex flex-col justify-center items-center">
        <div className="px-40 flex flex-col justify-between items-center mb-20">
          <div className="flex w-full justify-between items-center mb-10">
            <h1 className="text-[4.5em] text-[#43554b] font-medium">
              Our Latest Resources
            </h1>
            <div
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="w-[3.6em] h-[3.6em] cursor-pointer rounded-full relative flex flex-col overflow-hidden"
            >
              <motion.div
                className="w-full h-full rounded-full translate-x-[-110%] absolute top-0 right-0 bottom-0 left-0 bg-[#43554b]"
                animate={{ translateX: hover ? "0" : "-110%" }}
                transition={{ type: "spring", damping: 15, duration: 0.2 }}
              />
              <div className="w-full h-full flex flex-col justify-center items-center rounded-full text-[#43554b] bg-[#e4ece3]">
                <motion.div
                  className="w-[3.6em] h-[3.6em] absolute flex flex-col justify-center items-center"
                  animate={{ translateX: hover ? "110%" : "0" }}
                  transition={{ type: "spring", damping: 15, duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.div>
              </div>
              <motion.div
                className="w-[3.6em] h-[3.6em] absolute flex flex-col justify-center items-center text-[#dcefd8]"
                animate={{ translateX: hover ? "0" : "-200%" }}
                transition={{ type: "spring", damping: 15 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex gap-[4em]">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="w-full h-[20em] pt-[2.4em] pb-[0.8em] bg-[#97d28b66] rounded-[24px] flex flex-col justify-center gap-4 items-center">
          <div className="max-w-[80em] w-full h-full px-24 flex flex-col justify-between py-4">
            <div className="flex justify-between items-center ">
              <div className="w-1/2">
                <h1 className="text-[#43554b] font-medium text-[2.63em] leading-[1.1]">
                  Don't want to miss anything?
                </h1>
              </div>
              <div className="w-1/2">
                <h1 className="text-[#43554b] opacity-[0.4] font-medium text-[1.25em] leading-[1.4]">
                  Sign up for our newsletter to discover winning trends before
                  your competition!
                </h1>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-3/5 p-2 border-b-[1px] border-[#c3c5c3] bg-transparent text-[#43554b] placeholder-opacity-60 focus:outline-none"
              />
              <button className="w-1/5 p-2 flex items-center justify-between border-b-[1px] border-[#c3c5c3] text-[#43554b] focus:outline-none">
                <span>Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
