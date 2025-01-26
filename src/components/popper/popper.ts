import { Placement } from '@floating-ui/vue'
import { Ref } from 'vue'

export const POPPER_KEY = Symbol('popper')

export type PopperContext = {
  /** The anchor element */
  anchorRef: Ref<HTMLElement | null>
}

export type PopperTrigger = 'click' | 'hover' | 'focus' | 'contextmenu'

export type PopperProps = {
  /**
   * Chỉ định vị trí xuất hiện của content
   *
   * @default 'bottom-start'
   */
  placement?: Placement
  /**
   * Chỉ định cách thức bật content
   *
   * @default 'hover'
   */
  trigger?: PopperTrigger
}
