<template>
  <div class="hn-stack" :data-direction="direction">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { StackProps } from './stack'

defineOptions({ name: 'HnStack' })

withDefaults(defineProps<StackProps>(), {
  direction: 'vertical'
})
</script>
