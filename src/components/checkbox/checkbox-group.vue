<template>
  <div class="hn-checkbox-group" :data-direction="direction">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, watch } from 'vue'
import {
  type CheckboxGroupProps,
  type CheckboxGroupContext,
  type CheckboxGroupValue,
  type CheckboxGroupEmits,
  CHECKBOX_GROUP_KEY
} from './checkbox-group'

defineOptions({ name: 'HnCheckboxGroup' })

const modelValue = defineModel<CheckboxGroupValue>({ default: [] })

const emit = defineEmits<CheckboxGroupEmits>()

withDefaults(defineProps<CheckboxGroupProps>(), {
  direction: 'vertical'
})

provide<CheckboxGroupContext>(CHECKBOX_GROUP_KEY, {
  modelValue
})

watch(modelValue, modelValue => {
  emit('change', modelValue)
})
</script>
