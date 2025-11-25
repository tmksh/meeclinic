import React from "react";
import { Header } from "../../components/Header";
import { TagPc } from "../../components/TagPc";
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
    <div className="bg-white w-full relative flex flex-col items-center overflow-x-hidden">
      <Header
        className="!fixed !left-0 !top-0 !z-50"
        divClassName="![white-space:unset]"
        divClassName1="![white-space:unset]"
        divClassName2="![white-space:unset]"
        divClassNameOverride="![white-space:unset]"
        logoGroup="/img/meeclinic-logo.png"
      />

      <img
        className="w-full relative z-40 mt-[66px] md:mt-[66px] xl:mt-[92px] translate-y-[1px] md:hidden"
        alt=""
        src="/img/Group 9341.svg"
      />

      {/* SP版: CtaWrapperを上に */}
      <div className="md:hidden w-full">
        <CtaWrapper className="!mt-0" hideButtons={true} />
      </div>
      
      {/* SP版: Fvを下に */}
      <div className="md:hidden w-full">
        <Fv className="!mt-0" />
      </div>
      
      {/* PC版: Fvを上に */}
      <div className="hidden md:block w-full">
        <Fv className="!mt-0 md:!mt-[66px] xl:!mt-[92px]" />
      </div>
      
      {/* PC版: CtaWrapperをFvの下に */}
      <div className="hidden md:block w-full">
        <CtaWrapper className="!mt-0" hideButtons={true} />
      </div>
      <Slider />
      <VerticalContainer />
      <Feature />
      <PricePlan />
      <Flow />
      <View />
      <Group />
      <GroupWrapper />
      <Voice />
      <QA />
      <ViewWrapper />
      <Frame />
      <Cta />
      <CtaWrapper />
      <FooterPc />
    </div>
  );
};
