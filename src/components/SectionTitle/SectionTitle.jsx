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
      className={`flex flex-col w-[1441px] items-center gap-6 pt-7 pb-px px-12 relative top-[407px] bg-[var(--)] ${className}`}
    >
      <div className="relative self-stretch [font-family:'Noto_Serif',Helvetica] font-bold text-[var(--)] text-[64px] text-center tracking-[0] leading-[57.6px]">
        {text}
      </div>

      <div
        className={`relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base text-center tracking-[0] leading-[19.2px] ${divClassName}`}
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
