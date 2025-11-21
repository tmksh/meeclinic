import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[1440px] items-center gap-16 px-0 py-16 absolute top-[15705px] left-0">
      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <SectionTitle
          className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset]"
          divClassName="!font-normal"
          text="Doctor"
          text1="医師紹介"
        />
      </div>

      <div className="flex flex-col w-[896px] items-center gap-10 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xl tracking-[0] leading-[32.0px]">
          MEECLINICは、女性医師たちによって立ち上げられました。
          <br />{" "}
          「同じ女性だからこそ、気持ちが分かる」――そんな想いを大切にしています。
        </div>

        <div className="flex flex-col w-[896px] items-center justify-center gap-2.5 px-20 py-[45px] relative flex-[0_0_auto] bg-[var(--)] rounded-[40px]">
          <div className="inline-flex items-start gap-12 relative flex-[0_0_auto]">
            <img
              className="relative w-[245px] h-[245px] aspect-[1]"
              alt="S"
              src="/img/s-10706948-4.png"
            />

            <div className="flex flex-col w-[354px] items-start gap-6 relative">
              <div className="flex flex-col w-32 items-start gap-3 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-[32px] tracking-[0] leading-[normal]">
                  迫　美樹
                </div>

                <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xl tracking-[0] leading-[normal]">
                  院長
                </div>
              </div>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-base tracking-[0.80px] leading-[28.8px]">
                meeクリニックの医師は産婦人科専門医、皮膚科専門医を始めそれぞれの専門を持った現役医師総勢20名の医師で構成されています。エビデンスや効果のあるもののみを取り扱い、いつでも気軽に相談できる環境を提供いたします。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
