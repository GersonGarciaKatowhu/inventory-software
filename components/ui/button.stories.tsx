import { Button } from "./button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';


const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "outline", "secondary", "ghost", "link", "destructive"],
      control: { type: "select" }
    }
  },
  args: {
    onClick: fn()
  }
} 

export default meta;

type Story = StoryObj<typeof meta>


export const Primary: Story = {
  args: {
    variant: "outline",
    children: "Button"
  }
}

