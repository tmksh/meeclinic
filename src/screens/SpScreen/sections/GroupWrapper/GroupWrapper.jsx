import React from "react";

export const GroupWrapper = () => {
  return (
    <div className="absolute top-[17072px] right-[13px] w-[365px] h-[1129px]">
      <div className="absolute top-0 right-[33px] w-[332px] [font-family:'Noto_Serif',Helvetica] font-medium text-[#ffffffa6] text-9xl tracking-[0] leading-[normal]">
        Sleep
      </div>

      <div className="flex flex-col w-[363px] items-start gap-8 absolute top-[116px] left-0">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[var(--)] text-2xl tracking-[0] leading-[normal]">
          <span className="font-semibold text-[#6b6b6b]">
            眠れないのは、
            <br />
            あなたのせいじゃない。
            <br />
            日本人の4人に1人が
          </span>

          <span className="font-bold text-[#c76f7e]">不眠</span>

          <span className="font-semibold text-[#6b6b6b]">に悩む時代</span>
        </p>

        <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] text-[var(--)] text-sm text-justify leading-[22.4px] relative font-medium tracking-[0]">
              日本は先進国の中で最も平均睡眠時間が短い「眠りなき社会」です 。
              <br />
              2023年の調査では、成人の約4人に1人（25.1%）が慢性的な不眠を抱えていることが明らかになっています
              。
            </div>

            <img
              className="relative self-stretch w-full flex-[0_0_auto]"
              alt="Frame"
              src="/img/frame-1402.svg"
            />
          </div>

          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] text-[var(--)] text-sm text-justify leading-[22.4px] relative font-medium tracking-[0]">
              働き盛り世代は「仕事」や「育児」 、若い世代では  <br />
              就寝前のスマホ使用が睡眠不足を招いています 。<br />
              良質な睡眠は美容やメンタルにも直結します。
              <br />
              まずはオンラインで専門家へ相談してみませんか？
            </div>

            <div className="flex flex-col items-start gap-10 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[var(--)] rounded-[20px]">
              <div className="flex h-14 items-center justify-center gap-2.5 px-[101px] py-4 relative self-stretch w-full bg-[var(--)] rounded-[50px] border border-solid border-[var(--)]">
                <div className="relative w-fit mt-[-3.50px] mb-[-1.50px] ml-[-33.50px] mr-[-33.50px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-xl tracking-[0] leading-[normal]">
                  特に多い睡眠の悩み
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[255px] h-[53px] items-center gap-2.5 px-[31px] py-5 relative bg-[var(--)]">
                    <div className="w-fit mt-[-6.50px] mb-[-4.50px] [font-family:'Noto_Sans_JP',Helvetica] text-[var(--)] text-xl leading-[normal] whitespace-nowrap relative font-medium tracking-[0]">
                      日中眠くなる
                    </div>
                  </div>

                  <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#333333] text-2xl tracking-[0] leading-[normal]">
                    <span className="text-[#6b6b6b]">66</span>

                    <span className="text-[#6b6b6b] text-sm">%</span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                  <div className="flex w-[234px] h-[53px] items-center gap-2.5 px-[31px] py-5 relative bg-[var(--)]">
                    <div className="w-fit mt-[-6.50px] mb-[-4.50px] [font-family:'Noto_Sans_JP',Helvetica] text-[var(--)] text-xl leading-[normal] whitespace-nowrap relative font-medium tracking-[0]">
                      疲れがとれない
                    </div>
                  </div>

                  <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#333333] text-2xl tracking-[0] leading-[normal]">
                    <span className="text-[#6b6b6b]">61</span>

                    <span className="text-[#6b6b6b] text-sm">%</span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <div className="flex w-[230px] h-[53px] items-center gap-2.5 px-[31px] py-5 relative bg-[var(--)]">
                    <div className="w-fit mt-[-6.50px] mb-[-4.50px] [font-family:'Noto_Sans_JP',Helvetica] text-[var(--)] text-xl leading-[normal] whitespace-nowrap relative font-medium tracking-[0]">
                      眠りが浅い
                    </div>
                  </div>

                  <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#333333] text-2xl tracking-[0] leading-[normal]">
                    <span className="text-[#6b6b6b]">60</span>

                    <span className="text-[#6b6b6b] text-sm">%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
