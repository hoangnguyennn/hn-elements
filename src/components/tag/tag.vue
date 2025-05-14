<template>
  <div class="hn-tag" :data-size="size">
    <slot></slot>
    <hn-icon-button v-if="closeable" :as="IcoClose" class="hn-tag--close" @click="$emit('close')"></hn-icon-button>
  </div>
</template>

<script setup lang="ts">
import { IcoClose } from '@hn/assets/icons'
import { HnIconButton } from '../icon-button'
import type { TagEmits, TagProps } from './tag'

defineOptions({ name: 'HnTag' })

defineEmits<TagEmits>()

withDefaults(defineProps<TagProps>(), {
  size: 'medium',
  closeable: false
})
</script>
