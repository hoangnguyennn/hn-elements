import { inject } from 'vue'
import { POPPER_KEY, type PopperContext } from './popper'

/**
 * Lưu trữ state sử dụng chung trong component `hn-popper` và các component con của nó.
 *
 * @returns {PopperContext} Popper context.
 */
export const usePopper = (): PopperContext => {
  const popper = inject<PopperContext>(POPPER_KEY)

  if (!popper) {
    throw new Error('usePopper phải được sử dụng bên trong hn-popper')
  }

  return popper
}
