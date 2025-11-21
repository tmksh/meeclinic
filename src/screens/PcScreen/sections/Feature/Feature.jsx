import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";

export const Feature = () => {
  return (
    <div className="flex flex-col w-[1440px] h-[751px] items-start gap-12 absolute top-[5650px] left-0 bg-[var(--)]">
      <SectionTitle
        className="!self-stretch !flex-[0_0_auto] !bg-[unset] !w-full !top-[unset]"
        text="Feature"
        text1="特徴"
      />
      <div className="relative self-stretch w-full h-[572px]">
        <div className="flex flex-col w-[480px] h-[572px] items-start gap-2.5 px-12 py-[63px] absolute top-0 left-0 bg-[url(/img/frame-1537.png)] bg-cover bg-[50%_50%]">
          <div className="flex flex-col w-[272px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-[32px] tracking-[0] leading-[19.2px]">
              専門医監修
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-base tracking-[0] leading-[19.2px]">
              産婦人科・皮膚科の専門医をはじめ、
              <br />
              経験豊富な医師のみが診療。
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[480px] h-[572px] items-start gap-2.5 px-[53px] py-[63px] absolute top-0 left-[480px] bg-[url(/img/frame-1538.png)] bg-cover bg-[50%_50%]">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-[32px] tracking-[0] leading-[19.2px]">
              女医多数在籍
            </div>

            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-base tracking-[0] leading-[19.2px]">
              ご希望に応じて医師を選択可能。
              <br />
              相談しやすい環境、安心感を大切にしています。
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[480px] h-[572px] items-start gap-2.5 px-[53px] py-[63px] absolute top-0 left-[960px] bg-[url(/img/frame-1539.png)] bg-cover bg-[50%_50%]">
          <div className="flex flex-col w-[272px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-[32px] tracking-[0] leading-[19.2px]">
              ピル最安値水準
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-base tracking-[0] leading-[19.2px]">
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
