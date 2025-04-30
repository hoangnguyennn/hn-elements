<template>
  <div class="hn-calendar--month-pane">
    <hr class="hn-calendar--divider" />
    <div class="hn-calendar--months">
      <button
        v-for="month in months"
        :key="month"
        class="hn-calendar--month"
        :class="{ active: isActive(month) }"
        @click.prevent="handleChangeMonth(month)"
      >
        {{ month }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import type { MonthPaneEmits } from './month-pane'

defineOptions({ name: 'HnMonthPane' })

const modelValue = defineModel<dayjs.Dayjs>()
const activeDate = defineModel<dayjs.Dayjs>('activeDate')

const emit = defineEmits<MonthPaneEmits>()

/** Danh sách cấc tháng trong năm */
const months = Array.from({ length: 12 }, (_, index) => dayjs().month(index).format('MMMM'))

const isSameYear = computed(() => {
  if (!modelValue.value) return false
  return modelValue.value.isSame(activeDate.value, 'year')
})

const isActive = (month: string): boolean => {
  const isSameMonth = modelValue.value?.format('MMMM') === month
  return isSameYear.value && isSameMonth
}

const handleChangeMonth = (month: string): void => {
  const monthIndex = months.indexOf(month)
  if (monthIndex === -1) return

  if (!isActive(month)) {
    modelValue.value = undefined
    activeDate.value = dayjs(activeDate.value).month(monthIndex)
  }

  emit('change')
}
</script>
