import type { Meta, StoryObj } from '@storybook/vue3'
import { HnTab, HnTabGroup } from '.'

const meta: Meta<typeof HnTabGroup> = {
  title: 'HnTabs',
  component: HnTabGroup
}

export default meta

type Story = StoryObj<typeof HnTabGroup>

export const Cover: Story = {
  render: args => ({
    components: { HnTab, HnTabGroup },
    setup() {
      return { args }
    },
    template: `
      <hn-tab-group v-bind="args">
        <hn-tab>Tab 1</hn-tab>
        <hn-tab>Tab 2</hn-tab>
        <hn-tab>Tab 3</hn-tab>
      </hn-tab-group>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-tab-group>
  <hn-tab>Tab 1</hn-tab>
  <hn-tab>Tab 2</hn-tab>
  <hn-tab>Tab 3</hn-tab>
</hn-tab-group>`
      }
    }
  }
}

/** Sử dụng thuộc tính `direction` của `hn-tab`group` để đổi hướng của nó. */
export const Direction: Story = {
  args: {
    direction: 'vertical'
  },
  render: args => ({
    components: { HnTab, HnTabGroup },
    setup() {
      return { args }
    },
    template: `
      <hn-tab-group v-bind="args">
        <hn-tab>Tab 1</hn-tab>
        <hn-tab>Tab 2</hn-tab>
        <hn-tab>Tab 3</hn-tab>
      </hn-tab-group>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-tab-group direction="vertical">
  <hn-tab>Tab 1</hn-tab>
  <hn-tab>Tab 2</hn-tab>
  <hn-tab>Tab 3</hn-tab>
</hn-tab-group>`
      }
    }
  }
}
