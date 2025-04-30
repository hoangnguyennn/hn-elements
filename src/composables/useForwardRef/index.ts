import { provide, type ObjectDirective, type Ref } from 'vue'

export const FORWARD_REF_KEY = Symbol('forwardRef')

type ForwardRefSetter = <T>(element: T) => void

export type ForwardRefContext = {
  /** Hàm set giá trị cho ref. */
  setForwardRef: ForwardRefSetter
}

export const useForwardRef = <T>(forwardRef: Ref<T | null>): void => {
  const setForwardRef = (element: T): void => {
    forwardRef.value = element
  }

  provide(FORWARD_REF_KEY, {
    setForwardRef
  })
}

export const useForwardRefDireactive = (setForwardRef: ForwardRefSetter): ObjectDirective => {
  return {
    mounted(element) {
      setForwardRef(element)
    },
    updated(element) {
      setForwardRef(element)
    },
    beforeUnmount() {
      setForwardRef(null)
    }
  }
}
