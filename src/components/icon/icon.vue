<template>
  <component :is="as" class="hn-icon"></component>
</template>

<script setup lang="ts">
import type { IconProps } from './icon'

defineOptions({ name: 'HnIcon' })

withDefaults(defineProps<IconProps>(), {})
</script>
