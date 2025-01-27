<template>
  <div class="hn-popper">
    <hn-popper-anchor
      @click.prevent="onTrigger('click', !open)"
      @mouseenter.prevent="onTrigger('hover', true)"
      @mouseout.prevent="onTrigger('hover', false)"
      @focus.prevent="onTrigger('focus', true)"
      @blur.prevent="onTrigger('focus', false)"
      @contextmenu.prevent="onTrigger('contextmenu', true)"
    >
      <slot name="anchor"></slot>
    </hn-popper-anchor>

    <div
      v-if="open"
      ref="contentRef"
      class="hn-popper--content"
      :style="floatingStyles"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { autoUpdate, flip, shift, useFloating } from '@floating-ui/vue'
import { useClickOutside } from '@hn/composables/useClickOutside'
import { provide, ref } from 'vue'
import { POPPER_KEY, PopperContext, PopperProps, PopperTrigger } from './popper'
import HnPopperAnchor from './popper-anchor.vue'

defineOptions({ name: 'HnPopper' })

const open = defineModel<boolean>('modelValue', { default: false })

const props = withDefaults(defineProps<PopperProps>(), {
  placement: 'bottom-start',
  trigger: 'hover'
})

const anchorRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const onTrigger = (event: PopperTrigger, value = true): void => {
  if (event === props.trigger) open.value = value
}

const onClose = (): void => {
  open.value = false
}

const { floatingStyles } = useFloating(anchorRef, contentRef, {
  open,
  strategy: 'fixed',
  placement: props.placement,
  middleware: [flip(), shift()],
  whileElementsMounted: autoUpdate
})

useClickOutside({ refs: [anchorRef, contentRef], callback: onClose })

provide<PopperContext>(POPPER_KEY, {
  anchorRef
})
</script>
