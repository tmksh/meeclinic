import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";

export const Flow = () => {
  return (
    <div className="flex flex-col w-full max-w-[1441px] items-center gap-6 md:gap-6 xl:gap-8 relative md:absolute md:top-[7000px] xl:top-[9877px] md:-left-px px-4 md:px-8 xl:px-0 z-15">
      <SectionTitle
        className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset]"
        text="Flow"
        text1="ご利用の流れ"
      />
      <div className="relative w-full md:max-w-[700px] xl:max-w-[1239px] h-auto md:min-h-[1200px] xl:min-h-[432px] flex flex-col md:flex-col xl:flex-row items-center md:items-center xl:items-start gap-8 md:gap-8 xl:gap-0">
        {/* Arrow Images - Hide on Mobile */}
        <img
          className="hidden xl:block left-[274px] absolute top-[170px] w-[37px] h-[29px]"
          alt="Arrow"
          src="/img/arrow-3.svg"
        />

        <img
          className="hidden xl:block left-[602px] absolute top-[170px] w-[37px] h-[29px]"
          alt="Arrow"
          src="/img/arrow-3.svg"
        />

        <img
          className="hidden xl:block left-[930px] absolute top-[170px] w-[37px] h-[29px]"
          alt="Arrow"
          src="/img/arrow-3.svg"
        />

        {/* Step 1 */}
        <div className="relative w-full md:w-full xl:w-[257px] h-auto flex flex-col items-center md:absolute xl:absolute md:top-0 xl:top-0 md:left-0 xl:left-0">
          <div className="flex flex-col w-full items-center gap-6 relative z-10">
            <img
              className="relative self-stretch w-full h-[200px] md:h-[200px] xl:h-[255px] object-cover"
              alt="Rectangle"
              src="/img/rectangle-140.png"
            />

            <div className="flex flex-col w-full items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#333333] text-xl md:text-xl xl:text-2xl text-center tracking-[0] leading-[normal]">
                いつでも診察可能
              </div>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#333333] text-sm md:text-sm xl:text-base text-center tracking-[0] leading-[normal]">
                問診回答後いつでも診察開始。
              </div>
            </div>
          </div>

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 xl:left-[73px] xl:translate-x-0 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[80px] md:text-6xl xl:text-8xl tracking-[0] leading-[1] md:leading-[72px] xl:leading-[96px] whitespace-nowrap -z-10 opacity-50 md:opacity-100">
            01
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative w-full md:w-full xl:w-[257px] h-auto flex flex-col items-center md:absolute xl:absolute md:top-[350px] xl:top-0 md:left-0 xl:left-[328px] mt-8 md:mt-0">
          <div className="flex flex-col w-full items-center gap-6 relative z-10">
            <img
              className="relative self-stretch w-full h-[200px] md:h-[200px] xl:h-[255px] object-cover"
              alt="Rectangle"
              src="/img/rectangle-141.png"
            />

            <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#333333] text-xl md:text-xl xl:text-2xl text-center tracking-[0] leading-[normal]">
                医師とオンライン診療
              </div>

              <div className="self-stretch font-light text-[#333333] text-sm md:text-sm xl:text-base leading-[19.6px] md:leading-[19.6px] xl:leading-[22.4px] relative [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
                経験豊富な医師が
                <br />
                丁寧に対応します
              </div>
            </div>
          </div>

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 xl:left-[74px] xl:translate-x-0 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[80px] md:text-6xl xl:text-8xl tracking-[0] leading-[1] md:leading-[72px] xl:leading-[96px] whitespace-nowrap -z-10 opacity-50 md:opacity-100">
            02
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative w-full md:w-full xl:w-[257px] h-auto flex flex-col items-center md:absolute xl:absolute md:top-[700px] xl:top-0 md:left-0 xl:left-[656px] mt-8 md:mt-0">
          <div className="flex flex-col w-full items-center gap-6 relative z-10">
            <img
              className="relative self-stretch w-full h-[200px] md:h-[200px] xl:h-[255px] object-cover"
              alt="Rectangle"
              src="/img/rectangle-142.png"
            />

            <div className="flex flex-col w-full items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#333333] text-xl md:text-xl xl:text-2xl text-center tracking-[0] leading-[normal]">
                薬の処方・決済
              </div>

              <div className="self-stretch font-light text-[#333333] text-sm md:text-sm xl:text-base leading-[19.6px] md:leading-[19.6px] xl:leading-[22.4px] relative [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
                追加費用なし、クレジット決済でスムーズ
              </div>
            </div>
          </div>

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 xl:left-[74px] xl:translate-x-0 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[80px] md:text-6xl xl:text-8xl tracking-[0] leading-[1] md:leading-[72px] xl:leading-[96px] whitespace-nowrap -z-10 opacity-50 md:opacity-100">
            03
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative w-full md:w-full xl:w-[257px] h-auto flex flex-col items-center md:absolute xl:absolute md:top-[1050px] xl:top-0 md:left-0 xl:left-[984px] mt-8 md:mt-0">
          <div className="flex flex-col w-full items-center gap-6 relative z-10">
            <img
              className="relative self-stretch w-full h-[200px] md:h-[200px] xl:h-[255px]"
              alt="Rectangle"
              src="/img/rectangle-143.png"
            />

            <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#333333] text-xl md:text-xl xl:text-2xl text-center tracking-[0] leading-[normal]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-xl md:text-xl xl:text-2xl tracking-[0]">
                  ご自宅に配送
                </span>

                <span className="text-base md:text-base xl:text-lg">（最短翌日）</span>
              </p>

              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#333333] text-sm md:text-sm xl:text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                ポスト投函でお届け
              </div>
            </div>
          </div>

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 xl:left-[73px] xl:translate-x-0 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[80px] md:text-6xl xl:text-8xl tracking-[0] leading-[1] md:leading-[72px] xl:leading-[96px] whitespace-nowrap -z-10 opacity-50 md:opacity-100">
            04
          </div>
        </div>
      </div>
    </div>
  );
};
