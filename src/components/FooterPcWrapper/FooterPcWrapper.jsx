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
      className={`flex flex-col w-[1440px] h-[353px] items-center justify-center gap-2.5 px-[102px] py-[49px] relative top-[7298px] left-9 bg-[var(--)] ${className}`}
    >
      <div className="flex items-start gap-[62px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
          <Logo className="!left-[unset] !top-[unset]" group={logoGroup} />
          <div className="flex items-center gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-[52px] h-[52px] items-center gap-2.5 p-3 relative bg-[var(--)] rounded-[26px]">
              <X className="!relative !w-7 !h-7 !aspect-[1]" />
            </div>

            <div className="flex w-[52px] h-[52px] items-center gap-2.5 p-3 relative bg-[var(--)] rounded-[26px]">
              <Instagram1 className="!relative !w-7 !h-7 !aspect-[1]" />
            </div>

            <div className="flex w-[52px] h-[52px] items-center gap-2.5 p-3 relative bg-[var(--)] rounded-[26px]">
              <Line
                className="!h-7 !aspect-[1] !left-[unset] !w-7 !top-[unset]"
                link="white"
                subtract="/img/subtract.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-around gap-[661px] relative flex-1 self-stretch grow">
          <div className="grid grid-cols-3 grid-rows-4 w-[555px] gap-[13px_53px] relative h-[133px]">
            <div className="relative row-[1_/_2] col-[1_/_2] w-[135px] h-[18px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-[15px] tracking-[0] leading-[normal]">
              TOP
            </div>

            <div className="relative row-[1_/_2] col-[2_/_3] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              豆知識
            </div>

            <div className="relative row-[1_/_2] col-[3_/_4] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              利用規約
            </div>

            <div className="relative row-[2_/_3] col-[1_/_2] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              クリニックについて
            </div>

            <div className="relative row-[2_/_3] col-[2_/_3] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              ご利用の流れ
            </div>

            <div className="relative row-[2_/_3] col-[3_/_4] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              個人情報保護方針
            </div>

            <div className="relative row-[3_/_4] col-[1_/_2] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              選ばれる理由
            </div>

            <div className="relative row-[3_/_4] col-[2_/_3] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              口コミ
            </div>

            <div className="relative row-[3_/_4] col-[3_/_4] w-[180px] h-[18px] font-normal text-[var(--)] text-[15px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              特定商取引法に基づく表記
            </div>

            <div className="relative row-[4_/_5] col-[1_/_2] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              料金プラン
            </div>

            <div className="relative row-[4_/_5] col-[2_/_3] w-[135px] h-[18px] font-normal text-[var(--)] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              よくある質問
            </div>

            <div className="relative row-[4_/_5] col-[3_/_4] w-[150px] h-[18px] font-normal text-[var(--)] text-[15px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              プライバシーポリシー
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
