import { computed, inject } from 'vue'
import { RADIO_GROUP_KEY, RadioGroupContext } from './radio-group'
import { RadioProps } from './radio'

type UseRadioOptions = {
  emit: ReturnType<typeof defineEmits>
}

export const useRadio = (props: RadioProps, { emit }: UseRadioOptions) => {
  const radioGroupContext = inject<RadioGroupContext>(RADIO_GROUP_KEY)

  const isGroup = computed(() => radioGroupContext !== undefined)

  const modelValue = computed({
    get() {
      return isGroup.value
        ? radioGroupContext!.modelValue.value
        : props.modelValue
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
