import { inject } from 'vue'
import { POPOVER_KEY, type PopoverContext } from './popover'

/**
 * Lưu trữ state sử dụng chung trong component `hn-popover` và các component con của nó.
 *
 * @returns {PopoverContext} Popover context.
 */
export const usePopover = (): PopoverContext => {
  const popover = inject<PopoverContext>(POPOVER_KEY)

  if (!popover) {
    throw new Error('usePopover phải được sử dụng bên trong hn-popover')
  }

  return popover
}
