import type { Meta, StoryObj } from '@storybook/vue3'
import { HnCalendar } from '.'

const meta: Meta<typeof HnCalendar> = {
  title: 'HnCalendar',
  component: HnCalendar
}

export default meta

type Story = StoryObj<typeof HnCalendar>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-calendar />`
      }
    }
  }
}

export const MinDate: Story = {
  args: {
    minDate: new Date(2025, 0, 5) // 2025-01-05
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-calendar :min-date="new Date(2025, 0, 5)" />`
      }
    }
  }
}

export const MaxDate: Story = {
  args: {
    maxDate: new Date(2025, 0, 5) // 2025-01-05
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-calendar :max-date="new Date(2025, 0, 5)" />`
      }
    }
  }
}
