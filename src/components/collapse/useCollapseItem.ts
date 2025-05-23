import { isNumber } from '@hn/utils'
import { computed, inject, ref, type ComputedRef } from 'vue'
import { COLLAPSE_KEY, type CollapseContext } from './collapse'

type ReturnValue = {
  index: ComputedRef<number>
  isActive: ComputedRef<boolean>
  elementRef: (element: HTMLElement | null) => void
  onTrigger: (index: number) => void
}

export const useCollapseItem = (): ReturnValue => {
  const collapseContext = inject<CollapseContext>(COLLAPSE_KEY)

  if (!collapseContext) {
    throw new Error('hn-collapse-item phải được sử dụng bên trong hn-collapse')
  }

  const currentElement = ref<HTMLElement | null>(null)

  const index = computed(() =>
    currentElement.value ? (collapseContext.elements.value.get(currentElement.value) ?? -1) : -1
  )

  const isActive = computed(() => {
    if (isNumber(index.value)) {
      return collapseContext.modelValue.value.includes(index.value)
    }
    return false
  })

  const elementRef = (element: HTMLElement | null): void => {
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
