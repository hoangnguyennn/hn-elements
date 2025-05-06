import { inject } from 'vue'
import { MODAL_KEY, type ModalContext } from './modal'

export const useModal = (): ModalContext => {
  const modal = inject<ModalContext>(MODAL_KEY)

  if (!modal) {
    throw new Error('useModal phải được sử dụng bên trong hn-modal')
  }

  return modal
}
