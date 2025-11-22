/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TagPc = ({ prop = "ニキビ", className, divClassName }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 px-[18px] py-3 relative top-[6673px] left-[139px] bg-white rounded-lg border border-solid border-[#efa3af] ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#c76f7e] text-xl tracking-[0] leading-[36.0px] whitespace-nowrap ${divClassName}`}
      >
        {prop}
      </div>
    </div>
  );
};

TagPc.propTypes = {
  prop: PropTypes.string,
};
