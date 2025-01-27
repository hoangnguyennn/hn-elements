import { VNode } from 'vue'

export type CollapseItemProps = {
  /** Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế */
  title?: string
}

export type CollapseItemSlots = {
  /** Nội dung chính của collapse item */
  default: () => VNode
  /** Nội dung của collapse item. Có thể sử dụng prop `title` thay thế */
  title?: () => VNode
}
