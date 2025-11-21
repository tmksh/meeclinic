/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const QAPc = ({
  prop = "いつとどきますか？",
  className,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div
      className={`flex w-[600px] items-start justify-between px-6 py-8 relative top-[1012px] left-[104px] border-b [border-bottom-style:solid] border-[#6b6b6b80] ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[var(--)] text-xl tracking-[0] leading-[normal] whitespace-nowrap ${divClassName}`}
      >
        Q.
      </div>

      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-xl tracking-[0] leading-[normal] whitespace-nowrap ${divClassNameOverride}`}
      >
        {prop}
      </div>

      <div className="relative w-[19px] h-[19px]">
        <img
          className="absolute top-2 left-0 w-[19px] h-px object-cover"
          alt="Line"
          src="/img/line-18.svg"
        />

        <img
          className="absolute top-0 left-2.5 w-px h-[19px] object-cover"
          alt="Line"
          src="/img/line-19.svg"
        />
      </div>
    </div>
  );
};

QAPc.propTypes = {
  prop: PropTypes.string,
};
