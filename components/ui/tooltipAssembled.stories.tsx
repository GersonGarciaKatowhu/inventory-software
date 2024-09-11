import { Meta, StoryObj } from "@storybook/react"
import TooltipAssembled from "./tooltipAssembled"

const meta: Meta<typeof TooltipAssembled> = {
  title: "ui/tooltipAssembled",
  component: TooltipAssembled
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    tooltip: "Quick create",
    children: <button>Tengo un tooltip</button>
  }
}