import React from "react";

export const ViewWrapper = () => {
  return (
    <div className="absolute top-[15253px] left-0 w-[1446px] h-[452px]">
      <img
        className="absolute top-0 left-0 w-[1440px] h-[452px]"
        alt="Group"
        src="/img/group-141.png"
      />

      <div className="flex flex-col w-[600px] items-center gap-3 absolute top-[88px] left-[576px]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[var(--)] text-[40px] tracking-[0] leading-[48.0px]">
          多くの女性に選ばれ、
          <br />
          相談が日々スタートしています。
        </div>

        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <div className="relative w-[200px] h-[199.16px]">
            <div className="absolute top-[21px] left-[21px] w-[158px] h-[158px] bg-[var(--)] rounded-[79px] blur-[14px]" />

            <img
              className="absolute top-0 left-0 w-[200px] h-[199px] aspect-[1] object-cover"
              alt="Element"
              src="/img/2.png"
            />

            <div className="flex flex-col w-[133px] h-[75px] items-center justify-between absolute top-[58px] left-[33px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-xl text-center tracking-[0] leading-[normal]">
                LINE登録者数
              </div>

              <div className="flex items-center gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[var(--)] text-[42px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
                  <span className="font-bold text-[#c76f7e]"> 700</span>

                  <span className="font-semibold text-[#6b6b6b] text-2xl leading-6">
                    人
                  </span>
                </p>

                <div className="relative w-fit [font-family:'Noto_Serif_JP',Helvetica] font-medium text-[var(--)] text-xl text-center tracking-[0] leading-5">
                  突<br />破
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[200px] h-[199.16px]">
            <div className="absolute top-[21px] left-[21px] w-[158px] h-[158px] bg-[var(--)] rounded-[79px] blur-[14px]" />

            <img
              className="absolute top-0 left-0 w-[200px] h-[199px] aspect-[1] object-cover"
              alt="Element"
              src="/img/2.png"
            />

            <div className="flex flex-col w-[133px] items-center gap-1 absolute top-[58px] left-[33px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[var(--)] text-xl text-center tracking-[0] leading-[normal]">
                利用者満足度
              </div>

              <p className="relative w-fit [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[var(--)] text-[42px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
                <span className="font-bold text-[#c76f7e]"> 98</span>

                <span className="font-semibold text-[#6b6b6b] text-2xl leading-6">
                  ％
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
