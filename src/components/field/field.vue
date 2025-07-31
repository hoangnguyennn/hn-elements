<template>
  <div class="hn-field" :data-size="size" :data-error="!!error" :data-disabled="disabled">
    <label v-if="label" :for="inputId" class="hn-field--label">{{ label }}</label>

    <slot></slot>

    <div class="hn-field--details">
      <span v-if="error" :id="errorId" class="hn-field--error" role="alert" aria-live="polite">{{ error }}</span>
      <span v-else-if="hint" :id="hintId" class="hn-field--hint">{{ hint }}</span>

      <slot name="detailRight"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'
import type { FieldProps, FieldSlots } from './field'

defineOptions({ name: 'HnField' })

defineSlots<FieldSlots>()

const props = withDefaults(defineProps<FieldProps>(), { size: 'normal' })

const fieldId = useId()
const inputId = computed(() => props.id || `hn-field-${fieldId}`)
const errorId = computed(() => `hn-field-error-${fieldId}`)
const hintId = computed(() => `hn-field-hint-${fieldId}`)
</script>
