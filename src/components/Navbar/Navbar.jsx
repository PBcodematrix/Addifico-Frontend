import React, { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="sticky z-[20] w-full top-1 flex items-center justify-between py-2 px-4 "
    >
      <div className="flex-1"></div>
      <div onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }} className="w-[11em] h-[3.2em]  rounded-[100px] relative flex items-center justify-center cursor-pointer overflow-hidden bg-[#97d28b] px-[20px]">
        <motion.div className="w-full h-full flex flex-col justify-center items-center  origin-right  absolute"
            animate={{rotate:hover?"-45deg":"0"}}
            transition={{type:"spring",damping:15}}
        >
        <h1 className="text-[1.13em] absolute w-full pl-3 origin-right rotate-45  font-medium text-[#262d29]">
            Do'nt be shy
        </h1>
          <h1 className="text-[1.13em] w-full pl-3  font-medium text-[#262d29]">
            Get in touch
          </h1>
          
        </motion.div>
      </div>
      <div className="absolute right-3 w-[3.2em] h-[3.2em] flex flex-col justify-center items-center">
        <motion.div
          className="w-[30%] h-[30%] bg-[#262d29] rounded-full"
          animate={{
            width: hover ? "70%" : "30%",
            height: hover ? "70%" : "30%",
          }}
        >
          
        </motion.div>
        <motion.div className="w-[30%] h-[30%] absolute text-[#97d28b] flex flex-col justify-center items-center left-[-10px]"
            animate={{translateX:hover?"1.8em":"0"}}
            transition={{type:"spring",damping:15}}
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
