import React from "react";
import { ReasonPc } from "../../../../components/ReasonPc";
import { ReasonTextPc } from "../../../../components/ReasonTextPc";
import { SectionTitle } from "../../../../components/SectionTitle";

export const Card = () => {
  return (
    <div className="relative w-full h-auto pb-20 md:w-full xl:w-full bg-[#F9F2F4] z-10 mt-8 md:mt-12">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          className="top-0 h-full min-h-full absolute left-0 w-full object-cover"
          alt="Bg color"
          src="/img/bg-color.svg"
        />
        <img
          className="hidden md:block xl:block absolute top-[1800px] md:top-[2100px] xl:top-[2289px] left-[400px] md:left-[500px] xl:left-[1051px] w-[280px] md:w-[320px] xl:w-[399px] h-[400px] md:h-[450px] xl:h-[531px]"
          alt="Vector"
          src="/img/vector-3.svg"
        />
        <img
          className="hidden md:block xl:block absolute top-[2200px] md:top-[2600px] xl:top-[3099px] left-0 md:left-2.5 xl:left-2.5 w-[400px] md:w-[480px] xl:w-[589px] h-[350px] md:h-[400px] xl:h-[470px]"
          alt="Vector"
          src="/img/vector-10.svg"
        />
        <img
          className="hidden md:block xl:block absolute top-[600px] md:top-[750px] xl:top-[837px] left-[400px] md:left-[500px] xl:left-[1051px] w-[280px] md:w-[320px] xl:w-[399px] h-[450px] md:h-[500px] xl:h-[593px]"
          alt="Vector"
          src="/img/vector-4.svg"
        />
        <img
          className="hidden md:block xl:block absolute top-[1300px] md:top-[1600px] xl:top-[1780px] left-0 md:left-2.5 xl:left-2.5 w-[450px] md:w-[540px] xl:w-[666px] h-[350px] md:h-[400px] xl:h-[468px]"
          alt="Vector"
          src="/img/vector-5.svg"
        />
      </div>
      
      {/* PC版画像 */}
      <img
        className="hidden md:block absolute top-[110px] md:top-[140px] xl:top-[152px] left-0 w-full max-w-[1440px] mx-auto right-0 h-[600px] md:h-[720px] xl:h-[861px]"
        alt="Switch"
        src="/img/switch.png"
      />
      
      {/* Second BG Layer */}
      <img
        className="top-px h-full min-h-full absolute left-0 md:left-2.5 xl:left-2.5 w-full md:w-[780px] xl:w-[1440px] object-cover -z-20 hidden md:block"
        alt="Bg color"
        src="/img/bg-color-1.svg"
      />
      
      {/* PC版タイトル */}
      <div className="hidden md:block relative mt-[200px] xl:mt-[249px] w-full max-w-[1440px] mx-auto px-4 md:px-[calc(50%-350px)] xl:px-[calc(50%-402px)] [font-family:'Noto_Serif_JP',Helvetica] font-semibold text-[#333333] text-[48px] xl:text-[64px] tracking-[1.5px] xl:tracking-[1.92px] leading-[normal] text-left xl:text-left z-20">
        こんなお悩みありませんか？
      </div>

      {/* スマホ版: 画像とオーバーレイ */}
      <div className="relative w-full h-auto md:hidden mt-4 mb-8">
        <img
          className="w-full h-auto object-cover"
          alt="Switch"
          src="/img/switch.png"
        />
        
        {/* タイトル - 画像の上部中央に配置 */}
        <div className="absolute top-6 left-0 w-full px-4 z-30">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-white text-[24px] tracking-[1.2px] leading-[1.4] text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] pl-56">
            こんなお悩み<br />ありませんか？
          </div>
        </div>
        
        {/* スマホ用悩みサークルオーバーレイ - 画像の上に配置 */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 上段左 */}
          <div className="absolute top-[15%] left-[2%] w-[100px] h-[100px] flex items-center justify-center">
            <div className="relative w-full h-full bg-[#d89da6cc] rounded-full backdrop-blur-sm p-1">
              <div className="relative w-full h-full rounded-full border-[1.5px] border-dashed border-white flex items-center justify-center">
                <div className="text-white text-[9px] font-medium text-center leading-[1.3] px-1">
                  生理前のつらい症状や<br />避妊の不安
                </div>
              </div>
            </div>
          </div>
          
          {/* 上段右 */}
          <div className="absolute top-[25%] right-[2%] w-[100px] h-[100px] flex items-center justify-center">
            <div className="relative w-full h-full bg-[#b9737fcc] rounded-full backdrop-blur-sm p-1">
              <div className="relative w-full h-full rounded-full border-[1.5px] border-dashed border-white flex items-center justify-center">
                <div className="text-white text-[9px] font-medium text-center leading-[1.3] px-1">
                  繰り返す<br />肌荒れやニキビ
                </div>
              </div>
            </div>
          </div>
          
          {/* 中央（女性の上） */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[120px] h-[120px] flex items-center justify-center">
            <div className="relative w-full h-full bg-[#d89da6cc] rounded-full backdrop-blur-sm p-1">
              <div className="relative w-full h-full rounded-full border-[1.5px] border-dashed border-white flex items-center justify-center">
                <div className="text-white text-[9px] font-medium text-center leading-[1.3] px-1">
                  「なんとなく不安」<br />「眠れない」<br />といったメンタルの不調
                </div>
              </div>
            </div>
          </div>
          
          {/* 下段左 */}
          <div className="absolute bottom-[15%] left-[2%] w-[100px] h-[100px] flex items-center justify-center">
            <div className="relative w-full h-full bg-[#b9737fcc] rounded-full backdrop-blur-sm p-1">
              <div className="relative w-full h-full rounded-full border-[1.5px] border-dashed border-white flex items-center justify-center">
                <div className="text-white text-[9px] font-medium text-center leading-[1.3] px-1">
                  忙しくて<br />病院に行く時間がない
                </div>
              </div>
            </div>
          </div>
          
          {/* 下段右 */}
          <div className="absolute bottom-[5%] right-[2%] w-[100px] h-[100px] flex items-center justify-center">
            <div className="relative w-full h-full bg-[#d89da6cc] rounded-full backdrop-blur-sm p-1">
              <div className="relative w-full h-full rounded-full border-[1.5px] border-dashed border-white flex items-center justify-center">
                <div className="text-white text-[9px] font-medium text-center leading-[1.3] px-1">
                  誰にも知られずに<br />相談したい
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* PC用悩みサークル (スマホでは非表示) */}
      <div className="hidden md:flex relative mt-[100px] w-full max-w-[1440px] mx-auto h-auto md:min-h-[380px] xl:h-[415px] flex-col md:flex-row xl:flex-row md:flex-wrap xl:flex-nowrap gap-6 md:gap-0 xl:gap-0 justify-center">
        {/* 悩み1 */}
        <div className="flex flex-col w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] items-center justify-center gap-2.5 px-8 md:px-[35px] xl:px-[49px] py-16 md:py-[70px] xl:py-[91px] relative">
          <div className="absolute top-0 left-0 w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] bg-[#d89da6d9] rounded-[100px] md:rounded-[100px] xl:rounded-[133.5px]">
            <div className="relative top-[7px] md:top-[7px] xl:top-[9px] left-2 w-[calc(100%-16px)] md:w-[186px] xl:w-[250px] h-[186px] md:h-[186px] xl:h-[250px] rounded-[93px] md:rounded-[93px] xl:rounded-[125px] border-[3px] border-dashed border-[var(--)]" />
          </div>
          <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base md:text-lg xl:text-xl text-center tracking-[0] leading-[28px] md:leading-[32px] xl:leading-[38px] z-10">
            生理前のつらい症状や<br />避妊の不安
          </div>
        </div>

        {/* 悩み2 */}
        <div className="flex flex-col w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] items-center justify-center gap-2.5 px-8 md:px-[26px] xl:px-[35px] py-16 md:py-[55px] xl:py-[74px] relative mt-6 md:mt-12">
          <div className="absolute top-0 left-0 w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] bg-[#b9737fd9] rounded-[100px] md:rounded-[100px] xl:rounded-[133.5px]">
            <div className="relative top-[7px] md:top-[7px] xl:top-[9px] left-2 w-[calc(100%-16px)] md:w-[186px] xl:w-[250px] h-[186px] md:h-[186px] xl:h-[250px] rounded-[93px] md:rounded-[93px] xl:rounded-[125px] border-[3px] border-dashed border-[var(--)]" />
          </div>
          <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base md:text-lg xl:text-xl text-center tracking-[0] leading-[28px] md:leading-[32px] xl:leading-[38px] z-10 whitespace-nowrap">
            繰り返す肌荒れやニキビ
          </div>
        </div>

        {/* 悩み3 */}
        <div className="flex flex-col w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] items-center justify-center gap-2.5 px-8 md:px-[19px] xl:px-[26px] py-16 md:py-[70px] xl:py-[93px] relative">
          <div className="absolute top-0 left-0 w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] bg-[#b9737fd9] rounded-[100px] md:rounded-[100px] xl:rounded-[133.5px]">
            <div className="relative top-[7px] md:top-[7px] xl:top-[9px] left-2 w-[calc(100%-16px)] md:w-[186px] xl:w-[250px] h-[186px] md:h-[186px] xl:h-[250px] rounded-[93px] md:rounded-[93px] xl:rounded-[125px] border-[3px] border-dashed border-[var(--)]" />
          </div>
          <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base md:text-lg xl:text-xl text-center tracking-[0] leading-[28px] md:leading-[32px] xl:leading-[38px] z-10">
            忙しくて<br />病院に行く時間がない
          </div>
        </div>

        {/* 悩み4 */}
        <div className="flex flex-col w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] items-center justify-center gap-2.5 px-8 md:px-[26px] xl:px-[35px] py-12 md:py-10 xl:py-14 relative mt-6 md:mt-24">
          <div className="absolute top-0 left-0 md:left-0 xl:left-0 w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] bg-[#d89da6d9] rounded-[100px] md:rounded-[100px] xl:rounded-[133.5px]">
            <div className="relative top-[7px] md:top-[7px] xl:top-[9px] left-2 w-[calc(100%-16px)] md:w-[186px] xl:w-[250px] h-[186px] md:h-[186px] xl:h-[250px] rounded-[93px] md:rounded-[93px] xl:rounded-[125px] border-[3px] border-dashed border-[var(--)]" />
          </div>
          <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base md:text-lg xl:text-xl text-center tracking-[0] leading-[28px] md:leading-[32px] xl:leading-[38px] z-10">
            「なんとなく不安」<br />「眠れない」<br />といったメンタルの不調
          </div>
        </div>

        {/* 悩み5 */}
        <div className="flex flex-col w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] items-center justify-center gap-2.5 px-8 md:px-[16px] xl:px-[21px] py-16 md:py-[60px] xl:py-20 relative mt-6 md:mt-12">
          <div className="absolute top-0 left-0 w-full md:w-[200px] xl:w-[267px] h-[200px] md:h-[200px] xl:h-[267px] bg-[#d89da6d9] rounded-[100px] md:rounded-[100px] xl:rounded-[133.5px]">
            <div className="relative top-[7px] md:top-[7px] xl:top-[9px] left-2 w-[calc(100%-16px)] md:w-[186px] xl:w-[250px] h-[186px] md:h-[186px] xl:h-[250px] rounded-[93px] md:rounded-[93px] xl:rounded-[125px] border-[3px] border-dashed border-[var(--)]" />
          </div>
          <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[var(--)] text-base md:text-lg xl:text-xl text-center tracking-[0] leading-[28px] md:leading-[32px] xl:leading-[38px] z-10">
            誰にも知られずに<br />相談したい
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center my-8 relative z-20">
        <img
          className="w-[240px] md:w-[240px] xl:w-[277px] h-[75px] md:h-[75px] xl:h-[87px]"
          alt="Tooltip"
          src="/img/tooltip.svg"
        />
      </div>

      {/* メッセージボックス (Swapped order for mobile flow) */}
      <div className="flex flex-col w-[calc(100%-32px)] md:w-[720px] xl:w-[1236px] min-h-[150px] md:min-h-[180px] xl:h-[200px] items-start gap-2.5 p-2 relative mx-auto mb-12 bg-white rounded-[16px] md:rounded-[18px] xl:rounded-[20px]">
        <div className="relative w-full md:w-[704px] xl:w-[1220px] min-h-[134px] md:min-h-[164px] xl:h-[184px] rounded-[16px] md:rounded-[18px] xl:rounded-[20px] border-[3px] border-dashed border-[#efa3af] flex items-center justify-center">
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#efa3af] text-[20px] md:text-[48px] xl:text-[64px] text-center tracking-[0] leading-[32px] md:leading-[44px] xl:leading-[56px] px-2">
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#efa3af] text-[20px] md:text-[48px] xl:text-[64px] tracking-[0] leading-[32px] md:leading-[44px] xl:leading-[56px]">
              mee クリニック
            </span>
            <span className="text-[16px] md:text-[32px] xl:text-[40px]">
              なら、
              <br className="md:hidden" />
              すべてのお悩みを専門家が<br />
              いつでも丁寧にサポートします。
            </span>
          </p>
        </div>
      </div>

      {/* 選ばれる理由セクション */}
      <div className="flex flex-col w-full md:w-[800px] xl:w-[1441px] items-center gap-12 md:gap-16 xl:gap-20 relative mt-12 md:mt-16 px-4 md:px-0 xl:px-0 mx-auto">
        <SectionTitle
          className="!self-stretch !flex-[0_0_auto] !bg-[unset] !w-full !top-[unset]"
          text="Reason"
          text1="選ばれる理由"
        />
        
        <div className="flex flex-col w-full md:w-[700px] xl:w-[895px] items-center gap-8 md:gap-12 xl:gap-16 relative flex-[0_0_auto]">
          {/* 理由1 */}
          <div className="flex flex-col md:flex-row xl:flex-row items-center gap-6 md:gap-8 xl:gap-[57px] relative self-stretch w-full flex-[0_0_auto]">
            <ReasonPc className="!left-[unset] !top-[unset]" one="reason-1" />
            <ReasonTextPc
              text2={
                <>
                  産婦人科・皮膚科の専門医が在籍。
                  <br />
                  悩みに丁寧に寄り添います。
                </>
              }
              className="!mr-0 md:!mr-[-2.00px] xl:!mr-[-2.00px] !left-[unset] !w-full md:!w-[350px] xl:!w-[420px] !top-[unset]"
              frameClassName="!mr-0 md:!mr-[-167.00px] xl:!mr-[-167.00px]"
              prop="01"
              prop1="医師による診療"
            />
          </div>

          {/* 理由2 */}
          <div className="flex flex-col md:flex-row-reverse xl:flex-row-reverse items-center gap-6 md:gap-8 xl:gap-[57px] relative self-stretch w-full flex-[0_0_auto]">
            <ReasonPc className="!mr-0 md:!mr-[-2.00px] xl:!mr-[-2.00px] !left-[unset] !top-[unset]" one="reason-2" />
            <ReasonTextPc
              text2={
                <>
                  気になることは、まずチャットで相談料0円。
                  <br /> 「聞きづらい…」をなくす相談窓口です。
                </>
              }
              className="!left-[unset] !w-full md:!w-[350px] xl:!w-[420px] !top-[unset]"
              divClassName="![white-space:unset]"
              frameClassName="!mr-0 md:!mr-[-167.00px] xl:!mr-[-167.00px]"
              prop="02"
              prop1={
                <>
                  相談無料・チャット
                  <br />
                  で気軽に
                </>
              }
            />
          </div>

          {/* 理由3 */}
          <div className="flex flex-col md:flex-row xl:flex-row items-center gap-6 md:gap-8 xl:gap-[57px] relative self-stretch w-full flex-[0_0_auto]">
            <ReasonPc className="!left-[unset] !top-[unset]" one="reason-3" />
            <ReasonTextPc
              text2={
                <>
                  忙しい毎日でも、思い立ったときに予約が可能。
                  <br /> ライフスタイルに合わせて利用できます。
                </>
              }
              className="!left-[unset] !w-full md:!w-[350px] xl:!w-[420px] !top-[unset]"
              frameClassName="!mr-0 md:!mr-[-167.00px] xl:!mr-[-167.00px]"
              prop="03"
              prop1="24時間365日対応"
            />
          </div>

          {/* 理由4 */}
          <div className="flex flex-col md:flex-row-reverse xl:flex-row-reverse items-center gap-6 md:gap-8 xl:gap-[57px] relative self-stretch w-full flex-[0_0_auto]">
            <ReasonPc className="!mr-0 md:!mr-[-2.00px] xl:!mr-[-2.00px] !left-[unset] !top-[unset]" one="reason-4" />
            <ReasonTextPc
              text2={
                <>
                  最短翌日にお届け（配送地域によって異なります）。
                  <br />
                  中身がわからない【雑貨】表記で、プライバシーも安心です。
                </>
              }
              className="!left-[unset] !w-full md:!w-[350px] xl:!w-[420px] !top-[unset]"
              divClassName="![white-space:unset]"
              frameClassName="!mr-0 md:!mr-[-167.00px] xl:!mr-[-167.00px]"
              prop="04"
              prop1={
                <>
                  最短翌日お届け！
                  <br />
                  プライバシーが守られた梱包
                </>
              }
            />
          </div>

          {/* 理由5 */}
          <div className="flex flex-col md:flex-row xl:flex-row items-center gap-6 md:gap-8 xl:gap-[57px] relative self-stretch w-full flex-[0_0_auto]">
            <ReasonPc className="!left-[unset] !top-[unset]" one="reason-5" />
            <ReasonTextPc
              text2={
                <>
                  12ヶ月まとめて処方で4,800円OFF。
                  <br /> さらに定期キャンペーンでお得に利用できます。
                </>
              }
              className="!mr-0 md:!mr-[-2.00px] xl:!mr-[-2.00px] !left-[unset] !w-full md:!w-[350px] xl:!w-[420px] !top-[unset]"
              frameClassName="!self-stretch !w-full"
              prop="05"
              prop1="続けやすい料金プラン"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
