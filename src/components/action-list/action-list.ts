import type { ToRefs } from 'vue'

export type ActionListProps = {
  /** Chỉ ra rằng có chọn nhiều item được không. */
  multiple?: boolean
  /** Nhãn aria cho action list. */
  ariaLabel?: string
  /** Id của phần tử mô tả thêm cho action list. */
  ariaDescribedby?: string
}

export const ACTION_LIST_KEY = Symbol('actionList')

export type ActionListContext = ToRefs<ActionListProps>
