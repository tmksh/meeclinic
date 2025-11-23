import React from "react";

export const ViewWrapper = () => {
  return (
    <div className="relative w-full h-auto md:w-[1446px] max-w-full mx-auto mt-12 md:mt-20 z-30 overflow-hidden">
      <img
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-[30%_10%] md:object-center -z-10"
        alt="Group"
        src="/img/group-141.png"
      />

      {/* Mobile Image Replacement (Group 9331.svg) */}
      <div className="md:hidden w-full flex justify-center mt-12 px-0 pb-12">
        <img
          className="w-full"
          alt="Group 9331"
          src="/img/Group 9331.svg"
        />
      </div>

      <div className="hidden md:flex flex-col w-full md:w-[600px] items-end md:items-start gap-3 relative md:ml-[576px] pt-[120px] md:pt-[88px] px-4 md:px-0 pb-4 md:pb-[88px]">
        <div className="hidden md:block relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white md:text-[var(--)] text-[24px] md:text-[32px] tracking-[0] leading-[1.4] md:leading-[48.0px] text-right md:text-left drop-shadow-md md:drop-shadow-none whitespace-normal md:whitespace-nowrap">
          多くの女性に選ばれ、<br />
          相談が日々スタートしています。
        </div>

        {/* PC Stat Circles (Hidden on Mobile) */}
        <div className="hidden md:flex flex-row items-end md:items-center justify-center gap-4 md:gap-6 relative flex-[0_0_auto] mt-4 md:mt-0 w-full md:w-auto">
          {/* Stat Circle 1 */}
          <div className="relative w-[200px] h-[199.16px]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(closest-side,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_100%)] opacity-100 blur-xl" />

            <img
              className="absolute top-0 left-0 w-[200px] h-[199px] aspect-[1] object-cover"
              alt="Element"
              src="/img/2.png"
            />

            <div className="flex flex-col w-[133px] h-[75px] items-center justify-between absolute top-[58px] left-[33px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-black text-xl text-center tracking-[0] leading-[normal]">
                LINE登録者数
              </div>

              <div className="flex items-center gap-[3px] relative self-stretch w-full flex-[0_0_auto] justify-center">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[var(--)] text-[42px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
                  <span className="font-bold text-[#c76f7e]"> 700</span>

                  <span className="font-semibold text-[#555555] text-2xl leading-6">
                    人
                  </span>
                </p>

              <div className="relative w-fit [font-family:'Noto_Serif_JP',Helvetica] font-medium text-black text-xl text-center tracking-[0] leading-5">
                  突<br />破
                </div>
              </div>
            </div>
          </div>

          {/* Stat Circle 2 */}
          <div className="relative w-[200px] h-[199.16px]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(closest-side,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_100%)] opacity-100 blur-xl" />

            <img
              className="absolute top-0 left-0 w-[200px] h-[199px] aspect-[1] object-cover"
              alt="Element"
              src="/img/2.png"
            />

            <div className="flex flex-col w-[133px] items-center gap-1 absolute top-[58px] left-[33px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-black text-xl text-center tracking-[0] leading-[normal]">
                利用者満足度
              </div>

              <p className="relative w-fit [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[var(--)] text-[42px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
                <span className="font-bold text-[#c76f7e]"> 98</span>

                <span className="font-semibold text-[#555555] text-2xl leading-6">
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
