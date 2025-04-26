import { IcoCheck } from '@hn/assets/icons'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HnIconButton } from '.'

const meta: Meta<typeof HnIconButton> = {
  title: 'HnIconButton',
  component: HnIconButton
}

export default meta

type Story = StoryObj<typeof HnIconButton>

export const Cover: Story = {
  args: {
    as: IcoCheck
  },
  render: args => ({
    components: { HnIconButton },
    setup() {
      return { args }
    },
    template: '<HnIconButton v-bind="args" />'
  }),
  parameters: {
    docs: {
      source: {
        code: '<HnIconButton as={IcoCheck} />'
      }
    }
  }
}
