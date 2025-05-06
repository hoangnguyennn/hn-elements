import { onBeforeUnmount, onMounted } from 'vue'

type Args = {
  /** Hàm sẽ được gọi khi nhấn phím Esc. */
  callback: () => void
}

export const usePressEsc = ({ callback }: Args): void => {
  const handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      event.preventDefault()
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
}
