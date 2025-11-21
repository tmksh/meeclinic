/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Logo = ({ className, group = "/img/group-97-2.png" }) => {
  return (
    <div
      className={`relative top-[755px] left-[678px] w-[251px] h-[49px] ${className}`}
    >
      <img
        className="absolute w-10 h-10 top-[5px] left-0"
        alt="Group"
        src={group}
      />

      <div className="absolute w-[71.31%] h-[48.98%] top-[42.86%] left-[19.12%] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[var(--)] text-[33px] text-center tracking-[1.65px] leading-[normal] whitespace-nowrap">
        mee clinic
      </div>

      <div className="absolute w-[71.71%] h-[18.37%] top-[10.20%] left-[19.12%] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
        忙しい女性専用のオンライン診療
      </div>
    </div>
  );
};

Logo.propTypes = {
  group: PropTypes.string,
};
