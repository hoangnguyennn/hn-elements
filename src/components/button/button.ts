import { ButtonHTMLAttributes } from 'vue'

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
  default(): any
  /** Icon ở phía trước của button */
  leadingIcon(): any
  /** Icon ở phía sau của button */
  trailingIcon(): any
}
