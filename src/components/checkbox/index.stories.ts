import type { Meta, StoryObj } from '@storybook/vue3'
import HnCheckbox from './checkbox.vue'

const meta: Meta<typeof HnCheckbox> = {
  title: 'HnCheckbox',
  component: HnCheckbox,
  args: {
    label: 'Label'
  }
}

export default meta

type Story = StoryObj<typeof HnCheckbox>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-checkbox label="Label" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `disabled` của `hn-checkbox` để vô hiệu hoá nó. */
export const Disabled: Story = {
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-checkbox label="Label" disabled />`
      }
    }
  }
}

/** Sử dụng thuộc tính `error` của `hn-checkbox` để hiển thị trạng thái lỗi. */
export const Error: Story = {
  args: {
    error: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-checkbox label="Label" error />`
      }
    }
  }
}

/** Sử dụng thuộc tính `indeterminate` của `hn-checkbox` để hiển thị trạng thái không xác định. */
export const Indeterminate: Story = {
  args: {
    indeterminate: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-checkbox label="Label" indeterminate />`
      }
    }
  }
}
