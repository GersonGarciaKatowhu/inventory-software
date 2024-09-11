import { Meta, StoryObj } from "@storybook/react"
import SearchInput from "./SearchInput"

const meta: Meta<typeof SearchInput> = {
  title: "ui/SearchInput",
  component: SearchInput
}
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: "Search..."
  }
}
export const Secondary: Story = {}