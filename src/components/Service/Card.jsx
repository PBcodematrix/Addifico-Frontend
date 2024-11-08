import React, { useState } from "react";
import { motion } from "framer-motion";
const Card = ({title,description,icon}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="w-[20em] h-[20em] bg-[#43554b80]  rounded-[24px] cursor-pointer relative flex flex-col justify-between pt-[1.2em] pb-[1.2em] px-[1.2em]"
    >
      <motion.div
        className="relative z-[5] h-[4em] text-[#97d28b]"
        initial={{ color: "#97d28b" }}
        animate={{ color: hover ? "#43554B" : "#97d28b" }}
      >

        {icon}
      </motion.div>
      <div className="z-[1] relative flex flex-col gap-2 ">
        <motion.h1
          className="text-[1.5em] font-medium"
          initial={{ color: "#dcefd8b3" }}
          animate={{ color: hover ? "#43554B" : "#dcefd8b3" }}
        >
          {title}
        </motion.h1>
        <motion.div 
        className="relative overflow-hidden w-full pr-2 "
        initial={{maxHeight:"0"}}
        animate={{maxHeight:hover?"6em":"0"}}
        transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 19,
          }}
        >
          <h1 className="relative text-[1.1em] opacity-[0.4] font-medium leading-[1.4] text-[#262d29]">
            {description}
          </h1>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 overflow-hidden rounded-[24px]">
        <motion.div
          className="absolute top-0 right-0 left-0 bottom-0  bg-[#97d28b]"
          initial={{ translateY: "100%" }}
          animate={{ translateY: hover ? "0%" : "100%" }}
          transition={{
            duration: 0.4,
           
          }}
        ></motion.div>
      </div>
      <motion.div 
      className=" z-[5] absolute text-[#dcefd8] top-[1.15em] right-[1.2em]"
      initial={{opacity:"0.16",translateX:"-6px",translateY:"6px"}}
      animate={{opacity:hover?"0.6":"0.16",translateX:hover?"0px":"-6px",translateY:hover?"0px":"6px"}}
      >
        <svg
          width="0.9em"
          height="0.9em"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5858 2L1.00003 2V0L16 0C16.5523 0 17 0.447715 17 1V16L15 16V3.41421L1.90384 16.5104L0.489624 15.0962L13.5858 2Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
      <motion.div 
    className="absolute top-[-1.5px] scale-x-0 scale-y-0 origin-top-right right-[-1.5px]"
    initial={{ scaleX: 0,scaleY:0 }}
    animate={{
        scaleX: hover ? 1 : 0,
        scaleY: hover ? 1 : 0,
        // scaleZ: hover ? 1 : 0,
        transition: { duration: 0.3 }
    }}
>
    <img 
        src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
        className="w-[5em] h-[5em]"
    />
</motion.div>
    </div>
  );
};

export default Card;
