import type { Meta, StoryObj } from '@storybook/vue3'
import { HnCollapse, HnCollapseItem } from '.'

const meta: Meta<typeof HnCollapse> = {
  title: 'HnCollapse',
  component: HnCollapse
}

export default meta

type Story = StoryObj<typeof HnCollapse>

export const Cover: Story = {
  render: args => ({
    components: { HnCollapse, HnCollapseItem },
    setup() {
      return { args }
    },
    template: `
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-collapse>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`
      }
    }
  }
}

/** Sử dụng thuộc tính accordion của `hn-collapse` để tạo accordion. */
export const Accordion: Story = {
  args: {
    accordion: true
  },
  argTypes: {
    accordion: { control: false }
  },
  render: args => ({
    components: { HnCollapse, HnCollapseItem },
    setup() {
      return { args }
    },
    template: `
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-collapse accordion>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`
      }
    }
  }
}
