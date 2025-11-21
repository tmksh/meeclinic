import { Line } from ".";

export default {
  title: "Components/Line",
  component: Line,

  argTypes: {
    link: {
      options: ["white"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    link: "white",
    className: {},
    subtract: "/img/subtract-1.svg",
  },
};
