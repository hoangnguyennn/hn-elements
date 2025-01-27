<template>
  <div class="hn-progress" :data-value="percentage" :data-size="size">
    <hn-progress-bar
      v-if="variant === 'bar'"
      :percentage="percentage"
      :show-percentage="showPercentage"
    />
    <hn-progress-circle
      v-else
      :percentage="percentage"
      :size="size"
      :show-percentage="showPercentage"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProgressProps } from './progress'
import HnProgressBar from './progress-bar.vue'
import HnProgressCircle from './progress-circle.vue'

defineOptions({ name: 'HnProgress' })

withDefaults(defineProps<ProgressProps>(), {
  variant: 'bar',
  size: 'normal',
  percentage: 0,
  showPercentage: false
})
</script>
