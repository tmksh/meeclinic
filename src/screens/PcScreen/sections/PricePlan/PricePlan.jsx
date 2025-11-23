import React from "react";
import { BtnPc } from "../../../../components/BtnPc";
import { SectionTitle } from "../../../../components/SectionTitle";

export const PricePlan = () => {
  return (
    <div className="flex flex-col w-full max-w-[1441px] items-center gap-12 md:gap-16 lg:gap-24 xl:gap-[123px] relative mt-12 md:mt-20 px-4 md:px-8 xl:px-0 z-15 mx-auto">
      <SectionTitle
        className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset]"
        text="Price &amp; Plan"
        text1="料金プラン"
      />
      <div className="flex flex-col w-full max-w-[1080px] items-center gap-12 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-12 md:gap-16 lg:gap-16 xl:gap-20 relative self-stretch w-full flex-[0_0_auto]">
          {/* ピル */}
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-8 xl:gap-10 pt-16 md:pt-14 lg:pt-14 xl:pt-16 pb-8 md:pb-9 lg:pb-9 xl:pb-10 px-2 md:px-4 lg:px-6 xl:px-px relative self-stretch w-full flex-[0_0_auto] bg-[#f9f2f4]">
            <div className="flex flex-col w-full max-w-[875px] items-center gap-6 md:gap-8 lg:gap-8 xl:gap-10 relative flex-[0_0_auto]">
              <div className="flex flex-row flex-wrap md:flex-row xl:flex-row items-start md:items-center xl:items-center justify-center gap-2 md:gap-6 lg:gap-8 xl:gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] lg:max-w-[220px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 lg:gap-4 xl:gap-5 relative">
                  <img
                    className="relative w-full h-auto aspect-[0.75] object-cover"
                    alt="S"
                    src="/img/s-10559492-1.png"
                  />

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9 whitespace-nowrap">
                      低用量
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      2,980円〜
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] lg:max-w-[220px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 lg:gap-4 xl:gap-5 relative">
                  <img
                    className="relative w-full h-auto aspect-[0.75] object-cover"
                    alt="S"
                    src="/img/s-10559494-2.png"
                  />

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9 whitespace-nowrap">
                      中用量
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      3,500円〜
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] lg:max-w-[220px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 lg:gap-4 xl:gap-5 relative">
                  <img
                    className="relative w-full h-auto aspect-[0.75] object-cover"
                    alt="S"
                    src="/img/s-10559496-2.png"
                  />

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9 whitespace-nowrap">
                      アフターピル
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      11,480円〜
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2.5 px-4 md:px-6 lg:px-8 xl:px-10 py-4 md:py-5 lg:py-5 xl:py-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl border-[3px] md:border-[4px] lg:border-[4px] xl:border-[5px] border-solid border-[#efa3af] shadow-[0px_4px_20px_#0000001a]">
                <div className="flex flex-col w-full max-w-[714px] items-center gap-3 md:gap-3 lg:gap-3 xl:gap-4 relative flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#efa3af] text-lg md:text-xl xl:text-2xl text-center tracking-[0] leading-[21.6px]">
                    低用量ピル：最安値水準
                  </div>

                  <div className="flex flex-col md:flex-row xl:inline-flex items-center md:items-baseline xl:items-baseline gap-2 md:gap-3 xl:gap-5 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-base md:text-lg xl:text-2xl tracking-[0] leading-[21.6px] text-center md:whitespace-nowrap xl:whitespace-nowrap">
                      12ヶ月まとめて処方で
                    </div>

                    <p className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-3xl md:text-4xl xl:text-5xl tracking-[0] leading-[normal]">
                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-3xl md:text-4xl xl:text-5xl tracking-[0]">
                        4,800
                      </span>

                      <span className="text-[28px] md:text-[32px] xl:text-[40px]">円</span>

                      <span className="text-[24px] md:text-[28px] xl:text-[32px]">OFF</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <BtnPc className="!left-[unset] !top-[unset]" />
            <div className="top-[-30px] md:top-[-35px] xl:top-[-43px] left-0 md:left-0 xl:-left-px inline-flex flex-col items-start gap-2.5 px-12 md:px-16 xl:px-20 py-2 md:py-2 xl:py-2.5 absolute bg-white border border-solid border-[#efa3af]">
              <div className="flex flex-col items-center gap-[5px] relative flex-[0_0_auto]">
                <div className="relative mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[#efa3af] text-2xl md:text-3xl xl:text-4xl text-center tracking-[0] leading-9">
                  Pill
                </div>

                <img
                  className="relative w-full h-px object-cover"
                  alt="Line"
                  src="/img/line-30-1.svg"
                />

                <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#efa3af] text-base md:text-lg xl:text-xl text-center tracking-[0] leading-[19.2px]">
                  ピル
                </div>
              </div>
            </div>
          </div>

          {/* 肌治療 */}
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 xl:gap-10 pt-16 md:pt-14 xl:pt-16 pb-8 md:pb-9 xl:pb-10 px-2 md:px-4 xl:px-px relative self-stretch w-full flex-[0_0_auto] bg-[#f9f2f4]">
            <div className="flex flex-col w-full max-w-[875px] items-center gap-6 md:gap-8 xl:gap-10 relative flex-[0_0_auto]">
              <div className="flex flex-row flex-wrap md:flex-row xl:flex-row items-start md:items-center xl:items-center justify-center gap-2 md:gap-6 xl:gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 xl:gap-5 relative">
                  <img
                    className="relative w-full h-auto aspect-[0.75] object-cover"
                    alt="S"
                    src="/img/s-10559500-3.png"
                  />

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9 whitespace-nowrap">
                      ニキビ治療
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      1,870円〜
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 xl:gap-5 relative">
                  <img
                    className="relative w-full h-auto aspect-[0.75] object-cover"
                    alt="S"
                    src="/img/s-10559498-2.png"
                  />

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9 whitespace-nowrap">
                      シミ治療
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      2,500円〜
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 xl:gap-5 relative">
                  <img
                    className="relative w-full h-auto aspect-[0.75] object-cover"
                    alt="S"
                    src="/img/s-10559502-2.png"
                  />

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9">
                      毛穴治療
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      4,200円〜
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2.5 px-4 md:px-6 xl:px-10 py-4 md:py-5 xl:py-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl border-[3px] md:border-[4px] xl:border-[5px] border-solid border-[#efa3af] shadow-[0px_4px_20px_#0000001a]">
                <div className="flex flex-col w-full max-w-[714px] items-center gap-3 md:gap-3 xl:gap-4 relative flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#efa3af] text-lg md:text-xl xl:text-2xl text-center tracking-[0] leading-[21.6px]">
                    複数組み合わせも可能
                  </div>

                  <div className="flex flex-col md:flex-col xl:inline-flex items-center md:items-center xl:items-baseline gap-2 md:gap-2 xl:gap-5 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-base md:text-lg xl:text-2xl tracking-[0] leading-[21.6px] text-center md:whitespace-nowrap xl:whitespace-nowrap">
                      5,000円以上の購入で
                    </div>

                    <div className="inline-flex items-baseline gap-2 md:gap-2 xl:gap-0 relative flex-[0_0_auto]">
                      <p className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-3xl md:text-4xl xl:text-5xl tracking-[0] leading-[normal]">
                        <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-3xl md:text-4xl xl:text-5xl tracking-[0]">
                          1,000
                        </span>

                        <span className="text-[28px] md:text-[32px] xl:text-[40px]">円</span>

                        <span className="text-[24px] md:text-[28px] xl:text-[32px]">OFF</span>
                      </p>

                      <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#555555] text-[24px] md:text-[28px] xl:text-[32px] tracking-[0] leading-[normal]">
                        <span className="text-[#555555]">＋</span>

                        <span className="font-bold text-[#efa3af]">送料無料</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BtnPc className="!left-[unset] !top-[unset]" />
            <div className="top-[-30px] md:top-[-35px] xl:-top-10 left-0 inline-flex flex-col items-start gap-2.5 px-12 md:px-16 xl:px-20 py-2 md:py-2 xl:py-2.5 absolute bg-white border border-solid border-[#efa3af]">
              <div className="flex flex-col items-center gap-[5px] relative flex-[0_0_auto]">
                <div className="relative mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[#efa3af] text-2xl md:text-3xl xl:text-4xl text-center tracking-[0] leading-9">
                  Skin
                </div>

                <img
                  className="relative w-full h-px object-cover"
                  alt="Line"
                  src="/img/line-30-1.svg"
                />

                <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#efa3af] text-base md:text-lg xl:text-xl text-center tracking-[0] leading-[19.2px]">
                  肌治療
                </div>
              </div>
            </div>
          </div>

          {/* 睡眠治療 */}
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-6 xl:gap-2.5 pt-16 md:pt-14 xl:pt-16 pb-8 md:pb-9 xl:pb-10 px-2 md:px-4 xl:px-px relative self-stretch w-full flex-[0_0_auto] bg-[#f9f2f4]">
              <img
                className="relative w-[160px] h-[213px] md:w-[160px] md:h-[213px] xl:w-[211px] xl:h-[281px] aspect-[0.75]"
                alt="S"
                src="/img/s-10559490-2.png"
              />

              <div className="flex flex-col w-full max-w-[875px] items-center gap-6 md:gap-8 xl:gap-10 relative flex-[0_0_auto]">
                <div className="flex items-center justify-center gap-10 md:gap-16 xl:gap-20 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-4 md:gap-4 xl:gap-5 relative">
                    <div className="flex flex-col items-center relative flex-[0_0_auto]">
                      <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-xl md:text-xl xl:text-2xl text-center tracking-[0] leading-9 whitespace-nowrap">
                        不眠症
                      </div>

                      <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-sm md:text-sm xl:text-base text-center tracking-[0] leading-9 whitespace-nowrap">
                        1,870円〜
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <BtnPc className="!left-[unset] !top-[unset]" />
            </div>

            <div className="inline-flex flex-col items-start gap-2.5 px-12 md:px-16 xl:px-20 py-2 md:py-2 xl:py-2.5 absolute top-[-30px] md:top-[-35px] xl:top-[-43px] left-0 bg-white border border-solid border-[#efa3af]">
              <div className="inline-flex flex-col items-center gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-bold text-[#efa3af] text-2xl md:text-3xl xl:text-4xl text-center leading-9 whitespace-nowrap [font-family:'Noto_Serif',Helvetica] tracking-[0]">
                  Sleep
                </div>

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="/img/line-30-2.svg"
                />

                <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#efa3af] text-base md:text-lg xl:text-xl text-center tracking-[0] leading-[19.2px]">
                  睡眠治療
                </div>
              </div>
            </div>
          </div>

          {/* ドクターズコスメ */}
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-6 xl:gap-2.5 pt-16 md:pt-14 xl:pt-16 pb-8 md:pb-9 xl:pb-10 px-2 md:px-4 xl:px-px relative self-stretch w-full flex-[0_0_auto] bg-[#f9f2f4]">
              <div className="flex flex-col w-full max-w-[875px] items-center gap-6 md:gap-8 xl:gap-10 relative flex-[0_0_auto]">
              <div className="flex flex-row flex-wrap md:flex-row xl:flex-row items-start md:items-center xl:items-center justify-center gap-2 md:gap-6 xl:gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 xl:gap-5 relative">
                  <div className="relative w-full h-auto aspect-[0.75] bg-white">
                    <div className="absolute top-[56%] md:top-[56%] xl:top-[56%] left-[5%] w-[90%] h-2.5 bg-[#d9d9d9] rounded-[98px/5px] blur-[4.5px]" />

                    <img
                      className="absolute top-[35%] md:top-[35%] xl:top-[35%] left-[5%] w-[90%] h-auto aspect-[3.07] object-cover"
                      alt="S"
                      src="/img/s-9977868-3x-1.png"
                    />
                  </div>

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9 whitespace-nowrap">
                      ゼオスキン
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      1,870円〜
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 xl:gap-5 relative">
                  <div className="relative w-full h-auto aspect-[0.75]">
                    <div className="absolute top-0 left-0 w-full h-full bg-white" />

                    <div className="absolute top-[60%] md:top-[60%] xl:top-[60%] left-[5%] w-[90%] h-2.5 bg-[#d9d9d9] rounded-[98px/5px] blur-[4.5px]" />

                    <img
                      className="absolute top-[28%] md:top-[28%] xl:top-[28%] left-0 w-full h-auto aspect-[1.7]"
                      alt="Eafc ae a"
                      src="/img/ea9fc746-a57e-422a-9e38-dbf842f0672d-1.png"
                    />
                  </div>

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9 whitespace-nowrap">
                      MDEAR
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      1,870円〜
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[30%] max-w-[110px] md:max-w-[200px] xl:w-[265px] xl:max-w-none items-center gap-1 md:gap-4 xl:gap-5 relative">
                  <div className="relative w-full h-auto aspect-[0.75] bg-white">
                    <img
                      className="absolute top-[10%] md:top-[10%] xl:top-[10%] left-0 w-full h-[80%] aspect-[0.94]"
                      alt="Gaudi SKIN"
                      src="/img/gaudi-skin.png"
                    />
                  </div>

                  <div className="flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[10px] md:text-xl xl:text-2xl text-center tracking-[0] leading-normal md:leading-9 whitespace-nowrap">
                      GAUDI SKIN
                    </div>

                    <div className="relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[9px] md:text-sm xl:text-base text-center tracking-[0] leading-normal md:leading-9">
                      1,870円〜
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <BtnPc className="!left-[unset] !top-[unset]" />
            </div>

            <div className="inline-flex flex-col items-start gap-2.5 px-8 md:px-12 xl:px-20 py-2 md:py-2 xl:py-2.5 absolute top-[-30px] md:top-[-35px] xl:top-[-43px] left-0 bg-white border border-solid border-[#efa3af]">
              <div className="inline-flex flex-col items-center gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[#efa3af] text-xl md:text-2xl xl:text-4xl text-center tracking-[0] leading-9 whitespace-nowrap">
                  Doctor&#39;s Cosmetics
                </div>

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="/img/line-30-3.svg"
                />

                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#efa3af] text-sm md:text-base xl:text-xl text-center tracking-[0] leading-[19.2px] whitespace-nowrap">
                  ドクターズコスメ
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[665px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-xs md:text-sm xl:text-base tracking-[0] leading-[28.8px] md:leading-[33.6px] xl:leading-[38.4px] px-2 md:px-0 xl:px-0">
          注意事項や副作用リスク
          <br />{" "}
          ピル：18歳未満、45歳以上は不可、過去にアレルギー反応があった方、BMI30以上や喫煙、既往歴で血栓症のリスクがあった場合は医師の判断で処方不可となる場合があります
          <br /> 肌：妊娠中、授乳中の方は一部使用できない薬があります
        </div>
      </div>
    </div>
  );
};
