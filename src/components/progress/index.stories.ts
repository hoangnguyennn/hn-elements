import type { Meta, StoryObj } from '@storybook/vue3'
import { HnProgress } from '.'
import { HnStack } from '../_stack'

const meta: Meta<typeof HnProgress> = {
  title: 'HnProgress',
  component: HnProgress,
  args: {
    percentage: 67
  }
}

export default meta

type Story = StoryObj<typeof HnProgress>

export const Cover: Story = {
  parameters: {
    docs: {
      source: {
        code: '<hn-progress :percentage="67" />'
      }
    }
  }
}

/** Sử dụng thuộc tính `size` của `hn-progress` để thay đổi kích thước của nó. */
export const Size: Story = {
  render: () => ({
    components: { HnProgress, HnStack },
    template: `<hn-stack>
  <hn-progress :percentage="67" size="small" />
  <hn-progress :percentage="67" size="normal" />
</hn-stack>`
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-stack>
  <hn-progress :percentage="67" size="small" />
  <hn-progress :percentage="67" size="normal" />
</hn-stack>`
      }
    }
  }
}

/** Sử dụng thuộc tính `show-percentage` của `hn-progress` để hiển thị phần trăm. */
export const ShowPercentage: Story = {
  args: {
    showPercentage: true
  },
  parameters: {
    docs: {
      source: {
        code: '<hn-progress :percentage="67" show-percentage />'
      }
    }
  }
}

export const CircleProgress: Story = {
  args: {
    variant: 'circle',
    showPercentage: true
  },
  parameters: {
    docs: {
      source: {
        code: '<hn-progress :percentage="67" variant="circle" show-percentage />'
      }
    }
  }
}
