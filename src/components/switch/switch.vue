<template>
  <div class="hn-switch" :data-on="modelValue" :data-disabled="disabled" :data-show-label="showLabel">
    <span v-if="showLabel" :id="labelId" class="hn-switch--label">{{ label }}</span>
    <input
      v-model="modelValue"
      type="checkbox"
      class="hn-switch--input"
      :id="switchId"
      :disabled="disabled"
      :aria-label="ariaLabel"
      :aria-describedby="ariaDescribedby"
      :aria-labelledby="showLabel ? labelId : undefined"
      role="switch"
      :aria-checked="modelValue"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'
import type { SwitchProps } from './switch'

defineOptions({ name: 'HnSwitch' })

const modelValue = defineModel<boolean>()

const props = withDefaults(defineProps<SwitchProps>(), {
  showLabel: false,
  labelOn: 'On',
  labelOff: 'Off'
})

const label = computed(() => (modelValue.value ? props.labelOn : props.labelOff))

const switchId = `hn-switch-${useId()}`
const labelId = `hn-switch-label-${useId()}`

const ariaLabel = computed(() => props.ariaLabel || `Chuyển đổi ${label.value}`)
const ariaDescribedby = computed(() => {
  const ids = []
  if (props.hint) ids.push(`hn-switch-hint-${switchId}`)
  return ids.length > 0 ? ids.join(' ') : undefined
})
</script>
