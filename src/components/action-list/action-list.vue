<template>
  <div class="hn-action-list" :data-multiple="multiple">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs } from 'vue'
import { ACTION_LIST_KEY, type ActionListContext, type ActionListProps } from './action-list'

defineOptions({ name: 'HnActionList' })

const props = withDefaults(defineProps<ActionListProps>(), {
  multiple: false
})

provide<ActionListContext>(ACTION_LIST_KEY, {
  ...toRefs(props)
})
</script>
