import React from "react";

export const GroupWrapper = () => {
  return (
    <div className="absolute top-[12798px] left-[102px] w-[1162px] h-[938px]">
      <div className="absolute top-0 left-0.5 font-medium text-[#ffffffa6] text-[300px] leading-[normal] [font-family:'Noto_Serif',Helvetica] tracking-[0]">
        Sleep
      </div>

      <div className="inline-flex items-center gap-[113px] absolute top-[227px] left-0.5">
        <div className="flex flex-col w-[630px] items-start gap-8 relative">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[var(--)] text-[32px] tracking-[0] leading-[normal]">
            <span className="font-semibold text-[#6b6b6b]">
              眠れないのは、あなたのせいじゃない。
              <br />
              日本人の4人に1人が
            </span>

            <span className="font-bold text-[#c76f7e]">不眠</span>

            <span className="font-semibold text-[#6b6b6b]">に悩む時代</span>
          </p>

          <div className="relative self-stretch [font-family:'Noto_Serif_JP',Helvetica] font-medium text-[var(--)] text-xl tracking-[0] leading-[36.0px]">
            日本は先進国の中で最も平均睡眠時間が短い「眠りなき社会」です 。
            <br />
            2023年の調査では、成人の約4人に1人（25.1%）が慢性的な不眠を抱えていることが明らかになっています
            。
          </div>
        </div>

        <img
          className="relative w-[360px]"
          alt="Frame"
          src="/img/frame-1402.svg"
        />
      </div>

      <div className="absolute top-[535px] left-0 [font-family:'Noto_Serif_JP',Helvetica] font-medium text-[var(--)] text-xl tracking-[0] leading-[36.0px]">
        働き盛り世代は「仕事」や「育児」 、若い世代では  <br />
        就寝前のスマホ使用が睡眠不足を招いています 。<br />
        良質な睡眠は美容やメンタルにも直結します。
        <br />
        まずはオンラインで専門家へ相談してみませんか？
      </div>

      <div className="inline-flex flex-col h-[403px] items-center justify-center gap-2.5 p-[53px] absolute top-[535px] left-[646px] bg-[var(--)] rounded-[40px]">
        <div className="inline-flex flex-col h-[317px] items-start gap-8 relative mt-[-10.00px] mb-[-10.00px]">
          <div className="flex w-[406px] h-[54px] items-center justify-center gap-2.5 px-[101px] py-[15px] relative bg-[var(--)] rounded-[50px] border border-solid border-[var(--)]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              特に多い睡眠の悩み
            </div>
          </div>

          <div className="flex flex-col w-[406px] h-[255px] items-start gap-[18px] relative mb-[-24.00px] aspect-[1.59]">
            <div className="flex items-center gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-[327px] h-[65px] items-center gap-2.5 px-[31px] py-5 relative bg-[var(--)]">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  日中眠くなる
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-4xl tracking-[0]">
                  66
                </span>

                <span className="text-xl">%</span>
              </p>
            </div>

            <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
              <div className="flex w-[302px] h-[65px] items-center gap-2.5 px-[31px] py-5 relative bg-[var(--)]">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  疲れがとれない
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#6b6b6b] text-4xl tracking-[0]">
                  61
                </span>

                <span className="text-xl">%</span>
              </p>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[297px] h-[65px] items-center gap-2.5 px-[31px] py-5 relative bg-[var(--)]">
                <div className="mt-[-0.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xl whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
                  眠りが浅い
                </div>
              </div>

              <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
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
