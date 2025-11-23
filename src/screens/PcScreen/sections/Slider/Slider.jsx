import React from "react";
import { Component1970 } from "../../../../components/Component1970";

export const Slider = () => {
  return (
    <div className="flex flex-col w-full items-center gap-6 py-6 relative z-20 overflow-y-hidden">
      <div className="flex flex-nowrap items-center justify-start gap-10 w-full overflow-x-auto overflow-y-hidden px-4 md:px-[max(16px,calc(50%-700px))] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x">
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
      </div>
    </div>
  );
};
