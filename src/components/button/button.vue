<template>
  <button
    class="hn-button"
    :disabled="disabled"
    :data-variant="variant"
    :data-size="size"
    :data-disabled="disabled"
  >
    <slot name="leading"></slot>
    <slot></slot>
    <slot name="trailing"></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonSlots } from './button'

defineOptions({ name: 'HnButton' })

defineSlots<ButtonSlots>()

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium'
})
</script>
