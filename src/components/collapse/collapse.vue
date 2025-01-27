<template>
  <div class="hn-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import {
  type CollapseValue,
  type CollapseContext,
  type CollapseProps,
  COLLAPSE_KEY
} from './collapse'

defineOptions({ name: 'HnCollapse' })

const props = withDefaults(defineProps<CollapseProps>(), {})

const modelValue = defineModel<CollapseValue>({ default: [] })

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

const onTrigger = (index: number) => {
  if (props.accordion) {
    if (modelValue.value.includes(index)) {
      modelValue.value = []
    } else {
      modelValue.value = [index]
    }
    return
  }

  if (modelValue.value.includes(index)) {
    modelValue.value = modelValue.value.filter(item => item !== index)
  } else {
    modelValue.value = [...modelValue.value, index]
  }
}

provide<CollapseContext>(COLLAPSE_KEY, {
  modelValue,
  register,
  unregister,
  elements: map,
  onTrigger
})
</script>
