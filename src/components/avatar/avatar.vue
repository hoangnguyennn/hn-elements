<template>
  <div class="hn-avatar" :data-size="size" role="img" :aria-label="ariaLabel">
    <img v-if="src" :src="src" :alt="name" class="hn-avatar--image" />
    <span v-else-if="name" class="hn-avatar--name" aria-hidden="true">{{ displayName }}</span>
  </div>
</template>

<script setup lang="ts">
import { getAcronym } from '@hn/utils/string'
import { computed } from 'vue'
import type { AvatarProps } from './avatar'

defineOptions({ name: 'HnAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'medium'
})

const displayName = computed(() => getAcronym(props.name || ''))
const ariaLabel = computed(() => props.ariaLabel || `Ảnh đại diện của ${props.name || 'người dùng'}`)
</script>
