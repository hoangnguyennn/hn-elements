<template>
  <only-child v-bind="$attrs">
    <slot></slot>
  </only-child>
</template>

<script setup lang="ts">
import { OnlyChild } from '@hn/components/_slot/only-child'
import { useForwardRef } from '@hn/composables/useForwardRef'
import { usePopper } from './usePopper'

defineOptions({ name: 'HnPopperAnchor' })

const { anchorRef } = usePopper()
useForwardRef(anchorRef)
</script>
