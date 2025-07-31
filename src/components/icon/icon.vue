<template>
  <component :is="as" class="hn-icon" :aria-label="ariaLabel" :aria-hidden="ariaHidden" :role="role"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './icon'

defineOptions({ name: 'HnIcon' })

// TODO: ở dạng object, `as` đang bị dính warning về reactive
const props = withDefaults(defineProps<IconProps>(), {
  ariaHidden: true
})

const ariaHidden = computed(() => props.ariaHidden ?? !props.ariaLabel)
const role = computed(() => props.role || (props.ariaLabel ? 'img' : undefined))
</script>
