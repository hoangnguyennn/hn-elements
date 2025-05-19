import type { Placement } from '@floating-ui/vue'
import type { PopperProps } from '@hn/components/popper'
import type { Ref } from 'vue'

export const POPOVER_KEY = Symbol('popover')

export type PopoverContext = {
  /** Chỉ định vị trí xuất hiện của content. */
  placement: Ref<Placement>
  /** Chỉ ra rằng nội dung có hiển thị arrow hay không. */
  arrow: Ref<boolean>
}

export type PopoverProps = PopperProps & {
  /** Chỉ ra rằng nội dung có hiển thị arrow hay không. */
  arrow?: boolean
}
