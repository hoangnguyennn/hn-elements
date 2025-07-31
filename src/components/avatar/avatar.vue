<template>
  <div class="hn-avatar" :data-size="size">
    <img v-if="src" :src="src" :alt="name" class="hn-avatar--image" />
    <span v-else-if="name" class="hn-avatar--name" aria-hidden>{{ displayName }}</span>
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
</script>
