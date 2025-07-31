<template>
  <button
    class="hn-icon-button"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    :aria-pressed="ariaPressed"
    :aria-expanded="ariaExpanded"
    :aria-haspopup="ariaHasPopup"
    :aria-controls="ariaControls"
    @click="$emit('click', $event)"
  >
    <hn-icon v-bind="iconProps" />
  </button>
</template>

<script setup lang="ts">
import { getIconProps, HnIcon } from '@hn/components/icon'
import { computed } from 'vue'
import type { IconButtonEmits, IconButtonProps } from './icon-button'

defineOptions({ name: 'HnIconButton' })

defineEmits<IconButtonEmits>()

const props = withDefaults(defineProps<IconButtonProps>(), {
  ariaHidden: true
})

const iconProps = computed(() => getIconProps(props))
</script>
