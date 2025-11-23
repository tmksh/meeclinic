/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const BtnPc = ({ className }) => {
  return (
    <a href="https://meeclinic0903.netlify.app/app/medicines" className="no-underline contents">
      <div
        className={`flex w-full max-w-[441px] md:max-w-[340px] xl:max-w-[441px] h-[66px] md:h-[54px] xl:h-[66px] items-center justify-center px-[18px] md:px-4 xl:px-[18px] py-[15px] md:py-3 xl:py-[15px] relative bg-white rounded-[100px] border-2 border-solid border-[#EFA3AF] cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      >
        <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#EFA3AF] text-2xl md:text-lg xl:text-2xl text-center tracking-[0] leading-[normal]">
          ご購入はこちら
        </div>

        <div className="absolute right-4 md:right-4 xl:right-[18px] w-[30px] h-[30px] md:w-6 md:h-6 xl:w-[30px] xl:h-[30px] bg-[#EFA3AF] rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 md:w-2.5 md:h-2.5 xl:w-3 xl:h-3 ml-0.5"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8L0.5 15.7942L0.5 0.205771L14 8Z" fill="white" />
          </svg>
        </div>
      </div>
    </a>
  );
};
