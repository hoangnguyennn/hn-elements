<template>
  <div class="hn-calendar--date-pane">
    <div class="hn-calendar--weekdays">
      <span class="hn-calendar--date-item">Mo</span>
      <span class="hn-calendar--date-item">Tu</span>
      <span class="hn-calendar--date-item">We</span>
      <span class="hn-calendar--date-item">Th</span>
      <span class="hn-calendar--date-item">Fr</span>
      <span class="hn-calendar--date-item">Sa</span>
      <span class="hn-calendar--date-item">Su</span>
    </div>
    <hr class="hn-calendar--divider" />
    <div class="hn-calendar--dates">
      <button
        v-for="{ date, status } in dates"
        :key="date.valueOf()"
        class="hn-calendar--date-item"
        :class="[
          status,
          {
            active: isActive(date),
            disabled: isDisabled(date)
          }
        ]"
        :disabled="isDisabled(date)"
        @click.prevent="handleChangeDate(date)"
      >
        {{ date.date() }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import type {
  DateItem,
  DatePaneEmits,
  DatePaneProps,
  DatePaneValue
} from './date-pane'

defineOptions({ name: 'HnDatePane' })

const emit = defineEmits<DatePaneEmits>()

const modelValue = defineModel<DatePaneValue>()
const activeDate = defineModel<dayjs.Dayjs>('activeDate')

const props = withDefaults(defineProps<DatePaneProps>(), {})

/** Tháng đang active */
const activeMonth = computed(() => dayjs(activeDate.value).month())

/** Danh sách ngày của tháng đang active */
const dates = computed(() => {
  const activeDate = props.activeDate
  const results: DateItem[] = []

  // 0: sunday, 6: saturday
  const firstDayOfMonth = dayjs(activeDate).date(1).day()

  // Thêm các ngày của tháng trước
  const prevDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1
  const prev = dayjs(activeDate).date(0)
  for (let i = prevDays - 1; i >= 0; i--) {
    results.push({
      status: 'prev',
      date: prev.subtract(i, 'day')
    })
  }

  // Thêm các ngày của tháng hiện tại
  const daysInMonth = activeDate.daysInMonth()
  for (let day = 1; day <= daysInMonth; day++) {
    results.push({
      status: 'current',
      date: dayjs(activeDate).date(day)
    })
  }

  // Thêm các ngày của tháng tới
  const nextDays = 7 - (results.length % 7)
  const next = dayjs(activeDate)
    .month(activeMonth.value + 1)
    .date(1)
  for (let i = 0; i < nextDays; i++) {
    results.push({
      status: 'next',
      date: next.add(i, 'day')
    })
  }

  return results
})

const isActive = (date: dayjs.Dayjs) => {
  return modelValue.value?.isSame(date)
}

const isDisabled = (date: dayjs.Dayjs) => {
  return (
    (props.minDate && date.isBefore(props.minDate)) ||
    (props.maxDate && date.isAfter(props.maxDate))
  )
}

const handleChangeDate = (date: dayjs.Dayjs) => {
  modelValue.value = date
  activeDate.value = date

  emit('change', date)
}
</script>
