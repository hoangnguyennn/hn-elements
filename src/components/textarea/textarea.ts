import type { FieldProps } from '@hn/components/field'
import type { TextareaHTMLAttributes } from 'vue'

export type TextareaEmits = {
  /** Kích hoạt khi giá trị textarea thay đổi. */
  change: [string]
}

export type TextareaProps = FieldProps & {
  /** Kích thước tối đa của textarea. */
  maxRows?: number
  /** Kích thước tối thiểu của textarea. */
  minRows?: number
  /** Số ký tự tối đa. */
  maxLength?: number
  /** Hiển thị số ký tự đã nhập. */
  showCounter?: boolean
} & /** @vue-ignore */ Omit<
    TextareaHTMLAttributes,
    'rows' | 'cols' | 'maxlength'
  >
