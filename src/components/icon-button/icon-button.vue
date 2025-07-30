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
    <hn-icon v-bind="$props" />
  </button>
</template>

<script setup lang="ts">
import { HnIcon } from '@hn/components/icon'
import type { IconButtonEmits, IconButtonProps } from './icon-button'

defineOptions({ name: 'HnIconButton' })

defineEmits<IconButtonEmits>()

withDefaults(defineProps<IconButtonProps>(), {})
</script>
