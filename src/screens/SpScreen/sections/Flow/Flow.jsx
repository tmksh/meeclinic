import React from "react";
import { FlowSetSp } from "../../../../components/FlowSetSp";
import { PricingHeader } from "../../../../components/PricingHeader";

export const Flow = () => {
  return (
    <div className="flex flex-col w-full items-center gap-12 pt-10 pb-0 px-0 absolute top-[13514px] left-0">
      <PricingHeader
        className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
        text="FLOW"
        text1="ご利用の流れ"
      />
      <div className="flex flex-col w-[363px] items-center gap-4 relative flex-[0_0_auto]">
        <FlowSetSp
          className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
          prop="01"
          prop1="いつでも診察可能"
          prop2="問診回答後いつでも診察開始。"
        />
        <img
          className="relative w-[29.45px] h-[52px]"
          alt="Arrow"
          src="/img/arrow-5.svg"
        />

        <FlowSetSp
          FLOWSpOne="flow2"
          className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
          prop="02"
          prop1="医師とオンライン診療"
          prop2="経験豊富な医師が丁寧に対応します"
        />
        <img
          className="relative w-[29.45px] h-[52px]"
          alt="Arrow"
          src="/img/arrow-5.svg"
        />

        <FlowSetSp
          FLOWSpOne="flow3"
          className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
          prop="03"
          prop1="薬の処方・決済"
          prop2="追加費用なし、クレジット決済でスムーズ"
        />
        <img
          className="relative w-[29.45px] h-[52px]"
          alt="Arrow"
          src="/img/arrow-5.svg"
        />

        <FlowSetSp
          FLOWSpOne="flow4"
          className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
          prop="04"
          prop1={
            <>
              ご自宅に配送
              <br />
              （最短翌日）
            </>
          }
          prop2="ポスト投函でお届け"
        />
      </div>
    </div>
  );
};
