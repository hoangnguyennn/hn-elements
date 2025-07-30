<template>
  <component :is="as" class="hn-icon" :aria-label="ariaLabel" :aria-hidden="ariaHidden" :role="role"></component>
</template>

<script setup lang="ts">
import type { IconProps } from './icon'

defineOptions({ name: 'HnIcon' })

const props = withDefaults(defineProps<IconProps>(), {})

const ariaHidden = props.ariaHidden ?? !props.ariaLabel
const role = props.role || (props.ariaLabel ? 'img' : undefined)
</script>
