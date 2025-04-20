import type { Meta, StoryObj } from '@storybook/vue3'
import HnStack from '../_stack'
import type { AvatarSize } from './avatar'
import HnAvatar from './avatar.vue'

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
        code: `<hn-avatar name="hn" src="https://picsum.photos/200/200" />`
      }
    }
  }
}

const ALL_SIZES: AvatarSize[] = ['small', 'medium', 'large']

/** Sử dụng thuộc tính `size` của `hn-avatar` để thay đổi kích thước của nó. */
export const Size: Story = {
  args: {
    src: undefined
  },
  render: args => ({
    components: { HnAvatar, HnStack },
    setup() {
      return { args }
    },
    template: `
      <hn-stack direction="horizontal">
        ${ALL_SIZES.map(size => `<hn-avatar v-bind="args" size="${size}" />`).join('\n')}
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
