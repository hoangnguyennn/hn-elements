<template>
  <div class="hn-progress--bar">
    <div
      class="hn-progress--bar-wrapper"
      role="progressbar"
      :aria-label="ariaLabel"
      :aria-describedby="ariaDescribedby"
      :aria-valuemin="0"
      :aria-valuemax="100"
      :aria-valuenow="clampedPercentage"
      :aria-valuetext="ariaValueText"
    >
      <div class="hn-progress--bar-inner" :style="{ width: `${clampedPercentage}%` }"></div>
    </div>
    <div v-if="showPercentage" :id="percentageId" class="hn-progress--bar-percentage" aria-live="polite">
      {{ percentage }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'
import type { ProgressBarProps } from './progress-bar'

defineOptions({ name: 'HnProgressBar' })

const props = withDefaults(defineProps<ProgressBarProps>(), {})

const clampedPercentage = computed(() => {
  const value = props.percentage
  return value < 0 ? 0 : value > 100 ? 100 : value
})

const percentageId = `hn-progress-percentage-${useId()}`

const ariaLabel = computed(() => props.ariaLabel || 'Thanh tiến trình')
const ariaDescribedby = computed(() => {
  const ids = []
  if (props.showPercentage) ids.push(percentageId)
  if (props.hint) ids.push(`hn-progress-hint-${percentageId}`)
  return ids.length > 0 ? ids.join(' ') : undefined
})
const ariaValueText = computed(() => props.ariaValueText || `${clampedPercentage.value}% hoàn thành`)
</script>
