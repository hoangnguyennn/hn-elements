import type { CalendarProps } from '../calendar'
import type { FieldProps } from '../field'

export type DatePickerProps = FieldProps & Pick<CalendarProps, 'minDate' | 'maxDate'>
