import { ReasonPc } from ".";

export default {
  title: "Components/ReasonPc",
  component: ReasonPc,

  argTypes: {
    one: {
      options: ["reason-2", "reason-1", "reason-5", "reason-4", "reason-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    one: "reason-2",
    className: {},
  },
};
