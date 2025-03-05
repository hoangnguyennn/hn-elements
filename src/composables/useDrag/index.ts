import { reactive, toRefs, watch, type Ref, type ShallowRef } from 'vue'

type UseDragArgs = {
  /** Phần từ liên kết với sự kiện drag. */
  elementRef: ShallowRef<HTMLElement | null>
}

type UseDragState = {
  /** Vị trí trên trục X của chuột khi drag. */
  x: number
  /** Vị trí trên trục Y của chuột khi drag. */
  y: number
  /** Chỉ ra rằng element có đang trong trạng thái drag không. */
  isDragging: boolean
}

type ReturnValue = {
  [K in keyof UseDragState]: Ref<UseDragState[K]>
}

export const useDrag = ({ elementRef }: UseDragArgs): ReturnValue => {
  const state = reactive<UseDragState>({
    x: 0,
    y: 0,
    isDragging: false
  })

  const onMouseDown = (): void => {
    state.isDragging = true
  }

  const onMouseMove = (event: MouseEvent): void => {
    if (!state.isDragging) return

    state.x = event.pageX
    state.y = event.pageY
  }

  const onMouseUp = (): void => {
    state.isDragging = false
  }

  const bindHandlers = (element: HTMLElement): void => {
    element.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const unbindHandlers = (element: HTMLElement): void => {
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
