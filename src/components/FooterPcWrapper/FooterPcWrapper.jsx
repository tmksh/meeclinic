/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Instagram1 } from "../../icons/Instagram1";
import { X } from "../../icons/X";
import { Line } from "../Line";
import { Logo } from "../Logo";

export const FooterPcWrapper = ({
  className,
  logoGroup = "/img/group-97-2.png",
}) => {
  return (
    <div
      className={`flex flex-col w-full max-w-[1440px] min-h-[280px] md:min-h-[280px] xl:min-h-[353px] items-center justify-center gap-2.5 px-4 md:px-8 xl:px-[102px] py-8 md:py-8 xl:py-[49px] relative bg-white ${className}`}
    >
      <div className="flex flex-col md:flex-col xl:flex-row items-start items-center md:items-center xl:items-start gap-8 md:gap-8 xl:gap-[62px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center md:items-center xl:items-start gap-6 md:gap-6 xl:gap-8 relative flex-[0_0_auto]">
          <Logo className="!left-[unset] !top-[unset] scale-75 md:scale-75 xl:scale-100" group={logoGroup} />
          <div className="flex items-center gap-2 md:gap-2 xl:gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-10 h-10 md:w-10 md:h-10 xl:w-[52px] xl:h-[52px] items-center gap-2.5 p-2 md:p-2 xl:p-3 relative bg-white rounded-[26px]">
              <X className="!relative !w-6 !h-6 md:!w-6 md:!h-6 xl:!w-7 xl:!h-7 !aspect-[1]" />
            </div>

            <div className="flex w-10 h-10 md:w-10 md:h-10 xl:w-[52px] xl:h-[52px] items-center gap-2.5 p-2 md:p-2 xl:p-3 relative bg-white rounded-[26px]">
              <Instagram1 className="!relative !w-6 !h-6 md:!w-6 md:!h-6 xl:!w-7 xl:!h-7 !aspect-[1]" />
            </div>

            <div className="flex w-10 h-10 md:w-10 md:h-10 xl:w-[52px] xl:h-[52px] items-center gap-2.5 p-2 md:p-2 xl:p-3 relative bg-white rounded-[26px]">
              <Line
                className="!h-6 md:!h-6 xl:!h-7 !aspect-[1] !left-[unset] !w-6 md:!w-6 xl:!w-7 !top-[unset]"
                link="white"
                subtract="/img/subtract.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-center md:justify-center xl:justify-around gap-0 md:gap-0 xl:gap-[661px] relative flex-1 self-stretch grow">
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 grid-rows-6 md:grid-rows-6 xl:grid-rows-4 w-full max-w-[350px] md:max-w-[400px] xl:max-w-[555px] gap-[10px_16px] md:gap-[10px_20px] xl:gap-[13px_53px] relative min-h-[133px]">
            <div className="relative row-[1_/_2] col-[1_/_2] w-full md:w-full xl:w-[135px] h-[18px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] tracking-[0] leading-[normal]">
              TOP
            </div>

            <div className="relative row-[1_/_2] col-[2_/_3] md:row-[1_/_2] md:col-[2_/_3] xl:row-[1_/_2] xl:col-[2_/_3] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              豆知識
            </div>

            <div className="hidden xl:block relative row-[1_/_2] col-[3_/_4] w-[135px] h-[18px] font-normal text-[#333333] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              利用規約
            </div>

            <div className="relative row-[2_/_3] col-[1_/_2] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              クリニックについて
            </div>

            <div className="relative row-[2_/_3] col-[2_/_3] md:row-[2_/_3] md:col-[2_/_3] xl:row-[2_/_3] xl:col-[2_/_3] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              ご利用の流れ
            </div>

            <div className="hidden xl:block relative row-[2_/_3] col-[3_/_4] w-[135px] h-[18px] font-normal text-[#333333] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              個人情報保護方針
            </div>

            <div className="relative row-[3_/_4] col-[1_/_2] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              選ばれる理由
            </div>

            <div className="relative row-[3_/_4] col-[2_/_3] md:row-[3_/_4] md:col-[2_/_3] xl:row-[3_/_4] xl:col-[2_/_3] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              口コミ
            </div>

            <div className="hidden xl:block relative row-[3_/_4] col-[3_/_4] w-[180px] h-[18px] font-normal text-[#333333] text-[15px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              特定商取引法に基づく表記
            </div>

            <div className="relative row-[4_/_5] col-[1_/_2] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              料金プラン
            </div>

            <div className="relative row-[4_/_5] col-[2_/_3] md:row-[4_/_5] md:col-[2_/_3] xl:row-[4_/_5] xl:col-[2_/_3] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              よくある質問
            </div>

            <div className="hidden xl:block relative row-[4_/_5] col-[3_/_4] w-[150px] h-[18px] font-normal text-[#333333] text-[15px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              プライバシーポリシー
            </div>

            <div className="block xl:hidden relative row-[5_/_6] col-[1_/_2] w-full md:w-full h-[18px] font-normal text-[#333333] text-sm md:text-sm [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              利用規約
            </div>

            <div className="block xl:hidden relative row-[5_/_6] col-[2_/_3] w-full md:w-full h-[18px] font-normal text-[#333333] text-sm md:text-sm [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              個人情報保護方針
            </div>

            <div className="block xl:hidden relative row-[6_/_7] col-[1_/_3] w-full md:w-full h-[18px] font-normal text-[#333333] text-sm md:text-sm [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              特定商取引法に基づく表記
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterPcWrapper.propTypes = {
  logoGroup: PropTypes.string,
};
