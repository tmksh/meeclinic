import React from "react";
import { Component1970 } from "../../../../components/Component1970";

export const Slider = () => {
  return (
    <div className="flex flex-col w-[1975px] items-center gap-6 px-0 py-6 absolute top-[651px] left-[-267px]">
      <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <Component1970 className="!left-[unset] !top-[unset]" />
        <Component1970 className="!left-[unset] !top-[unset]" />
        <Component1970 className="!left-[unset] !top-[unset]" />
        <Component1970 className="!left-[unset] !top-[unset]" />
        <Component1970 className="!left-[unset] !top-[unset]" />
      </div>

      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        <div className="relative w-[18px] h-[18px] bg-[var(--)] rounded-[9px]" />

        <div className="relative w-[18px] h-[18px] bg-[#e6e6e6] rounded-[9px]" />

        <div className="relative w-[18px] h-[18px] bg-[#e6e6e6] rounded-[9px]" />

        <div className="relative w-[18px] h-[18px] bg-[#e6e6e6] rounded-[9px]" />
      </div>
    </div>
  );
};
