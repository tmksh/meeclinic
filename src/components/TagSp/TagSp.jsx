/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TagSp = ({ prop = "ニキビ", className }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 px-4 py-2.5 relative top-[6673px] left-[252px] bg-white rounded-lg border border-solid border-[var(--)] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
        {prop}
      </div>
    </div>
  );
};

TagSp.propTypes = {
  prop: PropTypes.string,
};
