/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const QASp = ({
  prop = "いつとどきますか？",
  className,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div
      className={`flex w-[363px] h-[66px] items-center justify-between px-[15px] py-6 relative top-[6005px] left-[90px] border-b [border-bottom-style:solid] border-[#6b6b6b80] ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[var(--)] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap ${divClassName}`}
      >
        Q.
      </div>

      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap ${divClassNameOverride}`}
      >
        {prop}
      </div>

      <div className="relative w-[15px] h-[15px]">
        <img
          className="absolute top-1.5 left-0 w-[15px] h-px object-cover"
          alt="Line"
          src="/img/line-18.svg"
        />

        <img
          className="absolute top-0 left-2 w-px h-[15px] object-cover"
          alt="Line"
          src="/img/line-19.svg"
        />
      </div>
    </div>
  );
};

QASp.propTypes = {
  prop: PropTypes.string,
};
