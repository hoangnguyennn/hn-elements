export type SliderProps = {
  /** Chỉ ra rằng slider có hiển thị nhãn không. */
  withLabel?: boolean
  /** Chỉ ra rằng slider có hiển thị tooltip không. */
  tooltip?: boolean
  /** Giá trị tối thiểu của slider. */
  min?: number
  /** Giá trị tối đa của slider. */
  max?: number
  /** Bước nhảy của slider. */
  step?: number
  /** Chỉ ra rằng slider có bị disable hay không. */
  disabled?: boolean
  /** Nhãn aria cho slider. */
  ariaLabel?: string
  /** Nội dung gợi ý cho slider. */
  hint?: string
  /** Văn bản mô tả giá trị hiện tại của slider. */
  ariaValueText?: string
}
