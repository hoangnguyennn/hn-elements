import { IcoSave } from '@hn/assets/icons'
import { HnStack } from '@hn/components/_stack'
import { HnIcon } from '@hn/components/icon'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HnButton } from '.'

const meta: Meta<typeof HnButton> = {
  title: 'HnButton',
  component: HnButton
}

export default meta

type Story = StoryObj<typeof HnButton>

export const Cover: Story = {
  render: args => ({
    components: { HnButton },
    setup() {
      return { args }
    },
    template: `<hn-button v-bind="args">Button</hn-button>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-button>Button</hn-button>`
      }
    }
  }
}

/** Sử dụng thuộc tính `variant` của `hn-button` để thay đổi màu sắc của nó. */
export const Variant: Story = {
  argTypes: {
    variant: { control: false }
  },
  render: args => ({
    components: { HnButton, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary">Button</hn-button>
        <hn-button v-bind="args" variant="secondary">Button</hn-button>
        <hn-button v-bind="args" variant="text">Button</hn-button>
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="horizontal">
  <hn-button variant="primary">Button</hn-button>
  <hn-button variant="secondary">Button</hn-button>
  <hn-button variant="text">Button</hn-button>
</hn-stack>`
      }
    }
  }
}

/** Sử dụng thuộc tính `size` của `hn-button` để thay đổi kích thước của nó. */
export const Size: Story = {
  argTypes: {
    size: { control: false }
  },
  render: args => ({
    components: { HnButton, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" size="small">Button</hn-button>
        <hn-button v-bind="args" size="medium">Button</hn-button>
        <hn-button v-bind="args" size="large">Button</hn-button>
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="horizontal">
  <hn-button size="small">Button</hn-button>
  <hn-button size="medium">Button</hn-button>
  <hn-button size="large">Button</hn-button>
</hn-stack>`
      }
    }
  }
}

/** Sử dụng thuộc tính `disabled` của `hn-button` để vô hiệu hoá nó. */
export const Disabled: Story = {
  argTypes: {
    disabled: { control: false },
    variant: { control: false }
  },
  render: args => ({
    components: { HnButton, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary" disabled>Button</hn-button>
        <hn-button v-bind="args" variant="secondary" disabled>Button</hn-button>
        <hn-button v-bind="args" variant="text" disabled>Button</hn-button>
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="horizontal">
  <hn-button variant="primary" disabled>Button</hn-button>
  <hn-button variant="secondary" disabled>Button</hn-button>
  <hn-button variant="text" disabled>Button</hn-button>
</hn-stack>`
      }
    }
  }
}

/** Sử dụng slot `leading` trong `hn-button`. */
export const Leading: Story = {
  args: {
    variant: 'primary'
  },
  argTypes: {
    variant: { control: false }
  },
  render: args => ({
    components: { HnButton, HnStack, HnIcon },
    setup() {
      return { args, IcoSave }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-button v-bind="args">
          <template #leading>
            <hn-icon :as="IcoSave" ariaLabel="Save" />
          </template>
          Button
        </hn-button>
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="horizontal">
  <hn-button variant="primary">
    <template #leading>
      <hn-icon :as="IcoSave" ariaLabel="Save" />
    </template>
    Button
  </hn-button>
</hn-stack>`
      }
    }
  }
}

/** Sử dụng slot `trailing` trong `hn-button`. */
export const Trailing: Story = {
  args: {
    variant: 'primary'
  },
  argTypes: {
    variant: { control: false }
  },
  render: args => ({
    components: { HnButton, HnStack, HnIcon },
    setup() {
      return { args, IcoSave }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-button v-bind="args">
          Button
          <template #trailing>
            <hn-icon :as="IcoSave" ariaLabel="Save" />
          </template>
        </hn-button>
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="horizontal">
  <hn-button variant="primary">
    Button
    <template #trailing>
      <hn-icon :as="IcoSave" ariaLabel="Save" />
    </template>
  </hn-button>
</hn-stack>`
      }
    }
  }
}
