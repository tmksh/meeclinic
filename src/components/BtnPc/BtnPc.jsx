/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const BtnPc = ({ className }) => {
  return (
    <div
      className={`flex w-full max-w-[441px] md:max-w-[340px] xl:max-w-[441px] h-[66px] md:h-[54px] xl:h-[66px] items-center justify-center px-[18px] md:px-4 xl:px-[18px] py-[15px] md:py-3 xl:py-[15px] relative bg-white rounded-[100px] border-2 border-solid border-[#cccccc] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#555555] text-2xl md:text-lg xl:text-2xl text-center tracking-[0] leading-[normal]">
        お申し込みはこちら
      </div>

      <div className="absolute right-4 md:right-4 xl:right-[18px] w-[30px] h-[30px] md:w-6 md:h-6 xl:w-[30px] xl:h-[30px] bg-white rounded-[15px]">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-[17px] md:w-3 md:h-[14px] xl:w-3.5 xl:h-[17px]"
          alt="Vector"
          src="/img/vector-7-5.svg"
        />
      </div>
    </div>
  );
};
