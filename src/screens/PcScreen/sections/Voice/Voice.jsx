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
    <div className="w-full max-w-[1441px] items-center relative md:absolute md:top-[14400px] xl:top-[14400px] left-0 flex flex-col gap-6 md:gap-8 xl:gap-10 px-0 md:px-8 xl:px-0 z-20">
      <SectionTitle
        className="!self-stretch !flex-[0_0_auto] !w-full !top-[unset] px-4 md:px-0"
        divClassName="!font-normal"
        text="Voice"
        text1="ご利用いただたお客様からの嬉しいお声"
      />
      {/* Scroll Container for Mobile */}
      <div className="flex w-full max-w-[1080px] items-start gap-4 md:gap-[16px_16px] xl:gap-[24px_24px] relative flex-[0_0_auto] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:flex-wrap md:justify-center px-4 md:px-0 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <VoicePc
          className="!left-[unset] !top-[unset] !flex-[0_0_auto] min-w-[280px] md:min-w-0 snap-center"
          icon={<Pc1 className="!relative !w-8 !h-8 md:!w-10 md:!h-10 xl:!w-12 xl:!h-12" />}
          prop="A.Mさん（30代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset] !flex-[0_0_auto] min-w-[280px] md:min-w-0 snap-center"
          icon={<Pc2 className="!relative !w-8 !h-8 md:!w-10 md:!h-10 xl:!w-12 xl:!h-12" />}
          prop="B.Sさん（40代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset] !flex-[0_0_auto] min-w-[280px] md:min-w-0 snap-center"
          icon={<Pc3 className="!relative !w-8 !h-8 md:!w-10 md:!h-10 xl:!w-12 xl:!h-12" />}
          prop="C.Tさん（20代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset] !flex-[0_0_auto] min-w-[280px] md:min-w-0 snap-center"
          icon={<Pc4 className="!relative !w-8 !h-8 md:!w-10 md:!h-10 xl:!w-12 xl:!h-12" />}
          prop="R.Yさん（40代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset] !flex-[0_0_auto] min-w-[280px] md:min-w-0 snap-center"
          icon={<Pc5 className="!relative !w-8 !h-8 md:!w-10 md:!h-10 xl:!w-12 xl:!h-12" />}
          prop="S.Nさん（20代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <VoicePc
          className="!left-[unset] !top-[unset] !flex-[0_0_auto] min-w-[280px] md:min-w-0 snap-center"
          icon={<Pc6 className="!relative !w-8 !h-8 md:!w-10 md:!h-10 xl:!w-12 xl:!h-12" />}
          prop="M.Sさん（30代）"
          prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        />
      </div>
    </div>
  );
};
