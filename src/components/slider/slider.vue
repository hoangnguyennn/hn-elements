<template>
  <div class="hn-slider">
    <div ref="trackRef" class="hn-slider--wrapper" @click="onTrackClick">
      <div class="hn-slider--track" :style="{ width: `${modelValue}%` }"></div>

      <input
        ref="controlRef"
        v-model="modelValue"
        type="range"
        class="hn-slider--control"
        :style="{ left: `${modelValue}%` }"
      />
    </div>

    <div v-if="withLabel" class="hn-slider--labels">
      <div class="hn-slider--label min">0%</div>
      <div class="hn-slider--label max">100%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'
import { useDrag } from '../../composables/useDrag'
import { useSliderValue } from './useSliderValue'
import type { SliderProps } from './slider'

defineOptions({ name: 'HnSlider' })

const modelValue = defineModel<number>({ default: 0 })

withDefaults(defineProps<SliderProps>(), {})

const trackRef = useTemplateRef('trackRef')
const controlRef = useTemplateRef('controlRef')

const { x } = useDrag({ elementRef: controlRef })

const { getValue } = useSliderValue({ trackRef })

watch(x, newValue => {
  modelValue.value = getValue(newValue)
})

const onTrackClick = (event: MouseEvent) => {
  modelValue.value = getValue(event.pageX)
}
</script>
