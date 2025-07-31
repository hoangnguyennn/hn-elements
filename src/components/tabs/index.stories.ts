import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
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

/** Sử dụng `v-model` để gán tab được chọn. Giá trị là index của tab (bắt đầu từ 0). */
export const SelectedTab: Story = {
  render: args => ({
    components: { HnTab, HnTabGroup },
    setup() {
      const selectedTab = ref(1) // Tab thứ 2 (index = 1)
      return { args, selectedTab }
    },
    template: `
      <div>
        <p>Selected tab index: {{ selectedTab }}</p>
        <hn-tab-group v-model="selectedTab" v-bind="args">
          <hn-tab>Tab 1</hn-tab>
          <hn-tab>Tab 2</hn-tab>
          <hn-tab>Tab 3</hn-tab>
        </hn-tab-group>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
  <div>
    <p>Selected tab index: {{ selectedTab }}</p>
    <hn-tab-group v-model="selectedTab">
      <hn-tab>Tab 1</hn-tab>
      <hn-tab>Tab 2</hn-tab>
      <hn-tab>Tab 3</hn-tab>
    </hn-tab-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedTab = ref(1) // Tab thứ 2 (index = 1)
</script>`
      }
    }
  }
}
