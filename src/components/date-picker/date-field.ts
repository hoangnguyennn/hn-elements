import type { FieldProps } from '@hn/components/field'

export type DateFieldProps = FieldProps & {
  /** Chỉ ra rằng date-picker có đang focus hay không. */
  focus?: boolean
}
