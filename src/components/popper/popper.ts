import type { MiddlewareData, OffsetOptions, Placement } from '@floating-ui/vue'
import type { Ref } from 'vue'

export const POPPER_KEY = Symbol('popper')

export type PopperContext = {
  /** The anchor element. */
  anchorRef: Ref<HTMLElement | null>
  /** The content element. */
  contentRef: Ref<HTMLElement | null>
  /** The arrow element. */
  arrowRef: Ref<HTMLElement | null>
  /** The middleware data. */
  middlewareData: Readonly<Ref<MiddlewareData, MiddlewareData>>
  /** The placement. */
  placement: Ref<Placement>
}

export type PopperTrigger = 'click' | 'hover' | 'focus' | 'contextmenu'

export type PopperProps = {
  /**
   * Chỉ định vị trí xuất hiện của content.
   *
   * @default 'bottom-start'
   */
  placement?: Placement
  /**
   * Chỉ định cách thức bật content.
   *
   * @default 'hover'
   */
  trigger?: PopperTrigger
  /**
   * Chỉ định khoảng cách giữa content và anchor element.
   *
   * @remarks
   *   Nếu không cung cấp, content sẽ nằm sát anchor element.
   */
  offset?: OffsetOptions
}
