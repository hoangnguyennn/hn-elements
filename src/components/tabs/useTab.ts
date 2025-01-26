import { computed, inject, ref } from 'vue'
import { TabGroupContext, TAB_GROUP_KEY } from './tab-group'

export const useTab = () => {
  const tabGroupContext = inject<TabGroupContext>(TAB_GROUP_KEY)

  if (!tabGroupContext) {
    throw new Error('hn-tab phải được sử dụng bên trong hn-tab-group')
  }

  const currentElement = ref<HTMLElement | null>(null)

  const index = computed(() =>
    currentElement.value
      ? tabGroupContext.elements.value.get(currentElement.value)
      : -1
  )

  const elementRef = (element: HTMLElement | null) => {
    currentElement.value = element
    if (element) tabGroupContext.register(element)
  }

  return {
    modelValue: tabGroupContext.modelValue,
    index,
    elementRef
  }
}
