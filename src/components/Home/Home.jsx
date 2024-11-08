import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useAnimateonScroll from "../../../CustomHooks/animateText";
import {motion} from "framer-motion"
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [hover,setHover]=useState(false);
  const textRef = useRef(null);
  const textRef2=useRef(null);
  const endDivRef = useRef(null);
  const endDivRef2=useRef(null);
  useEffect(() => {
  //   const text = textRef.current;
  //   const endDiv = endDivRef.current;

  // console.log("Text Element:", text);
  // console.log("End Div Element:", endDiv);
  
  //   // Calculate the target position
  //   const textRect = text.getBoundingClientRect();
  //   const endRect = endDiv.getBoundingClientRect();
  //   const yDistance = endRect.top - textRect.top;
  //   const xDistance = endRect.left - textRect.left;

  //   gsap.fromTo(
  //     text,
  //     { x: 0, y:0 },
  //     {
  //       y: yDistance,
  //       x: xDistance,
  //       scrollTrigger: {
  //         trigger: text,
  //         start: "top 40%",
  //         endTrigger: endDiv,
  //         end: "top start",
  //         scrub: 0.5,
  //         markers: true,
  //         pin: false,
  //       },
  //     }
  //   );
    useAnimateonScroll(textRef,endDivRef,"top 20%","top 20%");
    useAnimateonScroll(textRef2,endDivRef2,"top 30%","top 28%");
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className=" w-full relative flex flex-col gap-96 items-center overflow-hidden">
      <motion.div className='w-[full] h-[100vw] z-10  fixed top-0 bottom-0 right-0 left-0 flex flex-col pointer-events-none    items-center  bg-black'
        initial={{ opacity: 0 }}
        animate={{ opacity: hover?'0.9':'0' }}
      > 
        <motion.div className='text-[1.25em] font-medium leading-[1.4] absolute top-[43%] text-[#dcefd8]'
            animate={{translateY:hover?'-100%':'100%'}}
            transition={{type:"tween"}}
        >
                <em>Aedifico </em>
                <span className='opacity-40'>
                    - from Latin, meaning to <em>build, create, establish, </em>
                    and <em>improve. </em>
                </span>
          </motion.div>
      </motion.div>
      <div className="w-full h-full  md:h-[100vh] pt-10 px-4 pb-8">
        <div className="z-[2] w-full h-full pt-24 bg-[#00000033]  rounded-3xl relative flex flex-col">
          <div className="opacity-[0.4] text-[#dcefd8] text-center font-normal">
            Competitive Edge through Creativity & Technology
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="block md:text-[6.5em] text-[3em] w-[10em] font-medium leading-[1.1] text-[#dcefd8]">
              Market Insights
              <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className="inline">
              <span className="inline-block w-[0.8em] h-[0.5em] md:w-[1.2em] md:h-[0.75em] cursor-pointer relative bg-[#dcefd80d] rounded-[100px]">
                <div className="w-full h-full absolute flex flex-col items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64f5c2e6bc77c145a44f4842_Star.svg"
                    className="w-[0.8em] h-[0.2em] md:w-[0.8em] md:h-[0.3em]"
                  />
                </div>
              </span>
              </div>
              <span className=" w-[1.8em] h-[0.75em] bg-[#dcefd80d] rounded-[100px] mr-4 ml-[17rem] hidden md:inline-block overflow-hidden">
                <div className="w-full h-full">
                  <img
                    src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5c38109cfeef5f12e09ae_Image.jpg"
                    className="object-cover"
                  />
                </div>
              </span>
              that
              <span ref={textRef}  className="text-[#97d28b] md:ml-4 md:mr-4 ml-3 inline-block">Make a</span>
              <div>
                <span ref={textRef2}  className="text-[#97d28b] md:ml-[8rem] inline-block">
                  Difference
                </span>
              </div>
            </h1>
          </div>
          <div
            className="inline-block w-[5em] h-[5em] absolute right-[-5px] bottom-[-5px] rounded-3xl"
          >
            <img
              src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64f2e2314ae531679cb2a32f_Cut-edge-white.svg"
              className=" inline-block w-[5em] h-[5em] absolute right-[-5px] bottom-[-5px] mix-blend-multiply opacity-5 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="z-0 w-full h-full absolute top-0 left-0 right-0 bottom-0">
        <img
          src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
          className="inline-block z-0 absolute top-0 left-[-40em] w-[70em] right-auto rotate-[-146deg] overflow-clip"
          style={{ overflowClipMargin: "content-box" }}
        />
        <img
          src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
          className="z-0 absolute bottom-0 right-[-30em] w-[80em] top-[-20em] left-auto rotate-[-7deg] overflow-clip"
          style={{ overflowClipMargin: "content-box" }}
        />
      </div>
      
      <div className=" w-[75%] flex flex-col">
      <div className=" w-full mx-auto  h-[1px] bg-[#e4ece3] mt-auto relative opacity-[0.2]">

          <div className="w-[400px] h-[100px]  invisible bg-white absolute top-[-320px] " ref={endDivRef}></div>
          <div className="w-[400px] h-[100px] invisible bg-white  absolute top-[-200px] " ref={endDivRef2}></div>
      </div>
        <div className="z-0 w-full h-full absolute top-0 left-0 right-0 bottom-0 ">
          <img
            src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
            className="z-0 rotate-[-129deg] absolute w-[900px] left-[-500px] bottom-[-600px] opacity-[0.6]"
          />
        </div>
        <div className="flex justify-between pt-16">
        <div className="z-[4]">
          <h1 className="sticky top-[4em] font-normal opacity-[0.7] text-[#dcefd8]">Why we exist?</h1>
        </div>
        <div className="z-[4] w-[52%]">
          <h1 className="text-[#dcefd8b3] font-medium text-[3em] leading-tight ">At Addifico Consulting, we
              use human creativity and
              the latest technologies to
              help business leaders,
              investors, and
              entrepreneurs enhance
              their market positioning,
              discover the next winning
              trend, and optimize their
              chances for success.
          </h1>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
