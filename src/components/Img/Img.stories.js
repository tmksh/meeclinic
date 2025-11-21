import { Img } from ".";

export default {
  title: "Components/Img",
  component: Img,

  argTypes: {
    one: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    one: "two",
    elementClassName: {},
    element: "/img/1.svg",
    maskGroupClassName: {},
    maskGroup: "/img/mask-group.png",
    img: "/img/mask-group-1.png",
  },
};
