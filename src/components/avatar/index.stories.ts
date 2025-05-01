import type { Meta, StoryObj } from '@storybook/vue3'
import { HnAvatar } from '.'
import { HnStack } from '../_stack'

const meta: Meta<typeof HnAvatar> = {
  title: 'HnAvatar',
  component: HnAvatar,
  args: {
    name: 'hn',
    src: 'https://picsum.photos/200/200',
    size: 'medium'
  }
}

export default meta

type Story = StoryObj<typeof HnAvatar>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-avatar name="hn" src="https://picsum.photos/200/200" size="medium" />`
      }
    }
  }
}

/** Sử dụng thuộc tính `size` của `hn-avatar` để thay đổi kích thước của nó. */
export const Size: Story = {
  args: {
    src: undefined
  },
  argTypes: {
    size: {
      control: false
    }
  },
  render: args => ({
    components: { HnAvatar, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="horizontal">
        <hn-avatar v-bind="args" size="small" />
        <hn-avatar v-bind="args" size="medium" />
        <hn-avatar v-bind="args" size="large" />
      </hn-stack>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack direction="horizontal">
  <hn-avatar name="hn" size="small" />
  <hn-avatar name="hn" size="medium" />
  <hn-avatar name="hn" size="large" />
</hn-stack>
        `
      }
    }
  }
}
