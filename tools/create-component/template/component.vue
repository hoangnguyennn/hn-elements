<template>
  <div></div>
</template>

<script setup lang="ts">
import type {
  HnComponentEmits,
  HnComponentProps,
  HnComponentSlots
} from './component'
defineOptions({ name: 'HnComponent' })

defineEmits<HnComponentEmits>()

defineSlots<HnComponentSlots>()

withDefaults(defineProps<HnComponentProps>(), {})
</script>
