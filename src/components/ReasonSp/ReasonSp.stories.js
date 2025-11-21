import { ReasonSp } from ".";

export default {
  title: "Components/ReasonSp",
  component: ReasonSp,

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
