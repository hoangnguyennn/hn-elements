import { InputHTMLAttributes } from 'vue'

export type CheckboxValue = string | number | boolean | undefined

export type CheckboxEmits = {
  /** Kích hoạt khi giá trị của checkbox thay đổi */
  'update:modelValue': [CheckboxValue]
  /** Kích hoạt khi giá trị indeterminate của checkbox thay đổi */
  'update:indeterminate': [boolean]
  /** Kích hoạt khi giá trị của checkbox thay đổi */
  change: [boolean]
}

export type CheckboxProps = {
  /** Tiêu đề của checkbox */
  label?: string
  /** Giá trị của checkbox */
  modelValue?: CheckboxValue
  /** Giá trị của checkbox khi chọn */
  trueValue?: CheckboxValue
  /** Giá trị của checkbox khi không chọn */
  falseValue?: CheckboxValue
  /** Giá trị của checkbox khi chọn */
  value?: CheckboxValue
  /** Chỉ ra rằng field có ở trạng thái indeterminate hay không */
  indeterminate?: boolean
  /** Chỉ ra rằng field có bị lỗi hay không */
  error?: boolean
  /** Chỉ ra rằng field có bị disable hay không */
  disabled?: boolean
} & /* @vue-ignore */ Omit<InputHTMLAttributes, 'onChange'>
