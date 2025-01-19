import type { VNode } from 'vue'

export type FieldSize = 'normal' | 'small'

export type FieldProps = {
  /** Tiêu đề của field */
  label?: string
  /** Kích thước của field */
  size?: FieldSize
  /** Nội dung gợi ý */
  hint?: string
  /** Nội dung lỗi */
  error?: string
  /** Chỉ ra field có bị disable hay không */
  disabled?: boolean
}

export type FieldSlots = {
  /** Nội dung chính của field */
  default(): VNode
  /** Nội dung chi tiết bên phải */
  detailRight(): VNode
}
