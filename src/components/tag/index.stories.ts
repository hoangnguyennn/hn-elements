import { HnStack } from '@hn/components/_stack'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HnTag } from '.'

const meta: Meta<typeof HnTag> = {
  title: 'HnTag',
  component: HnTag,
  render: args => ({
    components: { HnTag },
    setup() {
      return { args }
    },
    template: '<hn-tag v-bind="args">Tag</hn-tag>'
  })
}

export default meta

type Story = StoryObj<typeof HnTag>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-tag>Tag</hn-tag>`
      }
    }
  }
}

export const Size: Story = {
  argTypes: {
    size: { control: false }
  },
  render: args => ({
    components: { HnTag, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-tag v-bind="args" size="small">Small</hn-tag>
        <hn-tag v-bind="args" size="medium">Medium</hn-tag>
        <hn-tag v-bind="args" size="large">Large</hn-tag>
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="horizontal">
  <hn-tag size="small">Small</hn-tag>
  <hn-tag size="medium">Medium</hn-tag>
  <hn-tag size="large">Large</hn-tag>
</hn-stack>`
      }
    }
  }
}

export const Closeable: Story = {
  args: {
    closeable: true
  },
  argTypes: {
    size: { control: false }
  },
  render: args => ({
    components: { HnTag, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-tag v-bind="args" size="small">Small</hn-tag>
        <hn-tag v-bind="args" size="medium">Medium</hn-tag>
        <hn-tag v-bind="args" size="large">Large</hn-tag>
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="horizontal">
  <hn-tag closeable size="small">Small</hn-tag>
  <hn-tag closeable size="medium">Medium</hn-tag>
  <hn-tag closeable size="large">Large</hn-tag>
</hn-stack>`
      }
    }
  }
}
