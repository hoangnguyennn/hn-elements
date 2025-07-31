<template>
  <div :ref="el => elementRef(el as HTMLDivElement)" class="hn-collapse--item" :data-open="isActive">
    <div
      class="hn-collapse--trigger"
      @click.prevent="onTrigger(index)"
      role="button"
      :aria-expanded="isActive"
      :aria-controls="contentId"
      :tabindex="0"
      @keydown.enter.prevent="onTrigger(index)"
      @keydown.space.prevent="onTrigger(index)"
    >
      <div v-if="title" :id="titleId" class="hn-collapse--title">{{ title }}</div>
      <slot v-else name="title"></slot>
      <hn-icon :as="IcoArrowForward" class="hn-collapse--icon" aria-hidden />
    </div>
    <div :id="contentId" class="hn-collapse--content" :aria-labelledby="titleId" :aria-hidden="!isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IcoArrowForward } from '@hn/assets/icons'
import { HnIcon } from '@hn/components/icon'
import { useId } from 'vue'
import type { CollapseItemProps, CollapseItemSlots } from './collapse-item'
import { useCollapseItem } from './useCollapseItem'

defineOptions({ name: 'HnCollapseItem' })

defineSlots<CollapseItemSlots>()

withDefaults(defineProps<CollapseItemProps>(), {})

const { isActive, index, elementRef, onTrigger } = useCollapseItem()

const titleId = `hn-collapse-title-${useId()}`
const contentId = `hn-collapse-content-${useId()}`
</script>
