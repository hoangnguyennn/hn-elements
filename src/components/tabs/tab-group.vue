<template>
  <div
    class="hn-tab-group"
    :data-direction="direction"
    role="tablist"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    :aria-orientation="direction"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useList } from '@hn/composables/useList'
import { provide, watch } from 'vue'
import { TAB_GROUP_KEY, type TabGroupContext, type TabGroupEmits, type TabGroupProps } from './tab-group'

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
