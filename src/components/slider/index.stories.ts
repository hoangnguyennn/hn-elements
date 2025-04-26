import type { Meta, StoryObj } from '@storybook/vue3'
import { HnSlider } from '.'

const meta: Meta<typeof HnSlider> = {
  title: 'HnSlider',
  component: HnSlider,
  args: {
    modelValue: 50
  }
}

export default meta

type Story = StoryObj<typeof HnSlider>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-slider />`
      }
    }
  }
}

/** Sử dụng thuộc tính `with-label` của `hn-slider` để hiển thị giá trị nhãn. */
export const WithLabel: Story = {
  args: {
    withLabel: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-slider with-label />`
      }
    }
  }
}
