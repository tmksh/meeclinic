import React from "react";
import { Header } from "../../components/Header";
import { TagPc } from "../../components/TagPc";
import { Card } from "./sections/Card";
import { Cta } from "./sections/Cta";
import { CtaWrapper } from "./sections/CtaWrapper";
import { Feature } from "./sections/Feature";
import { Flow } from "./sections/Flow";
import { FooterPc } from "./sections/FooterPc";
import { Frame } from "./sections/Frame";
import { Fv } from "./sections/Fv";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";
import { PricePlan } from "./sections/PricePlan";
import { QA } from "./sections/QA";
import { Slider } from "./sections/Slider";
import { VerticalContainer } from "./sections/VerticalContainer";
import { View } from "./sections/View";
import { ViewWrapper } from "./sections/ViewWrapper";
import { Voice } from "./sections/Voice";

export const PcScreen = () => {
  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[17271px] relative"
      data-model-id="933:18755"
    >
      <VerticalContainer />
      <Card />
      <Feature />
      <PricePlan />
      <Flow />
      <div className="absolute top-[13724px] left-[calc(50.00%_-_721px)] w-[1440px] h-[1764px] bg-[var(--)]" />

      <View />
      <div className="absolute top-[12190px] left-[calc(50.00%_-_720px)] w-[1440px] h-[700px] bg-[var(--)]" />

      <div className="absolute top-[12890px] left-[calc(50.00%_-_723px)] w-[1446px] h-[989px]">
        <img
          className="absolute top-[396px] left-[calc(50.00%_-_720px)] w-[1440px] h-[593px]"
          alt="Bg"
          src="/img/bg.svg"
        />

        <div className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-[452px] bg-x-100" />
      </div>

      <Voice />
      <Cta />
      <FooterPc />
      <QA />
      <ViewWrapper />
      <Frame />
      <Header
        className="!absolute !left-0 !top-0 !z-50"
        divClassName="![white-space:unset]"
        divClassName1="![white-space:unset]"
        divClassName2="![white-space:unset]"
        divClassNameOverride="![white-space:unset]"
        logoGroup="/img/group-97-4.png"
      />
      <Fv />
      <CtaWrapper />
      <Group />
      <GroupWrapper />

      <Slider />
    </div>
  );
};


