<template>
  <button
    :ref="el => elementRef(el as HTMLButtonElement)"
    class="hn-tab"
    :class="{ active: modelValue === index }"
    @click="onTabClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useTab } from './useTab'

defineOptions({ name: 'HnTab' })

const { modelValue, index, elementRef } = useTab()

const onTabClick = (): void => {
  modelValue.value = index.value
}
</script>
