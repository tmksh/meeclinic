/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ElementWrapper } from "../ElementWrapper";

export const DivWrapper = ({ className }) => {
  return (
    <div
      className={`flex flex-col w-[1440px] h-[343px] items-center gap-10 px-[174px] py-[39px] relative top-[45px] left-[75px] bg-[var(--)] ${className}`}
    >
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-center gap-[39px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[270px] h-[65px] items-center justify-center gap-2.5 px-[51px] py-2.5 relative bg-[var(--)] rounded-[10px]">
            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-2xl text-center tracking-[1.20px] leading-[normal]">
              診察料0円
            </div>
          </div>

          <div className="flex w-[270px] h-[65px] items-center justify-center gap-2.5 px-[51px] py-2.5 relative bg-[var(--)] rounded-[10px]">
            <div className="w-fit ml-[-16.50px] mr-[-16.50px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-2xl tracking-[1.20px] relative text-center leading-[normal]">
              いつでも診察可能
            </div>
          </div>

          <div className="inline-flex h-[65px] items-center justify-center gap-2.5 px-[51px] py-2.5 relative flex-[0_0_auto] bg-[var(--)] rounded-[10px]">
            <div className="w-fit [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-2xl tracking-[1.20px] relative text-center leading-[normal]">
              最短翌日お届け
            </div>
          </div>
        </div>

        <div className="self-stretch [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[var(--)] text-[32px] tracking-[0] relative text-center leading-[normal]">
          まずはお気軽にお問い合わせください！
        </div>
      </div>

      <div className="inline-flex items-start gap-10 relative flex-[0_0_auto]">
        <ElementWrapper
          className="!left-[unset] !top-[unset]"
          one="one"
          prop="オンライン診療はこちら"
        />
        <ElementWrapper
          className="!left-[unset] !top-[unset]"
          one="two"
          prop="薬品カタログページへ"
        />
      </div>
    </div>
  );
};
