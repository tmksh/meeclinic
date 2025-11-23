/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";

export const QAPc = ({
  prop = "いつとどきますか？",
  answer,
  className,
  divClassName,
  divClassNameOverride,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col w-[600px] items-start justify-start px-6 py-8 relative top-[unset] left-[unset] border-b [border-bottom-style:solid] border-[#6b6b6b80] cursor-pointer ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between w-full">
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[var(--)] text-xl tracking-[0] leading-[normal] whitespace-nowrap ${divClassName}`}
        >
          Q.
        </div>

        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-xl tracking-[0] leading-[normal] whitespace-nowrap ${divClassNameOverride}`}
        >
          {prop}
        </div>

        <div className="relative w-[19px] h-[19px]">
          <img
            className="absolute top-2 left-0 w-[19px] h-px object-cover"
            alt="Line"
            src="/img/line-18.svg"
          />

          <img
            className={`absolute top-0 left-2.5 w-px h-[19px] object-cover transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            alt="Line"
            src="/img/line-19.svg"
          />
        </div>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}
      >
        <div className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#555555] text-base tracking-[0] leading-[1.8] text-left">
            {answer}
        </div>
      </div>
    </div>
  );
};

QAPc.propTypes = {
  prop: PropTypes.string,
  answer: PropTypes.string,
};
