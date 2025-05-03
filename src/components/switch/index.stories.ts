import type { Meta, StoryObj } from '@storybook/vue3'
import { HnSwitch } from '.'

const meta: Meta<typeof HnSwitch> = {
  title: 'HnSwitch',
  component: HnSwitch
}

export default meta

type Story = StoryObj<typeof HnSwitch>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: `<hn-switch />`
      }
    }
  }
}

/** Sử dụng prop `show-label` của `hn-switch` để hiển thị label của trạng thái hiện tại. */
export const ShowLabel: Story = {
  args: {
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-switch show-label />`
      }
    }
  }
}

/** Sử dụng prop `disabled` của `hn-switch` để vô hiệu hoá nó. */
export const Disabled: Story = {
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-switch disabled />`
      }
    }
  }
}

export const CustomLabel: Story = {
  args: {
    showLabel: true,
    labelOn: 'Bật',
    labelOff: 'Tắt'
  },
  parameters: {
    docs: {
      source: {
        code: `<hn-switch show-label label-on="Bật" label-off="Tắt" />`
      }
    }
  }
}
