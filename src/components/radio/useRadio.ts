import { computed, inject, type ComputedRef } from 'vue'
import type { RadioProps, RadioValue } from './radio'
import { RADIO_GROUP_KEY, type RadioGroupContext } from './radio-group'

type UseRadioOptions = {
  emit: ReturnType<typeof defineEmits>
}

type ReturnValue = {
  modelValue: ComputedRef<RadioValue>
  isGroup: ComputedRef<boolean>
  radioGroup?: RadioGroupContext
}

export const useRadio = (props: RadioProps, { emit }: UseRadioOptions): ReturnValue => {
  const radioGroupContext = inject<RadioGroupContext>(RADIO_GROUP_KEY)

  const isGroup = computed(() => radioGroupContext !== undefined)

  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroupContext!.modelValue.value : props.modelValue
    },
    set(value) {
      if (isGroup.value) {
        radioGroupContext!.modelValue.value = value
      } else {
        emit('update:modelValue', value)
      }
    }
  })

  return {
    modelValue,
    isGroup,
    radioGroup: radioGroupContext
  }
}
