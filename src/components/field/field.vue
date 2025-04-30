<template>
  <div class="hn-field" :data-size="size" :data-error="!!error" :data-disabled="disabled">
    <label v-if="label" class="hn-field--label">{{ label }}</label>

    <slot></slot>

    <div class="hn-field--details">
      <span v-if="error" class="hn-field--error">{{ error }}</span>
      <span v-else-if="hint" class="hn-field--hint">{{ hint }}</span>

      <slot name="detailRight"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FieldProps, FieldSlots } from './field'

defineOptions({ name: 'HnField' })

defineSlots<FieldSlots>()

withDefaults(defineProps<FieldProps>(), { size: 'normal' })
</script>
