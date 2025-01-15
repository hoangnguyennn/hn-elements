<template>
  <div
    class="hn-switch"
    :data-on="modelValue"
    :data-disabled="disabled"
    :data-show-label="showLabel"
  >
    <span v-if="showLabel" class="hn-switch--label">{{ label }}</span>
    <input
      v-model="modelValue"
      type="checkbox"
      class="hn-switch--input"
      :disabled="disabled"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HnSwitchProps } from './switch'

defineOptions({ name: 'HnSwitch' })

const modelValue = defineModel<boolean>()

withDefaults(defineProps<HnSwitchProps>(), {
  showLabel: false
})

const label = computed(() => (modelValue.value ? 'On' : 'Off'))
</script>
