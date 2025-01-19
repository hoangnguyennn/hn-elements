import { reactive, ShallowRef, toRefs, watch } from 'vue'

type UseDragArgs = {
  /** Phần từ liên kết với sự kiện drag */
  elementRef: ShallowRef<HTMLElement | null>
}

type UseDragState = {
  /** Vị trí trên trục X của chuột khi drag */
  x: number
  /** Vị trí trên trục Y của chuột khi drag */
  y: number
  /** Chỉ ra rằng element có đang trong trạng thái drag không */
  isDragging: boolean
}

export const useDrag = ({ elementRef }: UseDragArgs) => {
  const state = reactive<UseDragState>({
    x: 0,
    y: 0,
    isDragging: false
  })

  const onMouseDown = () => {
    state.isDragging = true
  }

  const onMouseMove = (event: MouseEvent) => {
    if (!state.isDragging) return

    state.x = event.pageX
    state.y = event.pageY
  }

  const onMouseUp = () => {
    state.isDragging = false
  }

  const bindHandlers = (element: HTMLElement) => {
    element.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const unbindHandlers = (element: HTMLElement) => {
    element.removeEventListener('mousedown', onMouseDown)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  watch(
    elementRef,
    (newElement, oldElement) => {
      if (oldElement) {
        unbindHandlers(oldElement)
      }

      if (newElement) {
        bindHandlers(newElement)
      }
    },
    { immediate: true }
  )

  return {
    ...toRefs(state)
  }
}
