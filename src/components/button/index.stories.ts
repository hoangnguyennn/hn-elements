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
  })
}

const ALL_VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'text']

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
  })
}

const ALL_SIZES: ButtonSize[] = ['small', 'medium', 'large']

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
  })
}

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
  })
}

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
  })
}

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
  })
}
