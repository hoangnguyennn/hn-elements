<template>
  <hn-popper v-model="open" class="hn-date-picker" trigger="click">
    <template #anchor>
      <hn-date-field v-model="modelValue" :focus="open" />
    </template>
    <template #content>
      <hn-calendar
        v-model="modelValue"
        :min-date="minDate"
        :max-date="maxDate"
        @change="onClose"
      />
    </template>
  </hn-popper>
</template>

<script setup lang="ts">
import HnCalendar, { type CalendarValue } from '@hn/components/calendar'
import HnPopper from '@hn/components/popper'
import { ref } from 'vue'
import HnDateField from './date-field.vue'
import type { DatePickerProps } from './date-picker'

const modelValue = defineModel<CalendarValue>()

defineOptions({ name: 'HnDatePicker' })

withDefaults(defineProps<DatePickerProps>(), {})

const open = ref(false)

const onClose = (): void => {
  open.value = false
}
</script>
