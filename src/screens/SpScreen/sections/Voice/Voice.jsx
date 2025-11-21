import React from "react";
import { PricingHeader } from "../../../../components/PricingHeader";
import { VoiceSp } from "../../../../components/VoiceSp";
import { Pc1 } from "../../../../icons/Pc1";
import { Pc2 } from "../../../../icons/Pc2";
import { Pc3 } from "../../../../icons/Pc3";
import { Pc4 } from "../../../../icons/Pc4";
import { Pc5 } from "../../../../icons/Pc5";
import { Pc6 } from "../../../../icons/Pc6";

export const Voice = () => {
  return (
    <div className="w-full h-[830px] gap-12 absolute top-[18477px] left-0 bg-[var(--)] flex flex-col items-start">
      <PricingHeader
        className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
        divClassName="!mr-[-3.50px] !ml-[-3.50px] !text-base"
        text="Voice"
        text1="ご利用いただいたお客様からの嬉しいお声"
      />
      <div className="flex flex-wrap h-[555px] items-start justify-center gap-[13px_13px] relative self-stretch w-full">
        <VoiceSp
          className="!left-[unset] !top-[unset]"
          icon={<Pc1 className="!relative !w-[34px] !h-[34px] !aspect-[1]" />}
          prop="A.Mさん（30代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          rating="/img/rating-6.svg"
        />
        <VoiceSp
          className="!left-[unset] !top-[unset]"
          customerInfoClassName="!mr-[unset]"
          icon={<Pc2 className="!relative !w-[34px] !h-[34px]" />}
          prop="B.Sさん（40代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          rating="/img/rating-6.svg"
        />
        <VoiceSp
          className="!left-[unset] !top-[unset]"
          customerInfoClassName="!mr-[unset]"
          icon={<Pc3 className="!relative !w-[34px] !h-[34px]" />}
          prop="C.Tさん（20代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          rating="/img/rating-6.svg"
        />
        <VoiceSp
          className="!left-[unset] !top-[unset]"
          customerInfoClassName="!mr-[unset]"
          icon={<Pc4 className="!relative !w-[34px] !h-[34px]" />}
          prop="R.Yさん（40代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          rating="/img/rating-6.svg"
        />
        <VoiceSp
          className="!mb-[-137.00px] !left-[unset] !top-[unset]"
          customerInfoClassName="!mr-[unset]"
          icon={<Pc5 className="!relative !w-[34px] !h-[34px]" />}
          prop="S.Nさん（20代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          rating="/img/rating-6.svg"
        />
        <VoiceSp
          className="!mb-[-137.00px] !left-[unset] !top-[unset]"
          icon={<Pc6 className="!relative !w-[34px] !h-[34px]" />}
          prop="M.Sさん（30代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          rating="/img/rating-6.svg"
        />
      </div>
    </div>
  );
};
