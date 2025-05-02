import type { ButtonHTMLAttributes, VNode } from 'vue'

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
  type?: ButtonHTMLAttributes['type']
  /** Id của form mà button này liên kết tới. */
  form?: ButtonHTMLAttributes['form']
}

export type ButtonEmits = {
  /** Sự kiện khi button được click. */
  click: [MouseEvent]
}

export type ButtonSlots = {
  /** Nội dung của button. */
  default?(): VNode
  /** Slot ở phía trước nội dung của button. */
  leading?(): VNode
  /** Slot ở phía sau nội dung của button. */
  trailing?(): VNode
}
