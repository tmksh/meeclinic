import React from "react";
import { TagPc } from "../../../../components/TagPc";

export const Group = () => {
  return (
    <div className="relative w-full h-auto md:absolute md:top-[12300px] md:left-[calc(50.00%_-_720px)] md:w-[1446px] md:h-[950px] z-10 pb-16 md:pb-0">
      <div className="absolute top-0 left-0 w-full h-full md:top-[90px] md:left-[calc(50.00%_-_723px)] md:w-[1440px] md:h-[850px] bg-[#f5ebe6] -z-10" />

      <div className="flex flex-col w-full items-center md:block relative">
        {/* Title */}
        <div className="relative md:absolute md:top-0 md:left-[618px] [font-family:'Noto_Serif',Helvetica] font-medium text-[#ffffffa6] text-[120px] md:text-[300px] tracking-[0] leading-[normal] text-center md:text-left">
          Skin
        </div>

        {/* Subtitle */}
        <p className="relative md:absolute md:top-[237px] md:left-[618px] w-full md:w-[480px] px-4 md:px-0 [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-2xl md:text-[32px] tracking-[0] leading-[normal] text-center md:text-left">
          <span className="text-[#6b6b6b]">
            スキンケアだけでは解決しない、
            <br />
            肌の悩みの
          </span>
          <span className="text-[#c76f7e]">根本原因</span>
          <span className="text-[#6b6b6b]">とは？</span>
        </p>

        {/* Description */}
        <div className="relative md:absolute md:top-[381px] md:left-[299px] w-full md:w-[417px] px-4 md:px-0 mt-8 md:mt-0 [font-family:'Noto_Serif_JP',Helvetica] font-medium text-[var(--)] text-base md:text-xl text-justify tracking-[0] leading-[1.6] md:leading-[normal]">
          肌トラブルは、ホルモンバランスの変動に大きく影響されます 。<br />
          特に生理前は、  皮脂の分泌を促すホルモンが増え、
          <br />
          ニキビができやすくなることも 。<br />
          スキンケアで解決しない場合は、根本原因にアプローチすることが大切です。
        </div>

        {/* Image & Stats Section for Mobile */}
        <div className="flex flex-col md:block w-full items-center gap-8 mt-8 px-4">
          {/* Image */}
          <div className="relative md:absolute md:top-[381px] md:left-[104px] w-[175px] h-[190px]">
            <div className="absolute top-0 left-0 w-[175px] h-[175px] bg-white rounded-md p-2">
              <img
                className="relative w-full h-full aspect-[1] rounded-md"
                alt="Img"
                src="/img/img-1.png"
              />
            </div>
            <div className="flex w-[132px] items-center justify-center px-2 py-[3px] absolute top-[159px] left-[22px] bg-[#c76f7e]">
              <div className="relative w-fit [font-family:'Noto_Serif_JP',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                皮膚科専門医
              </div>
            </div>
          </div>

          {/* Stats 1 */}
          <div className="flex flex-col w-[242px] items-center gap-5 relative md:absolute md:top-[381px] md:left-[764px]">
            <p className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[var(--)] text-[32px] relative w-fit tracking-[0] leading-[normal]">
              <span className="text-[#6b6b6b]">55.3</span>
              <span className="text-[#6b6b6b] text-base">
                %の女性が
                <br />
              </span>
              <span className="text-[#c76f7e]">毛穴</span>
              <span className="text-[#6b6b6b] text-base">に悩んでいます。</span>
            </p>
            <img
              className="relative self-stretch w-full flex-[0_0_auto]"
              alt="Frame"
              src="/img/frame-1448.png"
            />
          </div>

          {/* Stats 2 */}
          <div className="flex flex-col w-[242px] items-center gap-5 relative md:absolute md:top-[381px] md:left-[1018px]">
            <p className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[var(--)] text-[32px] relative w-fit tracking-[0] leading-[normal]">
              <span className="text-[#6b6b6b]">49.3</span>
              <span className="text-[#6b6b6b] text-base">
                %の男性が
                <br />
              </span>
              <span className="text-[#c76f7e]">ニキビ</span>
              <span className="text-[#6b6b6b] text-base">に悩んでいます。</span>
            </p>
            <img
              className="relative self-stretch w-full flex-[0_0_auto]"
              alt="Frame"
              src="/img/frame-1447.png"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center w-full md:w-[528px] items-center gap-[16px_16px] relative md:absolute md:top-[632px] md:left-[104px] mt-8 mb-12 px-4">
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset]" prop="ニキビ" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset]" prop="ニキビ痕" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset]" prop="肝斑" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset]" prop="開き毛穴" />
          <TagPc
            className="!flex !left-[unset] !w-[199px] !top-[unset]"
            divClassName="!mr-[-6.50px] !ml-[-6.50px]"
            prop="つまり(黒ずみ)毛穴"
          />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset]" prop="エイジングケア" />
        </div>
      </div>
    </div>
  );
};
