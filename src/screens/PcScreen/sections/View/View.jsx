import React from "react";
import { Img } from "../../../../components/Img";

export const View = () => {
  return (
    <div className="relative w-full h-auto md:absolute md:top-[10552px] md:left-[-5px] md:w-[1445px] md:h-[2663px] z-5">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-[320px] object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C320,60 640,220 960,160 C1280,100 1440,120 1440,120 V320 H0 Z"
            fill="#EDD0D6"
          />
        </svg>
        <div className="absolute top-[319px] left-0 w-full h-[calc(100%-319px)] bg-[#EDD0D6]" />
      </div>

      <img
        className="hidden md:block absolute top-[75px] left-[1027px] w-[379px] h-[424px] object-cover"
        alt="Vector"
        src="/img/vector-6.png"
      />

      <img
        className="hidden md:block absolute top-[358px] left-[58px] w-[293px] h-[359px] object-cover"
        alt="Vector"
        src="/img/vector-8.png"
      />

      {/* Container 1: Intro + Mind&Body + 3 Columns */}
      <div className="flex flex-col w-full md:w-[998px] items-center gap-10 relative md:absolute md:top-[120px] md:left-[219px] px-4 md:px-0 py-12 md:py-0">
        <div className="relative w-full md:w-[1005px] h-auto md:h-[115px] md:ml-[-2.49px] md:mr-[-4.49px] text-center md:text-left mb-8 md:mb-0">
          <img
            className="hidden md:block absolute top-[88px] left-52 w-[315px] h-5"
            alt="Line"
            src="/img/line-26.svg"
          />

          <p className="relative md:absolute top-0 left-0 w-full [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-[32px] md:text-5xl text-center leading-[normal]">
            <span className="tracking-[0]">あなた</span>
            <span className="tracking-[-11.75px]">の</span>
            <span className="text-[48px] md:text-[80px] tracking-[0]">「困った</span>
            <span className="text-[48px] md:text-[80px] tracking-[-32.64px]">」</span>
            <span className="tracking-[0]">にデータで答えます。</span>
          </p>
        </div>

        <div className="flex flex-col w-full md:w-[739px] items-center gap-12 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-lg md:text-2xl tracking-[0.72px] leading-[1.8] md:leading-[62px]">
            多くの人が漠然と抱えている、カラダやココロの悩み。
            <br />
            「これって私だけ？」 そう思っていませんか？
            <br />
            実は、あなたの悩みは、データが示すように、
            <br />
            決して一人だけのものではありません。
            <br />
            最新の調査データをもとに、
            <br />
            日本の女性たちが直面するリアルな課題を紐解いていきましょう。
          </div>

          <div className="flex flex-col w-full md:w-[681px] items-center gap-3.5 relative flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[var(--)] text-[40px] md:text-[64px] text-center tracking-[0] leading-[1.2] md:leading-[57.6px]">
                <span className="text-[#c76f7e]">M</span>
                <span className="text-[#6b6b6b]">ind &amp; </span>
                <span className="text-[#c76f7e]">B</span>
                <span className="text-[#6b6b6b]">ody </span>
                <span className="text-[#c76f7e]">I</span>
                <span className="text-[#6b6b6b]">nsights</span>
              </p>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-2xl md:text-4xl text-center tracking-[1.80px] leading-[1.5] md:leading-[57.6px]">
                知っておきたいカラダとココロの豆知識
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:inline-flex h-auto md:h-[202.24px] items-center md:items-end gap-8 md:gap-6 relative w-full md:w-auto mt-8 md:mt-0">
              {/* Column 1 */}
              <div className="relative w-[182px] h-[197.24px]">
                <img
                  className="absolute top-[29px] left-0 w-[180px] h-[156px]"
                  alt="Polygon"
                  src="/img/polygon-3-2.svg"
                />
                <Img
                  element="/img/img.svg"
                  elementClassName="!h-[77px] !left-[52px] !w-[77px]"
                  one="one"
                />
                <div className="absolute top-[92px] left-[30px] w-[120px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-xl text-center tracking-[0] leading-[normal]">
                  ピルについて
                </div>
                <img
                  className="absolute top-[147px] left-[77px] w-[26px] h-[17px]"
                  alt="Polygon"
                  src="/img/polygon-12.svg"
                />
              </div>

              {/* Column 2 */}
              <div className="relative w-[182px] h-[202.24px]">
                <img
                  className="top-[34px] absolute left-0 w-[180px] h-[156px]"
                  alt="Polygon"
                  src="/img/polygon-3-2.svg"
                />
                <Img
                  elementClassName="!h-[77px] !absolute !left-[54px] !w-[77px] !top-0"
                  maskGroup="/img/mask-group-3.png"
                  maskGroupClassName="!ml-[3.5px] !h-[66.5px] !mt-[5.2px] !w-[72.14px]"
                  one="two"
                />
                <div className="absolute top-[97px] left-[30px] w-[120px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-xl text-center tracking-[0] leading-[normal]">
                  睡眠について
                </div>
                <img
                  className="absolute top-[152px] left-[77px] w-[26px] h-[17px]"
                  alt="Polygon"
                  src="/img/polygon-12.svg"
                />
              </div>

              {/* Column 3 */}
              <div className="relative w-[182px] h-[198.24px] md:mr-[-2.00px]">
                <img
                  className="top-[30px] absolute left-0 w-[180px] h-[156px]"
                  alt="Polygon"
                  src="/img/polygon-3-2.svg"
                />
                <Img
                  elementClassName="!h-[77px] !absolute !left-[52px] !w-[77px] !top-0"
                  img="/img/mask-group-4.png"
                  maskGroupClassName="!h-[63px] !mt-[7px] !w-[77px]"
                  one="three"
                />
                <div className="absolute top-[85px] left-10 w-[100px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-xl text-center tracking-[0] leading-[23px]">
                  肌トラブル
                  <br />
                  について
                </div>
                <img
                  className="absolute top-[148px] left-[77px] w-[26px] h-[17px]"
                  alt="Polygon"
                  src="/img/polygon-12.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container 2: Japan Pill Gap + Doctor */}
      <div className="relative w-full md:w-[1442px] h-auto md:h-[805px] mt-12 md:mt-0 md:absolute md:top-[1187px] md:left-[calc(50.00%_-_718px)] px-4 md:px-0 pb-12 md:pb-0">
        {/* Background "Pil" text for mobile */}
        <div className="absolute top-0 left-0 w-full h-full md:hidden -z-10 flex items-center justify-center">
          <div className="[font-family:'Noto_Serif',Helvetica] font-light text-[#e5e5e5] text-[200px] leading-[1] opacity-30">
            Pil
          </div>
        </div>

        <div className="hidden md:block absolute top-0 left-[calc(50.00%_-_721px)] w-[1440px] h-[687px] bg-x-2" />

        <img
          className="hidden md:block absolute top-0 left-[calc(50.00%_-_721px)] w-[1440px] h-[687px]"
          alt="Mask group"
          src="/img/mask-group-5.png"
        />

        {/* Title Section */}
        <div className="relative md:absolute md:top-[124px] md:left-[102px] w-full md:w-auto mb-8 md:mb-0 text-center md:text-left z-10">
          <p className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#333333] text-[28px] md:text-[40px] leading-[1.4] md:leading-[normal]">
            <span className="text-[#6b6b6b] tracking-[0]">日本</span>
            <span className="text-[#6b6b6b] tracking-[-6.72px]">は</span>
            <span className="text-[#c76f7e] tracking-[-2.40px]">「</span>
            <span className="text-[#c76f7e] tracking-[0]">ピル後進国</span>
            <span className="text-[#c76f7e] tracking-[-9.60px]">」</span>
            <span className="text-[#6b6b6b] tracking-[0]">
              ？<br />
              驚くべき世界とのギャップ
            </span>
          </p>
        </div>

        {/* Graph Section - World Map */}
        <div className="relative md:absolute md:top-[124px] md:left-[623px] w-full md:w-[725px] h-auto md:h-[681px] mb-8 md:mb-0 flex flex-col items-center md:block z-10">
          <div className="relative w-full h-[300px] md:h-auto md:w-[725px] md:h-[681px] flex items-center justify-center md:block">
            <img
              className="relative md:absolute md:w-[41.36%] md:h-[47.35%] md:top-[52.59%] md:left-[57.49%] w-[150px] md:w-auto mb-4 md:mb-0"
              alt="Group"
              src="/img/group.png"
            />
            <img
              className="relative md:absolute md:w-[53.08%] md:h-[44.02%] md:top-[53.92%] md:left-[7.48%] w-[200px] md:w-auto mb-4 md:mb-0"
              alt="Group"
              src="/img/group-1.png"
            />
          </div>
        </div>

        {/* Doctor Profile Section */}
        <div className="relative md:absolute md:top-72 md:left-[102px] flex flex-col md:inline-flex md:items-start gap-5 w-full md:w-auto items-center z-10 mt-8 md:mt-0">
          <div className="relative w-[175px] h-[190px] flex-shrink-0">
            <img
              className="absolute top-0 left-0 w-[175px] h-[175px]"
              alt="Img"
              src="/img/img.png"
            />
            <div className="flex w-[132px] items-center justify-between px-2 py-[3px] absolute top-[159px] left-[22px] bg-[#efa3af]">
              <img
                className="relative w-px h-[25px] ml-[-1.00px] object-cover"
                alt="Line"
                src="/img/line-36-1.svg"
              />
              <div className="relative w-fit [font-family:'Noto_Serif_JP',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                産婦人科専門医
              </div>
              <img
                className="relative w-px h-[25px] object-cover"
                alt="Line"
                src="/img/line-36-1.svg"
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[306px] items-start gap-3.5 relative">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#6b6b6b] text-sm md:text-base text-justify tracking-[0] leading-[1.8] md:leading-[normal]">
              <span className="font-medium text-[#6b6b6b]">
                日本のピル服用率は わずか
              </span>
              <span className="font-semibold text-[#6b6b6b]">&nbsp;</span>
              <span className="font-bold text-[#c76f7e] text-xl md:text-2xl">2.9</span>
              <span className="font-bold text-[#c76f7e]">%</span>
              <span className="font-semibold text-[#6b6b6b]">
                。<br />
              </span>
              <span className="font-medium text-[#6b6b6b]">
                ドイツはその 約18倍。
                <br />
                いまなお「世界で取り残された国」のひとつです。
                <br />
                ピルは本来、月経困難症やPMS（月経前症候群）の改善にも役立つ、
                <br />
                女性の健康を支えるツールです 。<br />
                オンライン診療を活用すれば、もっと手軽に専門家へ相談できます 。
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
