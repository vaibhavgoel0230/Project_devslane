import "../../index.css";
import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

const Template = (args: any) => <Alert {...args}></Alert>;

export const main: any = Template.bind({});
main.args = {
  theme: "Primary",
  alertStyle: "default",
  children: "Lorem Ipsum is simply dummy text of the printing.",
  title: "Warning! ",
};
