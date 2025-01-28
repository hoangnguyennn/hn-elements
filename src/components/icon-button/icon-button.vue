<template>
  <button class="hn-icon-button">
    <hn-icon v-bind="iconProps" />
  </button>
</template>

<script setup lang="ts">
import HnIcon from '@hn/components/icon'
import { computed } from 'vue'
import type { IconButtonProps } from './icon-button'

defineOptions({ name: 'HnIconButton' })

const props = withDefaults(defineProps<IconButtonProps>(), {})

const iconProps = computed(() => props)
</script>
