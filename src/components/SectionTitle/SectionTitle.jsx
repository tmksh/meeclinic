/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SectionTitle = ({
  className,
  text = "Price &amp; Plan",
  text1 = "料金プラン",
  divClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-full max-w-[1441px] items-center gap-4 md:gap-4 xl:gap-6 pt-5 md:pt-5 xl:pt-7 pb-px px-6 md:px-6 xl:px-12 relative bg-white ${className}`}
    >
      <div className="relative self-stretch [font-family:'Noto_Serif',Helvetica] font-bold text-[#efa3af] text-[48px] md:text-5xl xl:text-[64px] text-center tracking-[0] leading-[43.2px] md:leading-[43.2px] xl:leading-[57.6px]">
        {text}
      </div>

      <div
        className={`relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6B6B6B] text-sm md:text-sm xl:text-base text-center tracking-[0] leading-[16.8px] md:leading-[16.8px] xl:leading-[19.2px] ${divClassName}`}
      >
        {text1}
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
