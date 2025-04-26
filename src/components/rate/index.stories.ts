import type { Meta, StoryObj } from '@storybook/vue3'
import { HnRate } from '.'

const meta: Meta<typeof HnRate> = {
  title: 'HnRate',
  component: HnRate
}

export default meta

type Story = StoryObj<typeof HnRate>

export const Cover: Story = {
  args: {
    modelValue: 3
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-rate :model-value="3" />`
      }
    }
  }
}

/**
 * Sử dụng thuộc tính `clearable` của `hn-rate` để cho phép xóa giá trị. Click
 * vào ngôi sao hiện tại để xoá giá trị.
 */
export const Clearable: Story = {
  args: {
    modelValue: 3,
    clearable: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-rate :model-value="3" clearable />`
      }
    }
  }
}
