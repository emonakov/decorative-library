import { Story, Meta } from "@storybook/react/types-6-0";

import Toggle, { ToggleProps } from "../shared/components/Toggle";

export default {
  title: "components/Toggle",
  component: Toggle,
  argTypes: {
    onChange: { action: "switched" },
    checked: {
      control: {
        options: [true, false],
      },
    },
  },
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const ToggleSwitch = Template.bind({});

export const ToggleOn = Template.bind({});
ToggleOn.args = {
  checked: true,
};
