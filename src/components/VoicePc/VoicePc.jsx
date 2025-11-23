/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Pc } from "../../icons/Pc";

export const VoicePc = ({
  prop = "A.Mさん（30代）",
  prop1 = "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  className,
  icon = <Pc className="!relative !w-12 !h-12" />,
}) => {
  return (
    <div
      className={`flex flex-col w-full max-w-[280px] md:max-w-[344px] xl:max-w-[344px] min-h-[180px] md:min-h-[216px] xl:min-h-[216px] items-start gap-6 md:gap-6 xl:gap-10 p-4 md:p-6 xl:p-6 relative bg-white rounded-2xl shadow-[0px_4px_16px_#ff69b410] ${className}`}
    >
      <div className="flex items-center gap-2 md:gap-3 xl:gap-3 relative self-stretch w-full flex-[0_0_auto]">
        {icon}
        <div className="inline-flex flex-col items-start gap-1 relative flex-1 min-w-0">
          <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-black text-[#555555] text-xs md:text-sm xl:text-sm tracking-[0] leading-[12px] md:leading-[14px] xl:leading-[14px] whitespace-nowrap">
            {prop}
          </div>

          <img
            className="relative flex-[0_0_auto] w-[60px] md:w-[88px] xl:w-[88px]"
            alt="Rating"
            src="/img/rating.svg"
          />
        </div>
      </div>

      <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#555555] text-xs md:text-sm xl:text-sm text-justify tracking-[0] leading-[16.8px] md:leading-[19.6px] xl:leading-[19.6px]">
        {prop1}
      </div>
    </div>
  );
};

VoicePc.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};
