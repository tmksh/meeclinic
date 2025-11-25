import React from "react";
import { TagPc } from "../../../../components/TagPc";

export const Group = () => {
  return (
    <div id="knowledge" className="relative w-full max-w-[1446px] mx-auto h-auto md:h-[980px] mt-[-180px] md:mt-0 z-10 pb-16 md:pb-[200px] md:bg-[#f5ebe6] scroll-mt-20">
      {/* PC版・タブレット版: SVG画像 */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full -z-20">
        <img
          className="w-full h-full object-cover"
          alt="Group 9340"
          src="/img/Group-9340.svg"
        />
      </div>
      <div className="hidden md:block absolute top-0 left-0 w-full h-full md:top-0 md:left-0 md:w-full md:h-full bg-[#f5ebe6] -z-10" />

      <div className="flex flex-col w-full items-center md:block relative">
        {/* Title */}
        <div className="hidden md:block relative md:ml-[618px] md:mt-[-80px] [font-family:'Noto_Serif',Helvetica] font-medium text-[#ffffffa6] text-[120px] md:text-[300px] tracking-[0] leading-[normal] text-center md:text-left">
          Skin
        </div>

        {/* Subtitle */}
        <p className="hidden md:block relative md:ml-[618px] md:mt-[-160px] w-full md:w-[480px] px-4 md:px-0 [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-2xl md:text-[32px] tracking-[0] leading-[normal] text-center md:text-left">
          <span className="text-[#555555]">
            スキンケアだけでは解決しない、
            <br />
            肌の悩みの
          </span>
          <span className="text-[#c76f7e]">根本原因</span>
          <span className="text-[#555555]">とは？</span>
        </p>

        {/* Description */}
        <div className="hidden md:block md:absolute md:top-[420px] md:left-[299px] w-full md:w-[417px] px-4 md:px-0 mt-8 [font-family:'Noto_Serif_JP',Helvetica] font-medium text-[var(--)] text-base md:text-xl text-justify tracking-[0] leading-[1.6] md:leading-[normal]">
          肌トラブルは、ホルモンバランスの変動に大きく影響されます 。<br />
          特に生理前は、  皮脂の分泌を促すホルモンが増え、
          <br />
          ニキビができやすくなることも 。<br />
          スキンケアで解決しない場合は、根本原因にアプローチすることが大切です。
        </div>

        {/* SP Only Image (Group 9335 (2).svg) */}
        <div className="md:hidden w-full mt-[-40px] px-0">
          <img
            className="w-full h-auto"
            alt="Skin Trouble Stats"
            src="/img/Group 9335 (2).svg"
          />
        </div>

        {/* SP Only Image (Group 9340 (1).svg) */}
        <div className="md:hidden w-full mt-[-60px] px-0">
          <img
            className="w-full h-auto"
            alt="Skin Knowledge"
            src="/img/Group 9340 (1).svg"
          />
        </div>

        {/* Image & Stats Section for PC Only */}
        <div className="hidden md:block w-full items-center gap-8 mt-8 px-4">
          {/* Image */}
          <div className="relative w-[175px] h-[190px] mx-auto md:mx-0 md:absolute md:top-[460px] md:left-[104px]">
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

          {/* Stats Wrapper for PC */}
          <div className="flex flex-row justify-center gap-4 w-full md:contents">
          {/* Stats 1 */}
            <div className="flex flex-col w-[160px] md:w-[242px] items-center gap-5 relative mx-auto md:mx-0 md:absolute md:top-[460px] md:left-[764px]">
              <p className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[var(--)] text-[24px] md:text-[32px] relative w-fit tracking-[0] leading-[normal]">
              <span className="text-[#555555]">55.3</span>
                <span className="text-[#555555] text-sm md:text-base">
                %の女性が
                <br />
              </span>
              <span className="text-[#c76f7e]">毛穴</span>
                <span className="text-[#555555] text-sm md:text-base whitespace-nowrap">に悩んでいます。</span>
            </p>
            <img
              className="relative self-stretch w-full flex-[0_0_auto]"
              alt="Frame"
              src="/img/frame-1448.png"
            />
          </div>

          {/* Stats 2 */}
            <div className="flex flex-col w-[160px] md:w-[242px] items-center gap-5 relative mx-auto md:mx-0 md:absolute md:top-[460px] md:left-[1018px]">
              <p className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[var(--)] text-[24px] md:text-[32px] relative w-fit tracking-[0] leading-[normal]">
              <span className="text-[#555555]">49.3</span>
                <span className="text-[#555555] text-sm md:text-base">
                %の男性が
                <br />
              </span>
              <span className="text-[#c76f7e]">ニキビ</span>
                <span className="text-[#555555] text-sm md:text-base whitespace-nowrap">に悩んでいます。</span>
            </p>
            <img
              className="relative self-stretch w-full flex-[0_0_auto]"
              alt="Frame"
              src="/img/frame-1447.png"
            />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="hidden md:flex flex-wrap justify-center w-full md:w-[528px] items-center gap-[16px_16px] relative mt-8 mb-12 px-4 md:absolute md:top-[670px] md:left-[104px] md:mt-0 md:mb-0 md:px-0">
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
