<template>
  <only-child v-bind="$attrs">
    <slot></slot>
  </only-child>
</template>

<script setup lang="ts">
import { OnlyChild } from '@hn/components/slot/only-child'
import { useForwardRef } from '@hn/composables/useForwardRef'
import type { PopperAnchor } from './popper-anchor'
import { usePopper } from './usePopper'

defineOptions({ name: 'HnPopperAnchor' })

withDefaults(defineProps<PopperAnchor>(), {})

const { anchorRef } = usePopper()
useForwardRef(anchorRef)
</script>
