/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PricingHeader = ({
  className,
  text = "Price &amp; Plan",
  text1 = "料金プラン",
  divClassName,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-center gap-3 px-12 py-0 relative top-[582px] left-[600px] bg-[var(--)] ${className}`}
    >
      <div className="relative w-fit [font-family:'Noto_Serif',Helvetica] font-bold text-[var(--)] text-5xl text-center tracking-[0] leading-[57.6px] whitespace-nowrap">
        {text}
      </div>

      <div
        className={`relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-sm text-center tracking-[0] leading-[19.2px] whitespace-nowrap ${divClassName}`}
      >
        {text1}
      </div>
    </div>
  );
};

PricingHeader.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
