import { Button } from "./button";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
} 

export default meta;

type Story = StoryObj<typeof meta>


export const Primary: Story = {
  args: {
    variant: "outline",
    children: "Button"
  }
}
