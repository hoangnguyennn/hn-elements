<template>
  <hn-popper v-model="open" class="hn-date-picker" trigger="click">
    <template #anchor>
      <hn-date-field v-model="modelValue" :focus="open" v-bind="fieldProps" />
    </template>
    <template #content>
      <hn-calendar v-model="modelValue" :min-date="minDate" :max-date="maxDate" @change="onClose" />
    </template>
  </hn-popper>
</template>

<script setup lang="ts">
import { type CalendarValue, HnCalendar } from '@hn/components/calendar'
import { HnPopper } from '@hn/components/popper'
import { computed, ref } from 'vue'
import { getFieldProps } from '../field'
import HnDateField from './date-field.vue'
import type { DatePickerProps } from './date-picker'

const modelValue = defineModel<CalendarValue>()

defineOptions({ name: 'HnDatePicker' })

const props = withDefaults(defineProps<DatePickerProps>(), { size: 'normal' })
const fieldProps = computed(() => getFieldProps(props))

const open = ref(false)

const onClose = (): void => {
  open.value = false
}
</script>
