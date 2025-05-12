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

    <teleport to="body">
      <div v-if="open" ref="contentRef" class="hn-popper--content" :style="floatingStyles">
        <slot name="content"></slot>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'
import { useClickOutside } from '@hn/composables/useClickOutside'
import { computed, provide, ref } from 'vue'
import { POPPER_KEY, type PopperContext, type PopperProps, type PopperTrigger } from './popper'
import HnPopperAnchor from './popper-anchor.vue'

defineOptions({ name: 'HnPopper' })

const open = defineModel<boolean>('modelValue', { default: false })

const props = withDefaults(defineProps<PopperProps>(), {
  placement: 'bottom-start',
  trigger: 'hover'
})

const anchorRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const arrowRef = ref<HTMLElement | null>(null)

const onTrigger = (event: PopperTrigger, value = true): void => {
  if (event === props.trigger) open.value = value
}

const onClose = (): void => {
  open.value = false
}

const middleware = computed(() => [flip(), shift(), arrow({ element: arrowRef }), offset(props.offset)])

const { floatingStyles, middlewareData } = useFloating(anchorRef, contentRef, {
  open,
  strategy: 'fixed',
  placement: computed(() => props.placement),
  middleware,
  whileElementsMounted: (...args) => autoUpdate(...args, { animationFrame: true })
})

useClickOutside({ refs: [anchorRef, contentRef], callback: onClose })

provide<PopperContext>(POPPER_KEY, {
  anchorRef,
  arrowRef,
  middlewareData,
  placement: computed(() => props.placement)
})
</script>
