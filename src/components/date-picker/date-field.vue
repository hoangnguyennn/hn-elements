<template>
  <hn-field class="hn-date-field" v-bind="fieldProps">
    <div class="hn-field--wrapper hn-date-field--wrapper" :data-focus="focus">
      <input :value="dateDisplay" class="hn-field--input hn-date--input" readonly />
      <hn-icon-button :as="IcoCalendar" />
    </div>
  </hn-field>
</template>

<script setup lang="ts">
import { IcoCalendar } from '@hn/assets/icons'
import type { CalendarValue } from '@hn/components/calendar'
import { getFieldProps, HnField } from '@hn/components/field'
import { HnIconButton } from '@hn/components/icon-button'
import dayjs from 'dayjs'
import { computed } from 'vue'
import type { DateFieldProps } from './date-field'

defineOptions({ name: 'HnDateField' })

const props = withDefaults(defineProps<DateFieldProps>(), { size: 'normal' })
const fieldProps = computed(() => getFieldProps(props))

const modelValue = defineModel<CalendarValue>()

const dateFormat = 'YYYY/MM/DD'

const dateDisplay = computed(() => {
  return modelValue.value && dayjs(modelValue.value).format(dateFormat)
})
</script>
