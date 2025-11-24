import React from "react";
import { FooterPcWrapper } from "../../../../components/FooterPcWrapper";

export const FooterPc = () => {
  return (
    <div className="relative w-full z-50 bg-[#FBF1F2]">
      <FooterPcWrapper
        className="!relative !w-full md:!h-[461px]"
        logoGroup="/img/meeclinic-logo.png"
      />
    </div>
  );
};
