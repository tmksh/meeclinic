/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FlowSp } from "../FlowSp";

export const FlowSetSp = ({
  prop = "01",
  prop1 = "いつでも診察可能",
  prop2 = "問診回答後いつでも診察開始。",
  className,
  FLOWSpOne = "flow1",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-8 relative top-[3489px] left-[1105px] ${className}`}
    >
      <FlowSp className="!left-[unset] !top-[unset]" one={FLOWSpOne} />
      <div className="flex flex-col w-[162px] items-start gap-1 relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-5xl tracking-[0] leading-[normal]">
          {prop}
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="mt-[-1.00px] font-medium text-base leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] text-[var(--)] tracking-[0]">
            {prop1}
          </div>

          <div className="font-light text-sm leading-[18.2px] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] text-[var(--)] tracking-[0]">
            {prop2}
          </div>
        </div>
      </div>
    </div>
  );
};

FlowSetSp.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  FLOWSpOne: PropTypes.string,
};
