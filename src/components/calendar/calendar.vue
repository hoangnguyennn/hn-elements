<template>
  <div class="hn-calendar">
    <div class="hn-calendar--header">
      <button
        class="hn-calendar--header-action left"
        @click.prevent="handlePrevClick"
      >
        <ico-arrow-left />
      </button>
      <button class="hn-calendar--header-content" @click="handleTitleClick">
        <span class="hn-calendar--header-title">{{ activePaneTitle }}</span>
      </button>
      <button
        class="hn-calendar--header-action right"
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

    <hn-year-pane
      v-else
      v-model="modelValue"
      v-model:active-date="activeDate"
      @change="handleChangeYear"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CalendarEmits, CalendarPane, CalendarProps } from './calendar'
import dayjs from 'dayjs'
import HnDatePane from './date-pane.vue'
import HnMonthPane from './month-pane.vue'
import HnYearPane from './year-pane.vue'
import { IcoArrowLeft, IcoArrowRight } from '../../assets/icons'

defineOptions({ name: 'HnCalendar' })

const emit = defineEmits<CalendarEmits>()

const props = withDefaults(defineProps<CalendarProps>(), {})

const today = dayjs().startOf('day')

const modelValue = computed({
  get: () => {
    return props.modelValue && dayjs(props.modelValue).startOf('day')
  },
  set: value => {
    emit('update:modelValue', value?.toDate())
  }
})

const internalMinDate = computed(() => {
  return props.minDate && dayjs(props.minDate).startOf('day')
})

const internalMaxDate = computed(() => {
  return props.maxDate && dayjs(props.maxDate).startOf('day')
})

/** Ngày được sử dụng để hiển thị bảng chọn ngày - tháng - năm */
const activeDate = ref<dayjs.Dayjs>(
  modelValue.value ?? internalMinDate.value ?? internalMaxDate.value ?? today
)

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

  const int = Math.floor(activeDate.value.year() / 10)
  const modulo = activeDate.value.year() % 10

  if (modulo === 0) {
    return `${(int - 1) * 10 + 1} - ${int * 10}`
  }

  const prev = int * 10 + 1
  const next = prev + 9
  return `${prev} - ${next}`
})

const handlePrevClick = () => {
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

const handleNextClick = () => {
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

const handleTitleClick = () => {
  if (activePane.value === 'day') {
    activePane.value = 'month'
    return
  }

  if (activePane.value === 'month') {
    activePane.value = 'year'
    return
  }

  if (activePane.value === 'year') {
    activePane.value = 'month'
  }
}

const handleChangeDate = () => {
  emit('change', modelValue.value?.toDate())
}

const handleChangeMonth = () => {
  activePane.value = 'day'
}

const handleChangeYear = () => {
  activePane.value = 'month'
}
</script>
