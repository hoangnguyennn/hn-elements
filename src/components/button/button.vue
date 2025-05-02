<template>
  <button
    class="hn-button"
    :disabled="disabled"
    :data-variant="variant"
    :data-size="size"
    :data-disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot name="leading"></slot>
    <slot></slot>
    <slot name="trailing"></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonEmits, ButtonProps, ButtonSlots } from './button'

defineOptions({ name: 'HnButton' })

defineEmits<ButtonEmits>()

defineSlots<ButtonSlots>()

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium'
})
</script>
