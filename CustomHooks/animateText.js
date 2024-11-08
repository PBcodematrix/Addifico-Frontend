import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useAnimateonScroll=(srcElement,destElement,startPos,endPos)=>{
    const text = srcElement.current;
    const endDiv = destElement.current;

  console.log("Text Element:", text);
  console.log("End Div Element:", endDiv);
  
    // Calculate the target position
    const textRect = text.getBoundingClientRect();
    const endRect = endDiv.getBoundingClientRect();
    const yDistance = endRect.top - textRect.top;
    const xDistance = endRect.left - textRect.left;

    gsap.fromTo(
      text,
      { x: 0, y:0 },
      {
        y: yDistance,
        x: xDistance,
        scrollTrigger: {
          trigger: text,
          start: startPos,
          endTrigger: endDiv,
          end: endPos,
          scrub: 1.25,
          // markers: true,
          pin: false,
        },
      }
    );
}

export default useAnimateonScroll;