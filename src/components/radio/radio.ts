export type RadioValue = string | number | boolean | undefined

export type RadioEmits = {
  /** Kích hoạt khi giá trị của radio thay đổi. */
  'update:modelValue': [RadioValue]
  /** Kích hoạt khi giá trị của radio thay đổi. */
  change: [boolean]
}

export type RadioProps = {
  /** Nhãn của của radio. */
  label?: string
  /** Tên của radio. */
  name?: string
  /** Giá trị của radio. */
  modelValue?: RadioValue
  /** Giá trị của radio khi chọn. */
  value?: RadioValue
  /** Chỉ ra rằng radio có bị disable không. */
  disabled?: boolean
  /** Chỉ ra rằng radio có bị lỗi không. */
  error?: boolean
}
