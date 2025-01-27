import { onBeforeUnmount, onMounted, Ref } from 'vue'
import { isArray } from '@hn/utils'

type UseClickOutsideArgs = {
  /** Phần tử kiểm tra */
  refs: Ref<HTMLElement | null> | Ref<HTMLElement | null>[]
  /** Hàm sẽ được gọi khi click bên ngoài phần tử kiểm tra */
  callback: (event: MouseEvent) => void
}

export const useClickOutside = ({ refs, callback }: UseClickOutsideArgs) => {
  const isClickOutside = (element: HTMLElement | null, target: Node) => {
    if (!element) return false
    return !element.contains(target)
  }

  const onClick = (event: MouseEvent) => {
    const target = event.target as Node

    // không làm gì khi target bị gỡ khỏi DOM
    if (!target || !target.isConnected) return

    if (isArray(refs)) {
      if (refs.every(ref => isClickOutside(ref.value, target))) {
        callback(event)
      }

      return
    }

    if (isClickOutside(refs.value, target)) {
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
