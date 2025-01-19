import { ComputedRef, ModelRef } from 'vue'

export const TAB_GROUP_KEY = Symbol('tabGroup')

type TabValue = number | undefined

export type TabGroupContext = {
  /** Giá trị hiện tại của tab group */
  modelValue: ModelRef<TabValue>
  /** Đăng ký một tab vào tab group */
  register: (element: HTMLElement) => void
  /** Gỡ một tab khỏi tab group */
  unregister: (element: HTMLElement) => void
  /** Danh sách tab trong tab group */
  elements: ComputedRef<Map<HTMLElement, number>>
}

export type TabGroupDirection = 'horizontal' | 'vertical'

export type TabGroupProps = {
  /** Hướng của tab group */
  direction?: TabGroupDirection
}

export type TabGroupEmits = {
  /** Kích hoạt khi giá trị của tab group thay đổi */
  change: [TabValue]
}
