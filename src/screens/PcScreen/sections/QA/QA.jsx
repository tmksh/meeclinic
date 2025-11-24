import React from "react";
import { QAPc } from "../../../../components/QAPc";
import { SectionTitle } from "../../../../components/SectionTitle";

export const QA = () => {
  return (
    <div id="qa" className="flex flex-col w-full max-w-[1441px] items-center gap-10 md:gap-10 xl:gap-16 relative mt-12 md:mt-20 px-4 md:px-8 xl:px-0 z-20 mx-auto scroll-mt-20">
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
          answer="決済完了後、最短で当日に発送いたします。お届けの地域によりますが、最短翌日にはポストへ投函されます。"
        />
        <QAPc
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          prop="どのような梱包で届きますか？"
          answer="外見からは中身が分からないよう、無地の封筒や箱でお届けいたします。プライバシーに配慮し、安心してご利用いただけます。"
        />
        <QAPc
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          divClassNameOverride="!text-center"
          prop="お支払い方法はなにがありますか？"
          answer="クレジットカード決済、銀行振込がご利用いただけます。"
        />
        <QAPc
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="![white-space:unset]"
          prop="診察料・配送料はいくらですか？"
          answer="診察料は無料です。お薬代と配送料（550円）のみご負担いただきます。"
        />
      </div>
    </div>
  );
};
