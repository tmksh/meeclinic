/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ReasonSp } from "../ReasonSp";

export const ReasonCardSp = ({
  prop = "04",
  prop1 = "最短翌日配送 & 匿名梱包",
  prop2 = "診療後すぐに処方・発送。最短翌日にお届け。 中身がわからない【雑貨】表記で、プライバシーも安心です。",
  className,
  reasonSpElementClassName,
  reasonSpOne = "reason-5",
}) => {
  return (
    <div
      className={`flex flex-col w-[367px] items-start gap-4 relative top-[3956px] left-[600px] ${className}`}
    >
      <ReasonSp className={reasonSpElementClassName} one={reasonSpOne} />
      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#6b6b6b80] text-[64px] tracking-[3.20px] leading-[48px]">
          {prop}
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="mt-[-1.00px] font-semibold text-[var(--)] text-2xl tracking-[1.20px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica]">
            {prop1}
          </div>

          <div className="font-normal text-[var(--)] text-sm tracking-[0] leading-[22.4px] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica]">
            {prop2}
          </div>
        </div>
      </div>
    </div>
  );
};

ReasonCardSp.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  reasonSpOne: PropTypes.string,
};
