/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ReasonTextPc = ({
  prop = "01",
  prop1 = "医師による診療",
  text2 = "産婦人科・皮膚科の専門医が在籍。悩みに丁寧に寄り添います。",
  className,
  frameClassName,
  divClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-full md:w-[350px] xl:w-[587px] items-start gap-4 md:gap-5 xl:gap-6 relative ${className}`}
    >
      <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#e5bcc5] text-[60px] md:text-[80px] xl:text-[100px] tracking-[3.00px] md:tracking-[4.00px] xl:tracking-[5.00px] leading-[60px] md:leading-[80px] xl:leading-[100px]">
        {prop}
      </div>
      <div
        className={`flex flex-col w-full md:w-[350px] xl:w-[587px] items-start gap-3 md:gap-3 xl:gap-4 relative flex-[0_0_auto] ${frameClassName}`}
      >
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#c76f7e] text-[24px] md:text-[28px] xl:text-[32px] tracking-[0] leading-[36px] md:leading-[42px] xl:leading-[48px] ${divClassName}`}
        >
          {prop1}
        </div>
        <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#6b6b6b] text-sm md:text-sm xl:text-base tracking-[0] leading-[22.4px] md:leading-[22.4px] xl:leading-[25.6px]">
          {text2}
        </div>
      </div>
    </div>
  );
};

ReasonTextPc.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  text2: PropTypes.string,
};
