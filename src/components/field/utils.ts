import type { FieldProps } from './field'

export const getFieldProps = <T extends FieldProps>(props: T): FieldProps => {
  return {
    label: props.label,
    size: props.size,
    hint: props.hint,
    error: props.error,
    disabled: props.disabled
  }
}
