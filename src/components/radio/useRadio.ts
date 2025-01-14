import { computed, inject } from 'vue'
import { RADIO_GROUP_KEY, RadioGroupContext } from './radio-group'
import { RadioProps } from './radio'

type UseRadioOptions = {
  emit: ReturnType<typeof defineEmits>
}

type GroupContext = RadioGroupContext | undefined

export const useRadio = (props: RadioProps, { emit }: UseRadioOptions) => {
  const radioGroup = inject<GroupContext>(RADIO_GROUP_KEY, undefined)

  const isGroup = computed(() => radioGroup !== undefined)

  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup!.modelValue.value : props.modelValue
    },
    set(value) {
      if (isGroup.value) {
        radioGroup!.modelValue.value = value
      } else {
        emit('update:modelValue', value)
      }
    }
  })

  return {
    modelValue,
    isGroup,
    radioGroup
  }
}
