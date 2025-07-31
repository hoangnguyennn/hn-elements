<template>
  <div class="hn-calendar" role="application" :aria-label="ariaLabel" :aria-describedby="ariaDescribedby">
    <div class="hn-calendar--header">
      <button
        class="hn-calendar--header-action left"
        :aria-label="prevAriaLabel"
        :disabled="isPrevDisabled"
        @click.prevent="handlePrevClick"
      >
        <ico-arrow-left />
      </button>
      <button class="hn-calendar--header-content" :aria-label="titleAriaLabel" @click="handleTitleClick">
        <span class="hn-calendar--header-title">{{ activePaneTitle }}</span>
      </button>
      <button
        class="hn-calendar--header-action right"
        :aria-label="nextAriaLabel"
        :disabled="isNextDisabled"
        @click.prevent="handleNextClick"
      >
        <ico-arrow-right />
      </button>
    </div>

    <hn-date-pane
      v-if="activePane === 'day'"
      v-model="modelValue"
      v-model:active-date="activeDate"
      :min-date="internalMinDate"
      :max-date="internalMaxDate"
      @change="handleChangeDate"
    />

    <hn-month-pane
      v-else-if="activePane === 'month'"
      v-model="modelValue"
      v-model:active-date="activeDate"
      @change="handleChangeMonth"
    />

    <hn-year-pane v-else v-model="modelValue" v-model:active-date="activeDate" @change="handleChangeYear" />
  </div>
</template>

<script setup lang="ts">
import { IcoArrowLeft, IcoArrowRight } from '@hn/assets/icons'
import dayjs from 'dayjs'
import { computed, ref, watch } from 'vue'
import type { CalendarEmits, CalendarPane, CalendarProps } from './calendar'
import HnDatePane from './date-pane.vue'
import HnMonthPane from './month-pane.vue'
import { getDecadeLabel } from './utils'
import HnYearPane from './year-pane.vue'

defineOptions({ name: 'HnCalendar' })

const emit = defineEmits<CalendarEmits>()

const props = withDefaults(defineProps<CalendarProps>(), {})

const today = dayjs().startOf('day')

const modelValue = ref(props.modelValue && dayjs(props.modelValue).startOf('day'))

watch(modelValue, value => emit('update:modelValue', value?.toDate()), { flush: 'sync' })

const internalMinDate = computed(() => props.minDate && dayjs(props.minDate).startOf('day'))
const internalMaxDate = computed(() => props.maxDate && dayjs(props.maxDate).startOf('day'))

/** Ngày được sử dụng để hiển thị bảng chọn ngày - tháng - năm */
const activeDate = ref(modelValue.value ?? internalMinDate.value ?? internalMaxDate.value ?? today)

/** Bảng chọn ngày - tháng - năm hiện tại */
const activePane = ref<CalendarPane>('day')

/** Tiêu đề của bảng chọn ngày - tháng - năm hiện tại */
const activePaneTitle = computed(() => {
  if (activePane.value === 'day') {
    return activeDate.value.format('MMMM YYYY')
  }

  if (activePane.value === 'month') {
    return activeDate.value.format('YYYY')
  }

  return getDecadeLabel(activeDate.value.toDate())
})

const ariaLabel = computed(() => props.ariaLabel || 'Lịch chọn ngày')
const ariaDescribedby = computed(() => {
  const ids = []
  if (props.hint) ids.push(`hn-calendar-hint-${activeDate.value.format('YYYY-MM')}`)
  return ids.length > 0 ? ids.join(' ') : undefined
})

const prevAriaLabel = computed(() => {
  if (activePane.value === 'day') return 'Tháng trước'
  if (activePane.value === 'month') return 'Năm trước'
  return 'Thập kỷ trước'
})

const nextAriaLabel = computed(() => {
  if (activePane.value === 'day') return 'Tháng sau'
  if (activePane.value === 'month') return 'Năm sau'
  return 'Thập kỷ sau'
})

const titleAriaLabel = computed(() => {
  if (activePane.value === 'day') return 'Chọn tháng'
  if (activePane.value === 'month') return 'Chọn năm'
  return 'Chọn thập kỷ'
})

/** Kiểm tra button prev có bị vô hiệu hóa không */
const isPrevDisabled = computed(() => {
  if (activePane.value === 'day') {
    const prevMonth = activeDate.value.subtract(1, 'month')
    return internalMinDate.value && prevMonth.isBefore(internalMinDate.value, 'month')
  }

  if (activePane.value === 'month') {
    const prevYear = activeDate.value.subtract(1, 'year')
    return internalMinDate.value && prevYear.isBefore(internalMinDate.value, 'year')
  }

  if (activePane.value === 'year') {
    const prevDecade = activeDate.value.subtract(10, 'year')
    return internalMinDate.value && prevDecade.isBefore(internalMinDate.value, 'year')
  }

  return false
})

/** Kiểm tra button next có bị vô hiệu hóa không */
const isNextDisabled = computed(() => {
  if (activePane.value === 'day') {
    const nextMonth = activeDate.value.add(1, 'month')
    return internalMaxDate.value && nextMonth.isAfter(internalMaxDate.value, 'month')
  }

  if (activePane.value === 'month') {
    const nextYear = activeDate.value.add(1, 'year')
    return internalMaxDate.value && nextYear.isAfter(internalMaxDate.value, 'year')
  }

  if (activePane.value === 'year') {
    const nextDecade = activeDate.value.add(10, 'year')
    return internalMaxDate.value && nextDecade.isAfter(internalMaxDate.value, 'year')
  }

  return false
})

const handlePrevClick = (): void => {
  if (isPrevDisabled.value) return

  if (activePane.value === 'day') {
    activeDate.value = activeDate.value.subtract(1, 'month')
    return
  }

  if (activePane.value === 'month') {
    activeDate.value = activeDate.value.subtract(1, 'year')
    return
  }

  if (activePane.value === 'year') {
    activeDate.value = activeDate.value.subtract(10, 'year')
  }
}

const handleNextClick = (): void => {
  if (isNextDisabled.value) return

  if (activePane.value === 'day') {
    activeDate.value = activeDate.value.add(1, 'month')
    return
  }

  if (activePane.value === 'month') {
    activeDate.value = activeDate.value.add(1, 'year')
    return
  }

  if (activePane.value === 'year') {
    activeDate.value = activeDate.value.add(10, 'year')
  }
}

const handleTitleClick = (): void => {
  const movingPaneMap: Record<CalendarPane, CalendarPane> = {
    day: 'month',
    month: 'year',
    year: 'day'
  }

  activePane.value = movingPaneMap[activePane.value]
}

const handleChangeDate = (): void => {
  emit('change', modelValue.value?.toDate())
}

const handleChangeMonth = (): void => {
  activePane.value = 'day'
}

const handleChangeYear = (): void => {
  activePane.value = 'month'
}
</script>
