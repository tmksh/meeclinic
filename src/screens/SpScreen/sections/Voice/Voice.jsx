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
            title="生理日調整がスムーズで助かりました"
            prop1="旅行と生理がかぶりそうで不安でしたが、チャットで相談してすぐにピルを処方してくれました。配送もはやく、病院に行く時間が取れなかったので、本当に助かりました…！説明も丁寧で安心して使えました。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc2 className="!relative !w-8 !h-8" />}
            prop="B.Sさん（40代）"
            title="忙しくてもオンラインで完結できるのが最高"
            prop1="仕事柄、平日に病院へ行くのが難しいのでオンライン診療は助かります。夜の時間でも受診できて、先生の対応も発送も早かったです。もっと早くミークリを知りたかった！"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc3 className="!relative !w-8 !h-8" />}
            prop="C.Tさん（20代）"
            title="ピル初心者でも不安なく始められました"
            prop1="初めてのピルで心配だったけど、先生が体調や飲み方を細かく説明してくれたので安心できました。LINEで質問できるのも心強いです。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc4 className="!relative !w-8 !h-8" />}
            prop="R.Yさん（40代）"
            title="価格が良心的で続けやすい"
            prop1="以前ほかのクリニックで頼んでいましたが、ミークリは価格が良心的で続けやすい！発送も丁寧で、アフターフォローもしっかりしていました。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc5 className="!relative !w-8 !h-8" />}
            prop="S.Nさん（20代）"
            title="生理痛が軽くなり、仕事に支障がなくなった"
            prop1="何年も生理痛が重くて悩んでいましたが、ピルを続けて本当に楽になりました。体質に合うものを一緒に選んでくれたので安心して続けられています。"
          />
          <VoicePc
            className="!left-[unset] !top-[unset] !w-full !max-w-none !min-w-0"
            icon={<Pc6 className="!relative !w-8 !h-8" />}
            prop="M.Sさん（30代）"
            title="周りにもすすめたいオンラインクリニック"
            prop1="診察も丁寧で、無理に勧めてこないところが信頼できました。ニキビが落ち着いてきたので次はシミ治療をお願いしようと思います。友達にもおすすめしています。"
          />
        </div>
      </div>
    </div>
  );
};
