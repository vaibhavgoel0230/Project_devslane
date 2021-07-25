import Button from "./Button";
import "../../index.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
};

const Template = (args: any) => <Button {...args}></Button>;

export const main: any = Template.bind({});
main.args = {
  children: "Sign in",
  buttonStyle: "default",
  theme: "Primary",
  rounded: false,
};
