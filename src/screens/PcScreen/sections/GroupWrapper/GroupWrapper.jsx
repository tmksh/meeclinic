import React from "react";
import { TagPc } from "../../../../components/TagPc";

export const GroupWrapper = () => {
  const sleepConcerns = [
    { label: "日中眠くなる", value: 66 },
    { label: "疲れがとれない", value: 61 },
    { label: "眠りが浅い", value: 60 },
  ];

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
            <span className="font-semibold text-[#555555]">
              眠れないのは、あなたのせいじゃない。
              <br />
              日本人の4人に1人が
            </span>

            <span className="font-bold text-[#c76f7e]">不眠</span>

            <span className="font-semibold text-[#555555]">に悩む時代</span>
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
        <span className="md:hidden text-[#6B6B6B]">
          働き盛り世代は「仕事」や「育児」 、若い世代では
          <br />
          就寝前のスマホ使用が睡眠不足を招いています 。
          <br />
          良質な睡眠は美容やメンタルにも直結します。
          <br />
          まずはオンラインで専門家へ相談してみませんか？
        </span>
        <span className="hidden md:inline">
          働き盛り世代は「仕事」や「育児」 、若い世代では
          <br />
          就寝前のスマホ使用が睡眠不足を招いています 。
          <br />
          良質な睡眠は美容やメンタルにも直結します。
          <br />
          まずはオンラインで専門家へ相談してみませんか？
        </span>
      </div>

      {/* SP Layout */}
      <div className="flex flex-col w-full md:hidden mt-8 px-4 items-center">
        {/* Graph Card */}
        <div className="w-full bg-[#fdf1f4] rounded-[32px] border border-[#f0bac5] shadow-[0_15px_40px_rgba(207,145,160,0.2)] px-6 py-6">
          <div className="flex items-center justify-center h-12 border border-[#efa3af] rounded-full bg-white">
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#c76f7e] text-sm tracking-[0.1em]">
              特に多い睡眠の悩み
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 mt-6">
            {sleepConcerns.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex-1 h-[52px] rounded-[12px] bg-[#efa3af] flex items-center px-6 shadow-[0_10px_20px_rgba(207,145,160,0.25)]">
                  <p className="text-white text-base font-semibold whitespace-nowrap">
                    {item.label}
                  </p>
                </div>
                <div className="text-[#5a5a5a] text-xl font-semibold leading-none">
                  {item.value}
                  <span className="text-sm font-medium ml-1">%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo & Tags */}
        <div className="flex w-full items-start gap-4 mt-8">
          {/* Doctor Image */}
          <div className="flex-1 max-w-[200px] h-[240px] bg-[url(/img/s-10706965-2025-11-19-2.png)] bg-contain bg-no-repeat bg-center relative">
            <div className="absolute bottom-0 left-0 w-full h-[30px] bg-[linear-gradient(180deg,rgba(229,188,197,0)_0%,rgba(229,188,197,1)_100%)]" />
          </div>

          {/* Tags */}
          <div className="flex-1 flex flex-wrap gap-2 content-start">
            {["ニキビ", "ニキビ痕", "肝斑", "開き毛穴", "つまり(黒ずみ)毛穴", "エイジングケア"].map((tag) => (
              <div
                key={tag}
                className="w-fit px-3 py-1.5 border border-[#efa3af] rounded-[999px] text-center text-xs text-[#c76f7e] bg-white/80 [font-family:'Noto_Sans_JP',Helvetica] font-medium"
              >
                {tag}
              </div>
            ))}
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
        className="hidden md:flex md:absolute md:top-[600px] md:right-[100px] bg-transparent"
        style={{ transform: "scale(0.95)", transformOrigin: "top right" }}
      >
        <div className="w-[430px] bg-[#fdf1f4] rounded-[40px] border border-[#f0bac5] shadow-[0_25px_65px_rgba(207,145,160,0.25)] px-10 py-10">
          <div className="flex items-center justify-center h-[60px] border-[1.5px] border-[#efa3af] rounded-full bg-white">
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#c76f7e] text-lg tracking-[0.08em]">
              特に多い睡眠の悩み
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-8">
            {sleepConcerns.map((item) => (
              <div key={item.label} className="flex items-center gap-5">
                <div className="flex-1 h-[65px] rounded-[12px] bg-[#efa3af] flex items-center px-8 shadow-[0_15px_30px_rgba(199,111,126,0.3)]">
                  <p className="text-white text-xl font-semibold whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica]">
                    {item.label}
                  </p>
                </div>
                <div className="[font-family:'Noto_Sans_JP',Helvetica] text-[#5a5a5a] text-[34px] font-semibold leading-none">
                  {item.value}
                  <span className="text-xl font-medium ml-1">%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
