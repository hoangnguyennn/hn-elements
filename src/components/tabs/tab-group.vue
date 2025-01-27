<template>
  <div class="hn-tab-group" :data-direction="direction">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, watch } from 'vue'
import {
  TAB_GROUP_KEY,
  type TabGroupEmits,
  type TabGroupContext,
  type TabGroupProps
} from './tab-group'
import { useList } from '@hn/composables/useList'

defineOptions({ name: 'HnTabGroup' })

const modelValue = defineModel<number | undefined>()

const emit = defineEmits<TabGroupEmits>()

withDefaults(defineProps<TabGroupProps>(), {
  direction: 'horizontal'
})

watch(modelValue, modelValue => emit('change', modelValue))

const { register, unregister, map } = useList()

provide<TabGroupContext>(TAB_GROUP_KEY, {
  modelValue,
  register,
  unregister,
  elements: map
})
</script>
