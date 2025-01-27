import type { ModelRef } from 'vue'
import { type CheckboxValue } from './checkbox'

export const CHECKBOX_GROUP_KEY = Symbol('checkboxGroup')

export type CheckboxGroupValue = CheckboxValue[]

export type CheckboxGroupEmits = {
  /** Kích hoạt khi giá trị của checkbox group thay đổi. */
  change: [CheckboxGroupValue]
}

export type CheckboxGroupContext = {
  /** Giá trị hiện tại của checkbox group. */
  modelValue: ModelRef<CheckboxGroupValue>
}

export type CheckboxGroupDirection = 'horizontal' | 'vertical'

export type CheckboxGroupProps = {
  /** Hướng của checkbox group. */
  direction?: CheckboxGroupDirection
}
