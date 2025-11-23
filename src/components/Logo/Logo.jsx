/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Logo = ({ className, group = "/img/group-97-2.png", style }) => {
  return (
    <div
      className={`relative w-[251px] h-[49px] flex items-center gap-3 ${className}`}
      style={style}
    >
      <img
        className="w-10 h-10 object-contain"
        alt="Group"
        src={group}
      />

      <div className="flex flex-col items-start justify-center h-full">
        <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-[10px] tracking-[0] leading-[1] whitespace-nowrap mb-1">
          自宅で完結するオンライン診療
        </div>
        <div className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[var(--)] text-[33px] tracking-[1.65px] leading-[0.8] whitespace-nowrap">
        mee clinic
      </div>
      </div>
    </div>
  );
};

Logo.propTypes = {
  group: PropTypes.string,
};
