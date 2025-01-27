<template>
  <div class="hn-avatar" :data-size="size">
    <img v-if="src" :src="src" :alt="name" class="hn-avatar--image" />
    <span v-else-if="name" class="hn-avatar--name">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { AvatarProps } from './avatar'

defineOptions({ name: 'HnAvatar' })

withDefaults(defineProps<AvatarProps>(), {
  size: 'medium'
})
</script>
