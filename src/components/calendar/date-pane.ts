import dayjs from 'dayjs'

export type DateItem = {
  /** Ngày hiển thị */
  date: dayjs.Dayjs
  /** Trang thai của ngày */
  status: 'prev' | 'current' | 'next'
}

export type DatePaneValue = dayjs.Dayjs | undefined

export type DatePaneEmits = {
  /** Kích hoạt khi ngày thay đổi do người dùng chọn trên date-pane */
  change: [DatePaneValue]
}

export type DatePaneProps = {
  /** Ngày mà pane đang hiển thị */
  activeDate: dayjs.Dayjs
  /** Giới hạn ngày nhỏ nhất */
  minDate?: dayjs.Dayjs
  /** Giới hạn ngày lớn nhất */
  maxDate?: dayjs.Dayjs
}
