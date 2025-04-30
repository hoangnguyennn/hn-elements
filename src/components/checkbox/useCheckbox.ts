import type { ComputedRef } from 'vue'
import { computed, inject } from 'vue'
import type { CheckboxProps, CheckboxValue } from './checkbox'

import { CHECKBOX_GROUP_KEY, type CheckboxGroupContext, type CheckboxGroupValue } from './checkbox-group'

type UseCheckboxOptions = {
  emit: ReturnType<typeof defineEmits>
}

type ReturnValue = {
  modelValue: ComputedRef<CheckboxGroupValue | CheckboxValue>
  isGroup: ComputedRef<boolean>
}

export const useCheckbox = (props: CheckboxProps, { emit }: UseCheckboxOptions): ReturnValue => {
  const checkboxGroupContext = inject<CheckboxGroupContext>(CHECKBOX_GROUP_KEY)

  const isGroup = computed(() => checkboxGroupContext !== undefined)

  const modelValue = computed({
    get() {
      return isGroup.value ? checkboxGroupContext!.modelValue.value : props.modelValue
    },
    set(value) {
      if (isGroup.value) {
        checkboxGroupContext!.modelValue.value = value as CheckboxGroupValue
      } else {
        emit('update:modelValue', value)

        if (props.indeterminate !== undefined) {
          emit('update:indeterminate', false)
        }
      }
    }
  })

  return {
    modelValue,
    isGroup
  }
}
