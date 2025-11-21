/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Instagram1 } from "../../icons/Instagram1";
import { X1 } from "../../icons/X1";
import { DivWrapper } from "../DivWrapper";
import { Line } from "../Line";

export const FooterSp = ({
  className,
  divWrapperGroup = "/img/group-97-1.png",
}) => {
  return (
    <div
      className={`flex flex-col w-[393px] items-center gap-6 px-[15px] py-10 relative top-[7671px] left-9 bg-[var(--)] ${className}`}
    >
      <DivWrapper
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        divClassName="!text-[var(--)]"
        divClassNameOverride="!text-[var(--)] ![text-align:unset]"
        group={divWrapperGroup}
      />
      <div className="flex w-[188px] items-center justify-between relative flex-[0_0_auto]">
        <div className="flex w-[49.08px] h-[49.08px] items-center gap-[9.44px] p-[11.33px] relative bg-[var(--)] rounded-[24.54px]">
          <X1 className="!relative !w-[26.43px] !h-[26.43px] !aspect-[1]" />
        </div>

        <div className="flex w-[49.08px] h-[49.08px] items-center gap-[9.44px] p-[11.33px] relative bg-[var(--)] rounded-[24.54px]">
          <Instagram1 className="!relative !w-[26.43px] !h-[26.43px] !aspect-[1]" />
        </div>

        <div className="flex w-[49.08px] h-[49.08px] items-center gap-[9.44px] p-[11.33px] relative bg-[var(--)] rounded-[24.54px]">
          <Line
            className="!h-[26.43px] !aspect-[1] !left-[unset] !w-[26.43px] !top-[unset]"
            link="white"
            subtract="/img/subtract.svg"
            subtractClassName="!w-[100.00%]"
          />
        </div>
      </div>

      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[135px] items-start gap-3.5 relative">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-[15px] tracking-[0] leading-[normal]">
            TOP
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            クリニックについて
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            選ばれる理由
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            料金プラン
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            豆知識
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            ご利用の流れ
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            口コミ
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            よくある質問
          </div>
        </div>

        <div className="flex flex-col w-[180px] items-start gap-3.5 relative">
          <div className="mt-[-1.00px] font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            利用規約
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            個人情報保護方針
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            特定商取引法に基づく表記
          </div>

          <div className="font-normal text-[var(--)] text-[15px] leading-[normal] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            プライバシーポリシー
          </div>
        </div>
      </div>
    </div>
  );
};

FooterSp.propTypes = {
  divWrapperGroup: PropTypes.string,
};
