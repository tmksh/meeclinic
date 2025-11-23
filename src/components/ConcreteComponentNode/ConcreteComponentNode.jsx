/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ConcreteComponentNode = ({ className }) => {
  return (
    <div
      className={`flex flex-col w-[393px] items-center gap-2.5 px-[15px] py-10 relative top-[3449px] left-[89px] bg-[var(--)] ${className}`}
    >
      <div className="flex flex-col w-[363px] items-center gap-10 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center gap-5 relative flex-[0_0_auto]">
          <div className="flex flex-wrap w-[348px] items-start justify-center gap-[10px_20px] relative flex-[0_0_auto]">
            <div className="flex w-[164px] h-[65px] items-center justify-center gap-2.5 px-2 py-2.5 relative bg-[var(--)] rounded-[10px]">
              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-base text-center tracking-[0.80px] leading-[normal]">
                診察料0円
              </div>
            </div>

            <div className="flex w-[164px] h-[65px] items-center justify-center gap-2.5 px-2 py-2.5 relative bg-[var(--)] rounded-[10px]">
              <div className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-base tracking-[0.80px] relative w-fit text-center leading-[normal]">
                いつでも診察可能
              </div>
            </div>

            <div className="flex w-[164px] h-[65px] items-center justify-center gap-2.5 px-2 py-2.5 relative bg-[var(--)] rounded-[10px]">
              <div className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[var(--)] text-base tracking-[0.80px] relative w-fit text-center leading-[normal]">
                最短翌日お届け
              </div>
            </div>
          </div>

          <div className="relative self-stretch [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[var(--)] text-2xl text-center tracking-[0] leading-[28.8px]">
            まずはお気軽に
            <br />
            お問い合わせください！
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
          <a href="https://meeclinic0903.netlify.app/app" className="no-underline contents">
            <div className="bg-[var(--)] flex w-[363px] h-14 items-center justify-end gap-6 px-[17px] py-3 relative rounded-[100px] border border-solid border-[var(--)]">
              <div className="flex items-center justify-center mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[var(--)] text-[22px] tracking-[0] relative w-fit text-center leading-[normal]">
                オンライン診療はこちら
              </div>

              <div className="relative w-[22px] h-[22px] bg-[var(--)] rounded-[11px]">
                <img
                  className="absolute top-[5px] left-[7px] w-2.5 h-3"
                  alt="Vector"
                  src="/img/vector-7.svg"
                />
              </div>
            </div>
          </a>

          <a href="https://meeclinic0903.netlify.app/app/medicines" className="no-underline contents">
            <div className="bg-[#7182e4] flex w-[363px] h-14 items-center justify-end gap-6 px-[17px] py-3 relative rounded-[100px] border border-solid border-[var(--)]">
              <div className="flex items-center justify-center mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[var(--)] text-[22px] tracking-[0] relative w-fit text-center leading-[normal]">
                薬品カタログページへ
              </div>

              <div className="relative w-[22px] h-[22px] bg-[var(--)] rounded-[11px]">
                <img
                  className="absolute top-[5px] left-[7px] w-2.5 h-3"
                  alt="Vector"
                  src="/img/vector-7-1.svg"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
