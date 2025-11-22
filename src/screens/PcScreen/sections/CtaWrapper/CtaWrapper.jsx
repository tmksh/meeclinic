import React from "react";

export const CtaWrapper = () => {
  return (
    <div className="flex flex-col w-full items-center gap-6 md:gap-10 px-4 md:px-[174px] py-6 md:py-10 relative z-20 bg-[#dba1a9]">
      <div className="flex flex-col items-start gap-4 md:gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {/* Tags */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-[39px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-1 md:w-[270px] h-[45px] md:h-[65px] items-center justify-center gap-2.5 px-2 md:px-[51px] py-2 md:py-2.5 relative bg-white rounded-[10px]">
            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#dba1a9] text-sm md:text-2xl text-center tracking-[1.20px] leading-[normal] whitespace-nowrap">
              診察料0円
            </div>
          </div>

          <div className="flex flex-1 md:w-[270px] h-[45px] md:h-[65px] items-center justify-center gap-2.5 px-2 md:px-[51px] py-2 md:py-2.5 relative bg-white rounded-[10px]">
            <div className="w-fit [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#dba1a9] text-sm md:text-2xl tracking-[1.20px] relative text-center leading-[normal] whitespace-nowrap">
              いつでも診察可能
            </div>
          </div>

          <div className="flex flex-1 md:w-[270px] h-[45px] md:h-[65px] items-center justify-center gap-2.5 px-2 md:px-[51px] py-2 md:py-2.5 relative bg-white rounded-[10px]">
            <div className="w-fit [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#dba1a9] text-sm md:text-2xl tracking-[1.20px] relative text-center leading-[normal] whitespace-nowrap">
              最短翌日お届け
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="self-stretch [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-[18px] md:text-[32px] tracking-[0] relative text-center leading-[normal] whitespace-nowrap">
          まずはお気軽にお問い合わせください！
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:inline-flex md:flex-row items-center md:items-start gap-4 md:gap-10 relative flex-[0_0_auto] w-full md:w-auto">
        {/* Pink Button */}
        <div className="border-2 border-solid border-white w-full md:w-[369px] max-w-[369px] flex items-center gap-4 md:gap-6 px-4 md:px-[18px] py-3 md:py-[15px] h-[56px] md:h-[66px] rounded-[100px] justify-center md:justify-end relative bg-[#dba1a9] cursor-pointer hover:opacity-90 transition-opacity">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] w-fit flex mt-[-1.00px] tracking-[0] text-lg md:text-2xl items-center text-white font-bold text-center justify-center leading-[normal] relative">
            オンライン診療はこちら
          </div>
          <div className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-[12px] md:rounded-[15px] bg-white relative">
            <img
              className="w-3 md:w-3.5 left-2 md:left-2.5 top-[6px] md:top-[7px] h-[14px] md:h-[17px] absolute"
              alt="Vector"
              src="/img/vector-7-2.svg"
            />
          </div>
        </div>

        {/* Blue Button */}
        <div className="border-2 border-solid border-white w-full md:w-[369px] max-w-[369px] flex items-center gap-4 md:gap-6 px-4 md:px-[18px] py-3 md:py-[15px] h-[56px] md:h-[66px] rounded-[100px] justify-center md:justify-end relative bg-[#7182e4] cursor-pointer hover:opacity-90 transition-opacity">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] w-fit flex mt-[-1.00px] tracking-[0] text-lg md:text-2xl items-center text-white font-bold text-center justify-center leading-[normal] relative">
            薬品カタログページへ
          </div>
          <div className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-[12px] md:rounded-[15px] bg-white relative">
            <img
              className="w-3 md:w-3.5 left-2 md:left-2.5 top-[6px] md:top-[7px] h-[14px] md:h-[17px] absolute"
              alt="Vector"
              src="/img/vector-7-3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
