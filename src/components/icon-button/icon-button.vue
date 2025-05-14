<template>
  <button class="hn-icon-button">
    <hn-icon v-bind="$props" />
  </button>
</template>

<script setup lang="ts">
import { HnIcon } from '@hn/components/icon'
import type { IconButtonProps } from './icon-button'

defineOptions({ name: 'HnIconButton' })

withDefaults(defineProps<IconButtonProps>(), {})
</script>
