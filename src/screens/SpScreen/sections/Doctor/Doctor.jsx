import React from "react";
import { PricingHeader } from "../../../../components/PricingHeader";

export const Doctor = () => {
  return (
    <div className="flex flex-col w-full items-center gap-10 pt-10 pb-16 px-0 absolute top-[20160px] left-0">
      <PricingHeader
        className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
        divClassName="!text-base"
        text="Doctor"
        text1="医師紹介"
      />
      <div className="flex flex-col w-[363px] items-start gap-10 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-6 px-[49px] py-6 relative self-stretch w-full flex-[0_0_auto] bg-[var(--)] rounded-[20px]">
          <div className="flex flex-col w-[265.5px] items-center gap-2 relative flex-[0_0_auto] mr-[-0.50px]">
            <img
              className="relative w-[265.5px] h-[265.5px] aspect-[1]"
              alt="S"
              src="/img/s-10706948-2.png"
            />

            <div className="flex w-[175px] items-end gap-4 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-2xl tracking-[0] leading-[normal]">
                迫 美樹
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xl tracking-[0] leading-[normal]">
                院長
              </div>
            </div>
          </div>

          <div className="relative w-[265.5px] mr-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-base text-justify tracking-[0.80px] leading-[25.6px]">
            meeクリニックの医師は産婦人科専門医、皮膚科専門医を始めそれぞれの専門を持った現役医師総勢20名の医師で構成されています。エビデンスや効果のあるもののみを取り扱い、いつでも気軽に相談できる環境を提供いたします。
          </div>
        </div>
      </div>
    </div>
  );
};
