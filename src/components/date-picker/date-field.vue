<template>
  <hn-field class="hn-date-field">
    <div class="hn-field--wrapper hn-date-field--wrapper" :data-focus="focus">
      <input :value="dateDisplay" class="hn-date--input" readonly />
      <hn-icon>
        <ico-calendar />
      </hn-icon>
    </div>
  </hn-field>
</template>

<script setup lang="ts">
import { IcoCalendar } from '@hn/assets/icons'
import type { CalendarValue } from '@hn/components/calendar'
import HnField from '@hn/components/field'
import HnIcon from '@hn/components/icon'
import dayjs from 'dayjs'
import { computed } from 'vue'
import type { DateFieldProps } from './date-field'

defineOptions({ name: 'HnDateField' })

withDefaults(defineProps<DateFieldProps>(), {})

const modelValue = defineModel<CalendarValue>()

const dateFormat = 'YYYY/MM/DD'

const dateDisplay = computed(() => {
  return modelValue.value && dayjs(modelValue.value).format(dateFormat)
})
</script>
