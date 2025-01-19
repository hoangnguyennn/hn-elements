import { computed, inject, ref } from 'vue'
import { TabGroupContext, TAB_GROUP_KEY } from './tab-group'

type GroupContext = TabGroupContext | undefined

export const useTab = () => {
  const tabGroup = inject<GroupContext>(TAB_GROUP_KEY, undefined)

  if (!tabGroup) {
    throw new Error('hn-tab phải được sử dụng bên trong hn-tab-group')
  }

  const currentElement = ref<HTMLElement | null>(null)

  const index = computed(() =>
    currentElement.value
      ? tabGroup.elements.value.get(currentElement.value)
      : -1
  )

  const elementRef = (element: HTMLElement | null) => {
    currentElement.value = element
    if (element) tabGroup.register(element)
  }

  return {
    modelValue: tabGroup.modelValue,
    index,
    elementRef
  }
}
