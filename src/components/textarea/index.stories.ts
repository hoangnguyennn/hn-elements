import type { Meta, StoryObj } from '@storybook/vue3'
import { HnTextarea } from '.'
import { HnStack } from '../_stack'

const meta: Meta<typeof HnTextarea> = {
  title: 'HnTextarea',
  component: HnTextarea
}

export default meta

type Story = StoryObj<typeof HnTextarea>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-textarea />`
      }
    }
  }
}

/** Sử dụng thuộc tính `size` của `hn-textarea` để thay đổi kích thước của nó. */
export const Size: Story = {
  render: args => ({
    components: { HnTextarea, HnStack },
    setup() {
      return { args }
    },
    template: `<hn-stack direction="vertical">
  <hn-textarea size="small" placeholder="Small" />
  <hn-textarea size="normal" placeholder="Normal" />
</hn-stack>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="vertical">
  <hn-textarea size="small" placeholder="Small" />
  <hn-textarea size="normal" placeholder="Normal" />
</hn-stack>`
      }
    }
  }
}

/** Sử dụng thuộc tính `label` của `hn-textarea` để thay đổi label của nó. */
export const Label: Story = {
  args: {
    label: 'Label',
    placeholder: 'Label'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-textarea label="Label" placeholder="Label" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `hint` của `hn-textarea` để thay đổi hint của nó. */
export const Hint: Story = {
  args: {
    label: 'Label',
    hint: 'Hint',
    placeholder: 'Hint'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-textarea label="Label" hint="Hint" placeholder="Hint" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `error` của `hn-textarea` để thay đổi error của nó. */
export const Error: Story = {
  args: {
    label: 'Label',
    error: 'Error',
    placeholder: 'Error'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-textarea label="Label" error="Error" placeholder="Error" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `disabled` của `hn-textarea` để vô hiệu hoá nó. */
export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
    placeholder: 'Disabled'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-textarea label="Label" disabled placeholder="Disabled" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `showCounter` của `hn-textarea` để hiển thị counter của nó. */
export const Counter: Story = {
  args: {
    label: 'Label',
    showCounter: true,
    placeholder: 'Counter'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-textarea label="Label" :max-length="10" show-counter placeholder="Counter" />`
      }
    }
  }
}
