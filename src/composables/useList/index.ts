import { computed, ref, type ComputedRef } from 'vue'

type ReturnValue = {
  register: (element: HTMLElement) => void
  unregister: (element: HTMLElement) => void
  map: ComputedRef<Map<HTMLElement, number>>
}

export const useList = (): ReturnValue => {
  const uniqueElements = ref(new Set<HTMLElement>())
  const elements = ref<HTMLElement[]>([])

  const map = computed(() => {
    return new Map(elements.value.map((element, index) => [element, index]))
  })

  const register = (element: HTMLElement): void => {
    uniqueElements.value.add(element)
    elements.value = Array.from(uniqueElements.value)
  }

  const unregister = (element: HTMLElement): void => {
    uniqueElements.value.delete(element)
    elements.value = Array.from(uniqueElements.value)
  }

  return {
    register,
    unregister,
    map
  }
}
