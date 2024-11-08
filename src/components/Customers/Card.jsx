import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"
const Card = ({animation,alternate,hidden}) => {
    const [up,setUp]=useState(!alternate);
    useEffect(()=>{
        if(alternate){
            setUp(!animation)
        }else setUp(animation);
            
    },[animation])
    // console.log(alternate);
  return (
    <div className="w-[15%] h-[14em] flex flex-col justify-center items-center rounded-[16px] bg-[#cadcc780] hover:bg-[#e7f1e5] cursor-pointer"
        style={{visibility:hidden&&"hidden"}}
    >
      <div className="w-[7em] h-[6em] flex flex-col justify-center items-center overflow-hidden">
        <motion.div className="w-full  flex flex-col"
            style={{transform:alternate?"translateY(25%)":"translateY(-25%)"}}
            // initial={{ translateY: alternate ? '25%' : 0 }}
          animate={{ translateY: up ? '-25%' : '25%' }}
          transition={{type:"spring",damping:25}}
        >
          <div className="h-[6em] flex flex-col justify-center items-center ">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 626 519"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_694_1162)">
                <path
                  d="M313.2 193.082C404.104 193.082 495.014 193.147 585.918 193C596.779 192.983 608.776 201.124 608.776 215.77C608.784 254.488 608.806 293.203 608.763 331.922C608.75 343.825 600.866 352.781 589.129 354.475C588.435 354.575 587.728 354.609 587.025 354.613C571.14 354.622 555.259 354.601 539.375 354.648C538.038 354.648 537.622 354.336 537.661 352.963C537.765 349.501 537.761 346.03 537.661 342.568C537.622 341.242 538.056 340.982 539.297 340.986C554.8 341.025 570.302 341.012 585.805 341.012C591.45 341.012 595.043 337.498 595.125 331.827C595.173 328.469 595.134 325.111 595.134 321.757C595.134 286.669 595.125 251.577 595.147 216.489C595.147 212.619 593.941 209.487 590.361 207.593C589.246 207 588.049 206.679 586.769 206.718C586.443 206.727 586.118 206.718 585.792 206.718C404.031 206.718 222.273 206.718 40.5116 206.718C36.0815 206.718 32.9445 208.902 31.7383 212.78C31.4779 213.625 31.4345 214.478 31.4345 215.345C31.4345 254.332 31.4345 293.32 31.4345 332.308C31.4345 337.468 35.1356 341.012 40.4899 341.012C162.565 341.012 284.645 341.012 406.721 341.012C408.416 341.012 409.263 341.866 409.263 343.573C409.263 346.767 409.224 349.964 409.285 353.158C409.307 354.245 409.055 354.808 407.866 354.626C407.55 354.579 407.215 354.618 406.89 354.618C284.65 354.618 162.409 354.618 40.1731 354.618C27.5382 354.618 17.793 344.912 17.793 332.325C17.793 293.333 17.793 254.345 17.793 215.358C17.793 202.736 27.4818 193.082 40.1514 193.082C131.169 193.082 222.182 193.082 313.2 193.082Z"
                  fill="#4e5450"
                ></path>
                <path
                  d="M440.547 307.476C440.148 308.208 440.304 308.806 440.304 309.369C440.295 324.309 440.278 339.249 440.326 354.189C440.33 355.575 440.057 356.035 438.573 355.996C434.242 355.883 429.903 355.9 425.569 355.987C424.202 356.013 423.885 355.614 423.89 354.28C423.929 320.232 423.92 286.184 423.92 252.136C423.92 250.892 423.972 249.644 423.903 248.401C423.846 247.387 424.111 246.975 425.243 246.993C429.361 247.062 433.479 247.049 437.596 246.997C438.59 246.984 438.915 247.27 438.885 248.279C438.816 250.632 438.863 252.989 438.863 255.723C439.926 254.501 440.69 253.548 441.527 252.669C447.281 246.607 454.548 244.804 462.636 244.969C480.226 245.329 494.428 261.885 494.519 279.871C494.579 291.942 490.249 301.943 481.007 309.685C471.991 317.238 456.918 318.806 447.381 313.412C444.751 311.926 442.569 309.924 440.547 307.476ZM439.319 284.455C439.362 288.783 442.634 294.893 449.902 298.546C456.844 302.029 463.695 301.635 469.995 297.124C476.634 292.367 479.102 285.551 477.966 277.618C476.916 270.299 472.88 264.827 465.951 262.075C452.978 256.932 439.328 266.634 439.323 284.455H439.319Z"
                  fill="#4e5450"
                ></path>
                <path
                  d="M522.782 307.055C522.782 308.074 522.782 308.594 522.782 309.118C522.782 324.17 522.765 339.227 522.812 354.28C522.812 355.601 522.539 356.026 521.146 355.996C516.868 355.896 512.581 355.896 508.299 355.996C506.824 356.03 506.433 355.645 506.433 354.146C506.481 320.085 506.463 286.023 506.481 251.967C506.481 250.364 505.787 248.284 506.806 247.283C507.743 246.364 509.804 247.049 511.366 247.032C514.295 246.997 517.224 247.066 520.148 246.997C521.237 246.971 521.528 247.339 521.498 248.379C521.428 250.684 521.476 252.994 521.476 255.589C522.869 254.073 523.967 252.686 525.251 251.507C530.909 246.321 537.747 244.822 545.227 244.973C562.796 245.329 576.776 261.902 577.049 279.268C577.253 292.393 572.571 303.151 561.945 310.842C553.215 317.164 543.349 318.074 533.143 314.855C529.004 313.55 525.798 310.79 522.778 307.055H522.782ZM560.787 280.768C560.804 269.762 552.369 260.789 541.969 260.758C530.549 260.724 521.775 269.472 521.806 280.867C521.836 291.921 530.319 300.747 540.927 300.764C552.23 300.786 560.774 292.185 560.791 280.768H560.787Z"
                  fill="#4e5450"
                ></path>
                <path
                  d="M311.92 305.145C303.902 317.541 285.453 319.66 273.061 312.108C261.458 305.032 254.26 290.278 256.113 276.734C258.252 261.131 267.719 249.714 281.96 246.825C301.258 242.556 318.344 252.591 322.915 270.33C323.398 272.188 323.482 274.159 323.833 276.219C323.89 276.539 323.751 276.909 324.524 276.927C323.919 275.469 324.272 273.975 324.272 272.496C324.317 257.444 324.307 242.392 324.307 227.34C324.307 225.63 324.473 224.268 326.425 224.2C330.942 224.035 335.465 224.03 339.981 224.2C341.992 224.28 342.428 225.581 342.422 227.46C342.401 266.453 342.401 305.451 342.401 344.444C342.401 345.795 342.173 346.255 340.804 346.213C336.47 346.095 332.135 346.125 327.804 346.205C326.496 346.23 326.031 345.782 326.036 344.444C326.076 331.729 326.076 319.014 326.03 306.299C326.026 305.185 326.031 304.066 326.031 302.95C326.031 301.901 326.031 300.853 326.031 299.408C324.6 302.084 323.541 304.513 322.272 306.842C318.815 312.932 313.641 315.633 307.177 316.18C302.112 316.626 297.451 315.41 293.575 312.108C290.443 309.489 287.896 306.299 285.992 302.409C278.94 287.655 285.69 270.177 300.118 263.888C307.087 260.9 314.257 261.112 320.921 264.398C329.062 268.612 333.593 275.886 334.526 285.446C334.759 287.73 334.835 290.036 334.854 292.339C334.872 294.652 334.885 296.964 334.885 299.286C334.885 301.239 334.872 303.193 334.872 305.145H311.92Z"
                  fill="#4e5450"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_694_1162">
                  <rect width="626" height="519" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="h-[6em] flex flex-col justify-center items-center">
            <svg
              class="logos__image"
              width="100%"
              viewBox="0 0 338 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_691_1102)">
                <path
                  d="M140.4 14.4V57.5999H132.9V23.7H132.8L119.4 57.5999H114.4L100.7 23.7H100.6V57.5999H93.7002V14.4H104.5L116.9 46.4H117.1L130.2 14.4H140.4ZM146.6 17.7C146.6 16.5 147 15.5 147.9 14.7C148.8 13.9 149.8 13.5 151 13.5C152.3 13.5 153.4 13.9 154.2 14.7C155 15.5 155.5 16.5 155.5 17.7C155.5 18.9 155.1 19.9 154.2 20.7C153.3 21.5 152.3 21.9 151 21.9C149.7 21.9 148.7 21.5 147.9 20.7C147.1 19.8 146.6 18.8 146.6 17.7ZM154.7 26.6V57.5999H147.4V26.6H154.7ZM176.8 52.2999C177.9 52.2999 179.1 52.1 180.4 51.5C181.7 51 182.9 50.3 184 49.5V56.2999C182.8 56.9999 181.5 57.4999 180 57.7999C178.5 58.0999 176.9 58.2999 175.1 58.2999C170.5 58.2999 166.8 56.9 164 54C161.1 51.1 159.7 47.4 159.7 43C159.7 38 161.2 33.9 164.1 30.7C167 27.5 171.1 25.9 176.5 25.9C177.9 25.9 179.3 26.1 180.6 26.4C182 26.7 183.1 27.2 183.9 27.6V34.5999C182.8 33.7999 181.6 33.1 180.5 32.7C179.3 32.3 178.1 32 176.9 32C174 32 171.7 32.8999 169.9 34.7999C168.1 36.6999 167.3 39.2 167.3 42.4C167.3 45.5 168.2 48 169.9 49.7C171.6 51.4 173.9 52.2999 176.8 52.2999ZM204.7 26.1C205.3 26.1 205.8 26.1 206.3 26.2C206.8 26.3 207.2 26.4 207.5 26.5V33.9C207.1 33.6 206.6 33.2999 205.8 33.0999C205 32.8999 204.2 32.7 203.1 32.7C201.3 32.7 199.8 33.5 198.6 35C197.4 36.5 196.7 38.8 196.7 42V57.5999H189.4V26.6H196.7V31.5H196.8C197.5 29.8 198.5 28.5 199.8 27.5C201.2 26.6 202.8 26.1 204.7 26.1ZM207.9 42.5999C207.9 37.4999 209.4 33.4 212.2 30.4C215.1 27.4 219.1 25.9 224.2 25.9C229 25.9 232.8 27.3 235.5 30.2C238.2 33.1 239.6 37 239.6 41.9C239.6 46.9 238.1 50.9 235.3 53.9C232.4 56.9 228.5 58.4 223.5 58.4C218.7 58.4 214.9 57 212.1 54.2C209.3 51.3 207.9 47.3999 207.9 42.5999ZM215.5 42.2999C215.5 45.4999 216.2 48 217.7 49.7C219.2 51.4 221.3 52.2999 224 52.2999C226.6 52.2999 228.7 51.5 230.1 49.7C231.5 48 232.2 45.4999 232.2 42.0999C232.2 38.7999 231.5 36.3 230.1 34.5C228.7 32.8 226.6 31.9 224.1 31.9C221.4 31.9 219.4 32.7999 217.9 34.5999C216.2 36.4999 215.5 38.9999 215.5 42.2999ZM250.5 34.7999C250.5 35.7999 250.8 36.6999 251.5 37.2999C252.2 37.8999 253.6 38.6 255.9 39.5C258.8 40.7 260.9 42 262 43.4C263.2 44.9 263.8 46.6 263.8 48.7C263.8 51.6 262.7 53.9 260.4 55.7C258.2 57.5 255.1 58.2999 251.3 58.2999C250 58.2999 248.6 58.0999 247 57.7999C245.4 57.4999 244.1 57.0999 243 56.5999V49.4C244.3 50.3 245.8 51.0999 247.3 51.5999C248.8 52.0999 250.2 52.4 251.5 52.4C253.1 52.4 254.4 52.2 255.1 51.7C255.9 51.2 256.3 50.5 256.3 49.4C256.3 48.4 255.9 47.5999 255.1 46.7999C254.3 46.0999 252.7 45.3 250.5 44.4C247.8 43.3 245.9 41.9999 244.8 40.5999C243.7 39.1999 243.1 37.4 243.1 35.2C243.1 32.4 244.2 30.0999 246.4 28.2999C248.6 26.4999 251.5 25.6 255 25.6C256.1 25.6 257.3 25.7 258.6 26C259.9 26.3 261.1 26.6 262 26.9V34C261 33.4 259.9 32.7999 258.6 32.2999C257.3 31.7999 256 31.6 254.8 31.6C253.4 31.6 252.3 31.9 251.6 32.4C250.9 33.1 250.5 33.7999 250.5 34.7999ZM266.9 42.5999C266.9 37.4999 268.4 33.4 271.2 30.4C274.1 27.4 278.1 25.9 283.2 25.9C288 25.9 291.8 27.3 294.5 30.2C297.2 33.1 298.6 37 298.6 41.9C298.6 46.9 297.1 50.9 294.3 53.9C291.4 56.9 287.5 58.4 282.5 58.4C277.7 58.4 273.9 57 271.1 54.2C268.4 51.3 266.9 47.3999 266.9 42.5999ZM274.5 42.2999C274.5 45.4999 275.2 48 276.7 49.7C278.2 51.4 280.3 52.2999 283 52.2999C285.6 52.2999 287.7 51.5 289.1 49.7C290.5 48 291.2 45.4999 291.2 42.0999C291.2 38.7999 290.5 36.3 289.1 34.5C287.7 32.8 285.6 31.9 283.1 31.9C280.4 31.9 278.4 32.7999 276.9 34.5999C275.3 36.4999 274.5 38.9999 274.5 42.2999ZM322.9 32.5999H312V57.5999H304.6V32.5999H299.4V26.6H304.6V22.3C304.6 19.1 305.7 16.4 307.8 14.3C309.9 12.2 312.6 11.2 315.9 11.2C316.8 11.2 317.6 11.3 318.3 11.3C319 11.3 319.6 11.5 320.1 11.7V18C319.9 17.9 319.4 17.7 318.8 17.5C318.2 17.3 317.5 17.2 316.7 17.2C315.2 17.2 314 17.7 313.2 18.6C312.4 19.5 312 21 312 22.8V26.5H322.9V19.5L330.2 17.3V26.5H337.6V32.5H330.2V47C330.2 48.9 330.6 50.2 331.2 51C331.9 51.8 333 52.2 334.5 52.2C334.9 52.2 335.4 52.1 336 51.9C336.6 51.7 337.1 51.5 337.5 51.2V57.2C337 57.5 336.3 57.7 335.2 57.9C334.1 58.1 333.1 58.2 332 58.2C328.9 58.2 326.6 57.3999 325.1 55.7999C323.6 54.1999 322.8 51.7 322.8 48.4L322.9 32.5999Z"
                  fill="#4e5450"
                ></path>
                <path
                  d="M34.2 0H0V34.2H34.2V0Z"
                  fill="#4e5450"
                ></path>
                <path
                  d="M71.9998 0H37.7998V34.2H71.9998V0Z"
                  fill="#4e5450"
                ></path>
                <path
                  d="M34.2 37.8H0V72H34.2V37.8Z"
                  fill="#4e5450"
                ></path>
                <path
                  d="M71.9998 37.8H37.7998V72H71.9998V37.8Z"
                  fill="#4e5450"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_691_1102">
                  <rect width="337.6" height="72" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
