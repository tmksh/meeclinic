import React, { useState } from "react";
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
      <div className="flex flex-col w-full md:w-[739px] lg:w-[900px] xl:w-[998px] items-center gap-10 relative mx-auto px-4 md:px-0 py-12 md:py-0 z-10">
        <div className="relative w-full md:w-[739px] lg:w-[900px] xl:w-[1005px] h-auto md:h-[115px] md:ml-[-2.49px] md:mr-[-4.49px] text-center md:text-left mb-8 md:mb-0">
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

        <div className="flex flex-col w-full md:w-[600px] lg:w-[739px] items-center gap-12 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-lg md:text-xl lg:text-2xl tracking-[0.72px] leading-[1.8] md:leading-[1.8] lg:leading-[62px] text-center">
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

          <div className="flex flex-col w-full md:w-[500px] lg:w-[681px] items-end md:items-center gap-2 relative flex-[0_0_auto]">
            <div className="flex flex-col items-end md:items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[var(--)] text-[40px] md:text-[48px] lg:text-[64px] text-right md:text-center tracking-[0] leading-[1.2] md:leading-[1.2] lg:leading-[57.6px] whitespace-nowrap">
                <span className="text-[#c76f7e]">M</span>
                <span className="text-[#6b6b6b]">ind &amp; </span>
                <span className="text-[#c76f7e]">B</span>
                <span className="text-[#6b6b6b]">ody </span>
                <br className="md:hidden" />
                <span className="text-[#c76f7e]">I</span>
                <span className="text-[#6b6b6b]">nsights</span>
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
                  <div className="absolute top-[50px] left-[10px] w-[80px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-[11px] text-center tracking-[0] leading-[normal]">
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
                  <div className="absolute top-[53px] left-[10px] w-[80px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-[11px] text-center tracking-[0] leading-[normal]">
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
                  <div className="absolute top-[46px] left-[5px] w-[90px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-[11px] text-center tracking-[0] leading-[13px]">
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
      <div className="relative w-full md:w-[1442px] h-auto md:min-h-[805px] mt-12 md:mt-20 mx-auto px-4 md:px-0 pb-0 md:pb-0 bg-[#e4e7f7] z-10">
        {/* Background Image Layer */}
        <img
          className="absolute top-0 left-0 w-full h-full md:h-[687px] z-0 object-cover opacity-50 md:opacity-100 pointer-events-none"
          alt="Mask group"
          src="/img/mask-group-5.png"
        />

        {/* Background "Pill" text for mobile */}
        <div className="relative w-full text-center md:hidden pt-8 z-10 top-[-40px]">
          <div className="[font-family:'Noto_Serif',Helvetica] font-light text-white text-[150px] leading-[1] opacity-50" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
            Pill
          </div>
        </div>

        {/* Title Section */}
        <div className="relative w-full md:w-auto mb-8 md:mb-0 text-center md:text-left z-10 md:ml-[102px] pt-0 md:pt-[250px] mt-[-80px] md:mt-0">
          <p className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#555555] text-[28px] md:text-[40px] leading-[1.4] md:leading-[normal]">
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
        <div className="relative w-full md:w-[725px] h-[300px] md:h-[681px] mb-8 md:mb-0 z-10 md:absolute md:top-[124px] md:right-0 xl:left-[623px]">
          <div className="relative w-full h-[300px] md:!w-[725px] md:!h-[681px] flex items-center justify-center bg-transparent">
            {/* まず map.png を試す、なければ地図.png、それでもなければ既存の画像を表示 */}
            <img
              className="w-full h-full object-contain"
              alt="World Map with Data"
              src="/img/map.png"
              style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
              onError={(e) => {
                const currentSrc = e.target.src;
                // フォールバック1: 地図.pngを試す
                if (!currentSrc.includes('地図') && !currentSrc.includes('%E5%9C%B0%E5%9B%B3')) {
                  e.target.src = '/img/地図.png';
                } 
                // フォールバック2: 既存のgroup.pngとgroup-1.pngを組み合わせて表示
                else if (!currentSrc.includes('group')) {
                  // 親要素に複数の画像を配置
                  const parent = e.target.parentElement;
                  if (parent && !parent.querySelector('.fallback-map')) {
                    parent.innerHTML = `
                      <img
                        className="absolute w-[53.08%] h-[44.02%] top-[53.92%] left-[7.48%] object-contain"
              alt="Group"
                        src="/img/group-1.png"
                        style="display: block;"
            />
            <img
                        className="absolute w-[41.36%] h-[47.35%] top-[52.59%] left-[57.49%] object-contain"
              alt="Group"
                        src="/img/group.png"
                        style="display: block;"
                      />
                    `;
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Doctor Profile Section */}
        <div className="relative flex flex-row items-start gap-4 md:gap-5 w-full md:w-auto z-10 mt-8 md:mt-[144px] md:ml-[102px]">
          <div className="relative w-[120px] h-[130px] md:w-[175px] md:h-[190px] flex-shrink-0">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Img"
              src="/img/img.png"
            />
            <div className="flex w-full md:w-[132px] items-center justify-between px-1 md:px-2 py-[3px] absolute bottom-[10px] md:top-[159px] left-0 md:left-[22px] bg-[#efa3af]">
              <img
                className="relative w-px h-[20px] md:h-[25px] ml-[-1.00px] object-cover"
                alt="Line"
                src="/img/line-36-1.svg"
              />
              <div className="relative w-fit [font-family:'Noto_Serif_JP',Helvetica] font-medium text-white text-xs md:text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                産婦人科専門医
              </div>
              <img
                className="relative w-px h-[20px] md:h-[25px] object-cover"
                alt="Line"
                src="/img/line-36-1.svg"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 md:w-[306px] lg:w-[400px] xl:w-[500px] items-start gap-3.5 relative">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#6b6b6b] text-sm md:text-base lg:text-lg text-justify tracking-[0] leading-[1.8] md:leading-[1.8]">
              <span className="font-medium text-[#6b6b6b]">
                日本のピル服用率は わずか
              </span>
              <span className="font-semibold text-[#6b6b6b]">&nbsp;</span>
              <span className="font-bold text-[#c76f7e] text-xl md:text-2xl lg:text-3xl">2.9</span>
              <span className="font-bold text-[#c76f7e] lg:text-xl">%</span>
              <span className="font-semibold text-[#6b6b6b]">
                。<br />
              </span>
              <span className="font-medium text-[#6b6b6b]">
                ドイツはその 約18倍。
                <br />
                いまなお「世界で取り残された国」のひとつです。
                <br />
                ピルは本来、月経困難症やPMS
                <br />
                （月経前症候群）の改善にも役立つ、
                <br />
                女性の健康を支えるツールです 。<br />
                オンライン診療を活用すれば、
                <br />
                もっと手軽に専門家へ相談できます 。
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
