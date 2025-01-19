<template>
  <div class="hn-progress--circle">
    <svg :width="width" :height="width" :viewBox="`0 0 ${width} ${width}`">
      <circle
        class="hn-progress--circle-background"
        :cx="centerOfCircle"
        :cy="centerOfCircle"
        :r="radius"
      />
      <circle
        class="hn-progress--circle-current"
        :cx="centerOfCircle"
        :cy="centerOfCircle"
        :r="radius"
        :style="{ strokeDashoffset: strokeDashoffset }"
      />
    </svg>
    <span v-if="showPercentage" class="hn-progress--circle-percentage">
      {{ percentage }}%
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressCircleProps } from './progress-circle'

defineOptions({ name: 'HnProgressCircle' })

const props = withDefaults(defineProps<ProgressCircleProps>(), {
  size: 'normal',
  showPercentage: false
})

/** Kích thước progress */
const width = computed(() => (props.size === 'small' ? 84 : 140))
/** Tâm vòng tròn */
const centerOfCircle = computed(() => (props.size === 'small' ? 42 : 70))
/** Bán kính vòng tròn */
const radius = computed(() => (props.size === 'small' ? 37.8 : 63))
/** Chi vi vòng tròn */
const perimeter = computed(() => 2 * Math.PI * radius.value)
/** Phần tô màu */
const strokeDashoffset = computed(() => {
  return perimeter.value * (1 - props.percentage / 100)
})
</script>
