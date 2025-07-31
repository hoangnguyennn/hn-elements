import type { IconProps } from '@hn/components/icon'

export type IconButtonProps = IconProps & {
  /** Chỉ ra rằng button có bị disable hay không. */
  disabled?: boolean
  /** Id của phần tử mô tả thêm cho button. */
  ariaDescribedby?: string
  /** Chỉ ra trạng thái được nhấn của button (cho toggle button). */
  ariaPressed?: boolean
  /** Chỉ ra trạng thái mở rộng của button (cho dropdown, expandable content). */
  ariaExpanded?: boolean
  /** Chỉ ra rằng button có popup menu. */
  ariaHasPopup?: boolean | 'dialog' | 'grid' | 'listbox' | 'menu' | 'tree'
  /** Id của phần tử được điều khiển bởi button. */
  ariaControls?: string
}

export type IconButtonEmits = {
  /** Sự kiện khi button được click. */
  click: [MouseEvent]
}
