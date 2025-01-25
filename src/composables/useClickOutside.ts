import { onBeforeUnmount, onMounted, Ref } from 'vue'
import { isArray } from '../utils'

type UseClickOutsideArgs = {
  /** Phần tử kiểm tra */
  refs: Ref<HTMLElement | null> | Ref<HTMLElement | null>[]
  /** Hàm sẽ được gọi khi click bên ngoài phần tử kiểm tra */
  callback: (event: MouseEvent) => void
}

export const useClickOutside = ({ refs, callback }: UseClickOutsideArgs) => {
  const isClickOutside = (element: HTMLElement | null, event: MouseEvent) => {
    if (!element) return false
    return !element.contains(event.target as HTMLElement)
  }

  const onClick = (event: MouseEvent) => {
    if (isArray(refs)) {
      if (refs.every(ref => isClickOutside(ref.value, event))) {
        callback(event)
      }

      return
    }

    if (isClickOutside(refs.value, event)) {
      callback(event)
    }
  }

  onMounted(() => {
    document.addEventListener('click', onClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', onClick)
  })
}
