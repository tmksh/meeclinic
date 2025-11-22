import React from "react";
import { TagPc } from "../../../../components/TagPc";

export const GroupWrapper = () => {
  return (
    <div className="relative w-full h-auto pb-20 md:pb-0 mt-12 md:mt-20 z-30 px-4 md:px-0 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-x-100" />

      {/* Bottom Wave (White) */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none overflow-hidden -z-10">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 V50 C400,150 1000,-50 1440,50 V150 H0 Z"
            fill="white"
          />
        </svg>
      </div>
      
      {/* Large "Sleep" text */}
      <div className="relative md:ml-[104px] md:mt-[-80px] font-medium text-[#ffffffa6] text-[80px] md:text-[200px] xl:text-[300px] leading-[normal] [font-family:'Noto_Serif',Helvetica] tracking-[0] text-center md:text-left mb-8 md:mb-0 z-10">
        Sleep
      </div>

      {/* Main content section */}
      <div className="flex flex-col md:inline-flex md:flex-row md:items-center gap-8 md:gap-[113px] relative md:ml-[104px] md:mt-[-100px]">
        {/* Left text content */}
        <div className="flex flex-col w-full md:w-[630px] items-start gap-4 md:gap-6 relative">
          <p className="relative w-full md:w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[var(--)] text-2xl md:text-[28px] xl:text-[32px] tracking-[0] leading-[normal]">
            <span className="font-semibold text-[#6b6b6b]">
              眠れないのは、あなたのせいじゃない。
              <br />
              日本人の4人に1人が
            </span>

            <span className="font-bold text-[#c76f7e]">不眠</span>

            <span className="font-semibold text-[#6b6b6b]">に悩む時代</span>
          </p>

          <div className="relative self-stretch [font-family:'Noto_Serif_JP',Helvetica] font-medium text-[var(--)] text-base md:text-lg xl:text-xl tracking-[0] leading-[1.8] md:leading-[40px]">
            <p>日本は先進国の中で最も平均睡眠時間が短い「眠りなき社会」です。</p>
            <p className="mt-0">2023年の調査では、成人の約4人に1人（25.1%）が慢性的な不眠を抱えていることが明らかになっています。</p>
          </div>
        </div>

        {/* Right image */}
        <img
          className="relative w-full md:w-[300px] xl:w-[360px] mx-auto md:mx-0"
          alt="Frame"
          src="/img/frame-1402.svg"
        />
      </div>

      {/* Bottom text section */}
      <div className="relative md:ml-[102px] [font-family:'Noto_Serif_JP',Helvetica] font-medium text-[var(--)] text-base md:text-lg xl:text-xl tracking-[0] leading-[1.6] md:leading-[32px] mt-8 mb-8 z-10">
        働き盛り世代は「仕事」や「育児」 、若い世代では  <br />
        就寝前のスマホ使用が睡眠不足を招いています 。<br />
        良質な睡眠は美容やメンタルにも直結します。
        <br />
        まずはオンラインで専門家へ相談してみませんか？
      </div>

      <div className="flex flex-row md:block w-full justify-center items-start gap-2 md:gap-0 mt-8 md:mt-0">
        {/* Doctor Image */}
        <div className="relative w-[180px] h-[150px] md:ml-[54px] md:w-[303px] md:h-[248px] flex bg-[url(/img/s-10706965-2025-11-19-2.png)] bg-contain bg-no-repeat bg-center z-10 mx-0 md:mx-0 flex-shrink-0">
          <div className="mt-[auto] w-full h-[34px] bg-[linear-gradient(180deg,rgba(229,188,197,0)_0%,rgba(229,188,197,1)_100%)]" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap w-full md:w-[357px] items-center gap-[4px_4px] md:gap-[16px_16px] relative md:ml-[400px] md:mt-[-200px] z-10 mx-0 md:mx-0 mt-8 md:mt-0">
          <TagPc
            className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 md:!px-[18px] md:!py-3 !border-[0.5px] md:!border"
            divClassName="!text-xs md:!text-xl !leading-normal md:!leading-[36.0px]"
            prop="ニキビ"
          />
          <TagPc
            className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 md:!px-[18px] md:!py-3 !border-[0.5px] md:!border"
            divClassName="!text-xs md:!text-xl !leading-normal md:!leading-[36.0px]"
            prop="ニキビ痕"
          />
          <TagPc
            className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 md:!px-[18px] md:!py-3 !border-[0.5px] md:!border"
            divClassName="!text-xs md:!text-xl !leading-normal md:!leading-[36.0px]"
            prop="肝斑"
          />
          <TagPc
            className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 md:!px-[18px] md:!py-3 !border-[0.5px] md:!border"
            divClassName="!text-xs md:!text-xl !leading-normal md:!leading-[36.0px]"
            prop="開き毛穴"
          />
          <TagPc
            className="!flex !left-[unset] !w-auto md:!w-[199px] !top-[unset] !px-3 !py-1.5 md:!px-[18px] md:!py-3 !border-[0.5px] md:!border"
            divClassName="!mr-0 !ml-0 md:!mr-[-6.50px] md:!ml-[-6.50px] !text-xs md:!text-xl !leading-normal md:!leading-[36.0px]"
            prop="つまり(黒ずみ)毛穴"
          />
          <TagPc
            className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 md:!px-[18px] md:!py-3 !border-[0.5px] md:!border"
            divClassName="!text-xs md:!text-xl !leading-normal md:!leading-[36.0px]"
            prop="エイジングケア"
          />
        </div>
      </div>

      {/* White card with sleep concerns */}
      <div className="flex flex-col w-full md:w-auto md:inline-flex md:h-[403px] items-center justify-center gap-2.5 p-8 md:p-[53px] relative md:absolute md:top-[500px] md:right-[100px] bg-[var(--)] md:bg-white rounded-[20px] md:rounded-[40px] md:shadow-md mt-8 md:mt-0">
        <div className="flex flex-col w-full md:inline-flex md:h-[317px] items-start gap-6 md:gap-8 relative md:mt-[-10.00px] md:mb-[-10.00px]">
          {/* Title button */}
          <div className="flex w-full md:w-[406px] h-[54px] items-center justify-center gap-2.5 px-8 md:px-[101px] py-[15px] relative bg-[var(--)] md:bg-white rounded-[50px] border border-solid border-[var(--)] md:border-[#efa3af]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] md:text-[#c76f7e] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              特に多い睡眠の悩み
            </div>
          </div>

          {/* Stats list */}
          <div className="flex flex-col w-full md:w-[406px] md:h-[255px] items-start gap-4 md:gap-[18px] relative md:mb-[-24.00px] md:aspect-[1.59]">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 md:gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-1 md:w-[327px] h-[60px] md:h-[65px] items-center gap-2.5 px-6 md:px-[31px] py-4 md:py-5 relative bg-[var(--)] md:bg-[#f0b8c1]">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] md:text-white text-lg md:text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  日中眠くなる
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] md:text-[#6b6b6b] text-3xl md:text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-3xl md:text-4xl tracking-[0]">
                  66
                </span>

                <span className="text-lg md:text-xl">%</span>
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 md:gap-3.5 relative flex-[0_0_auto] self-stretch w-full">
              <div className="flex flex-1 md:w-[302px] h-[60px] md:h-[65px] items-center gap-2.5 px-6 md:px-[31px] py-4 md:py-5 relative bg-[var(--)] md:bg-[#f0b8c1]">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] md:text-white text-lg md:text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  疲れがとれない
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] md:text-[#6b6b6b] text-3xl md:text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-3xl md:text-4xl tracking-[0]">
                  61
                </span>

                <span className="text-lg md:text-xl">%</span>
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 relative flex-[0_0_auto] self-stretch w-full">
              <div className="flex flex-1 md:w-[297px] h-[60px] md:h-[65px] items-center gap-2.5 px-6 md:px-[31px] py-4 md:py-5 relative bg-[var(--)] md:bg-[#f0b8c1]">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] md:text-white text-lg md:text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  眠りが浅い
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] md:text-[#6b6b6b] text-3xl md:text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-3xl md:text-4xl tracking-[0]">
                  60
                </span>

                <span className="text-lg md:text-xl">%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
