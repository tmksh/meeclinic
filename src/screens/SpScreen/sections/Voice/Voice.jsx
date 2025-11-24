import React from "react";
import { VoicePc } from "../../../../components/VoicePc";
import { Pc1 } from "../../../../icons/Pc1";
import { Pc2 } from "../../../../icons/Pc2";
import { Pc3 } from "../../../../icons/Pc3";
import { Pc4 } from "../../../../icons/Pc4";
import { Pc5 } from "../../../../icons/Pc5";
import { Pc6 } from "../../../../icons/Pc6";

export const Voice = () => {
  return (
    <div className="relative w-full pb-16 px-4">
      <div className="flex flex-col w-full max-w-[393px] md:max-w-[600px] items-center gap-8 mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#efa3af] text-[40px] tracking-[0] leading-tight">
            Voice
          </h2>
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-base tracking-[0] leading-normal">
            ご利用いただたお客様からの嬉しいお声
          </p>
        </div>
        {/* SP版: 2列3段のグリッドレイアウト */}
        <div className="grid grid-cols-2 gap-3 w-full">
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc1 className="!relative !w-8 !h-8" />}
            prop="A.Mさん（30代）"
            prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc2 className="!relative !w-8 !h-8" />}
            prop="B.Sさん（40代）"
            prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc3 className="!relative !w-8 !h-8" />}
            prop="C.Tさん（20代）"
            prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc4 className="!relative !w-8 !h-8" />}
            prop="R.Yさん（40代）"
            prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc5 className="!relative !w-8 !h-8" />}
            prop="S.Nさん（20代）"
            prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc6 className="!relative !w-8 !h-8" />}
            prop="M.Sさん（30代）"
            prop1="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
          />
        </div>
      </div>
    </div>
  );
};
