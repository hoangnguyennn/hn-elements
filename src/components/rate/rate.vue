<template>
  <div class="hn-rate" :data-hover-value="hoverValue">
    <button
      v-for="i in 5"
      :key="`star-${i}`"
      class="hn-rate--star"
      @click="handleChange(i)"
      @mouseenter="hoverValue = i"
      @mouseleave="hoverValue = 0"
    >
      <ico-star-full v-if="modelValue >= i || hoverValue >= i" />
      <ico-star-empty v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
import { IcoStarEmpty, IcoStarFull } from '@hn/assets/icons'
import { ref } from 'vue'
import type { RateProps } from './rate'

defineOptions({ name: 'HnRate' })

const modelValue = defineModel<number>({ default: 0 })

const props = withDefaults(defineProps<RateProps>(), {
  clearable: false
})

const hoverValue = ref(0)

const handleChange = (value: number): void => {
  if (props.clearable && value === modelValue.value) {
    modelValue.value = 0
    return
  }

  modelValue.value = value
}
</script>
