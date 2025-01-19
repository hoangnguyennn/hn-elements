<template>
  <div class="hn-tab-group" :data-direction="direction">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import {
  TAB_GROUP_KEY,
  type TabGroupEmits,
  type TabGroupContext,
  type TabGroupProps
} from './tab-group'

defineOptions({ name: 'HnTabGroup' })

const modelValue = defineModel<number | undefined>()

const emit = defineEmits<TabGroupEmits>()

withDefaults(defineProps<TabGroupProps>(), {
  direction: 'horizontal'
})

watch(modelValue, modelValue => emit('change', modelValue))

const uniqueElements = ref(new Set<HTMLElement>())
const elements = ref<HTMLElement[]>([])

const map = computed(() => {
  return new Map(elements.value.map((element, index) => [element, index]))
})

const register = (element: HTMLElement) => {
  uniqueElements.value.add(element)
  elements.value = Array.from(uniqueElements.value)
}

const unregister = (element: HTMLElement) => {
  uniqueElements.value.delete(element)
  elements.value = Array.from(uniqueElements.value)
}

provide<TabGroupContext>(TAB_GROUP_KEY, {
  modelValue,
  register,
  unregister,
  elements: map
})
</script>
