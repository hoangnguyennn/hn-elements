import debounce from 'lodash.debounce'
import { onBeforeUnmount } from 'vue'

interface Callback<T> {
  (...args: T[]): void
}

interface ReturnValue<K, T extends Callback<K>> {
  (...args: Parameters<T>): void
  cancel: () => void
}

export const useDebounce = <K, T extends Callback<K>>(callback: T, delay = 200): ReturnValue<K, T> => {
  const action = debounce(callback, delay)

  onBeforeUnmount(action.cancel)

  return action
}
