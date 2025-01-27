<template>
  <div class="hn-calendar--year-pane">
    <hr class="hn-calendar--divider" />
    <div class="hn-calendar--years">
      <button
        v-for="year in years"
        :key="year"
        class="hn-calendar--year"
        :class="{ active: isActive(year) }"
        @click.prevent="handleChangeYear(year)"
      >
        {{ year }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { range } from '@hn/utils'
import { computed } from 'vue'
import { YearPaneEmits } from './year-pane'

defineOptions({ name: 'HnYearPane' })

const emit = defineEmits<YearPaneEmits>()

const modelValue = defineModel<dayjs.Dayjs>()
const activeDate = defineModel<dayjs.Dayjs>('activeDate', {
  default: () => dayjs()
})

/** Danh sách các năm trong thập kỷ hiện tại */
const years = computed(() => {
  const int = Math.floor(activeDate.value.year() / 10)
  const modulo = activeDate.value.year() % 10

  if (modulo === 0) {
    return range((int - 1) * 10 + 1, int * 10)
  } else {
    const prev = int * 10 + 1
    const next = prev + 10
    return range(prev, next)
  }
})

const isActive = (year: number) => {
  return modelValue.value?.year() === year
}

const handleChangeYear = (year: number) => {
  if (!isActive(year)) {
    modelValue.value = undefined
    activeDate.value = dayjs(activeDate.value).year(year)
  }

  emit('change')
}
</script>
