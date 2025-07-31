<template>
  <div
    class="hn-rate"
    :data-hover-value="hoverValue"
    role="radiogroup"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
  >
    <button
      v-for="i in 5"
      :key="`star-${i}`"
      class="hn-rate--star"
      :id="`star-${i}-${rateId}`"
      :aria-label="`Đánh giá ${i} sao`"
      :aria-checked="modelValue === i"
      :aria-describedby="`star-description-${rateId}`"
      role="radio"
      @click="handleChange(i)"
      @mouseenter="hoverValue = i"
      @mouseleave="hoverValue = 0"
      @keydown.enter.prevent="handleChange(i)"
      @keydown.space.prevent="handleChange(i)"
    >
      <ico-star-full v-if="modelValue >= i || hoverValue >= i" />
      <ico-star-empty v-else />
    </button>
    <div :id="`star-description-${rateId}`" class="sr-only">Đánh giá hiện tại: {{ modelValue }} sao</div>
  </div>
</template>

<script setup lang="ts">
import { IcoStarEmpty, IcoStarFull } from '@hn/assets/icons'
import { computed, ref, useId } from 'vue'
import type { RateProps } from './rate'

defineOptions({ name: 'HnRate' })

const modelValue = defineModel<number>({ default: 0 })

const props = withDefaults(defineProps<RateProps>(), {
  clearable: false
})

const hoverValue = ref(0)
const rateId = useId()

const ariaLabel = computed(() => props.ariaLabel || 'Đánh giá sao')
const ariaDescribedby = computed(() => (props.hint ? `hn-rate-hint-${rateId}` : undefined))

const handleChange = (value: number): void => {
  if (props.clearable && value === modelValue.value) {
    modelValue.value = 0
    return
  }

  modelValue.value = value
}
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
