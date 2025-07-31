<template>
  <hn-popper v-model="open" class="hn-date-picker" trigger="click">
    <template #anchor>
      <hn-date-field
        v-model="modelValue"
        :focus="open"
        v-bind="fieldProps"
        :aria-label="ariaLabel"
        :aria-describedby="ariaDescribedby"
        :aria-haspopup="true"
        :aria-expanded="open"
      />
    </template>
    <template #content>
      <hn-calendar
        v-model="modelValue"
        :min-date="minDate"
        :max-date="maxDate"
        :aria-label="calendarAriaLabel"
        @change="onClose"
      />
    </template>
  </hn-popper>
</template>

<script setup lang="ts">
import { type CalendarValue, HnCalendar } from '@hn/components/calendar'
import { getFieldProps } from '@hn/components/field'
import { HnPopper } from '@hn/components/popper'
import { computed, ref } from 'vue'
import HnDateField from './date-field.vue'
import type { DatePickerProps } from './date-picker'

const modelValue = defineModel<CalendarValue>()

defineOptions({ name: 'HnDatePicker' })

const props = withDefaults(defineProps<DatePickerProps>(), { size: 'normal' })
const fieldProps = computed(() => getFieldProps(props))

const open = ref(false)

const ariaLabel = computed(() => props.ariaLabel || 'Chọn ngày')
const ariaDescribedby = computed(() => {
  const ids = []
  if (props.hint) ids.push(`hn-date-picker-hint-${props.label || 'default'}`)
  return ids.length > 0 ? ids.join(' ') : undefined
})
const calendarAriaLabel = computed(() => props.calendarAriaLabel || 'Lịch chọn ngày')

const onClose = (): void => {
  open.value = false
}
</script>
