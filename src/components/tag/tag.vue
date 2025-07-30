<template>
  <div
    class="hn-tag"
    :data-size="size"
    role="button"
    :tabindex="closeable ? 0 : undefined"
    @keydown.enter.prevent="$emit('close')"
    @keydown.space.prevent="$emit('close')"
  >
    <slot></slot>
    <hn-icon-button
      v-if="closeable"
      :as="IcoClose"
      class="hn-tag--close"
      :aria-label="closeAriaLabel"
      @click="$emit('close')"
    ></hn-icon-button>
  </div>
</template>

<script setup lang="ts">
import { IcoClose } from '@hn/assets/icons'
import { HnIconButton } from '@hn/components/icon-button'
import { computed } from 'vue'
import type { TagEmits, TagProps } from './tag'

defineOptions({ name: 'HnTag' })

defineEmits<TagEmits>()

const props = withDefaults(defineProps<TagProps>(), {
  size: 'medium',
  closeable: false
})

const closeAriaLabel = computed(() => props.closeAriaLabel || 'Xóa tag')
</script>
