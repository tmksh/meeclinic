import React from "react";
import { PricingHeader } from "../../../../components/PricingHeader";
import { QASp } from "../../../../components/QASp";

export const QA = () => {
  return (
    <div className="flex-col w-full gap-12 absolute top-[19371px] left-0 bg-[var(--)] flex items-center">
      <PricingHeader
        className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
        divClassName="!text-base"
        text="Q&amp;A"
        text1="よくある質問"
      />
      <div className="flex flex-col w-[363px] items-start relative flex-[0_0_auto]">
        <QASp
          className="!self-stretch !h-[70px] !left-[unset] ![border-top-style:solid] !border-t !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          divClassNameOverride="!mt-[unset]"
          prop="お薬はいつ配送されますか？"
        />
        <QASp
          className="!self-stretch !h-[70px] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          divClassNameOverride="!mt-[unset]"
          prop="どのような梱包で届きますか？"
        />
        <QASp
          className="!self-stretch !h-[70px] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          divClassNameOverride="!mt-[unset]"
          prop="お支払い方法はなにがありますか？"
        />
        <QASp
          className="!self-stretch !h-[70px] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          divClassNameOverride="!mt-[unset]"
          prop="診察料・配送料はいくらですか？"
        />
      </div>
    </div>
  );
};
