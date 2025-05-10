import type { Meta, StoryObj } from '@storybook/vue3'
import { HnPopover } from '.'
import { HnButton } from '../button'

const meta: Meta<typeof HnPopover> = {
  title: 'HnPopover',
  component: HnPopover,
  render: args => ({
    components: { HnPopover, HnButton },
    setup() {
      return {
        args
      }
    },
    template: `<hn-popover v-bind="args">
      <template #anchor>
        <hn-button>Hover me</hn-button>
      </template>
      <template #content>
        <p>This is a popover content</p>
        <p>This is a popover content</p>
      </template>
    </hn-popover>`
  })
}

export default meta

type Story = StoryObj<typeof HnPopover>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-popover>
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>`
      }
    }
  }
}

/** Sử dụng thuộc tính `arrow` của `hn-popover` để hiển thị ký hiệu arrow trên `hn-popover-content`. */
export const Arrow: Story = {
  args: {
    arrow: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-popover arrow>
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>`
      }
    }
  }
}

/** Sử dụng thuộc tính `placement` của `hn-popover` để thay đổi hướng của `hn-popover-content`. */
export const Placement: Story = {
  args: {
    placement: 'bottom-end'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-popover placement="bottom-end">
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>`
      }
    }
  }
}

/** Sử dụng thuộc tính `trigger` của `hn-popover` để thay đổi hành vi để mở `hn-popover-content`. */
export const Trigger: Story = {
  args: {
    trigger: 'click'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-popover trigger="click">
  <template #anchor>
    <hn-button>Click me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>`
      }
    }
  }
}
