import React from "react";

export const Fv = () => {
  return (
    <div className="absolute top-[66px] left-0 w-full z-10">
      <div className="relative w-full h-[557px] overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover object-center scale-[0.8]"
          alt="Kv x"
          src="/img/kv2025-11-3x-2.png"
        />

        <div className="absolute top-[200px] left-0 w-full h-[357px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)]" />

        <div className="absolute top-[260px] w-full text-center z-10">
          <p className="[text-shadow:0_0_15px_#fff,0_0_20px_#fff,0_0_30px_#fff] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#d97687] leading-none mb-2 whitespace-nowrap">
            <span className="text-[76px] align-baseline">私</span>
            <span className="text-[34px] ml-1 align-baseline">のための</span>
          </p>
          <p className="[text-shadow:0_0_15px_#fff,0_0_20px_#fff,0_0_30px_#fff] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#d97687] text-[52px] leading-none tracking-widest">
            オンライン診療
          </p>
        </div>

        <div className="absolute top-[390px] left-1/2 -translate-x-1/2 w-[92%] flex flex-col gap-2.5 z-10">
          <div className="flex items-center gap-3 px-4 py-2 w-full bg-[#fcf3e7] rounded-[100px] shadow-sm min-h-[48px]">
            <img
              className="w-8 h-8 flex-shrink-0"
              alt="Bomb"
              src="/img/bomb-3947482.svg"
            />
            <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#5c5c5c] flex items-baseline gap-1 flex-wrap">
              <span className="text-[22px] font-bold leading-none">美肌内服</span>
              <span className="text-[13px] font-medium leading-none">（シミ・ニキビ・毛穴）</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 w-full bg-[#fce4e7] rounded-[100px] shadow-sm min-h-[48px]">
            <img
              className="w-8 h-8 flex-shrink-0"
              alt="Drug"
              src="/img/drug-5431956.svg"
            />
            <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#5c5c5c] flex items-baseline gap-1 flex-wrap">
              <span className="text-[22px] font-bold leading-none">ピル</span>
              <span className="text-[13px] font-medium leading-none">（低用量・中用量・アフターピル）</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 w-full bg-[#e4e7f7] rounded-[100px] shadow-sm min-h-[48px]">
            <img
              className="w-8 h-8 flex-shrink-0"
              alt="Night mode"
              src="/img/night-mode-8775553.svg"
            />
            <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#5c5c5c] flex items-baseline gap-1 flex-wrap">
              <span className="text-[22px] font-bold leading-none">睡眠ケア</span>
              <span className="text-[13px] font-medium leading-none">（不眠症）</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
