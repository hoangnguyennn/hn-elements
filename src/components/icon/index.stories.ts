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
  parameters: {
    docs: {
      source: {
        code: '<hn-icon as={IcoCheck} />'
      }
    }
  }
}
