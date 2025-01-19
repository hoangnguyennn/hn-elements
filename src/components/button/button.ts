import type { ButtonHTMLAttributes, VNode } from 'vue'

export type ButtonVariant = 'primary' | 'secondary' | 'text'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = {
  /** Chỉ ra rằng button có bị disable hay không */
  disabled?: boolean
  /** Biến thể của button */
  variant?: ButtonVariant
  /** Kích thước của button */
  size?: ButtonSize
} & /* @vue-ignore */ ButtonHTMLAttributes

export type ButtonSlots = {
  /** Nội dung của button */
  default?(): VNode
  /** Icon ở phía trước của button */
  leadingIcon?(): VNode
  /** Icon ở phía sau của button */
  trailingIcon?(): VNode
}
