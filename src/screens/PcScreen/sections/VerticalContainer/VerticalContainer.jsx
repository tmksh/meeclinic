import React from "react";

export const VerticalContainer = () => {
  return (
    <div className="flex w-[1238px] items-start gap-[41px] absolute top-[1299px] left-[calc(50.00%_-_618px)]">
      <div className="relative w-[706px] h-[583px]">
        <div className="absolute top-20 left-0 w-[611px] h-[503px] bg-[url(/img/container.png)] bg-cover bg-[50%_50%]" />

        <div className="w-[296px] items-end absolute top-0 left-[410px] flex flex-col">
          <div className="relative w-fit mt-[-1.00px] ml-[-13.00px] [font-family:'Noto_Serif',Helvetica] font-semibold text-[var(--)] text-8xl tracking-[4.80px] leading-[normal]">
            About
          </div>

          <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-2xl text-right tracking-[0] leading-[normal]">
            私たちについて
          </div>
        </div>
      </div>

      <div className="w-[489px] items-start gap-10 pt-[146px] pb-0 px-0 relative flex flex-col">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-4xl tracking-[1.80px] leading-[normal]">
          オンラインで、
          <br />
          もっと身近に医療を。
        </div>

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-base tracking-[0.80px] leading-[38.4px]">
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
