import React from "react";

export const VerticalContainer = () => {
  return (
    <>
      <div id="about" className="flex flex-col md:flex-row w-full max-w-[1238px] items-start gap-8 md:gap-[41px] px-4 md:px-0 relative mt-12 md:mt-20 z-15 mx-auto scroll-mt-20">
        {/* Left Side: Image & Title */}
        <div className="relative w-full md:w-[706px] h-auto">
          {/* Title Section - Absolute positioned to overlap/sit above image */}
          <div className="absolute top-0 right-0 md:right-auto md:left-[380px] flex flex-col items-end md:items-start z-10">
            <div className="[font-family:'Noto_Serif',Helvetica] text-[#EFA3AF] text-[80px] md:text-[100px] xl:text-[128px] leading-[0.8] tracking-wider">
              About
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#EFA3AF] text-lg md:text-xl xl:text-2xl tracking-[0.1em] mt-2 mr-1 md:ml-20 md:mr-0">
              私たちについて
            </div>
          </div>

          {/* Image Container - Pushed down to accommodate title */}
          <div className="relative w-full md:w-[611px] mt-[50px] md:mt-[80px] md:-ml-[120px] xl:-ml-[200px]">
            <img
              className="w-full h-auto md:h-[503px] object-cover object-center"
              alt="About Container"
              src="/img/container.png"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-[489px] flex flex-col gap-6 md:gap-10 md:pt-[160px]">
          <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-[28px] md:text-3xl xl:text-[40px] tracking-[0.05em] leading-normal">
            オンラインで、
            <br />
            もっと身近に医療を。
          </div>

          <div className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#555555] text-sm md:text-base tracking-[0.05em] leading-[2] text-justify">
            meeクリニックは、「私のクリニック」という想いから生まれました。
            <br />
            女性医師をはじめ専門医が在籍し、性別を問わず幅広いお悩みに対応できるオンライン診療サービスです。
            <br />
            仕事や家庭で時間が取れない方、
            対面では相談しづらいデリケートなお悩みを抱える方にも、
            安心して医師に相談できる環境を整えています。
          </div>
        </div>
      </div>

      {/* お悩みSVG - SP版 */}
      <div className="w-full mt-12 md:mt-16 md:hidden">
        <img
          className="w-full h-auto block"
          alt="お悩み"
          src="/img/お悩み.svg"
        />
      </div>
      {/* Card SVG - PC版 */}
      <div className="hidden md:block w-full mt-12 md:mt-16">
        <img
          className="w-full h-auto block"
          alt="Card"
          src="/img/Card-2.svg"
        />
      </div>
    </>
  );
};
