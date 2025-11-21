import { ElementWrapper } from ".";

export default {
  title: "Components/ElementWrapper",
  component: ElementWrapper,

  argTypes: {
    one: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "オンライン診療はこちら",
    one: "two",
    className: {},
  },
};
