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
  parameters: {
    docs: {
      source: {
        code: '<hn-icon-button as={IcoCheck} />'
      }
    }
  }
}
