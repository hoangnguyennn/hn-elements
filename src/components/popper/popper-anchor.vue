<template>
  <only-child v-bind="$attrs">
    <slot></slot>
  </only-child>
</template>

<script setup lang="ts">
import { OnlyChild } from '@hn/components/slot/only-child'
import { useForwardRef } from '@hn/composables/useForwardRef'
import { inject } from 'vue'
import { POPPER_KEY, PopperContext } from './popper'
import { PopperAnchor } from './popper-anchor'

defineOptions({ name: 'HnPopperAnchor' })

defineProps<PopperAnchor>()

const popper = inject<PopperContext>(POPPER_KEY)

if (!popper) {
  throw new Error('hn-popper-anchor phải được sử dụng bên trong hn-popper')
}

useForwardRef(popper.anchorRef)
</script>
