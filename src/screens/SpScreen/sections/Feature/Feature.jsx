import React from "react";
import { PricingHeader } from "../../../../components/PricingHeader";

export const Feature = () => {
  return (
    <div className="flex flex-col w-full items-start gap-14 pt-10 pb-0 px-0 absolute top-[5878px] left-0">
      <PricingHeader
        className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
        text="Feature"
        text1="特徴"
      />
      <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-full h-[572px] items-start gap-2.5 px-12 py-[63px] relative bg-[url(/img/frame-1537.png)] bg-cover bg-[50%_50%]">
          <div className="flex flex-col w-[272px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-2xl tracking-[0] leading-[normal]">
              専門医が対応
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-sm tracking-[0] leading-[22.4px]">
              産婦人科・皮膚科の専門医をはじめ、
              <br />
              経験豊富な医師のみが診療。
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-[572px] items-start gap-2.5 px-[53px] py-[63px] relative bg-[url(/img/frame-1538.png)] bg-cover bg-[50%_50%]">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mr-[-20.00px]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-2xl tracking-[0] leading-[normal]">
              女医多数在籍
            </div>

            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-sm tracking-[0] leading-[22.4px]">
              ご希望に応じて医師を選択可能。
              <br />
              相談しやすい環境、安心感を大切にしています。
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-[572px] items-start gap-2.5 px-[53px] py-[63px] relative bg-[url(/img/frame-1539.png)] bg-cover bg-[50%_50%]">
          <div className="flex flex-col w-[272px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-2xl tracking-[0] leading-[normal]">
              ピル最安値水準
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-sm tracking-[0] leading-[22.4px]">
              業界でも最安値クラスの価格で、
              <br />
              安心して続けられる環境を提供。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
