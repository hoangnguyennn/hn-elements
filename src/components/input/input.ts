import type { FieldProps } from '@hn/components/field'

export type InputProps = FieldProps & {
  /** Chỉ ra rằng input có chức năng clear hay không. */
  clearable?: boolean
  /** Chỉ ra rằng có phải là input password hay không. */
  password?: boolean
  /** Nội dung placeholder của input. */
  placeholder?: string
}

export type InputEmits = {
  /** Kích hoạt khi button clear được click. */
  clear: []
  /** Kích hoạt khi giá trị input thay đổi. */
  change: [string]
}
