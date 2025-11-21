/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const BtnPc = ({ className }) => {
  return (
    <div
      className={`flex w-[441px] h-[66px] items-center justify-end gap-16 px-[18px] py-[15px] relative top-[1223px] left-[929px] bg-[var(--)] rounded-[100px] border-2 border-solid border-[var(--)] ${className}`}
    >
      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[var(--)] text-2xl text-center tracking-[0] leading-[normal]">
        お申し込みはこちら
      </div>

      <div className="relative w-[30px] h-[30px] bg-[var(--)] rounded-[15px]">
        <img
          className="absolute top-[7px] left-2.5 w-3.5 h-[17px]"
          alt="Vector"
          src="/img/vector-7-5.svg"
        />
      </div>
    </div>
  );
};
