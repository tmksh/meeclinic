/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ElementWrapper = ({
  prop = "オンライン診療はこちら",
  one,
  className,
}) => {
  return (
    <div
      className={`border-2 border-solid border-white w-full max-w-[369px] flex items-center gap-6 px-[18px] py-[15px] h-[66px] rounded-[100px] justify-center md:justify-end relative ${one === "two" ? "bg-[#7182e4]" : "bg-[#efa3af]"} ${className}`}
    >
      <div className="[font-family:'Noto_Serif_JP',Helvetica] w-fit flex mt-[-1.00px] tracking-[0] text-lg md:text-2xl items-center text-white font-bold text-center justify-center leading-[normal] relative">
        {prop}
      </div>

      <div className="w-[30px] h-[30px] rounded-[15px] bg-white relative flex-shrink-0">
        <img
          className="w-3.5 left-2.5 top-[7px] h-[17px] absolute"
          alt="Vector"
          src={one === "two" ? "/img/vector-7-3.svg" : "/img/vector-7-2.svg"}
        />
      </div>
    </div>
  );
};

ElementWrapper.propTypes = {
  prop: PropTypes.string,
  one: PropTypes.oneOf(["two", "one"]),
};
