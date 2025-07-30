<template>
  <button
    :ref="el => elementRef(el as HTMLButtonElement)"
    class="hn-tab"
    :class="{ active: modelValue === index }"
    role="tab"
    :aria-selected="modelValue === index"
    :aria-controls="panelId"
    :tabindex="modelValue === index ? 0 : -1"
    @click="onTabClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'
import { useTab } from './useTab'

defineOptions({ name: 'HnTab' })

const { modelValue, index, elementRef } = useTab()

const panelId = computed(() => `hn-tab-panel-${useId()}`)

const onTabClick = (): void => {
  modelValue.value = index.value
}
</script>
