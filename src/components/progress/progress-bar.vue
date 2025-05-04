<template>
  <div class="hn-progress--bar">
    <div class="hn-progress--bar-wrapper">
      <div class="hn-progress--bar-inner" :style="{ width: `${clampedPercentage}%` }"></div>
    </div>
    <div v-if="showPercentage" class="hn-progress--bar-percentage">{{ percentage }}%</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressBarProps } from './progress-bar'

defineOptions({ name: 'HnProgressBar' })

const props = withDefaults(defineProps<ProgressBarProps>(), {})

const clampedPercentage = computed(() => {
  const value = props.percentage
  return value < 0 ? 0 : value > 100 ? 100 : value
})
</script>
