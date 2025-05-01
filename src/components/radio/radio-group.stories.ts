import type { Meta, StoryObj } from '@storybook/vue3'
import { HnRadio, HnRadioGroup } from '.'

const meta: Meta<typeof HnRadioGroup> = {
  title: 'HnRadioGroup',
  component: HnRadioGroup
}

export default meta

type Story = StoryObj<typeof HnRadioGroup>

export const Cover: Story = {
  render: args => ({
    components: { HnRadioGroup, HnRadio },
    setup() {
      return { args }
    },
    template: `
      <hn-radio-group v-bind="args">
        <hn-radio label="Option 1" value="1" />
        <hn-radio label="Option 2" value="2" />
        <hn-radio label="Option 3" value="3" />
      </hn-radio-group>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-radio-group>
  <hn-radio label="Option 1" value="1" />
  <hn-radio label="Option 2" value="2" />
  <hn-radio label="Option 3" value="3" />
</hn-radio-group>`
      }
    }
  }
}

/** Sử dụng thuộc tính `direction` của `hn-radio-group` để thay đổi hướng của nó. */
export const Direction: Story = {
  args: {
    direction: 'horizontal'
  },
  render: args => ({
    components: { HnRadioGroup, HnRadio },
    setup() {
      return { args }
    },
    template: `
      <hn-radio-group v-bind="args">
        <hn-radio label="Option 1" value="1" />
        <hn-radio label="Option 2" value="2" />
        <hn-radio label="Option 3" value="3" />
      </hn-radio-group>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-radio-group direction="horizontal">
  <hn-radio label="Option 1" value="1" />
  <hn-radio label="Option 2" value="2" />
  <hn-radio label="Option 3" value="3" />
</hn-radio-group>`
      }
    }
  }
}
