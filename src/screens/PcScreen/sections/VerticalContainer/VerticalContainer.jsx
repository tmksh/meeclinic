import React from "react";

export const VerticalContainer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1238px] items-start gap-6 md:gap-[41px] px-4 md:px-0 relative mt-12 md:mt-20 z-15 mx-auto">
      <div className="relative w-full md:w-[706px] h-[320px] md:h-[583px]">
        <div className="absolute top-10 md:top-20 left-0 w-full md:w-[611px] h-[260px] md:h-[503px] bg-[url(/img/container.png)] bg-cover bg-[50%_50%]" />

        <div className="w-[200px] md:w-[296px] items-end absolute top-0 right-4 md:left-[410px] flex flex-col">
          <div className="relative w-fit mt-[-1.00px] md:ml-[-13.00px] [font-family:'Noto_Serif',Helvetica] font-semibold text-[#efa3af] text-4xl md:text-6xl xl:text-8xl tracking-[2.40px] md:tracking-[4.80px] leading-[normal]">
            About
          </div>

          <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#efa3af] text-base md:text-xl xl:text-2xl text-right tracking-[0] leading-[normal]">
            私たちについて
          </div>
        </div>
      </div>

      <div className="w-full md:w-[489px] items-start gap-6 md:gap-10 pt-6 md:pt-[146px] pb-0 px-0 relative flex flex-col">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-2xl md:text-3xl xl:text-4xl tracking-[1.20px] md:tracking-[1.80px] leading-[normal]">
          オンラインで、
          <br />
          もっと身近に医療を。
        </div>

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#6b6b6b] text-sm md:text-base tracking-[0.40px] md:tracking-[0.80px] leading-[26px] md:leading-[38.4px]">
          meeクリニックは、「私のクリニック」という想いから生まれました。
          <br />{" "}
          女性医師をはじめ専門医が在籍し、性別を問わず幅広いお悩みに対応できるオンライン診療サービスです。
          <br />
          仕事や家庭で時間が取れない方、
          対面では相談しづらいデリケートなお悩みを抱える方にも、
          安心して医師に相談できる環境を整えています。
        </div>
      </div>
    </div>
  );
};
