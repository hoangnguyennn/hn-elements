<template>
  <label class="hn-checkbox" :data-inderminate="indeterminate" :data-disabled="disabled" :data-error="error">
    <span class="hn-checkbox--wrapper">
      <input
        v-if="trueValue || falseValue"
        v-bind="$attrs"
        v-model="modelValue"
        type="checkbox"
        class="hn-checkbox--input"
        :indeterminate="indeterminate"
        :disabled="disabled"
        :true-value="trueValue ?? true"
        :false-value="falseValue ?? false"
        @change="handleChange"
      />
      <input
        v-else
        v-bind="$attrs"
        v-model="modelValue"
        type="checkbox"
        class="hn-checkbox--input"
        :indeterminate="indeterminate"
        :disabled="disabled"
        :value="value"
        @change="handleChange"
      />
      <i v-if="checked || indeterminate" class="hn-checkbox--mark">
        <ico-check v-if="checked" />
        <ico-indeterminate v-else-if="indeterminate" />
      </i>
    </span>
    <span class="hn-checkbox--label" v-if="label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { IcoCheck, IcoIndeterminate } from '@hn/assets/icons'
import { computed } from 'vue'
import { type CheckboxEmits, type CheckboxProps } from './checkbox'
import { useCheckbox } from './useCheckbox'

defineOptions({ name: 'HnCheckbox', inheritAttrs: false })

const emit = defineEmits<CheckboxEmits>()

const props = withDefaults(defineProps<CheckboxProps>(), {
  trueValue: undefined,
  falseValue: undefined,
  value: true,
  indeterminate: undefined,
  error: undefined,
  disabled: undefined
})

const { modelValue, indeterminate } = useCheckbox(props, { emit })

const checked = computed(() => {
  if (modelValue.value instanceof Array) {
    return modelValue.value.includes(props.value)
  }

  if (props.trueValue !== null && props.trueValue !== undefined) {
    return modelValue.value === props.trueValue
  }

  return !!modelValue.value
})

const handleChange = (event: Event): void => {
  emit('change', (event.target as HTMLInputElement).checked)
}
</script>
