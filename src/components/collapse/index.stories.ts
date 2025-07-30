import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
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

/** Sử dụng v-model để chỉ định trạng thái ban đầu của các collapse items. */
export const WithInitialState: Story = {
  render: args => ({
    components: { HnCollapse, HnCollapseItem },
    setup() {
      const modelValue = ref([0, 2]) // Mở item đầu tiên và item thứ 3
      return { args, modelValue }
    },
    template: `
      <hn-collapse v-model="modelValue" v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const modelValue = ref([0, 2]) // Mở item đầu tiên và item thứ 3
</script>

<hn-collapse v-model="modelValue">
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`
      }
    }
  }
}

/** Sử dụng v-model với accordion mode. */
export const AccordionWithInitialState: Story = {
  args: {
    accordion: true
  },
  argTypes: {
    accordion: { control: false }
  },
  render: args => ({
    components: { HnCollapse, HnCollapseItem },
    setup() {
      const modelValue = ref([1]) // Mở item thứ 2
      return { args, modelValue }
    },
    template: `
      <hn-collapse v-model="modelValue" v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const modelValue = ref([1]) // Mở item thứ 2
</script>

<hn-collapse v-model="modelValue" accordion>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`
      }
    }
  }
}
