import type { ComputedRef, ModelRef } from 'vue'

export const COLLAPSE_KEY = Symbol('collapse')

/** Giá trị của v-model. Mảng các index của các collapse items đang mở. */
export type CollapseValue = number[]

export type CollapseContext = {
  modelValue: ModelRef<CollapseValue>
  /** Đăng ký một tab vào tab group. */
  register: (element: HTMLElement) => void
  /** Gỡ một tab khỏi tab group. */
  unregister: (element: HTMLElement) => void
  /** Danh sách tab trong tab group. */
  elements: ComputedRef<Map<HTMLElement, number>>
  onTrigger: (index: number) => void
}

export type CollapseProps = {
  /** Hiệu ứng accordion. Khi true, chỉ có thể mở một item tại một thời điểm. */
  accordion?: boolean
}
