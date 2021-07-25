import "../../index.css";
import { FiLock, FiUser, FiAtSign } from "react-icons/fi";
import Input from "./Input";

const icons = { FiLock, FiUser, FiAtSign };

export default {
  title: "Input",
  component: Input,
  argTypes: {
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
};

const Template = (args: any) => <Input {...args}></Input>;

export const main: any = Template.bind({});
main.args = {
  placeholder: "Password",
};
