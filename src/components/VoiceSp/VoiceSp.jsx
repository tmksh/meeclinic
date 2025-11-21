/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Pc } from "../../icons/Pc";

export const VoiceSp = ({
  prop = "A.Mさん（30代）",
  prop1 = "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  className,
  icon = <Pc className="!relative !w-[34px] !h-[34px] !aspect-[1]" />,
  rating = "/img/rating.svg",
  customerInfoClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[175px] items-start gap-4 px-2.5 py-4 relative top-[21861px] left-[-6384px] bg-[var(--)] rounded-2xl shadow-[0px_4px_16px_#ff69b410] ${className}`}
    >
      <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
        {icon}
        <div
          className={`inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] mr-[-1.00px] ${customerInfoClassName}`}
        >
          <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-black text-[var(--)] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
            {prop}
          </div>

          <img className="relative flex-[0_0_auto]" alt="Rating" src={rating} />
        </div>
      </div>

      <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-sm text-justify tracking-[0] leading-[19.6px]">
        {prop1}
      </div>
    </div>
  );
};

VoiceSp.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  rating: PropTypes.string,
};
