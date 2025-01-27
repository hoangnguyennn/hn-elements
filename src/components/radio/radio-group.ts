import { ModelRef } from 'vue'
import type { CheckboxGroupDirection } from '@hn/components/checkbox'
import type { RadioValue } from './radio'

export const RADIO_GROUP_KEY = Symbol('radioGroup')

export type RadioGroupEmits = {
  /** Kích hoạt khi giá trị của radio thay đổi */
  change: [RadioValue]
}

export type RadioGroupDirection = CheckboxGroupDirection

export type RadioGroupProps = {
  /** Hướng của radio group */
  direction?: RadioGroupDirection
  /** Tên của radio group */
  name?: string
}

export type RadioGroupContext = {
  /** Giá trị của radio group */
  modelValue: ModelRef<RadioValue>
  /** Tên của radio group */
  name?: string
}
