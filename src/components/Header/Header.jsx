/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";

export const Header = ({
  className,
  logoGroup = "/img/group-97-2.png",
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
}) => {
  return (
    <div
      className={`flex w-[1440px] items-center justify-between px-[102px] py-[22px] relative top-[22841px] left-[-6992px] bg-[var(--)] ${className}`}
    >
      <Logo className="!left-[unset] !top-[unset]" group={logoGroup} />
      <div className="inline-flex items-center gap-14 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
          <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
            <div
              className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base text-center tracking-[2.40px] leading-[normal] whitespace-nowrap ${divClassName}`}
            >
              クリニックについて
            </div>
          </div>

          <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
            <div
              className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base text-center tracking-[2.40px] leading-[normal] whitespace-nowrap ${divClassNameOverride}`}
            >
              選ばれる理由
            </div>
          </div>

          <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
            <div
              className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base text-center tracking-[2.40px] leading-[normal] whitespace-nowrap ${divClassName1}`}
            >
              料金
            </div>
          </div>

          <div
            className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base text-center tracking-[2.40px] leading-[normal] whitespace-nowrap ${divClassName2}`}
          >
            豆知識
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 px-4 py-[13px] relative flex-[0_0_auto] bg-[var(--)] rounded-[45.5px] border border-solid border-[#efa3af]">
            <div className="relative flex items-center justify-center w-fit mt-[-0.50px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[var(--)] text-[13px] text-center tracking-[0] leading-[normal]">
              薬品はこちら
            </div>

            <div className="relative w-5 h-5 aspect-[1]">
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

          <div className="relative w-[205px] h-[45px] bg-[var(--)] rounded-[45.5px]">
            <div className="inline-flex items-center absolute top-[13px] left-[22px]">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-[13px] text-center tracking-[0] leading-[normal]">
                オンライン診療はこちら
              </div>
            </div>

            <div className="absolute top-3.5 left-[174px] w-[17px] h-[17px] flex bg-white rounded-[11px]">
              <img
                className="mt-1.5 w-1 h-[5px] ml-[7px]"
                alt="Vector"
                src="/img/vector-7-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logoGroup: PropTypes.string,
};
