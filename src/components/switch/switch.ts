export type SwitchProps = {
  /** Chỉ ra rằng switch có bị disable hay không. */
  disabled?: boolean
  /** Chỉ ra rằng switch có hiển thị nhãn hay không. */
  showLabel?: boolean
  /**
   * Nhãn hiển thị khi on.
   *
   * @default 'On'
   */
  labelOn?: string
  /**
   * Nhãn hiển thị khi off.
   *
   * @default 'Off'
   */
  labelOff?: string
  /** Nhãn aria cho switch. */
  ariaLabel?: string
  /** Nội dung gợi ý cho switch. */
  hint?: string
}
