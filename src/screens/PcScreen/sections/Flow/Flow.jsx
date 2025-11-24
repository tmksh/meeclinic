import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";

export const Flow = () => {
  return (
    <div id="flow" className="flex flex-col w-full items-center gap-6 md:gap-6 xl:gap-8 relative mt-12 md:mt-20 z-15 scroll-mt-20">
      <div className="flex flex-col w-full max-w-[1441px] items-center gap-6 md:gap-6 xl:gap-8 px-4 md:px-8 xl:px-0 mx-auto">
        <SectionTitle
          className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset]"
          text="Flow"
          text1="ご利用の流れ"
        />
        <div className="relative w-full max-w-[1239px] h-auto flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start gap-12 md:gap-12 lg:gap-4 xl:gap-0 justify-between">
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
        <div className="relative w-full md:w-[500px] lg:w-[24%] xl:w-[257px] h-auto flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0">
          <div className="flex flex-col w-[150px] h-[150px] md:w-full md:h-auto items-center gap-6 relative flex-shrink-0 md:flex-shrink z-10">
            <img
              className="relative w-full h-full md:w-[90%] md:max-w-[340px] md:h-[200px] xl:h-[255px] object-cover rounded-[20px] md:self-stretch md:rounded-lg border-[3px] border-[#efa3af] md:border-none"
              alt="Rectangle"
              src="/img/rectangle-140.png"
            />
          </div>

          <div className="flex flex-col w-full items-start md:items-center gap-1 md:gap-2.5 z-10 pt-2">
            <div className="md:hidden [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[64px] leading-none mb-[-10px] ml-[-4px]">
              01
            </div>
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-lg md:text-xl xl:text-2xl text-left md:text-center tracking-[0] leading-[1.4]">
              いつでも診察可能
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-sm md:text-sm xl:text-base text-left md:text-center tracking-[0] leading-[1.6]">
              問診回答後いつでも診察開始。
            </div>
          </div>

          <div className="hidden md:block absolute -top-10 md:-top-[30px] xl:-top-12 left-1/2 -translate-x-1/2 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[80px] md:text-6xl xl:text-8xl tracking-[0] leading-[1] md:leading-[72px] xl:leading-[96px] whitespace-nowrap z-20 opacity-50 md:opacity-100">
            01
          </div>
        </div>

        {/* SP Arrow */}
        <div className="md:hidden flex justify-center w-full py-2">
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V38M12 38L4 28M12 38L20 28" stroke="#d89da6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
          </svg>
        </div>

        {/* Step 2 */}
        <div className="relative w-full md:w-[500px] lg:w-[24%] xl:w-[257px] h-auto flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0">
          <div className="flex flex-col w-[150px] h-[150px] md:w-full md:h-auto items-center gap-6 relative flex-shrink-0 md:flex-shrink z-10">
            <img
              className="relative w-full h-full md:w-[90%] md:max-w-[340px] md:h-[200px] xl:h-[255px] object-cover rounded-[20px] md:self-stretch md:rounded-lg border-[3px] border-[#efa3af] md:border-none"
              alt="Rectangle"
              src="/img/rectangle-141.png"
            />
          </div>

          <div className="flex flex-col w-full items-start md:items-center gap-1 md:gap-2.5 z-10 pt-2">
            <div className="md:hidden [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[64px] leading-none mb-[-10px] ml-[-4px]">
              02
            </div>
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-lg md:text-xl xl:text-2xl text-left md:text-center tracking-[0] leading-[1.4]">
              医師とオンライン診療
            </div>

            <div className="self-stretch font-medium text-[#555555] text-sm md:text-sm xl:text-base leading-[1.6] md:leading-[19.6px] xl:leading-[22.4px] relative [font-family:'Noto_Sans_JP',Helvetica] text-left md:text-center tracking-[0]">
              経験豊富な医師が
              <br className="hidden md:block" />
              丁寧に対応します
            </div>
          </div>

          <div className="hidden md:block absolute -top-10 md:-top-[30px] xl:-top-12 left-1/2 -translate-x-1/2 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[80px] md:text-6xl xl:text-8xl tracking-[0] leading-[1] md:leading-[72px] xl:leading-[96px] whitespace-nowrap z-20 opacity-50 md:opacity-100">
            02
          </div>
        </div>

        {/* SP Arrow */}
        <div className="md:hidden flex justify-center w-full py-2">
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V38M12 38L4 28M12 38L20 28" stroke="#d89da6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
          </svg>
        </div>

        {/* Step 3 */}
        <div className="relative w-full md:w-[500px] lg:w-[24%] xl:w-[257px] h-auto flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0">
          <div className="flex flex-col w-[150px] h-[150px] md:w-full md:h-auto items-center gap-6 relative flex-shrink-0 md:flex-shrink z-10">
            <img
              className="relative w-full h-full md:w-[90%] md:max-w-[340px] md:h-[200px] xl:h-[255px] object-cover rounded-[20px] md:self-stretch md:rounded-lg border-[3px] border-[#efa3af] md:border-none"
              alt="Rectangle"
              src="/img/rectangle-142.png"
            />
          </div>

          <div className="flex flex-col w-full items-start md:items-center gap-1 md:gap-2.5 z-10 pt-2">
            <div className="md:hidden [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[64px] leading-none mb-[-10px] ml-[-4px]">
              03
            </div>
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-lg md:text-xl xl:text-2xl text-left md:text-center tracking-[0] leading-[1.4]">
              薬の処方・決済
            </div>

            <div className="self-stretch font-medium text-[#555555] text-sm md:text-sm xl:text-base leading-[1.6] md:leading-[19.6px] xl:leading-[22.4px] relative [font-family:'Noto_Sans_JP',Helvetica] text-left md:text-center tracking-[0]">
              追加費用なし、クレジット決済でスムーズ
            </div>
          </div>

          <div className="hidden md:block absolute -top-10 md:-top-[30px] xl:-top-12 left-1/2 -translate-x-1/2 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[80px] md:text-6xl xl:text-8xl tracking-[0] leading-[1] md:leading-[72px] xl:leading-[96px] whitespace-nowrap z-20 opacity-50 md:opacity-100">
            03
          </div>
        </div>

        {/* SP Arrow */}
        <div className="md:hidden flex justify-center w-full py-2">
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V38M12 38L4 28M12 38L20 28" stroke="#d89da6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
          </svg>
        </div>

        {/* Step 4 */}
        <div className="relative w-full md:w-[500px] lg:w-[24%] xl:w-[257px] h-auto flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0">
          <div className="flex flex-col w-[150px] h-[150px] md:w-full md:h-auto items-center gap-6 relative flex-shrink-0 md:flex-shrink z-10">
            <img
              className="relative w-full h-full md:w-[90%] md:max-w-[340px] md:h-[200px] xl:h-[255px] object-cover rounded-[20px] md:self-stretch md:rounded-lg border-[3px] border-[#efa3af] md:border-none"
              alt="Rectangle"
              src="/img/rectangle-143.png"
            />
          </div>

          <div className="flex flex-col w-full items-start md:items-center gap-1 md:gap-2.5 z-10 pt-2">
            <div className="md:hidden [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[64px] leading-none mb-[-10px] ml-[-4px]">
              04
            </div>
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-lg md:text-xl xl:text-2xl text-left md:text-center tracking-[0] leading-[1.4]">
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-lg md:text-xl xl:text-2xl tracking-[0]">
                ご自宅に配送
              </span>

              <span className="text-xs md:text-base xl:text-lg">（最短翌日）</span>
            </p>

            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-sm md:text-sm xl:text-base text-left md:text-center tracking-[0] leading-[1.6] whitespace-nowrap">
              ポスト投函でお届け
            </div>
          </div>

          <div className="hidden md:block absolute -top-10 md:-top-[30px] xl:-top-12 left-1/2 -translate-x-1/2 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[80px] md:text-6xl xl:text-8xl tracking-[0] leading-[1] md:leading-[72px] xl:leading-[96px] whitespace-nowrap z-20 opacity-50 md:opacity-100">
            04
          </div>
        </div>
      </div>
      </div>
      {/* PC版・タブレット版: SVG画像 - 画面幅いっぱい */}
      <div className="hidden md:block w-full mt-8 xl:mt-12">
        <img
          className="w-full h-auto block"
          alt="Group 9340"
          src="/img/Group-9340.svg"
        />
      </div>
    </div>
  );
};
