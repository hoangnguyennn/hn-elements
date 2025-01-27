import { ComputedRef, ModelRef } from 'vue'

export const COLLAPSE_KEY = Symbol('collapse')

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
  /** Hiệu ứng accordion. */
  accordion?: boolean
}
