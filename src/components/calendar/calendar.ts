import dayjs from 'dayjs'
import { DatePaneValue } from './date-pane'

export type CalendarEmits = {
  /** Kích hoạt khi thay đổi ngày  */
  change: [DatePaneValue]
}

export type CalendarValue = DatePaneValue

export type CalendarPane = 'day' | 'month' | 'year'

export type CalendarProps = {
  /** Giới hạn ngày nhỏ nhất */
  minDate?: dayjs.Dayjs
  /** Giới hạn ngày lớn nhất */
  maxDate?: dayjs.Dayjs
}
