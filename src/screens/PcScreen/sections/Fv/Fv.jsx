import React from "react";

export const Fv = () => {
  return (
    <div className="relative w-full md:h-[500px] xl:h-[559px] max-w-[1440px] mx-auto mt-[60px] md:mt-[66px] xl:mt-[92px] px-0 md:px-0 z-10 overflow-hidden">
      {/* Mobile View */}
      <div className="md:hidden relative w-full">
        <div className="relative w-full h-[557px] overflow-hidden">
          <img
            className="absolute top-[40px] left-0 w-full h-full object-cover object-center scale-[0.38]"
            alt="Kv x"
            src="/img/kv2025-11-3x-2.png"
          />

          <div className="absolute top-[200px] left-0 w-full h-[357px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_100%)]" />

          <div className="absolute top-[200px] w-full text-center z-10">
            <p className="[text-shadow:0_0_15px_#fff,0_0_20px_#fff,0_0_30px_#fff] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#D97787] leading-none mb-3 whitespace-nowrap">
              <span className="text-[80px] align-baseline">私</span>
              <span className="text-[36px] ml-1 align-baseline">のための</span>
            </p>
            <p className="[text-shadow:0_0_15px_#fff,0_0_20px_#fff,0_0_30px_#fff] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#D97787] text-[56px] leading-none tracking-widest whitespace-nowrap">
              オンライン診療
            </p>
          </div>

          <div className="absolute top-[360px] w-full flex flex-col gap-3 z-10 px-4">
            <div className="flex items-center justify-start gap-3 px-6 py-2 w-full bg-[#fcf3e7] rounded-[100px] shadow-sm min-h-[52px]">
              <img
                className="w-8 h-8 flex-shrink-0"
                alt="Bomb"
                src="/img/bomb-3947482.svg"
              />
              <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#5c5c5c] flex items-baseline gap-1 flex-wrap justify-start">
                <span className="text-[22px] font-bold leading-none">美肌内服</span>
                <span className="text-[15px] font-medium leading-none">（シミ・ニキビ・毛穴）</span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-3 px-6 py-2 w-full bg-[#fce4e7] rounded-[100px] shadow-sm min-h-[52px]">
              <img
                className="w-8 h-8 flex-shrink-0"
                alt="Drug"
                src="/img/drug-5431956.svg"
              />
              <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#5c5c5c] flex items-baseline gap-1 flex-wrap justify-start">
                <span className="text-[22px] font-bold leading-none">ピル</span>
                <span className="text-[15px] font-medium leading-none">（低用量・中用量・アフターピル）</span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-3 px-6 py-2 w-full bg-[#e4e7f7] rounded-[100px] shadow-sm min-h-[52px]">
              <img
                className="w-8 h-8 flex-shrink-0"
                alt="Night mode"
                src="/img/night-mode-8775553.svg"
              />
              <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#5c5c5c] flex items-baseline gap-1 flex-wrap justify-start">
                <span className="text-[22px] font-bold leading-none">睡眠ケア</span>
                <span className="text-[15px] font-medium leading-none">（不眠症）</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#dcb4bc] py-8 px-4 flex flex-col items-center gap-6">
          <div className="flex justify-center gap-3 w-full max-w-[360px]">
            <div className="flex-1 bg-white rounded-[10px] py-3 px-1 flex flex-col items-center justify-center gap-1 shadow-sm h-[80px]">
              <span className="text-[#efa3af] text-[13px] font-bold leading-tight text-center">診察料</span>
              <span className="text-[#efa3af] text-[18px] font-bold leading-tight text-center">0円</span>
            </div>
            <div className="flex-1 bg-white rounded-[10px] py-3 px-1 flex flex-col items-center justify-center gap-1 shadow-sm h-[80px]">
              <span className="text-[#efa3af] text-[13px] font-bold leading-tight text-center">いつでも</span>
              <span className="text-[#efa3af] text-[18px] font-bold leading-tight text-center">診察可能</span>
            </div>
            <div className="flex-1 bg-white rounded-[10px] py-3 px-1 flex flex-col items-center justify-center gap-1 shadow-sm h-[80px]">
              <span className="text-[#efa3af] text-[13px] font-bold leading-tight text-center">最短翌日</span>
              <span className="text-[#efa3af] text-[18px] font-bold leading-tight text-center">お届け</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-[20px] leading-tight tracking-wider">
              まずは、お気軽に<br/>お問い合わせください！
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover object-center scale-90 origin-top-right"
          alt="Png"
          src="/img/kv2025-11-png-3x-2.png"
        />

        <div className="absolute top-0 left-0 w-[600px] xl:w-[874px] h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.27)_0%,rgba(255,255,255,0)_100%)]" />

        <div className="absolute top-12 lg:top-16 xl:top-[70px] left-8 lg:left-[60px] xl:left-[102px] w-auto z-20 flex flex-col items-start gap-0">
          <p className="w-auto text-left [text-shadow:0_0_15px_#fff,0_0_20px_#fff,0_0_30px_#fff,0_0_40px_#fff] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#d97687] tracking-[0] leading-[1.1] whitespace-nowrap mb-0">
            <span className="text-6xl lg:text-7xl xl:text-[90px]">
              私
            </span>
            <span className="text-4xl lg:text-5xl xl:text-[60px] ml-2">
              のための
            </span>
          </p>

          <p className="w-auto text-left [text-shadow:0_0_15px_#fff,0_0_20px_#fff,0_0_30px_#fff,0_0_40px_#fff] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#d97687] text-6xl lg:text-7xl xl:text-[96px] leading-[1.1] whitespace-nowrap tracking-wider">
            オンライン診療
          </p>
        </div>

        <div className="flex flex-col w-auto items-start gap-4 absolute top-[220px] lg:top-[260px] xl:top-[300px] left-8 lg:left-[60px] xl:left-[102px] z-20">
          <div className="flex h-[56px] lg:h-[64px] xl:h-[72px] items-center gap-3 px-6 py-1 relative w-auto bg-[#fcf3e7] rounded-[100px] shadow-sm">
          <img
              className="w-8 h-8 xl:w-10 xl:h-10 flex-shrink-0"
            alt="Bomb"
            src="/img/bomb-3947482.svg"
          />
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#5c5c5c] whitespace-nowrap flex items-baseline">
              <span className="text-xl lg:text-2xl xl:text-[32px]">美肌内服</span>
              <span className="text-sm lg:text-lg xl:text-[20px] ml-2 font-medium">
              （シミ・ニキビ・毛穴）
            </span>
          </div>
        </div>

          <div className="flex h-[56px] lg:h-[64px] xl:h-[72px] items-center gap-3 px-6 py-1 relative w-auto bg-[#fce4e7] rounded-[100px] shadow-sm">
          <img
              className="w-8 h-8 xl:w-10 xl:h-10 flex-shrink-0"
            alt="Drug"
            src="/img/drug-5431956.svg"
          />
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#5c5c5c] whitespace-nowrap flex items-baseline">
              <span className="text-xl lg:text-2xl xl:text-[32px]">ピル</span>
              <span className="text-sm lg:text-lg xl:text-[20px] ml-2 font-medium">
              （低用量・中用量・アフターピル）
            </span>
          </div>
        </div>

          <div className="flex h-[56px] lg:h-[64px] xl:h-[72px] items-center gap-3 px-6 py-1 relative w-auto bg-[#e4e7f7] rounded-[100px] shadow-sm">
          <img
              className="w-8 h-8 xl:w-10 xl:h-10 flex-shrink-0"
            alt="Night mode"
            src="/img/night-mode-8775553.svg"
          />
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#5c5c5c] whitespace-nowrap flex items-baseline">
              <span className="text-xl lg:text-2xl xl:text-[32px]">睡眠ケア</span>
              <span className="text-sm lg:text-lg xl:text-[20px] ml-2 font-medium">
              （不眠症）
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
