import React, { useState } from "react";
import { motion } from "framer-motion";
const Card = ({title,description}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="w-1/3 p-2  rounded-[24px] cursor-pointer relative flex flex-col items-start gap-4 justify-between overflow-hidden"
    >
      <motion.div 
      className=" z-[6] absolute text-[#262d29] top-[1.15em] right-[1.2em] font-bold"
      initial={{opacity:"0",translateX:"-6px",translateY:"6px"}}
      animate={{opacity:hover?"0.6":"0",translateX:hover?"0px":"-6px",translateY:hover?"0px":"6px"}}
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
    className="absolute top-[-1.5px] z-[5] scale-x-0 scale-y-0 origin-top-right right-[-1.5px]"
    initial={{ scaleX: 0,scaleY:0 }}
    animate={{
        scaleX: hover ? 1 : 0,
        scaleY: hover ? 1 : 0,
        // scaleZ: hover ? 1 : 0,
        transition: { duration: 0.3 }
    }}
>
    <img 
        src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ec8998ec1cda0a02614945_top-right-white.svg"
        className="w-[5em] h-[5em]"
    />
</motion.div>
        <div className="w-full object-cover rounded-[24px] relative overflow-hidden">
            <motion.div className="absolute w-full h-full backdrop-blur-md top-0 rounded-[24px] bottom-0 left-0 right-0 bg-[#0000004d] flex flex-col justify-center items-center"
                animate={{opacity:hover?'1':'0'}}
                
            >
                <div className="w-full h-[40%] relative flex justify-center items-center overflow-hidden">
                    <motion.div className=" absolute bottom-[-40%]" 
                        animate={{translateY:hover?"-200%":'0'}}
                        transition={{type:"spring",damping:15}}
                    >
                    <h1 className="text-[1em] font-normal opacity-60 text-[#dcefd8]">Read More</h1>
                    </motion.div>
                </div>
            </motion.div>
            <img src="https://cdn.prod.website-files.com/64e8bbf4a8e46c39e0352f6e/653fbff5cabfba49d46f0767_Rectangle%20486.jpg"/>
        </div>
        <div className="w-full flex justify-between ">
            <h1 className="text-[#43554b] font-normal opacity-40 text-[0.9em] ">Blog</h1>
            <h1 className="text-[#43554b] font-normal opacity-40 text-[0.9em] ">October 23, 2023</h1>
        </div>
        <div>
            <h1 className="text-[#43554b] font-medium leading-[1.2] line-clamp-2 text-[1.75em]">
            Startup Market Sizing: Founder's Guide to TAM SAM SOM Analysis
            </h1>
        </div>
        <div >
            <div className="bg-[#e4ece373]  px-4 py-2 rounded-[24px]">
            <h1 className="text-[#43554b] font-medium opacity-70 text-[0.9em] ">Market Sizing and Forecasting</h1>
            </div>
        </div>
    </div>
  );
};

export default Card;
