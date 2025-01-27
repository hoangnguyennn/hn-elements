<template>
  <button
    class="hn-button"
    :disabled="disabled"
    :data-variant="variant"
    :data-size="size"
    :data-disabled="disabled"
    :data-has-icon="!!$slots.leadingIcon || !!$slots.trailingIcon"
  >
    <slot name="leadingIcon"></slot>
    <slot></slot>
    <slot name="trailingIcon"></slot>
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
