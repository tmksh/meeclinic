import React from "react";
import { FooterPcWrapper } from "../../../../components/FooterPcWrapper";

export const FooterPc = () => {
  return (
    <div className="relative w-full z-50 bg-[#FBF1F2]">
      <div className="md:hidden w-full flex flex-col gap-4 px-4 pt-6 pb-4 bg-[#FBF1F2]">
        <img
          className="w-full h-auto"
          alt="オンライン診療のご案内"
          src="/img/CTA_sp.svg"
        />
      </div>
      <FooterPcWrapper
        className="!relative !w-full md:!h-[461px]"
        logoGroup="/img/meeclinic-logo.png"
      />
    </div>
  );
};
