<template>
  <label class="hn-radio" :data-disabled="disabled" :data-error="error">
    <span class="hn-radio--wrapper">
      <input
        v-bind="$attrs"
        v-model="modelValue"
        type="radio"
        class="hn-radio--input"
        :name="radioGroup?.name ?? name"
        :disabled="disabled"
        :value="value ?? defaultValue"
      />
    </span>

    <span class="hn-radio--label" v-if="label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import type { RadioEmits, RadioProps } from './radio'
import { useRadio } from './useRadio'

defineOptions({ name: 'HnRadio', inheritAttrs: false })

const emit = defineEmits<RadioEmits>()

const props = withDefaults(defineProps<RadioProps>(), {
  value: undefined
})

const { modelValue, radioGroup } = useRadio(props, { emit })

const defaultValue = 'on'
</script>
