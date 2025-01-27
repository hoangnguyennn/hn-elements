<template>
  <div class="hn-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import {
  type CollapseValue,
  type CollapseContext,
  type CollapseProps,
  COLLAPSE_KEY
} from './collapse'
import { useList } from '../../composables/useList'

defineOptions({ name: 'HnCollapse' })

const props = withDefaults(defineProps<CollapseProps>(), {})

const modelValue = defineModel<CollapseValue>({ default: [] })

const { register, unregister, map } = useList()

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
