<template>
  <div class="hn-progress--bar">
    <div class="hn-progress--bar-wrapper">
      <div
        class="hn-progress--bar-inner"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
    <div v-if="showPercentage" class="hn-progress--bar-percentage">
      {{ percentage }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProgressBarProps } from './progress-bar'

defineOptions({ name: 'HnProgressBar' })

withDefaults(defineProps<ProgressBarProps>(), {})
</script>
