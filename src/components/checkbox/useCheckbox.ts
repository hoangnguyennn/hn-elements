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

type GroupContext = CheckboxGroupContext | undefined

export const useCheckbox = (
  props: CheckboxProps,
  { emit }: UseCheckboxOptions
) => {
  const checkboxGroup = inject<GroupContext>(CHECKBOX_GROUP_KEY, undefined)

  const isGroup = computed(() => checkboxGroup !== undefined)

  const modelValue = computed({
    get() {
      return isGroup.value ? checkboxGroup!.modelValue.value : props.modelValue
    },
    set(value) {
      if (isGroup.value) {
        checkboxGroup!.modelValue.value = value as CheckboxGroupValue
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
