import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";

export const Feature = () => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto h-auto items-start gap-8 md:gap-8 xl:gap-12 relative mt-12 md:mt-20 bg-white px-4 md:px-8 xl:px-0 z-10">
      <SectionTitle
        className="!self-stretch !flex-[0_0_auto] !bg-[unset] !w-full !top-[unset]"
        text="Feature"
        text1="特徴"
      />
      <div className="relative self-stretch w-full h-auto flex flex-col md:flex-col xl:flex-row gap-4 md:gap-4 xl:gap-0">
        <div className="flex flex-col w-full md:w-full xl:flex-1 h-[350px] md:h-[350px] xl:h-[572px] items-start gap-2.5 px-8 md:px-8 xl:px-12 py-10 md:py-10 xl:py-[63px] relative top-0 left-0 bg-[url(/img/frame-1537.png)] bg-cover bg-[50%_50%] rounded-lg md:rounded-xl xl:rounded-none">
          <div className="flex flex-col w-full max-w-[272px] items-start gap-4 md:gap-4 xl:gap-5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-[24px] md:text-[28px] xl:text-[32px] tracking-[0] leading-[19.2px]">
              専門医監修
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-sm md:text-sm xl:text-base tracking-[0] leading-[19.2px]">
              産婦人科・皮膚科の専門医をはじめ、
              <br />
              経験豊富な医師のみが診療。
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-full xl:flex-1 h-[350px] md:h-[350px] xl:h-[572px] items-start gap-2.5 px-8 md:px-8 xl:px-[53px] py-10 md:py-10 xl:py-[63px] relative top-0 left-0 bg-[url(/img/frame-1538.png)] bg-cover bg-[50%_50%] rounded-lg md:rounded-xl xl:rounded-none">
          <div className="inline-flex flex-col items-start gap-4 md:gap-4 xl:gap-5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-[24px] md:text-[28px] xl:text-[32px] tracking-[0] leading-[19.2px]">
              女医多数在籍
            </div>

            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-sm md:text-sm xl:text-base tracking-[0] leading-[19.2px]">
              ご希望に応じて医師を選択可能。
              <br />
              相談しやすい環境、安心感を大切にしています。
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-full xl:flex-1 h-[350px] md:h-[350px] xl:h-[572px] items-start gap-2.5 px-8 md:px-8 xl:px-[53px] py-10 md:py-10 xl:py-[63px] relative top-0 left-0 bg-[url(/img/frame-1539.png)] bg-cover bg-[50%_50%] rounded-lg md:rounded-xl xl:rounded-none">
          <div className="flex flex-col w-full max-w-[272px] items-start gap-4 md:gap-4 xl:gap-5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-[24px] md:text-[28px] xl:text-[32px] tracking-[0] leading-[19.2px]">
              ピル最安値水準
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-sm md:text-sm xl:text-base tracking-[0] leading-[19.2px]">
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
