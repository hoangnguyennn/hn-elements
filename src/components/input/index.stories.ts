import { HnStack } from '@hn/components/_stack'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HnInput } from '.'

const meta: Meta<typeof HnInput> = {
  title: 'HnInput',
  component: HnInput
}

export default meta

type Story = StoryObj<typeof HnInput>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: '<hn-input />'
      }
    }
  }
}

/** Sử dụng thuộc tính `size` của `hn-input` để thay đổi kích thước của nó. */
export const Size: Story = {
  argTypes: {
    size: { control: false },
    label: { control: false },
    placeholder: { control: false }
  },
  render: args => ({
    components: { HnInput, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="vertical">
        <hn-input v-bind="args" size="small" label="Small" placeholder="Small" />
        <hn-input v-bind="args" size="normal" label="Normal" placeholder="Normal" />
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="vertical">
  <hn-input size="small" label="Small" placeholder="Small" />
  <hn-input size="normal" label="Normal" placeholder="Normal" />
</hn-stack>`
      }
    }
  }
}

/** Sử dụng thuộc tính `label` của `hn-input` để thay đổi label của nó. */
export const Label: Story = {
  args: {
    label: 'Label',
    placeholder: 'Label'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-input label="Label" placeholder="Label" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `hint` của `hn-input` để thay đổi hint của nó. */
export const Hint: Story = {
  args: {
    hint: 'Hint',
    placeholder: 'Hint'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-input hint="Hint" placeholder="Hint" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `error` của `hn-input` để thay đổi error của nó. */
export const Error: Story = {
  args: {
    error: 'Error',
    placeholder: 'Error'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-input error="Error" placeholder="Error" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `disabled` của `hn-input` để vô hiệu hoá nó. */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-input disabled placeholder="Disabled" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `clearable` của `hn-input` để cho phép xóa nội dung. */
export const Clearable: Story = {
  args: {
    clearable: true,
    placeholder: 'Clearable'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-input clearable placeholder="Clearable" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `password` của `hn-input` để sử dụng chế độ nhập mật khẩu. */
export const Password: Story = {
  args: {
    password: true,
    placeholder: 'Password'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-input password placeholder="Password" />`
      }
    }
  }
}
