import { InputHTMLAttributes } from 'vue'

export type InputSlots = {
  /** Tiêu đề của input */
  label(): any
  /** Nội dung lỗi của input */
  error(): any
}

export type InputSize = 'normal' | 'small'

export type InputProps = {
  /** Kích thước của input */
  size?: InputSize
  /** Tiêu đề của input */
  label?: string
  /** Nội dung lỗi của input */
  error?: string
  /** Nội dung gợi ý của input */
  hint?: string
  /** Chỉ ra rằng input chức năng clear hay không */
  clearable?: boolean
  /** Chỉ ra rằng có phải là input password hay không */
  password?: boolean
  /** Chỉ ra rằng input có bị disable hay không */
  disabled?: boolean
} & /* @vue-ignore */ Omit<InputHTMLAttributes, 'type'>

export type InputEmits = {
  /** Kích hoạt khi button clear được click */
  clear: []
  /** Kích hoạt khi giá trị input thay đổi */
  change: [string]
}
