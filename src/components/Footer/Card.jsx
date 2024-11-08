import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = () => {

    const [hover, setHover] = useState(false);



  return (
    <div
    onMouseEnter={() => {
      setHover(true);
    }}
    onMouseLeave={() => {
      setHover(false);
    }}
    className="h-[22em] p-[1.6em] z-[2] bg-[#0003] flex flex-col justify-between items-start rounded-[24px] backdrop-blur-lg"
  >
    <div className="w-[3.6em] h-[3.6em] relative  rounded-full bg-[#262d29] flex flex-col justify-center items-center overflow-hidden">
      <motion.div className="w-full h-full rounded-full -bottom-full   bg-[#97d28b] absolute"
          animate={{translateY:hover?"-100%":"0"}}
          transition={{type:"tween"}}
      ></motion.div>
      <div className="w-1/2 h-1/2 z-[1] flex flex-col text-[#dcefd8cc] justify-center items-center"
          style={{color:hover&&"#262d29"}}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_741_1410"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="30"
            height="30"
          >
            <rect
              x="0.360474"
              y="0.70752"
              width="29.1482"
              height="29.1482"
              fill="currentColor"
            ></rect>
          </mask>
          <g mask="url(#mask0_741_1410)">
            <path
              d="M22.6888 18.2075C21.3842 18.2075 20.1618 17.6882 19.0511 16.8429L19.3216 15.6496L19.3333 15.6054C19.5741 14.3348 20.3381 12.2022 22.6888 12.2022C24.4516 12.2022 25.8855 13.5503 25.8855 15.2076C25.8796 16.8594 24.4458 18.2075 22.6888 18.2075ZM22.6888 9.15822C19.6858 9.15822 17.3588 10.9924 16.4128 14.0088C14.9671 11.9702 13.874 9.52287 13.2336 7.46216H10.0015V15.3678C10.0015 16.9257 8.64993 18.1963 6.99275 18.1963C5.33557 18.1963 3.98411 16.9257 3.98411 15.3678V7.46216H0.751746V15.3678C0.739987 18.6053 3.54308 21.2625 6.98663 21.2625C10.4303 21.2625 13.2334 18.6053 13.2334 15.3678V14.042C13.8621 15.2739 14.6319 16.5169 15.5663 17.6219L13.5859 26.3726H16.8944L18.3282 20.025C19.5857 20.7818 21.0314 21.257 22.6886 21.257C26.232 21.257 29.1174 18.5279 29.1174 15.1965C29.1174 11.8707 26.2322 9.15822 22.6888 9.15822Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <div className="w-full min-h-[3em]  flex relative items-center justify-start overflow-hidden">
      <motion.div className="flex items-center gap-3 absolute -left-[2.5em]"
          animate={{translateX:hover?"3em":"0"}}
          transition={{type:"spring",damping:15}}
      >
        <motion.div className="w-[2em] h-[2em]  text-[#97d28b] flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="30"
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
        <h1 className="text-[2em] text-[#dcefd8] opacity-70 font-medium">
          Upwork
        </h1>
      </motion.div>
    </div>
  </div>
  )
}

export default Card