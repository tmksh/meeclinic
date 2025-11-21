import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";
import { VoicePc } from "../../../../components/VoicePc";
import { Pc1 } from "../../../../icons/Pc1";
import { Pc2 } from "../../../../icons/Pc2";
import { Pc3 } from "../../../../icons/Pc3";
import { Pc4 } from "../../../../icons/Pc4";
import { Pc5 } from "../../../../icons/Pc5";
import { Pc6 } from "../../../../icons/Pc6";

export const Voice = () => {
  return (
    <div className="w-[1441px] items-center absolute top-[13880px] left-0 flex flex-col gap-10">
      <SectionTitle
        className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset]"
        divClassName="!font-normal"
        text="Voice"
        text1="ご利用いただいたお客様からの嬉しいお声"
      />
      <div className="flex flex-wrap w-[1080px] items-start gap-[24px_24px] relative flex-[0_0_auto]">
        <VoicePc
          className="!left-[unset] !top-[unset]"
          icon={<Pc1 className="!relative !w-12 !h-12" />}
          prop="A.Mさん（30代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset]"
          icon={<Pc2 className="!relative !w-12 !h-12" />}
          prop="B.Sさん（40代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset]"
          icon={<Pc3 className="!relative !w-12 !h-12" />}
          prop="C.Tさん（20代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset]"
          icon={<Pc4 className="!relative !w-12 !h-12" />}
          prop="R.Yさん（40代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset]"
          icon={<Pc5 className="!relative !w-12 !h-12" />}
          prop="S.Nさん（20代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset]"
          icon={<Pc6 className="!relative !w-12 !h-12" />}
          prop="M.Sさん（30代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
      </div>
    </div>
  );
};
