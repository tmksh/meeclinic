import React from "react";
import { Component1865 } from "../../../../components/Component1865";

export const Slider = () => {
  return (
    <div className="flex flex-col w-full items-center gap-2.5 p-[15px] absolute top-[623px] left-0">
      <Component1865 className="!self-stretch !left-[unset] !w-full !top-[unset]" />
      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        <div className="relative w-[9px] h-[9px] bg-[var(--)] rounded-[4.5px]" />

        <div className="relative w-[9px] h-[9px] bg-[#e6e6e6] rounded-[4.5px]" />

        <div className="relative w-[9px] h-[9px] bg-[#e6e6e6] rounded-[4.5px]" />

        <div className="relative w-[9px] h-[9px] bg-[#e6e6e6] rounded-[4.5px]" />
      </div>
    </div>
  );
};
