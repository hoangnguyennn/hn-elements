import type { VNodeChild } from 'vue'

export type ButtonVariant = 'primary' | 'secondary' | 'text'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = {
  /** Chỉ ra rằng button có bị disable hay không. */
  disabled?: boolean
  /**
   * Biến thể của button.
   *
   * @default 'primary'
   */
  variant?: ButtonVariant
  /**
   * Kích thước của button.
   *
   * @default 'medium'
   */
  size?: ButtonSize
  /** Loại button. */
  type?: 'button' | 'submit' | 'reset'
  /** Id của form mà button này liên kết tới. */
  form?: string
}

export type ButtonEmits = {
  /** Sự kiện khi button được click. */
  click: [MouseEvent]
}

export type ButtonSlots = {
  /** Nội dung của button. */
  default?(): VNodeChild
  /** Slot ở phía trước nội dung của button. */
  leading?(): VNodeChild
  /** Slot ở phía sau nội dung của button. */
  trailing?(): VNodeChild
}
