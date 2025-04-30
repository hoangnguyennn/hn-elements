import type { ComputedRef, Ref } from 'vue'
import { computed, inject, ref, watch } from 'vue'
import type { CheckboxProps, CheckboxValue } from './checkbox'
import { CHECKBOX_GROUP_KEY, type CheckboxGroupContext, type CheckboxGroupValue } from './checkbox-group'

type UseCheckboxOptions = {
  emit: ReturnType<typeof defineEmits>
}

type ReturnValue = {
  /** Giá trị hiện tại của checkbox. */
  modelValue: Ref<CheckboxGroupValue | CheckboxValue>
  /** Chỉ ra rằng checkbox này có trạng thái indeterminate không. */
  indeterminate: Ref<boolean | undefined>
  /** Chỉ ra rằng checkbox này có nằm trong group hay không. */
  isGroup: ComputedRef<boolean>
}

export const useCheckbox = (props: CheckboxProps, { emit }: UseCheckboxOptions): ReturnValue => {
  const checkboxGroupContext = inject<CheckboxGroupContext | undefined>(CHECKBOX_GROUP_KEY, undefined)

  const isGroup = computed(() => checkboxGroupContext !== undefined)

  const modelValue = ref(isGroup.value ? checkboxGroupContext!.modelValue.value : props.modelValue)
  const indeterminate = ref(props.indeterminate)

  watch(modelValue, value => {
    if (isGroup.value) {
      checkboxGroupContext!.modelValue.value = value as CheckboxGroupValue
    } else {
      emit('update:modelValue', value)
      if (indeterminate.value !== undefined) {
        indeterminate.value = false
      }
    }
  })

  watch(indeterminate, value => {
    emit('update:indeterminate', value)
  })

  return {
    modelValue,
    indeterminate,
    isGroup
  }
}
