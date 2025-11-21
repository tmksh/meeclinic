/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DivWrapper = ({
  className,
  group = "/img/group-97-1.png",
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div
      className={`inline-flex items-end gap-1 relative top-[768px] left-[977px] ${className}`}
    >
      <img className="relative w-[31px] h-[31px]" alt="Group" src={group} />

      <div className="flex flex-col w-[153px] items-start relative">
        <div
          className={`relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#efa3af] text-[10px] tracking-[0] leading-[10px] ${divClassName}`}
        >
          忙しい女性専用のオンライン診療
        </div>

        <div
          className={`relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#efa3af] text-2xl text-center tracking-[1.92px] leading-6 ${divClassNameOverride}`}
        >
          mee clinic
        </div>
      </div>
    </div>
  );
};

DivWrapper.propTypes = {
  group: PropTypes.string,
};
