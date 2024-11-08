import React, { useRef } from "react";
import {motion,useInView} from "framer-motion";
const Card = ({
  bgColor = "bg-white",
  textColor = "text-[#43554b]",
  height = "h-[22em]",
  data,
  label,
}) => {

    const ref = useRef(null);
  // Check if the element is in view
  const isInView = useInView(ref);

  return (
    <div
      className={`p-[1.6em] ${height} rounded-[24px] ${bgColor} flex flex-col justify-end gap-1 relative`}
    >
      <div className="absolute w-[9em] h-[10em] top-0 right-0 p-[2.5em]">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 360 330"
            width="360"
            height="330"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "100%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: "visible",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_30">
                <rect width="360" height="330" x="0" y="0" />
              </clipPath>
              <clipPath id="__lottie_element_32">
                <path d="M0,0 L360,0 L360,330 L0,330z" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_30)">
              <g
                clipPath="url(#__lottie_element_32)"
                transform="matrix(1,0,0,1,0,0)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g
                  transform="matrix(1.3300000429153442,0,0,1.3300000429153442,225,111.00050354003906)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,-128,76.25)">
                    <path
                      fill="rgb(230,244,227)"
                      fillOpacity="1"
                      d="M37.12799835205078,-59.0880012512207 C37.12799835205078,-59.0880012512207 37,73.75 37,73.75 C37,80.37699890136719 31.62700080871582,85.75 25,85.75 C25,85.75 -25,85.75 -25,85.75 C-31.62700080871582,85.75 -37,80.37699890136719 -37,73.75 C-37,73.75 -36.87200164794922,-59.0880012512207 -36.87200164794922,-59.0880012512207 C-36.87200164794922,-65.71499633789062 -31.499000549316406,-71.08799743652344 -24.871999740600586,-71.08799743652344 C-24.871999740600586,-71.08799743652344 25.128000259399414,-71.08799743652344 25.128000259399414,-71.08799743652344 C31.7549991607666,-71.08799743652344 37.12799835205078,-65.71499633789062 37.12799835205078,-59.0880012512207z"
                    />
                  </g>
                </g>
                <g
                  transform="matrix(1.3300000429153442,0,0,1.3300000429153442,350.8320007324219,110.99949645996094)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,-128,76.25)">
                    <path
                      fill="rgb(230,244,227)"
                      fillOpacity="1"
                      d="M37.0620002746582,-126.75800323486328 C37.0620002746582,-126.75800323486328 37,73.75 37,73.75 C37,80.37699890136719 31.62700080871582,85.75 25,85.75 C25,85.75 -25,85.75 -25,85.75 C-31.62700080871582,85.75 -37,80.37699890136719 -37,73.75 C-37,73.75 -36.9379997253418,-126.75800323486328 -36.9379997253418,-126.75800323486328 C-36.9379997253418,-133.38499450683594 -31.565000534057617,-138.75799560546875 -24.937999725341797,-138.75799560546875 C-24.937999725341797,-138.75799560546875 25.062000274658203,-138.75799560546875 25.062000274658203,-138.75799560546875 C31.68899917602539,-138.75799560546875 37.0620002746582,-133.38499450683594 37.0620002746582,-126.75800323486328z"
                    />
                  </g>
                </g>
                <g
                  transform="matrix(1.3300000429153442,0,0,1.3300000429153442,477.4110107421875,110.99949645996094)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,-128,76.25)">
                    <path
                      fill="rgb(230,244,227)"
                      fillOpacity="1"
                      d="M37.090999603271484,2.190000057220459 C37.090999603271484,2.190000057220459 37,73.75 37,73.75 C37,80.37699890136719 31.62700080871582,85.75 25,85.75 C25,85.75 -25,85.75 -25,85.75 C-31.62700080871582,85.75 -37,80.37699890136719 -37,73.75 C-37,73.75 -36.909000396728516,2.190000057220459 -36.909000396728516,2.190000057220459 C-36.909000396728516,-4.436999797821045 -31.535999298095703,-9.8100004196167 -24.909000396728516,-9.8100004196167 C-24.909000396728516,-9.8100004196167 25.090999603271484,-9.8100004196167 25.090999603271484,-9.8100004196167 C31.718000411987305,-9.8100004196167 37.090999603271484,-4.436999797821045 37.090999603271484,2.190000057220459z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div />
      <div className="w-full h-1/2 relative flex flex-col justify-end overflow-hidden ">
        {/* <div className="h-full overflow-  relative"> */}
            <motion.div
              ref={ref}
              initial={{ translateY: '100%' }} // Start at 100% position down
              animate={isInView ? { translateY: '0%' } : { translateY: '100%' }} // Move up to 0% if `isInView` is true
              transition={{ type: 'tween' }}
              className="absolute"
            >
            <h1 className={`lg:text-[4em] md:text-[3.5em] sm:text-[3.5em] font-medium ${textColor} relative`}>
                {data}
            </h1>
            </motion.div>
            {/* </div> */}
      </div>
            <div>
              <h1 className={`text-[1.25em] font-normal opacity-60 text-[#43554b]`}>
                {label}
              </h1>
      </div>

    </div>
  );
};

export default Card;
