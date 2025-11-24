/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Logo } from "../Logo";

export const Header = ({
  className,
  logoGroup = "/img/group-97-2.png",
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex w-full max-w-[1440px] items-center justify-between px-4 md:px-8 xl:px-[102px] py-4 md:py-4 xl:py-[22px] relative bg-white ${className}`}
    >
      <Logo
        className="!left-[unset] !top-[unset] scale-75 md:scale-75 xl:scale-100"
        group={logoGroup}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(80%) sepia(16%) saturate(1086%) hue-rotate(306deg) brightness(97%) contrast(96%)",
        }}
      />

      {/* Desktop Menu */}
      <div className="hidden lg:inline-flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-14 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
          <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#about');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium !text-[#333333] text-base text-center tracking-[2.40px] leading-[normal] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity no-underline ${divClassName}`}
            >
              クリニックについて
            </a>
          </div>

          <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
            <a
              href="#reason"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#reason');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium !text-[#333333] text-base text-center tracking-[2.40px] leading-[normal] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity no-underline ${divClassNameOverride}`}
            >
              選ばれる理由
            </a>
          </div>

          <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
            <a
              href="#price"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#price');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium !text-[#333333] text-base text-center tracking-[2.40px] leading-[normal] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity no-underline ${divClassName1}`}
            >
              料金
            </a>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 md:gap-2 xl:gap-2.5 relative flex-[0_0_auto]">
          <a href="https://meeclinic0903.netlify.app/app/medicines" className="no-underline contents">
            <div className="hidden md:inline-flex xl:inline-flex items-center justify-center gap-2.5 px-3 md:px-3 xl:px-4 py-2 md:py-2 xl:py-[13px] relative flex-[0_0_auto] bg-white rounded-[45.5px] border border-solid border-[#efa3af] cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="relative flex items-center justify-center mt-[-0.50px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#efa3af] text-xs md:text-xs xl:text-[13px] text-center tracking-[0] leading-[normal]">
                薬品はこちら
              </div>

              <div className="relative w-4 h-4 md:w-4 md:h-4 xl:w-5 xl:h-5 aspect-[1]">
                <img
                  className="absolute w-[89.58%] h-[91.67%] top-[4.17%] left-[5.21%]"
                  alt="Vector"
                  src="/img/vector.svg"
                />

                <img
                  className="absolute w-[16.67%] h-[16.67%] top-[64.58%] left-[13.54%]"
                  alt="Vector"
                  src="/img/vector-2.svg"
                />

                <img
                  className="absolute w-[16.67%] h-[16.67%] top-[43.75%] left-[13.54%]"
                  alt="Vector"
                  src="/img/vector-2.svg"
                />
              </div>
            </div>
          </a>

          <div className="relative w-[160px] md:w-[160px] xl:w-[205px] h-[36px] md:h-[36px] xl:h-[45px] bg-[#efa3af] rounded-[45.5px]">
            <a href="https://meeclinic0903.netlify.app/app" className="no-underline contents">
              <div className="inline-flex items-center absolute top-2 md:top-2.5 xl:top-[13px] left-4 md:left-4 xl:left-[22px] cursor-pointer hover:opacity-80 transition-opacity">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xs md:text-xs xl:text-[13px] text-center tracking-[0] leading-[normal]">
                  オンライン診療はこちら
                </div>
              </div>

              <div className="absolute top-2.5 md:top-2.5 xl:top-3.5 left-[136px] md:left-[136px] xl:left-[174px] w-[14px] md:w-[14px] xl:w-[17px] h-[14px] md:h-[14px] xl:h-[17px] flex bg-white rounded-[11px] pointer-events-none">
                <img
                  className="mt-1 md:mt-1 xl:mt-1.5 w-1 h-1 md:h-1 xl:h-[5px] ml-[5px] md:ml-[5px] xl:ml-[7px]"
                  alt="Vector"
                  src="/img/vector-7-4.svg"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="lg:hidden z-50 relative w-6 h-5 cursor-pointer" onClick={toggleMenu}>
        <span className={`absolute left-0 block w-full h-0.5 bg-[#EFA3AF] transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
        <span className={`absolute left-0 top-1/2 -translate-y-1/2 block w-full h-0.5 bg-[#EFA3AF] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`absolute left-0 block w-full h-0.5 bg-[#EFA3AF] transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
            const section = document.querySelector('#about');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-lg tracking-[2.40px] cursor-pointer no-underline hover:opacity-70 transition-opacity"
        >
          クリニックについて
        </a>
        <a
          href="#reason"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
            const section = document.querySelector('#reason');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-lg tracking-[2.40px] cursor-pointer no-underline hover:opacity-70 transition-opacity"
        >
          選ばれる理由
        </a>
        <a
          href="#price"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
            const section = document.querySelector('#price');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-lg tracking-[2.40px] cursor-pointer no-underline hover:opacity-70 transition-opacity"
        >
          料金
        </a>
        
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 bg-white rounded-[45.5px] border border-solid border-[#efa3af] cursor-pointer" onClick={toggleMenu}>
            <a href="https://meeclinic0903.netlify.app/app/medicines" className="no-underline contents">
              <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#efa3af] text-sm text-center w-full">
                薬品はこちら
              </div>
            </a>
          </div>
          
          <a href="https://meeclinic0903.netlify.app/app" className="no-underline contents">
            <div className="flex items-center justify-center w-[205px] h-[45px] bg-[#efa3af] rounded-[45.5px] cursor-pointer" onClick={toggleMenu}>
              <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-sm text-center">
                オンライン診療はこちら
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logoGroup: PropTypes.string,
};
