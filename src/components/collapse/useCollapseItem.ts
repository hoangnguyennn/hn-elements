import { computed, inject, ref } from 'vue'
import { type CollapseContext, COLLAPSE_KEY } from './collapse'
import { isNumber } from '@hn/utils'

export const useCollapseItem = () => {
  const collapseContext = inject<CollapseContext>(COLLAPSE_KEY)

  if (!collapseContext) {
    throw new Error('hn-collapse-item phải được sử dụng bên trong hn-collapse')
  }

  const currentElement = ref<HTMLElement | null>(null)

  const index = computed(() =>
    currentElement.value
      ? (collapseContext.elements.value.get(currentElement.value) ?? -1)
      : -1
  )

  const isActive = computed(() => {
    if (isNumber(index.value)) {
      return collapseContext.modelValue.value.includes(index.value)
    }
    return false
  })

  const elementRef = (element: HTMLElement | null) => {
    currentElement.value = element
    if (element) collapseContext.register(element)
  }

  return {
    index,
    isActive,
    elementRef,
    onTrigger: collapseContext.onTrigger
  }
}
