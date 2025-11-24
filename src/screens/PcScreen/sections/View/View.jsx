import React from "react";
import { Img } from "../../../../components/Img";

export const View = () => {
  return (
    <div id="view" className="relative w-full h-auto max-w-[1445px] mx-auto z-5 mt-12 md:mt-0 scroll-mt-20">
      <img
        className="absolute top-[100px] right-0 w-[150px] h-auto md:top-[230px] md:left-[1027px] md:w-[379px] md:h-[424px] object-cover z-10"
        alt="Vector"
        src="/img/vector-6.png"
      />

      <img
        className="absolute top-[450px] left-[-30px] w-[150px] h-auto md:top-[510px] md:left-[58px] md:w-[293px] md:h-[359px] object-cover z-10"
        alt="Vector"
        src="/img/vector-8.png"
      />

      {/* Container 1: Intro + Mind&Body + 3 Columns - SP版のみ */}
      <div className="md:hidden flex flex-col w-full items-center gap-10 relative mx-auto px-4 py-12 z-10 bg-white">
        <img
          className="w-[calc(100%+2rem)] max-w-none -mx-4 h-auto object-cover"
          alt=""
          src="/img/Group 9332.svg"
        />
        {/* SP Layout (Smaller) */}
        <div className="w-full flex justify-center">
          <div className="flex flex-row items-end justify-center gap-2 relative w-full mt-4">
                {/* Column 1 */}
                <div className="relative w-[100px] h-[110px]">
                  <img
                    className="absolute top-[16px] left-0 w-[100px] h-[86px]"
                    alt="Polygon"
                    src="/img/polygon-3-2.svg"
                  />
                  <Img
                    element="/img/img.svg"
                    elementClassName="!h-[42px] !left-[29px] !w-[42px]"
                    one="one"
                  />
                  <div className="absolute top-[50px] left-[10px] w-[80px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#C76F7E] text-[11px] text-center tracking-[0] leading-[normal]">
                    ピルについて
                  </div>
                  <img
                    className="absolute top-[82px] left-[42px] w-[14px] h-[9px]"
                    alt="Polygon"
                    src="/img/polygon-12.svg"
                  />
                </div>

                {/* Column 2 */}
                <div className="relative w-[100px] h-[113px]">
                  <img
                    className="top-[19px] absolute left-0 w-[100px] h-[86px]"
                    alt="Polygon"
                    src="/img/polygon-3-2.svg"
                  />
                  <Img
                    elementClassName="!h-[42px] !absolute !left-[30px] !w-[42px] !top-0"
                    maskGroup="/img/mask-group-3.png"
                    maskGroupClassName="!ml-[2px] !h-[36px] !mt-[3px] !w-[39px]"
                    one="two"
                  />
                  <div className="absolute top-[53px] left-[10px] w-[80px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#C76F7E] text-[11px] text-center tracking-[0] leading-[normal]">
                    睡眠について
                  </div>
                  <img
                    className="absolute top-[85px] left-[42px] w-[14px] h-[9px]"
                    alt="Polygon"
                    src="/img/polygon-12.svg"
                  />
                </div>

                {/* Column 3 */}
                <div className="relative w-[100px] h-[111px]">
                  <img
                    className="top-[17px] absolute left-0 w-[100px] h-[86px]"
                    alt="Polygon"
                    src="/img/polygon-3-2.svg"
                  />
                  <Img
                    elementClassName="!h-[42px] !absolute !left-[29px] !w-[42px] !top-0"
                    img="/img/mask-group-4.png"
                    maskGroupClassName="!h-[35px] !mt-[4px] !w-[42px]"
                    one="three"
                  />
                  <div className="absolute top-[46px] left-[5px] w-[90px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#C76F7E] text-[11px] text-center tracking-[0] leading-[13px]">
                    肌トラブル
                    <br />
                    について
                  </div>
                  <img
                    className="absolute top-[83px] left-[42px] w-[14px] h-[9px]"
                    alt="Polygon"
                    src="/img/polygon-12.svg"
                  />
                </div>
          </div>
        </div>
      </div>

      {/* Container 2: Japan Pill Gap + Doctor - SP版のみ */}
      <div className="md:hidden relative w-full mt-0 bg-[#e8ecf7] overflow-visible z-10">
        <div className="relative max-w-[1120px] mx-auto px-6 pt-0 pb-12 flex flex-col gap-10">
          <img
            className="relative z-50 block w-[calc(100%+3rem)] -mx-6 h-auto mt-[-320px]"
            alt=""
            aria-hidden="true"
            src="/img/Pill.svg"
          />
          {/* セクション間の余白調整 */}
          <div className="h-[40px]" />
        </div>
      </div>
    </div>
  );
};
