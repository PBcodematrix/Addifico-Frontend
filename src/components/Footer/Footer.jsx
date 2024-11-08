import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center z-[4] p-2 gap-4 relative overflow-hidden">
    <div className="w-full h-full flex justify-center items-stretch p-2 gap-4 relative z-[2]">
      <div className="w-1/2 grid grid-cols-2 gap-4">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>
      <div className="w-1/2 bg-[#0003] flex flex-col p-2 justify-between rounded-[24px]">
        <div className="p-2">
          <h2 className="text-[2.63em] font-medium text-[#dcefd8]">Interested but don't know where to start?</h2>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name*"
                className="p-3 bg-[#dcefd80d] rounded-[16px]  border-[#ffffff00] border-solid border-[1.4px] text-[#dcefd8] "
              />
              <input
                type="email"
                placeholder="Email*"
                className="p-3 bg-[#dcefd80d] rounded-[16px]  border-[#ffffff00] border-solid border-[1.4px] text-[#dcefd8] "              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Phone"
                className="p-3 bg-[#dcefd80d] rounded-[16px]  border-[#ffffff00] border-solid border-[1.4px] text-[#dcefd8] "              />
              <input
                type="text"
                placeholder="Subject*"
                className="p-3 bg-[#dcefd80d] rounded-[16px]  border-[#ffffff00] border-solid border-[1.4px] text-[#dcefd8] "              />
            </div>
            <textarea
              placeholder="Your message*"
              className="p-3 mb-4 bg-[#dcefd80d] w-full rounded-[16px]  border-[#ffffff00] border-solid border-[1.4px] text-[#dcefd8] " rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-[#97d28b] text-black rounded-[16px] cursor-pointer font-medium hover:bg-[#7eb971] "
            >
              Send Message
            </button>
          </form>
          
        </div>
        <div className="flex flex-col p-2 items-start justify-center">
            <h1 className="text-[#dcefd8] opacity-30 font-normal">Or email us at:</h1>
            <div className="p-3 w-full h-[4em] rounded-[16px]  border-[#dcefd826] border-solid border-[1.4px] text-[#dcefd8] flex flex-col justify-center items-center" >
              <a className="text-[#dcefd8] opacity-70 font-normal">hristo@addifico.com</a>
            </div>
          </div>
      </div>
        </div>
      <div className="absolute w-full h-full z-0 ">
        <img src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
          className="w-full h-[120%] absolute left-[-63%] -bottom-1/2 rotate-[-24deg] opacity-[0.6]"
        />
      </div>
    <div className="w-full z-[2]  p-6 bg-[#0003] flex justify-between items-start rounded-[24px] backdrop-blur-l">
      <div>
        <span className="text-[#dcefd8] text-[1.25em] opacity-30 ">
          Design and development by{" "}
        </span>
        <span className="text-[#dcefd8] text-[1.25em] ">
          Piyush Kumar
        </span>
      </div>
      <div>
        <h1 className="text-[#dcefd8] text-[1.25em] opacity-30 ">©2024 All Rights reserved</h1>
      </div>
    </div>
    </div>
  );
};

export default Footer;
