import "../../index.css";
import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select" },
    },
  },
};

const Template = (args: any) => <Avatar {...args}></Avatar>;

export const main: any = Template.bind({});
main.args = {
  size: "medium",
  showlivePointer: true,
  isLive: true,
  rounded: true,
  showProfile: true,
};
