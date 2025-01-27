<template>
  <div
    :ref="el => elementRef(el as HTMLDivElement)"
    class="hn-collapse--item"
    :data-open="isActive"
  >
    <div class="hn-collapse--trigger" @click.prevent="onTrigger(index)">
      <div v-if="title" class="hn-collapse--title">{{ title }}</div>
      <slot v-else name="title"></slot>
      <hn-icon class="hn-collapse--icon">
        <ico-arrow-forward />
      </hn-icon>
    </div>
    <div class="hn-collapse--content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IcoArrowForward } from '@hn/assets/icons'
import HnIcon from '@hn/components/icon'
import type { CollapseItemProps, CollapseItemSlots } from './collapse-item'
import { useCollapseItem } from './useCollapseItem'

defineOptions({ name: 'HnCollapseItem' })

defineSlots<CollapseItemSlots>()

withDefaults(defineProps<CollapseItemProps>(), {})

const { isActive, index, elementRef, onTrigger } = useCollapseItem()
</script>
