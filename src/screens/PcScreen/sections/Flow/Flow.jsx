import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";

export const Flow = () => {
  return (
    <div className="flex flex-col w-[1441px] items-center gap-8 absolute top-[9877px] -left-px">
      <SectionTitle
        className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset]"
        text="Flow"
        text1="ご利用の流れ"
      />
      <div className="relative w-[1239px] h-[432px]">
        <img
          className="left-[274px] absolute top-[170px] w-[37px] h-[29px]"
          alt="Arrow"
          src="/img/arrow-3.svg"
        />

        <img
          className="left-[602px] absolute top-[170px] w-[37px] h-[29px]"
          alt="Arrow"
          src="/img/arrow-3.svg"
        />

        <img
          className="left-[930px] absolute top-[170px] w-[37px] h-[29px]"
          alt="Arrow"
          src="/img/arrow-3.svg"
        />

        <div className="absolute top-0 left-0 w-[257px] h-[407px]">
          <div className="flex flex-col w-[255px] items-center gap-10 absolute top-12 left-0">
            <img
              className="relative self-stretch w-full h-[255px] object-cover"
              alt="Rectangle"
              src="/img/rectangle-140.png"
            />

            <div className="flex flex-col w-[257px] items-center gap-2.5 relative flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-2xl text-center tracking-[0] leading-[normal]">
                いつでも診察可能
              </div>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-light text-[var(--)] text-base text-center tracking-[0] leading-[normal]">
                問診回答後いつでも診察開始。
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-[73px] [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-8xl tracking-[0] leading-[96px] whitespace-nowrap">
            01
          </div>
        </div>

        <div className="left-[328px] absolute top-0 w-[257px] h-[432px]">
          <div className="flex flex-col w-[255px] items-center gap-10 absolute top-12 left-0">
            <img
              className="relative self-stretch w-full h-[255px] object-cover"
              alt="Rectangle"
              src="/img/rectangle-141.png"
            />

            <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-2xl text-center tracking-[0] leading-[normal]">
                医師とオンライン診療
              </div>

              <div className="self-stretch font-light text-[var(--)] text-base leading-[22.4px] relative [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
                経験豊富な医師が
                <br />
                丁寧に対応します
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-[74px] [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-8xl tracking-[0] leading-[96px] whitespace-nowrap">
            02
          </div>
        </div>

        <div className="left-[656px] absolute top-0 w-[257px] h-[432px]">
          <div className="flex flex-col w-[255px] items-center gap-10 absolute top-12 left-0">
            <img
              className="relative self-stretch w-full h-[255px] object-cover"
              alt="Rectangle"
              src="/img/rectangle-142.png"
            />

            <div className="flex flex-col w-64 items-center gap-2.5 relative flex-[0_0_auto] ml-[-0.50px] mr-[-0.50px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-2xl text-center tracking-[0] leading-[normal]">
                薬の処方・決済
              </div>

              <div className="self-stretch font-light text-[var(--)] text-base leading-[22.4px] relative [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
                追加費用なし、クレジット決済でスムーズ
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-[74px] [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-8xl tracking-[0] leading-[96px] whitespace-nowrap">
            03
          </div>
        </div>

        <div className="left-[984px] absolute top-0 w-[257px] h-[432px]">
          <div className="flex flex-col w-[255px] items-center gap-10 absolute top-12 left-0">
            <img
              className="relative self-stretch w-full h-[255px]"
              alt="Rectangle"
              src="/img/rectangle-143.png"
            />

            <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-2xl text-center tracking-[0] leading-[normal]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-2xl tracking-[0]">
                  ご自宅に配送
                </span>

                <span className="text-lg">（最短翌日）</span>
              </p>

              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-light text-[var(--)] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                ポスト投函でお届け
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-[73px] [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-8xl tracking-[0] leading-[96px] whitespace-nowrap">
            04
          </div>
        </div>
      </div>
    </div>
  );
};
