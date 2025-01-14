<template>
  <div class="hn-radio-group" :data-direction="direction">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, watch } from 'vue'
import {
  RADIO_GROUP_KEY,
  type RadioGroupContext,
  type RadioGroupEmits,
  type RadioGroupProps
} from './radio-group'
import type { RadioValue } from './radio'

defineOptions({ name: 'HnRadioGroup' })

const modelValue = defineModel<RadioValue>({ default: false })

const emit = defineEmits<RadioGroupEmits>()

const props = withDefaults(defineProps<RadioGroupProps>(), {
  direction: 'vertical'
})

provide<RadioGroupContext>(RADIO_GROUP_KEY, { modelValue, name: props.name })

watch(modelValue, modelValue => {
  emit('change', modelValue)
})
</script>
