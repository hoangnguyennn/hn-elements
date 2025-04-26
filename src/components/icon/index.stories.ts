import { IcoCheck } from '@hn/assets/icons'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HnIcon } from '.'

const meta: Meta<typeof HnIcon> = {
  title: 'HnIcon',
  component: HnIcon
}

export default meta

type Story = StoryObj<typeof HnIcon>

export const Cover: Story = {
  args: {
    as: IcoCheck
  },
  render: args => ({
    components: { HnIcon },
    setup() {
      return { args }
    },
    template: '<HnIcon v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: '<HnIcon as={IcoCheck} />'
      }
    }
  }
}
