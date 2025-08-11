<template>
  <component
    :is="computedAs"
    class="hn-icon"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden"
    :role="role"
  ></component>
</template>

<script setup lang="ts">
import { computed, toRaw } from 'vue'
import type { IconProps } from './icon'

defineOptions({ name: 'HnIcon' })

const props = withDefaults(defineProps<IconProps>(), {
  ariaHidden: true
})

// NOTE: ở dạng object, `as` đang bị dính warning về reactive
// Vì vậy, tôi sử dụng `toRaw` để lấy ra giá trị thực tế của `as`
const computedAs = computed(() => (typeof props.as === 'string' ? props.as : toRaw(props.as)))
const ariaHidden = computed(() => props.ariaHidden ?? !props.ariaLabel)
const role = computed(() => props.role || (props.ariaLabel ? 'img' : undefined))
</script>
