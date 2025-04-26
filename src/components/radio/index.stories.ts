import type { Meta, StoryObj } from '@storybook/vue3'
import { HnRadio } from '.'

const meta: Meta<typeof HnRadio> = {
  title: 'HnRadio',
  component: HnRadio,
  args: {
    label: 'Label'
  }
}

export default meta

type Story = StoryObj<typeof HnRadio>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-radio label="Label" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `disabled` của `hn-radio` để vô hiệu hoá nó. */
export const Disabled: Story = {
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-radio label="Label" disabled />`
      }
    }
  }
}

/** Sử dụng thuộc tính `error` của `hn-radio` để hiển thị trạng thái lỗi. */
export const Error: Story = {
  args: {
    error: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-radio label="Label" error />`
      }
    }
  }
}
