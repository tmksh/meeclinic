import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";

export const Frame = () => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center gap-8 md:gap-16 px-4 md:px-0 py-16 relative mt-12 md:mt-20 z-40">
      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <SectionTitle
          className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset]"
          divClassName="!font-normal"
          text="Doctor"
          text1="医師紹介"
        />
      </div>

      <div className="flex flex-col w-full md:w-[896px] items-center gap-10 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-lg md:text-xl tracking-[0] leading-[1.8] md:leading-[32.0px] text-justify md:text-center">
          MEECLINICは、女性医師たちによって立ち上げられました。
          <br />{" "}
          「同じ女性だからこそ、気持ちが分かる」――そんな想いを大切にしています。
        </div>

        <div className="flex flex-col w-full md:w-[896px] items-center justify-center gap-2.5 px-4 md:px-20 py-8 md:py-[45px] relative flex-[0_0_auto] bg-[#e098a0] rounded-[20px] md:rounded-[40px]">
          <div className="inline-flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative flex-[0_0_auto]">
            <img
              className="relative w-[200px] md:w-[245px] h-[200px] md:h-[245px] aspect-[1]"
              alt="S"
              src="/img/s-10706948-4.png"
            />

            <div className="flex flex-col w-full md:w-[354px] items-center md:items-start gap-6 relative">
              <div className="flex flex-col w-full md:w-32 items-center md:items-start gap-3 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-2xl md:text-[32px] tracking-[0] leading-[normal] text-center md:text-left">
                  迫　美樹
                </div>

                <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-lg md:text-xl tracking-[0] leading-[normal] text-center md:text-left">
                  院長
                </div>
              </div>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-sm md:text-base tracking-[0.80px] leading-[1.8] md:leading-[28.8px] text-justify">
                meeクリニックの医師は産婦人科専門医、皮膚科専門医を始めそれぞれの専門を持った現役医師総勢20名の医師で構成されています。エビデンスや効果のあるもののみを取り扱い、いつでも気軽に相談できる環境を提供いたします。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
