import React from "react";
import { Img } from "../../../../components/Img";

export const View = () => {
  return (
    <div className="relative w-full h-auto max-w-[1445px] mx-auto z-5 mt-12 md:mt-20">
      {/* Wave Background */}
      <div className="absolute top-[-200px] md:top-0 left-0 w-full h-[calc(100%+200px)] md:h-full pointer-events-none overflow-hidden z-0">
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-[320px] object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0,220 C360,200 1080,200 1440,220 V320 H0 Z"
            fill="#EDD0D6"
          />
        </svg>
        <div className="absolute top-[319px] left-0 w-full h-[calc(100%-319px)] bg-[#EDD0D6]" />
      </div>

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

      {/* Container 1: Intro + Mind&Body + 3 Columns */}
      <div className="flex flex-col w-full md:w-[739px] lg:w-[900px] xl:max-w-[998px] xl:w-full items-center gap-10 relative mx-auto px-4 md:px-0 py-12 md:py-0 z-10">
        <img
          className="md:hidden w-[calc(100%+2rem)] max-w-none -mx-4 h-auto object-cover"
          alt=""
          src="/img/Group 9332.svg"
        />
        <div className="hidden md:block relative w-full md:w-[739px] lg:w-[900px] xl:max-w-[1005px] xl:w-full h-auto md:h-[115px] md:ml-[-2.49px] md:mr-[-4.49px] text-center md:text-left mb-8 md:mb-0">
          <img
            className="hidden md:block absolute top-[88px] left-[10px] lg:left-[100px] xl:left-52 w-[315px] h-5"
            alt="Line"
            src="/img/line-26.svg"
          />

          <p className="relative md:absolute top-0 left-0 w-full [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-[32px] md:text-[40px] lg:text-[48px] xl:text-5xl text-center leading-[normal] whitespace-normal md:whitespace-nowrap">
            <span className="tracking-[0]">あなた</span>
            <span className="tracking-[-11.75px]">の</span>
            <span className="text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] tracking-[0]">「困った</span>
            <span className="text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] tracking-[-32.64px]">」</span>
            <span className="tracking-[0]">にデータで答えます。</span>
          </p>
        </div>

        <div className="hidden md:flex flex-col w-full md:w-[600px] lg:w-[739px] items-center gap-12 relative flex-[0_0_auto]">
          <div className="hidden md:block relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-lg md:text-xl lg:text-2xl tracking-[0.72px] leading-[1.8] md:leading-[1.8] lg:leading-[62px] text-center">
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

          <div className="hidden md:flex flex-col w-full md:w-[500px] lg:w-[681px] items-end md:items-center gap-2 relative flex-[0_0_auto]">
            <div className="flex flex-col items-end md:items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[var(--)] text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-right md:text-center tracking-[0] leading-[1.2] md:leading-[1.2] lg:leading-[57.6px] whitespace-nowrap">
                <span className="text-[#c76f7e]">M</span>
                <span className="text-[#555555]">ind &amp; </span>
                <span className="text-[#c76f7e]">B</span>
                <span className="text-[#555555]">ody </span>
                <br className="md:hidden" />
                <span className="text-[#c76f7e]">I</span>
                <span className="text-[#555555]">nsights</span>
              </p>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-lg md:text-2xl lg:text-4xl text-right md:text-center tracking-[1.80px] leading-[1.5] md:leading-[1.5] lg:leading-[57.6px]">
                知っておきたいカラダとココロの豆知識
              </div>
            </div>

            <div className="w-full flex justify-center">
              {/* PC Layout */}
              <div className="hidden md:inline-flex flex-row h-auto md:h-[202.24px] items-end justify-center gap-6 relative w-auto scale-100 origin-top">
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
                  <div className="absolute top-[92px] left-[30px] w-[120px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#C76F7E] text-xl text-center tracking-[0] leading-[normal]">
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
                  <div className="absolute top-[97px] left-[30px] w-[120px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#C76F7E] text-xl text-center tracking-[0] leading-[normal]">
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
                  <div className="absolute top-[85px] left-10 w-[100px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#C76F7E] text-xl text-center tracking-[0] leading-[23px]">
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

              {/* SP Layout (Smaller) */}
              <div className="flex md:hidden flex-row items-end justify-center gap-2 relative w-full mt-4">
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
        </div>
      </div>

      {/* Container 2: Japan Pill Gap + Doctor */}
      <div className="relative w-full mt-12 md:mt-20 bg-[#e8ecf7] overflow-hidden z-10">
        <div className="absolute -right-10 top-10 w-[220px] h-[220px] bg-white/40 blur-[80px]" aria-hidden="true" />
        <div className="absolute -left-24 bottom-[-80px] w-[320px] h-[320px] bg-[#d2d7f6]/60 blur-[90px]" aria-hidden="true" />

        <div className="relative max-w-[1120px] mx-auto px-6 md:px-12 pt-0 md:pt-8 pb-12 md:pb-20 flex flex-col gap-10">
          <img
            className="md:hidden relative z-50 block w-[calc(100%+3rem)] -mx-6 h-auto mt-[-100px]"
            alt=""
            aria-hidden="true"
            src="/img/Pill.svg"
          />
          <div className="hidden md:flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12">
              {/* Doctor Profile Section */}
              <div className="relative w-[210px] sm:w-[240px] flex-shrink-0">
                <img
                  className="w-full h-[260px] sm:h-[300px] object-cover rounded-[24px] shadow-[0_20px_40px_rgba(95,110,145,0.25)]"
                  alt="産婦人科専門医の写真"
                  src="/img/img.png"
                />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] px-4 py-2 flex items-center gap-2 bg-[#efa3af] rounded-full shadow-[0_10px_25px_rgba(198,111,126,0.45)]">
                  <img className="w-px h-5 opacity-80" alt="Line" src="/img/line-36-1.svg" />
                  <span className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-white text-xs sm:text-sm whitespace-nowrap tracking-[0.08em]">
                    産婦人科専門医
                  </span>
                  <img className="w-px h-5 opacity-80" alt="Line" src="/img/line-36-1.svg" />
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 text-[#555555] [font-family:'Noto_Serif_JP',Helvetica] space-y-6">
                <p className="text-lg md:text-[22px] leading-[1.85]">
                  日本においてのピルの服用率は2019年時点でわずか
                  <span className="px-1 text-[#c76f7e] font-semibold text-2xl md:text-3xl">2.9%</span>
                  です。この数字は世界的に見て極めて低い水準で、ドイツはその約18倍にものぼります。
                </p>
                <p className="text-base md:text-xl leading-[1.95]">
                  ピルは本来、月経困難症やPMS（
                  <span className="text-sm md:text-base">月経前症候群</span>
                  ）の改善にも役立つ、女性の健康を支える重要なツールです。適切に活用することで、体と心の負担を軽減し、日常生活の質を高めることができます。
                </p>
                <p className="text-base md:text-xl leading-[1.95]">
                  オンライン診療を活用すれば、もっと手軽に専門家へ相談できます。
                </p>
              </div>
            </div>

            {/* Graph Section - World Map */}
            <div className="relative mt-10 w-full">
              <div className="mx-auto w-full max-w-[960px] rounded-[40px] bg-white/60 border border-white/70 shadow-[0_30px_60px_rgba(92,109,159,0.25)] px-4 py-6 md:px-10 md:py-12 backdrop-blur-sm">
                <div className="relative w-full h-[260px] md:h-[360px]">
                  <img className="w-full h-full object-contain" alt="世界各国のピル服用率" src="/img/map.png" />

                  {/* France */}
                  <div className="absolute bottom-[18%] left-[16%] flex flex-col items-center gap-2 text-[#555555] text-[11px] md:text-sm">
                    <div
                      className="w-[12px] md:w-[18px] rounded-full bg-white shadow-[0_15px_30px_rgba(88,105,150,0.35)]"
                      style={{ height: '90px' }}
                    />
                    <p className="text-center leading-tight">
                      フランス
                      <br />
                      <span className="text-base md:text-lg font-semibold">33.1%</span>
                    </p>
                  </div>

                  {/* Germany */}
                  <div className="absolute bottom-[22%] left-[42%] flex flex-col items-center gap-2 text-[#555555] text-[11px] md:text-sm">
                    <div
                      className="w-[14px] md:w-[20px] rounded-full bg-white shadow-[0_18px_35px_rgba(88,105,150,0.45)]"
                      style={{ height: '150px' }}
                    />
                    <p className="text-center leading-tight">
                      ドイツ
                      <br />
                      <span className="text-base md:text-lg font-semibold">52.6%</span>
                    </p>
                  </div>

                  {/* Japan */}
                  <div className="absolute bottom-[22%] left-[58%] flex flex-col items-center gap-2 text-[#555555] text-[11px] md:text-sm">
                    <div
                      className="w-[10px] md:w-[16px] rounded-full bg-[#c76f7e] shadow-[0_15px_30px_rgba(199,111,126,0.4)]"
                      style={{ height: '40px' }}
                    />
                    <p className="text-center leading-tight">
                      日本
                      <br />
                      <span className="text-base md:text-lg font-semibold">2.9%</span>
                    </p>
                  </div>

                  {/* Canada */}
                  <div className="absolute bottom-[20%] right-[14%] flex flex-col items-center gap-2 text-[#555555] text-[11px] md:text-sm">
                    <div
                      className="w-[12px] md:w-[18px] rounded-full bg-white shadow-[0_15px_30px_rgba(88,105,150,0.35)]"
                      style={{ height: '120px' }}
                    />
                    <p className="text-center leading-tight">
                      カナダ
                      <br />
                      <span className="text-base md:text-lg font-semibold">28.5%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
