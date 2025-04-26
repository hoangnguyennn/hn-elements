import type { Meta, StoryObj } from '@storybook/vue3'
import { HnDatePicker } from '.'

const meta: Meta<typeof HnDatePicker> = {
  title: 'HnDatePicker',
  component: HnDatePicker
}

export default meta

type Story = StoryObj<typeof HnDatePicker>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-date-picker />`
      }
    }
  }
}
