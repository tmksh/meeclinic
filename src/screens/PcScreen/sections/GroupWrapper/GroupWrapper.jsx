import React from "react";
import { TagPc } from "../../../../components/TagPc";

export const GroupWrapper = () => {
  return (
    <div className="relative w-full h-auto pb-48 md:pb-[200px] mt-0 md:mt-[-100px] z-30 px-4 md:px-0 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#EDD0D6]" />

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
          className="relative w-full max-w-[360px] md:w-[300px] xl:w-[360px] ml-auto mr-0 md:mx-0"
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

      {/* SP Layout */}
      <div className="flex flex-col w-full md:hidden mt-8 px-4 items-center">
        {/* Tags (SP) */}
        <div className="flex flex-wrap w-full items-center justify-center gap-1.5 z-10 mb-4">
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 !border-[0.5px] w-[48%]" divClassName="!text-xs !leading-normal text-center" prop="ニキビ" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 !border-[0.5px] w-[48%]" divClassName="!text-xs !leading-normal text-center" prop="ニキビ痕" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 !border-[0.5px] w-[48%]" divClassName="!text-xs !leading-normal text-center" prop="肝斑" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 !border-[0.5px] w-[48%]" divClassName="!text-xs !leading-normal text-center" prop="開き毛穴" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 !border-[0.5px] w-[48%]" divClassName="!text-xs !leading-normal text-center whitespace-nowrap" prop="つまり(黒ずみ)毛穴" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] !px-3 !py-1.5 !border-[0.5px] w-[48%]" divClassName="!text-xs !leading-normal text-center" prop="エイジングケア" />
        </div>

        {/* Photo & Graph (SP) */}
        <div className="flex flex-row items-start justify-center gap-4 w-full">
          {/* Doctor Image */}
          <div className="relative w-[180px] h-[220px] flex bg-[url(/img/s-10706965-2025-11-19-2.png)] bg-contain bg-no-repeat bg-center z-10 flex-shrink-0 mt-[-20px] ml-[-10px]">
            <div className="mt-[auto] w-full h-[20px] bg-[linear-gradient(180deg,rgba(229,188,197,0)_0%,rgba(229,188,197,1)_100%)]" />
          </div>

          {/* Graph Card */}
          <div className="flex flex-col w-[180px] items-center justify-center gap-2 p-3 bg-white rounded-[16px] shadow-md border border-[#efa3af] mt-4 mr-[-10px]">
            <div className="flex w-full h-[32px] items-center justify-center gap-1 px-2 py-1 relative bg-white rounded-[20px] border border-solid border-[#efa3af]">
              <div className="relative w-fit mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#c76f7e] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                特に多い睡眠の悩み
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-1 h-[32px] items-center justify-center px-2 bg-[#f0b8c1] rounded-sm">
                  <div className="text-white text-[10px] whitespace-nowrap font-medium">日中眠くなる</div>
                </div>
                <div className="text-[#6b6b6b] text-lg font-medium leading-none">66<span className="text-[10px]">%</span></div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-1 h-[32px] items-center justify-center px-2 bg-[#f0b8c1] rounded-sm">
                  <div className="text-white text-[10px] whitespace-nowrap font-medium">疲れがとれない</div>
                </div>
                <div className="text-[#6b6b6b] text-lg font-medium leading-none">61<span className="text-[10px]">%</span></div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-1 h-[32px] items-center justify-center px-2 bg-[#f0b8c1] rounded-sm">
                  <div className="text-white text-[10px] whitespace-nowrap font-medium">眠りが浅い</div>
                </div>
                <div className="text-[#6b6b6b] text-lg font-medium leading-none">60<span className="text-[10px]">%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PC Layout (Hidden on Mobile) */}
      <div className="hidden md:flex flex-row w-full justify-start items-start gap-0 mt-[80px]">
        {/* Doctor Image */}
        <div className="relative md:ml-[100px] md:w-[303px] md:h-[248px] flex bg-[url(/img/s-10706965-2025-11-19-2.png)] bg-contain bg-no-repeat bg-center z-10 flex-shrink-0">
          <div className="mt-[auto] w-full h-[34px] bg-[linear-gradient(180deg,rgba(229,188,197,0)_0%,rgba(229,188,197,1)_100%)]" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap md:w-[357px] items-center gap-[16px_16px] relative md:ml-[20px] md:mt-[20px] z-10">
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] md:!px-[18px] md:!py-3 md:!border" divClassName="md:!text-xl md:!leading-[36.0px]" prop="ニキビ" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] md:!px-[18px] md:!py-3 md:!border" divClassName="md:!text-xl md:!leading-[36.0px]" prop="ニキビ痕" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] md:!px-[18px] md:!py-3 md:!border" divClassName="md:!text-xl md:!leading-[36.0px]" prop="肝斑" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] md:!px-[18px] md:!py-3 md:!border" divClassName="md:!text-xl md:!leading-[36.0px]" prop="開き毛穴" />
          <TagPc className="!flex !left-[unset] md:!w-[199px] !top-[unset] md:!px-[18px] md:!py-3 md:!border" divClassName="md:!mr-[-6.50px] md:!ml-[-6.50px] md:!text-xl md:!leading-[36.0px]" prop="つまり(黒ずみ)毛穴" />
          <TagPc className="!flex-[0_0_auto] !left-[unset] !top-[unset] md:!px-[18px] md:!py-3 md:!border" divClassName="md:!text-xl md:!leading-[36.0px]" prop="エイジングケア" />
        </div>
      </div>

      {/* White card with sleep concerns (PC) */}
      <div 
        className="hidden md:inline-flex md:h-[403px] items-center justify-center gap-2.5 md:p-[53px] relative md:absolute md:top-[600px] md:right-[100px] bg-[#efe3e5] md:rounded-[40px] md:shadow-none md:max-w-none"
        style={{ transform: "scale(0.9)", transformOrigin: "top right" }}
      >
        <div className="flex flex-col items-start gap-8 relative">
          {/* Title button */}
          <div className="md:w-[406px] h-[54px] items-center justify-center gap-2.5 px-[101px] py-[15px] relative bg-white rounded-[50px] border border-solid border-[#efa3af] hidden md:flex">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#c76f7e] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              特に多い睡眠の悩み
            </div>
          </div>

          {/* Stats list */}
          <div className="md:w-[406px] md:h-[255px] items-start gap-[18px] relative md:mb-[-24.00px] md:aspect-[1.59] hidden md:flex flex-col">
            {/* Stat 1 */}
            <div className="flex items-center gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex md:w-[327px] h-[65px] items-center gap-2.5 px-[31px] py-5 relative bg-[#e694a1] rounded-sm">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  日中眠くなる
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-4xl tracking-[0]">
                  66
                </span>

                <span className="text-xl">%</span>
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 relative flex-[0_0_auto] self-stretch w-full">
              <div className="flex md:w-[302px] h-[65px] items-center gap-2.5 px-[31px] py-5 relative bg-[#e694a1] rounded-sm">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  疲れがとれない
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-4xl tracking-[0]">
                  61
                </span>

                <span className="text-xl">%</span>
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 relative flex-[0_0_auto] self-stretch w-full">
              <div className="flex md:w-[297px] h-[65px] items-center gap-2.5 px-[31px] py-5 relative bg-[#e694a1] rounded-sm">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  眠りが浅い
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-4xl tracking-[0]">
                  60
                </span>

                <span className="text-xl">%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
