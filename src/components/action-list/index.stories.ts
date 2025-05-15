import type { Meta, StoryObj } from '@storybook/vue3'
import { HnActionList, HnActionListItem } from '.'

const meta: Meta<typeof HnActionList> = {
  title: 'HnActionList',
  component: HnActionList
}

export default meta

type Story = StoryObj<typeof HnActionList>

export const Cover: Story = {
  render: args => ({
    components: { HnActionList, HnActionListItem },
    setup() {
      return { args }
    },
    template: `<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-action-list>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`
      }
    }
  }
}

export const Multiple: Story = {
  args: {
    multiple: true
  },
  render: args => ({
    components: { HnActionList, HnActionListItem },
    setup() {
      return { args }
    },
    template: `<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-action-list multiple>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`
      }
    }
  }
}

export const Selected: Story = {
  render: args => ({
    components: { HnActionList, HnActionListItem },
    setup() {
      return { args }
    },
    template: `<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-action-list>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`
      }
    }
  }
}

export const SelectedMultiple: Story = {
  args: {
    multiple: true
  },
  render: args => ({
    components: { HnActionList, HnActionListItem },
    setup() {
      return { args }
    },
    template: `<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item selected>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-action-list multiple>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item selected>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`
      }
    }
  }
}
