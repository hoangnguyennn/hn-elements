import { HnButton } from '@hn/components/button'
import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { HnModal } from '.'

const meta: Meta<typeof HnModal> = {
  title: 'HnModal',
  component: HnModal,
  args: {
    width: 'medium'
  }
}

export default meta

type Story = StoryObj<typeof HnModal>

export const Cover: Story = {
  render: args => ({
    components: { HnModal, HnButton },
    setup() {
      const modalValue = ref(false)
      return { args, modalValue }
    },
    template: `
      <hn-button @click="modalValue = true">Open</hn-button>
      <hn-modal v-bind="args" v-model="modalValue">
        <template #header>Header</template>
        <template #body>Body</template>
      </hn-modal>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<hn-button @click="modalValue = true">Open</hn-button>
<hn-modal v-model="modalValue" width="medium">
  <template #header>Header</template>
  <template #body>Body</template>
</hn-modal>`
      }
    }
  }
}
