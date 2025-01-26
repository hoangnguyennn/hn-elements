export type CalendarEmits = {
  /** Kích hoạt khi thay đổi ngày  */
  'update:modelValue': [CalendarValue]
  /** Kích hoạt khi thay đổi ngày  */
  change: [CalendarValue]
}

export type CalendarValue = Date | undefined

export type CalendarPane = 'day' | 'month' | 'year'

export type CalendarProps = {
  /** Giá trị ngày được chọn hiện tại */
  modelValue?: Date
  /** Giới hạn ngày nhỏ nhất */
  minDate?: Date
  /** Giới hạn ngày lớn nhất */
  maxDate?: Date
}
