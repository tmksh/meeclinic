/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Instagram1 } from "../../icons/Instagram1";
import { X } from "../../icons/X";
import { Line } from "../Line";
import { Logo } from "../Logo";

export const FooterPcWrapper = ({
  className,
  logoGroup = "/img/group-97-2.png",
}) => {
  return (
    <div
      className={`flex flex-col w-full max-w-[1440px] min-h-[280px] md:min-h-[280px] xl:min-h-[353px] items-center justify-center gap-2.5 px-4 md:px-8 xl:px-[102px] py-8 md:py-8 xl:py-[49px] relative mx-auto ${className}`}
    >
      <div className="flex flex-col md:flex-col xl:flex-row items-start items-center md:items-center xl:items-start gap-8 md:gap-8 xl:gap-[62px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center md:items-center xl:items-start gap-6 md:gap-6 xl:gap-8 relative flex-[0_0_auto]">
          <Logo
            className="!left-[unset] !top-[unset] scale-75 md:scale-75 xl:scale-100"
            group={logoGroup}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(80%) sepia(16%) saturate(1086%) hue-rotate(306deg) brightness(97%) contrast(96%)",
            }}
          />
          <div className="flex items-center gap-2 md:gap-2 xl:gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
            <a href="https://x.com/mee_clinic?s=21" className="flex w-10 h-10 md:w-10 md:h-10 xl:w-[52px] xl:h-[52px] items-center gap-2.5 p-2 md:p-2 xl:p-3 relative bg-[#EFA3AF] rounded-[26px] cursor-pointer hover:opacity-80 transition-opacity">
              <X className="!relative !w-6 !h-6 md:!w-6 md:!h-6 xl:!w-7 xl:!h-7 !aspect-[1]" />
            </a>

            <a href="https://www.instagram.com/mee_clinic?igsh=eXN0aHJnYWYzbDhs&utm_source=qr" className="flex w-10 h-10 md:w-10 md:h-10 xl:w-[52px] xl:h-[52px] items-center gap-2.5 p-2 md:p-2 xl:p-3 relative bg-[#EFA3AF] rounded-[26px] cursor-pointer hover:opacity-80 transition-opacity">
              <Instagram1 className="!relative !w-6 !h-6 md:!w-6 md:!h-6 xl:!w-7 xl:!h-7 !aspect-[1]" />
            </a>

            <a href="https://lin.ee/PSQ3TJzc" className="flex w-10 h-10 md:w-10 md:h-10 xl:w-[52px] xl:h-[52px] items-center gap-2.5 p-2 md:p-2 xl:p-3 relative bg-[#EFA3AF] rounded-[26px] cursor-pointer hover:opacity-80 transition-opacity">
              <Line
                className="!h-6 md:!h-6 xl:!h-7 !aspect-[1] !left-[unset] !w-6 md:!w-6 xl:!w-7 !top-[unset]"
                link="white"
                subtract="/img/subtract.svg"
              />
            </a>
          </div>
        </div>

        <div className="flex items-end justify-center md:justify-center xl:justify-around gap-0 md:gap-0 xl:gap-[661px] relative flex-1 self-stretch grow">
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 grid-rows-6 md:grid-rows-6 xl:grid-rows-4 w-full max-w-[350px] md:max-w-[400px] xl:max-w-[555px] gap-[10px_16px] md:gap-[10px_20px] xl:gap-[13px_53px] relative min-h-[133px]">
            <a 
              href="#fv" 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#fv');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="relative row-[1_/_2] col-[1_/_2] w-full md:w-full xl:w-[135px] h-[18px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
            >
              TOP
            </a>

            <a 
              href="#view" 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#view');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="relative row-[1_/_2] col-[2_/_3] md:row-[1_/_2] md:col-[2_/_3] xl:row-[1_/_2] xl:col-[2_/_3] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
            >
              豆知識
            </a>

            <a href="https://meeclinic0903.netlify.app/app/legal" className="hidden xl:block relative row-[1_/_2] col-[3_/_4] w-[135px] h-[18px] font-normal text-[#333333] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] hover:opacity-70">
              利用規約
            </a>

            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="relative row-[2_/_3] col-[1_/_2] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
            >
              クリニックについて
            </a>

            <a 
              href="#flow" 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#flow');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="relative row-[2_/_3] col-[2_/_3] md:row-[2_/_3] md:col-[2_/_3] xl:row-[2_/_3] xl:col-[2_/_3] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
            >
              ご利用の流れ
            </a>

            <a href="https://meeclinic0903.netlify.app/app/legal" className="hidden xl:block relative row-[2_/_3] col-[3_/_4] w-[135px] h-[18px] font-normal text-[#333333] text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] hover:opacity-70">
              プライバシーポリシー
            </a>

            <a 
              href="#reason" 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#reason');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="relative row-[3_/_4] col-[1_/_2] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
            >
              選ばれる理由
            </a>

            <a 
              href="#voice" 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#voice');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="relative row-[3_/_4] col-[2_/_3] md:row-[3_/_4] md:col-[2_/_3] xl:row-[3_/_4] xl:col-[2_/_3] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
            >
              口コミ
            </a>

            <a href="https://meeclinic0903.netlify.app/app/legal" className="hidden xl:block relative row-[3_/_4] col-[3_/_4] w-[180px] h-[18px] font-normal text-[#333333] text-[15px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] hover:opacity-70">
              特定商取引法に基づく表記
            </a>

            <a 
              href="#price" 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#price');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="relative row-[4_/_5] col-[1_/_2] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
            >
              料金プラン
            </a>

            <a 
              href="#qa" 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#qa');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="relative row-[4_/_5] col-[2_/_3] md:row-[4_/_5] md:col-[2_/_3] xl:row-[4_/_5] xl:col-[2_/_3] w-full md:w-full xl:w-[135px] h-[18px] font-normal text-[#333333] text-sm md:text-sm xl:text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
            >
              よくある質問
            </a>

            <a href="https://meeclinic0903.netlify.app/app/legal" className="hidden xl:block relative row-[4_/_5] col-[3_/_4] w-[150px] h-[18px] font-normal text-[#333333] text-[15px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] hover:opacity-70">
              プライバシーポリシー
            </a>

            <a href="https://meeclinic0903.netlify.app/app/legal" className="block xl:hidden relative row-[5_/_6] col-[1_/_2] w-full md:w-full h-[18px] font-normal text-[#333333] text-sm md:text-sm [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] hover:opacity-70">
              利用規約
            </a>

            <a href="https://meeclinic0903.netlify.app/app/legal" className="block xl:hidden relative row-[5_/_6] col-[2_/_3] w-full md:w-full h-[18px] font-normal text-[#333333] text-sm md:text-sm [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] hover:opacity-70">
              プライバシーポリシー
            </a>

            <a href="https://meeclinic0903.netlify.app/app/legal" className="block xl:hidden relative row-[6_/_7] col-[1_/_3] w-full md:w-full h-[18px] font-normal text-[#333333] text-sm md:text-sm [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal] hover:opacity-70">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterPcWrapper.propTypes = {
  logoGroup: PropTypes.string,
};
