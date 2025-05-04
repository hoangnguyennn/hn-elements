<template>
  <hn-popper class="hn-popover" v-model="open" :placement="placement" :trigger="trigger" :offset="arrow ? 10 : 4">
    <template #anchor>
      <slot name="anchor"></slot>
    </template>
    <template #content>
      <hn-popover-content>
        <slot name="content"></slot>
      </hn-popover-content>
    </template>
  </hn-popper>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { HnPopper } from '../popper'
import { POPOVER_KEY, type PopoverContext, type PopoverProps } from './popover'
import HnPopoverContent from './popover-content.vue'

defineOptions({ name: 'HnPopover' })

const open = defineModel<boolean>('modelValue', { default: false })

const props = withDefaults(defineProps<PopoverProps>(), {
  arrow: false,
  placement: 'bottom-start'
})

provide<PopoverContext>(POPOVER_KEY, {
  arrow: computed(() => props.arrow),
  placement: computed(() => props.placement)
})
</script>
