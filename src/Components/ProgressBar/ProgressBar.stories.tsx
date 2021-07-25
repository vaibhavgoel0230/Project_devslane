import "../../index.css";
import ProgressBar from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: { type: "range" },
    },
    height: {
      control: { type: "select" },
    },
  },
};

const Template = (args: any) => <ProgressBar {...args}></ProgressBar>;

export const main: any = Template.bind({});
main.args = {
  progress: 30,
  height: "medium",
};
