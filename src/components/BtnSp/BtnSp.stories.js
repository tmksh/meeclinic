import { BtnSp } from ".";

export default {
  title: "Components/BtnSp",
  component: BtnSp,

  argTypes: {
    one: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "オンライン診療はこちら",
    2: "薬品カタログページへ",
    3: "お申し込みはこちら",
    one: "one",
    className: {},
  },
};
