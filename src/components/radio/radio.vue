<template>
  <label class="hn-radio" :data-disabled="disabled" :data-error="error">
    <span class="hn-radio--wrapper">
      <input
        v-bind="$attrs"
        v-model="modelValue"
        type="radio"
        class="hn-radio--input"
        :id="radioId"
        :name="radioGroup?.name ?? name"
        :disabled="disabled"
        :value="value ?? defaultValue"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="!!error"
        :aria-required="required"
      />
    </span>

    <span v-if="label" :id="labelId" class="hn-radio--label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'
import type { RadioEmits, RadioProps } from './radio'
import { useRadio } from './useRadio'

defineOptions({ name: 'HnRadio', inheritAttrs: false })

const emit = defineEmits<RadioEmits>()

const props = withDefaults(defineProps<RadioProps>(), {
  value: undefined
})

const { modelValue, radioGroup } = useRadio(props, { emit })

const defaultValue = 'on'

const radioId = `hn-radio-${useId()}`
const labelId = `hn-radio-label-${useId()}`

const ariaDescribedby = computed(() => {
  const ids = []
  if (props.error) ids.push(`hn-radio-error-${radioId}`)
  if (props.hint) ids.push(`hn-radio-hint-${radioId}`)
  return ids.length > 0 ? ids.join(' ') : undefined
})
</script>
