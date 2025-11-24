import React from "react";

export const Flow = () => {
  return (
    <div className="relative w-full py-8 px-4 flex flex-col items-center gap-4">
      <div className="flex flex-col w-full max-w-[393px] gap-4">
        {/* Step 1 */}
        <div className="flex flex-row items-start gap-4">
          <div className="flex-shrink-0 w-[120px] h-[120px]">
            <img
              className="w-full h-full object-cover rounded-[20px] border-[3px] border-[#efa3af]"
              alt="Rectangle"
              src="/img/rectangle-140.png"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1 pt-1">
            <div className="[font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[48px] leading-none mb-[-8px] ml-[-2px]">
              01
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-base leading-[1.3]">
              いつでも診察可能
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-sm leading-[1.4]">
              問診回答後いつでも診察開始。
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center w-full py-1">
          <svg width="24" height="32" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V38M12 38L4 28M12 38L20 28" stroke="#d89da6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
          </svg>
        </div>

        {/* Step 2 */}
        <div className="flex flex-row items-start gap-4">
          <div className="flex-shrink-0 w-[120px] h-[120px]">
            <img
              className="w-full h-full object-cover rounded-[20px] border-[3px] border-[#efa3af]"
              alt="Rectangle"
              src="/img/rectangle-141.png"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1 pt-1">
            <div className="[font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[48px] leading-none mb-[-8px] ml-[-2px]">
              02
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-base leading-[1.3]">
              医師とオンライン診療
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-sm leading-[1.4]">
              経験豊富な医師が丁寧に対応します
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center w-full py-1">
          <svg width="24" height="32" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V38M12 38L4 28M12 38L20 28" stroke="#d89da6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
          </svg>
        </div>

        {/* Step 3 */}
        <div className="flex flex-row items-start gap-4">
          <div className="flex-shrink-0 w-[120px] h-[120px]">
            <img
              className="w-full h-full object-cover rounded-[20px] border-[3px] border-[#efa3af]"
              alt="Rectangle"
              src="/img/rectangle-142.png"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1 pt-1">
            <div className="[font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[48px] leading-none mb-[-8px] ml-[-2px]">
              03
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-base leading-[1.3]">
              薬の処方・決済
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-sm leading-[1.4]">
              追加費用なし、クレジット決済でスムーズ
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center w-full py-1">
          <svg width="24" height="32" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V38M12 38L4 28M12 38L20 28" stroke="#d89da6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
          </svg>
        </div>

        {/* Step 4 */}
        <div className="flex flex-row items-start gap-4">
          <div className="flex-shrink-0 w-[120px] h-[120px]">
            <img
              className="w-full h-full object-cover rounded-[20px] border-[3px] border-[#efa3af]"
              alt="Rectangle"
              src="/img/rectangle-143.png"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1 pt-1">
            <div className="[font-family:'Noto_Serif',Helvetica] font-light text-[#e3d2d2] text-[48px] leading-none mb-[-8px] ml-[-2px]">
              04
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#555555] text-base leading-[1.3]">
              ご自宅に配送（最短翌日）
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-sm leading-[1.4]">
              ポスト投函でお届け
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
