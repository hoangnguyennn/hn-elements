<template>
  <div></div>
</template>

<script setup lang="ts">
import type {
  HnComponentProps,
  HnComponentEmits,
  HnComponentSlots
} from './component'
defineOptions({ name: 'HnComponent' })

defineEmits<HnComponentEmits>()

defineSlots<HnComponentSlots>()

withDefaults(defineProps<HnComponentProps>(), {})
</script>
