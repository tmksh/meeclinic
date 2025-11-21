import { FlowSp } from ".";

export default {
  title: "Components/FlowSp",
  component: FlowSp,

  argTypes: {
    one: {
      options: ["flow2", "flow3", "flow1", "flow4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    one: "flow2",
    className: {},
  },
};
