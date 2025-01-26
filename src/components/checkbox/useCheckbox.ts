import { computed, inject } from 'vue'
import {
  type CheckboxGroupContext,
  type CheckboxGroupValue,
  CHECKBOX_GROUP_KEY
} from './checkbox-group'
import { type CheckboxProps } from './checkbox'

type UseCheckboxOptions = {
  emit: ReturnType<typeof defineEmits>
}

export const useCheckbox = (
  props: CheckboxProps,
  { emit }: UseCheckboxOptions
) => {
  const checkboxGroupContext = inject<CheckboxGroupContext>(CHECKBOX_GROUP_KEY)

  const isGroup = computed(() => checkboxGroupContext !== undefined)

  const modelValue = computed({
    get() {
      return isGroup.value
        ? checkboxGroupContext!.modelValue.value
        : props.modelValue
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
