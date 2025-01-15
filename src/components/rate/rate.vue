<template>
  <div class="hn-rate" :data-hover-value="hoverValue">
    <span
      class="hn-rate--star"
      @click="handleChange(1)"
      @mouseenter="hoverValue = 1"
      @mouseleave="hoverValue = 0"
    >
      <ico-star-full v-if="modelValue >= 1 || hoverValue >= 1" />
      <ico-star-empty v-else />
    </span>
    <span
      class="hn-rate--star"
      @click="handleChange(2)"
      @mouseenter="hoverValue = 2"
      @mouseleave="hoverValue = 0"
    >
      <ico-star-full v-if="modelValue >= 2 || hoverValue >= 2" />
      <ico-star-empty v-else />
    </span>
    <span
      class="hn-rate--star"
      @click="handleChange(3)"
      @mouseenter="hoverValue = 3"
      @mouseleave="hoverValue = 0"
    >
      <ico-star-full v-if="modelValue >= 3 || hoverValue >= 3" />
      <ico-star-empty v-else />
    </span>
    <span
      class="hn-rate--star"
      @click="handleChange(4)"
      @mouseenter="hoverValue = 4"
      @mouseleave="hoverValue = 0"
    >
      <ico-star-full v-if="modelValue >= 4 || hoverValue >= 4" />
      <ico-star-empty v-else />
    </span>
    <span
      class="hn-rate--star"
      @click="handleChange(5)"
      @mouseenter="hoverValue = 5"
      @mouseleave="hoverValue = 0"
    >
      <ico-star-full v-if="modelValue >= 5 || hoverValue >= 5" />
      <ico-star-empty v-else />
    </span>
  </div>
</template>

<script setup lang="ts">
import type { HnRateProps } from './rate'
import { IcoStarEmpty, IcoStarFull } from '../../assets/icons'
import { ref } from 'vue'

defineOptions({ name: 'HnRate' })

const modelValue = defineModel<number>({ default: 0 })

const props = withDefaults(defineProps<HnRateProps>(), {
  clearable: false
})

const hoverValue = ref(0)

const handleChange = (value: number) => {
  if (props.clearable && value === modelValue.value) {
    modelValue.value = 0
    return
  }

  modelValue.value = value
}
</script>
