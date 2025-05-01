import type { Meta, StoryObj } from '@storybook/vue3'
import HnCheckboxGroup from './checkbox-group.vue'
import HnCheckbox from './checkbox.vue'

const meta: Meta<typeof HnCheckboxGroup> = {
  title: 'HnCheckboxGroup',
  component: HnCheckboxGroup,
  args: {
    direction: 'vertical'
  }
}

export default meta

type Story = StoryObj<typeof HnCheckboxGroup>

export const Cover: Story = {
  render: args => ({
    components: { HnCheckboxGroup, HnCheckbox },
    setup() {
      return { args }
    },
    template: `<hn-checkbox-group v-bind="args">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-checkbox-group>
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>`
      }
    }
  }
}

/** Sử dụng thuộc tính `direction` của `hn-checkbox-group` để thay đổi hướng của nó. */
export const Direction: Story = {
  args: {
    direction: 'horizontal'
  },
  render: args => ({
    components: { HnCheckboxGroup, HnCheckbox },
    setup() {
      return { args }
    },
    template: `<hn-checkbox-group v-bind="args">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-checkbox-group direction="horizontal">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>`
      }
    }
  }
}
