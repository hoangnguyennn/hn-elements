import type { ToRefs } from 'vue'

export type ActionListProps = {
  /** Chỉ ra rằng có chọn nhiều item được không. */
  multiple?: boolean
}

export const ACTION_LIST_KEY = Symbol('actionList')

export type ActionListContext = ToRefs<Required<ActionListProps>>
