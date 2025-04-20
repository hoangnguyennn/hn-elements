import { IcoSave } from '@hn/assets/icons'
import type { Meta, StoryObj } from '@storybook/vue3'
import HnStack from '../_stack'
import HnIcon from '../icon'
import type { ButtonSize, ButtonVariant } from './button'
import HnButton from './button.vue'

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

const ALL_VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'text']

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
        ${ALL_VARIANTS.map(variant => `<hn-button v-bind="args" variant="${variant}">Button</hn-button>`).join('\n')}
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

const ALL_SIZES: ButtonSize[] = ['small', 'medium', 'large']

/** Sử dụng thuộc tính `size` của `hn-button` để thay đổi kích thước của nó. */
export const Size: Story = {
  render: args => ({
    components: { HnButton, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="horizontal">
        ${ALL_SIZES.map(size => `<hn-button v-bind="args" size="${size}">Button</hn-button>`).join('\n')}
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
        ${ALL_VARIANTS.map(variant => `<hn-button v-bind="args" variant="${variant}" disabled>Button</hn-button>`).join('\n')}
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
  render: args => ({
    components: { HnButton, HnStack, HnIcon },
    setup() {
      return { args, IcoSave }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary">
          <template #leading>
            <hn-icon :as="IcoSave" />
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
      <hn-icon :as="IcoSave" />
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
  render: args => ({
    components: { HnButton, HnStack, HnIcon },
    setup() {
      return { args, IcoSave }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary">
          Button
          <template #trailing>
            <hn-icon :as="IcoSave" />
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
      <hn-icon :as="IcoSave" />
    </template>
  </hn-button>
</hn-stack>`
      }
    }
  }
}
