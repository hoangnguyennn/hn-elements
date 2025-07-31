<template>
  <div class="hn-slider">
    <div ref="trackRef" class="hn-slider--wrapper" @click="onTrackClick">
      <div class="hn-slider--track" :style="{ width: `${modelValue}%` }"></div>

      <hn-popover v-if="tooltip" placement="top" arrow>
        <template #anchor>
          <input
            ref="controlRef"
            v-model="modelValue"
            type="range"
            class="hn-slider--control"
            :id="sliderId"
            :style="{ left: `${modelValue}%` }"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            :aria-label="ariaLabel"
            :aria-describedby="ariaDescribedby"
            :aria-valuemin="min"
            :aria-valuemax="max"
            :aria-valuenow="modelValue"
            :aria-valuetext="ariaValueText"
            role="slider"
          />
        </template>
        <template #content>
          <div class="hn-slider--tooltip-text">{{ modelValue }}</div>
        </template>
      </hn-popover>

      <input
        v-else
        ref="controlRef"
        v-model="modelValue"
        type="range"
        class="hn-slider--control"
        :id="sliderId"
        :style="{ left: `${modelValue}%` }"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :aria-label="ariaLabel"
        :aria-describedby="ariaDescribedby"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="modelValue"
        :aria-valuetext="ariaValueText"
        role="slider"
      />
    </div>

    <div v-if="withLabel" class="hn-slider--labels">
      <div class="hn-slider--label min">{{ min }}%</div>
      <div class="hn-slider--label max">{{ max }}%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HnPopover } from '@hn/components/popover'
import { useDrag } from '@hn/composables/useDrag'
import { computed, useId, useTemplateRef, watch } from 'vue'
import type { SliderProps } from './slider'
import { useSliderValue } from './useSliderValue'

defineOptions({ name: 'HnSlider' })

const modelValue = defineModel<number>({ default: 0 })

const props = withDefaults(defineProps<SliderProps>(), {
  tooltip: true,
  min: 0,
  max: 100,
  step: 1
})

const trackRef = useTemplateRef('trackRef')
const controlRef = useTemplateRef('controlRef')

const { x } = useDrag({ elementRef: controlRef })

const { getValue } = useSliderValue({ trackRef })

const sliderId = `hn-slider-${useId()}`

const ariaLabel = computed(() => props.ariaLabel || 'Thanh trượt')
const ariaDescribedby = computed(() => {
  const ids = []
  if (props.hint) ids.push(`hn-slider-hint-${sliderId}`)
  return ids.length > 0 ? ids.join(' ') : undefined
})
const ariaValueText = computed(() => props.ariaValueText || `${modelValue.value}%`)

watch(x, newValue => {
  modelValue.value = getValue(newValue)
})

const onTrackClick = (event: MouseEvent): void => {
  modelValue.value = getValue(event.pageX)
}
</script>
