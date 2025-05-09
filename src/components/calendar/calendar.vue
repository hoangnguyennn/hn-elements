<template>
  <div class="hn-calendar">
    <div class="hn-calendar--header">
      <button class="hn-calendar--header-action left" aria-label="Prev" @click.prevent="handlePrevClick">
        <ico-arrow-left />
      </button>
      <button class="hn-calendar--header-content" @click="handleTitleClick">
        <span class="hn-calendar--header-title">{{ activePaneTitle }}</span>
      </button>
      <button class="hn-calendar--header-action right" aria-label="Next" @click.prevent="handleNextClick">
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

const handlePrevClick = (): void => {
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
