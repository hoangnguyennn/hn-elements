import type { Meta, StoryObj } from '@storybook/vue3'
import type { AvatarSize } from './avatar'
import HnAvatar from './avatar.vue'

const meta: Meta<typeof HnAvatar> = {
  title: 'HnAvatar',
  component: HnAvatar,
  args: {
    name: 'hn',
    src: 'https://picsum.photos/200/200'
  }
}

export default meta

type Story = StoryObj<typeof HnAvatar>

export const Cover: Story = {}

const ALL_SIZES: AvatarSize[] = ['small', 'medium', 'large']

export const Size: Story = {
  args: {
    src: undefined
  },
  render: args => ({
    components: { HnAvatar },
    setup() {
      return { args }
    },
    template: `
      ${ALL_SIZES.map(size => `<hn-avatar v-bind="args" size="${size}" />`).join('\n')}
    `
  })
}
