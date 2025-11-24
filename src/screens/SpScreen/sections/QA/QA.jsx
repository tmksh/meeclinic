import React from "react";
import { useState } from "react";

export const QA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const qaData = [
    {
      question: "お薬はいつ配送されますか？",
      answer: "決済完了後、最短で当日に発送いたします。お届けの地域によりますが、最短翌日にはポストへ投函されます。"
    },
    {
      question: "どのような梱包で届きますか？",
      answer: "外見からは中身が分からないよう、無地の封筒や箱でお届けいたします。プライバシーに配慮し、安心してご利用いただけます。"
    },
    {
      question: "お支払い方法はなにがありますか？",
      answer: "クレジットカード決済、銀行振込がご利用いただけます。"
    },
    {
      question: "診察料・配送料はいくらですか？",
      answer: "診察料は無料です。配送料は全国一律550円となります。"
    }
  ];

  return (
    <div className="relative w-full bg-[#fdf5f6] pb-16 px-4">
      <div className="flex flex-col w-full max-w-[393px] items-center gap-8 mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#efa3af] text-[40px] tracking-[0] leading-tight">
            Q&A
          </h2>
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-base tracking-[0] leading-normal">
            よくある質問
          </p>
        </div>

        {/* QA List */}
        <div className="flex flex-col w-full gap-4">
          {qaData.map((qa, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-[#efa3af20]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-start gap-2 flex-1">
                  <span className="[font-family:'Noto_Serif',Helvetica] font-bold text-[#efa3af] text-lg flex-shrink-0">
                    Q.
                  </span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#555555] text-sm leading-relaxed">
                    {qa.question}
                  </span>
                </div>
                <span className="text-[#efa3af] text-2xl flex-shrink-0 ml-2">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-4 pt-0">
                  <div className="pl-6 border-l-2 border-[#efa3af20]">
                    <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#555555] text-sm leading-relaxed">
                      {qa.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
