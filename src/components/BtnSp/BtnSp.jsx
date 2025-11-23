/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const BtnSp = ({
  prop = "オンライン診療はこちら",
  text2 = "薬品カタログページへ",
  text3 = "お申し込みはこちら",
  one,
  className,
}) => {
  return (
    <a href="https://meeclinic0903.netlify.app/app/medicines" className="no-underline contents">
      <div
        className={`flex w-[265px] items-center justify-end gap-[18px] px-[17px] py-3 relative top-[233px] left-5 bg-[var(--)] rounded-[100px] border border-solid border-[var(--)] ${className}`}
      >
        <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[var(--)] text-lg text-center tracking-[0] leading-[normal]">
          {text3}
        </div>
        <div className="relative w-[22px] h-[22px] bg-[var(--)] rounded-[11px]">
          <img
            className="absolute top-[5px] left-[7px] w-2.5 h-3"
            alt="Vector"
            src="/img/vector-7-2.svg"
          />
        </div>
      </div>
    </a>
  );
};

BtnSp.propTypes = {
  prop: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  one: PropTypes.oneOf(["one"]),
};
