<template>
  <div class="hn-popover--content" role="tooltip" :aria-label="ariaLabel" :aria-describedby="ariaDescribedby">
    <div
      v-if="arrow"
      :ref="el => (arrowRef = el as HTMLDivElement)"
      :style="{
        position: 'fixed',
        left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
        top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
        [oppositeSide]: `${arrowRef?.offsetHeight ? -arrowRef?.offsetHeight : 0}px`,
        transform: `rotate(${rotate}deg)`
      }"
      class="hn-popover--arrow"
      aria-hidden
    >
      <hn-icon :as="IcoCaret" ariaLabel="Caret"></hn-icon>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { IcoCaret } from '@hn/assets/icons'
import { HnIcon } from '@hn/components/icon'
import { usePopper } from '@hn/components/popper'
import { computed } from 'vue'
import { usePopover } from './usePopover'

defineOptions({ name: 'HnPopoverContent' })

const { arrowRef, middlewareData } = usePopper()
const { arrow, placement } = usePopover()

const oppositeSideMap = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
} as { [key: string]: string }

const rotateMap = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270
} as { [key: string]: number }

const side = computed(() => placement.value.split('-')[0])
const oppositeSide = oppositeSideMap[side.value]
const rotate = rotateMap[side.value]

const ariaLabel = computed(() => 'Thông tin bổ sung')
const ariaDescribedby = computed(() => undefined)
</script>
