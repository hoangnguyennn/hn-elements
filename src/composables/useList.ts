import { ref, computed } from 'vue'

export const useList = () => {
  const uniqueElements = ref(new Set<HTMLElement>())
  const elements = ref<HTMLElement[]>([])

  const map = computed(() => {
    return new Map(elements.value.map((element, index) => [element, index]))
  })

  const register = (element: HTMLElement) => {
    uniqueElements.value.add(element)
    elements.value = Array.from(uniqueElements.value)
  }

  const unregister = (element: HTMLElement) => {
    uniqueElements.value.delete(element)
    elements.value = Array.from(uniqueElements.value)
  }

  return {
    register,
    unregister,
    map
  }
}
