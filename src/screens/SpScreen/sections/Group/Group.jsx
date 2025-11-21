import React from "react";
import { TagSp } from "../../../../components/TagSp";

export const Group = () => {
  return (
    <div className="absolute top-[16245px] left-0 w-[382px] h-[818px]">
      <div className="absolute top-0 left-0 [font-family:'Noto_Serif',Helvetica] font-medium text-[#ffffffa6] text-9xl tracking-[0] leading-[normal]">
        Skin
      </div>

      <p className="absolute top-[113px] left-[15px] w-[363px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-2xl tracking-[0] leading-[normal]">
        <span className="text-[#6b6b6b]">
          スキンケアだけでは解決しない、
          <br />
          肌の悩みの
        </span>

        <span className="text-[#c76f7e]">根本原因</span>

        <span className="text-[#6b6b6b]">とは？</span>
      </p>

      <div className="flex flex-col w-[362px] items-center gap-1 absolute top-[220px] left-4">
        <div className="flex items-start justify-center gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[175px] h-[190px]">
            <img
              className="absolute top-0 left-0 w-[175px] h-[175px] aspect-[1]"
              alt="Img"
              src="/img/img-1.png"
            />

            <div className="flex w-[132px] items-center justify-between px-2 py-[3px] absolute top-[159px] left-[22px] bg-[var(--)]">
              <img
                className="relative w-px h-[25px] ml-[-1.00px] object-cover"
                alt="Line"
                src="/img/line-36-1.svg"
              />

              <div className="relative w-fit [font-family:'Noto_Serif_JP',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                皮膚科専門医
              </div>

              <img
                className="relative w-px h-[25px] object-cover"
                alt="Line"
                src="/img/line-36-1.svg"
              />
            </div>
          </div>

          <div className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-medium text-[var(--)] text-sm text-justify tracking-[0] leading-[22.4px]">
            肌トラブルは、ホルモンバランスの変動に大きく影響されます 。<br />
            特に生理前は、
             皮脂の分泌を促すホルモンが増え、ニキビができやすくなることも 。
            <br />
            スキンケアで解決しない場合は、根本原因にアプローチすることが大切です。
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-[21px] absolute top-[490px] left-[calc(50.00%_-_175px)]">
        <div className="inline-flex items-center gap-5 flex-col relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[var(--)] text-2xl tracking-[0] leading-[normal]">
            <span className="text-[#6b6b6b]">55.3</span>

            <span className="text-[#6b6b6b] text-sm">
              %の女性が
              <br />
            </span>

            <span className="text-[#c76f7e]">毛穴</span>

            <span className="text-[#6b6b6b] text-sm">に悩んでいます。</span>
          </p>

          <img
            className="relative flex-[0_0_auto] mb-[-0.48px]"
            alt="Frame"
            src="/img/frame-1447.png"
          />
        </div>

        <div className="inline-flex items-center gap-5 flex-col relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[var(--)] text-2xl tracking-[0] leading-[normal]">
            <span className="text-[#6b6b6b]">49.3</span>

            <span className="text-[#6b6b6b] text-sm">
              %の女性が
              <br />
            </span>

            <span className="text-[#c76f7e]">ニキビ</span>

            <span className="text-[#6b6b6b] text-sm">に悩んでいます。</span>
          </p>

          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/frame-1447-1.png"
          />
        </div>
      </div>

      <div className="w-[360px] top-[750px] left-[15px] flex flex-wrap items-center gap-[8px_8px] absolute">
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="ニキビ"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="ニキビ痕"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="肝斑"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="開き毛穴"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="つまり(黒ずみ)毛穴"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="エイジングケア"
        />
      </div>
    </div>
  );
};
