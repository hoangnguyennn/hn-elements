import { inject } from 'vue'
import { ACTION_LIST_KEY, type ActionListContext } from './action-list'

export const useActionList = (): ActionListContext => {
  const actionList = inject<ActionListContext>(ACTION_LIST_KEY)

  if (!actionList) {
    throw new Error('useActionList phải được sử dụng bên trong hn-action-list')
  }

  return actionList
}
