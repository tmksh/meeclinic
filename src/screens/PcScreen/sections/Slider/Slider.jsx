import React from "react";
import { Component1970 } from "../../../../components/Component1970";

export const Slider = () => {
  return (
    <div className="flex flex-col w-full items-center gap-6 py-6 relative md:absolute md:top-[651px] md:left-0 z-20">
      <div className="flex flex-nowrap items-center justify-start gap-10 w-full overflow-x-auto px-4 md:px-[calc(50%-700px)] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
        <Component1970 className="!left-[unset] !top-[unset] !flex-[0_0_auto] snap-center" />
      </div>
    </div>
  );
};
