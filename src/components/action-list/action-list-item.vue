<template>
  <button class="hn-action-list-item" :data-selected="selected" :data-disabled="disabled" @click="onClick">
    <hn-checkbox
      v-if="multiple"
      class="hn-action-list-item--checkbox"
      :model-value="selected"
      :disabled="disabled"
      tabindex="-1"
      readonly
    />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { HnCheckbox } from '../checkbox'
import type { ActionListItemEmits, ActionListItemProps } from './action-list-item'
import { useActionList } from './useActionList'

defineOptions({ name: 'HnActionListItem' })

const emit = defineEmits<ActionListItemEmits>()

withDefaults(defineProps<ActionListItemProps>(), {})

const { multiple } = useActionList()

const onClick = (): void => emit('click')
</script>
