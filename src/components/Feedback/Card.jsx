import React from "react";

const Card = () => {
  return (
    <div className="w-[26em] h-[34em] rounded-[24px] bg-[#e4ece3] p-[2.5em] gap-[2em] flex flex-col items-start">
      <div className="flex gap-1">
        <div className="bg-[#c9dcc6] opacity-[0.7] rounded-[1000px] py-[0.6em] px-[1.2em]">
          <h1 className="text-[#43554b] text-[1em] font-medium">5 of 324</h1>
        </div>
        <div className="  rounded-[1000px] py-[0.6em] px-[1.2em] border-solid border-2 border-[#c9dcc6]">
          <h1 className="text-[#43554b] text-[1em] font-medium">Read More</h1>
        </div>
      </div>
      <div className="w-full h-full ">
        <h1 className="text-[#43554b] opacity-[0.8] leading-[1.5] text-[1.13em] font-normal ">
          The analysis was very profound, even though the business model is
          rather new and experimental. Every result and figure was marked with
          the source and every calculation can be reconsidered
        </h1>
      </div>
      <div className="w-full mt-auto pt-[2em] flex gap-[1em] relative">
        <div className="w-full h-[1px] absolute top-0 opacity-[0.1] bg-[#43554b]"></div>
        <div className="w-[3.75em] h-[3.75em] rounded-full bg-[url('https://cdn.prod.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef2045a8dcfd1d431f9b_Oliver%20Lauche.jpg')] ">

        </div>
        <div className="flex flex-col gap-[0.2em]">
          <h1 className="text-[#43554b] font-bold text-[1.25em] leading-[1.4]">Oliver Lauche</h1>
          <h1 className="text-[#43554b] font-medium text-[0.75em] opacity-40 leading-[1.1]">
            Founder of Witjaw
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
