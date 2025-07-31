import type { FieldProps } from '@hn/components/field'

export type InputProps = FieldProps & {
  /** Chỉ ra rằng input có chức năng clear hay không. */
  clearable?: boolean
  /** Chỉ ra rằng có phải là input password hay không. */
  password?: boolean
  /** Nội dung placeholder của input. */
  placeholder?: string
  /** Chỉ ra rằng input có bắt buộc hay không. */
  required?: boolean
  /** Nhãn aria cho button clear. */
  clearAriaLabel?: string
  /** Nhãn aria cho button hiện mật khẩu. */
  showPasswordAriaLabel?: string
  /** Nhãn aria cho button ẩn mật khẩu. */
  hidePasswordAriaLabel?: string
}

export type InputEmits = {
  /** Kích hoạt khi button clear được click. */
  clear: []
  /** Kích hoạt khi giá trị input thay đổi. */
  change: [string]
}
