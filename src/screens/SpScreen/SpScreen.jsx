import React from "react";
import { DivWrapper } from "../../components/DivWrapper";
import { TagSp } from "../../components/TagSp";
import { Container } from "./sections/Container";
import { CtaSp } from "./sections/CtaSp";
import { CtaSpWrapper } from "./sections/CtaSpWrapper";
import { Doctor } from "./sections/Doctor";
import { Feature } from "./sections/Feature";
import { Flow } from "./sections/Flow";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Fv } from "./sections/Fv";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";
import { Pill } from "./sections/Pill";
import { PricePlan } from "./sections/PricePlan";
import { QA } from "./sections/QA";
import { Slider } from "./sections/Slider";
import { View } from "./sections/View";
import { Voice } from "./sections/Voice";

export const SpScreen = () => {
  return (
    <div
      className="bg-white overflow-x-hidden w-full min-h-[21870px] relative"
      data-model-id="933:22695"
    >
      <header className="flex flex-col w-full h-[66px] items-start gap-2.5 px-[15px] py-4 absolute top-0 left-0 bg-white z-50">
        <div className="flex w-full items-center justify-between relative flex-[0_0_auto]">
          <DivWrapper
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            group="/img/button-container.png"
          />
          <div className="flex flex-col w-[35px] items-start gap-2.5 relative">
            <img
              className="relative self-stretch w-full h-[3px] mt-[-3.00px]"
              alt="Slider"
              src="/img/slider-2.svg"
            />

            <img
              className="relative self-stretch w-full h-[3px]"
              alt="Slider"
              src="/img/slider-2.svg"
            />

            <img
              className="relative self-stretch w-full h-[3px]"
              alt="Slider"
              src="/img/slider-2.svg"
            />
          </div>
        </div>
      </header>

      <img
        className="absolute top-[1310px] left-1/2 -translate-x-1/2 w-full max-w-[393px] h-auto"
        alt="Card"
        src="/img/card.png"
      />

      <Container />
      <Feature />
      <PricePlan />
      <Flow />
      <View />
      <Pill />
      <div className="absolute top-[16282px] left-0 w-full h-[829px] bg-[var(--)]" />

      <div className="absolute top-[18225px] left-0 w-full h-[1691px] bg-[var(--)]" />

      <Voice />
      <QA />
      <div className="absolute top-[17111px] left-0 w-full h-[1326px] flex justify-center">
        <img
          className="w-full max-w-[393px] h-[1326px]"
          alt="Bg"
          src="/img/bg-2.svg"
        />
      </div>

      <FrameWrapper />
      <Doctor />
      <Fv />
      <Frame />
      <CtaSp />
      <Group />
      <GroupWrapper />
      <div className="absolute top-[18218px] left-0 w-[203px] h-[166px] flex bg-[url(/img/s-10706965-2025-11-19-2.png)] bg-[100%_100%]">
        <div className="mt-[143.4px] w-[170.84px] h-[22.78px] ml-[14.1px] bg-[linear-gradient(180deg,rgba(229,188,197,0)_0%,rgba(229,188,197,1)_100%)]" />
      </div>

      <div className="w-[170px] top-[18229px] left-52 flex flex-wrap items-center gap-[8px_8px] absolute">
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="ニキビ"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="ニキビ痕"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="肝斑"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="開き毛穴"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="つまり(黒ずみ)毛穴"
        />
        <TagSp
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          prop="エイジングケア"
        />
      </div>

      <CtaSpWrapper />
      <Slider />
    </div>
  );
};
