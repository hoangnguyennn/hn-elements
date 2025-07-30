<template>
  <button
    class="hn-action-list-item"
    :data-selected="selected"
    :data-disabled="disabled"
    role="option"
    :aria-selected="selected"
    :aria-disabled="disabled"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    @click="onClick"
  >
    <hn-checkbox
      v-if="multiple"
      class="hn-action-list-item--checkbox"
      :model-value="selected"
      :disabled="disabled"
      tabindex="-1"
      readonly
      aria-hidden="true"
    />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { HnCheckbox } from '@hn/components/checkbox'
import type { ActionListItemEmits, ActionListItemProps } from './action-list-item'
import { useActionList } from './useActionList'

defineOptions({ name: 'HnActionListItem' })

const emit = defineEmits<ActionListItemEmits>()

const props = withDefaults(defineProps<ActionListItemProps>(), {})

const { multiple } = useActionList()

const ariaLabel = props.ariaLabel || 'Mục danh sách'
const ariaDescribedby = props.ariaDescribedby

const onClick = (): void => emit('click')
</script>
