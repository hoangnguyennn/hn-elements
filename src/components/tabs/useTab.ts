import { computed, inject, ref, type ComputedRef } from 'vue'
import { TAB_GROUP_KEY, type TabGroupContext } from './tab-group'

type ReturnValue = {
  modelValue: TabGroupContext['modelValue']
  index: ComputedRef<number | undefined>
  elementRef: (element: HTMLElement | null) => void
}

export const useTab = (): ReturnValue => {
  const tabGroupContext = inject<TabGroupContext>(TAB_GROUP_KEY)

  if (!tabGroupContext) {
    throw new Error('hn-tab phải được sử dụng bên trong hn-tab-group')
  }

  const currentElement = ref<HTMLElement | null>(null)

  const index = computed(() => (currentElement.value ? tabGroupContext.elements.value.get(currentElement.value) : -1))

  const elementRef = (element: HTMLElement | null): void => {
    currentElement.value = element
    if (element) tabGroupContext.register(element)
  }

  return {
    modelValue: tabGroupContext.modelValue,
    index,
    elementRef
  }
}
