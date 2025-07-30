export type ActionListItemProps = {
  /** Chỉ ra rằng `action-list-item` có đang được chọn hay không. */
  selected?: boolean
  /** Chỉ ra rằng `action-list-item` có đang bị disable hay không. */
  disabled?: boolean
  /** Nhãn aria cho action list item. */
  ariaLabel?: string
  /** Id của phần tử mô tả thêm cho action list item. */
  ariaDescribedby?: string
}

export type ActionListItemEmits = {
  /** Kích hoạt khi `action-list-item` được nhấp vào. */
  click: []
}
