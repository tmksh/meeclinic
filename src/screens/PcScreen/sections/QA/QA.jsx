import React from "react";
import { QAPc } from "../../../../components/QAPc";
import { SectionTitle } from "../../../../components/SectionTitle";

export const QA = () => {
  return (
    <div className="flex flex-col w-full max-w-[1441px] items-center gap-10 md:gap-10 xl:gap-16 relative mt-12 md:mt-20 px-4 md:px-8 xl:px-0 z-20 mx-auto">
      <SectionTitle
        className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset]"
        divClassName="!font-normal"
        text="Q&amp;A"
        text1="よくある質問"
      />
      <div className="flex flex-col w-full max-w-[600px] items-start relative flex-[0_0_auto] gap-4">
        <QAPc
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          prop="お薬はいつ配送されますか？"
        />
        <QAPc
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          prop="どのような梱包で届きますか？"
        />
        <QAPc
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          divClassNameOverride="!text-center"
          prop="お支払い方法はなにがありますか？"
        />
        <QAPc
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          prop="診察料・配送料はいくらですか？"
        />
      </div>
    </div>
  );
};
