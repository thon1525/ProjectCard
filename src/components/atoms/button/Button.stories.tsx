import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";


import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Sabaicode/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    colorScheme: "primary",
    size: "large",
    onClick: action("Click !"),
  },
  
};