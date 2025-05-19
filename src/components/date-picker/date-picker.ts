import type { CalendarProps } from '@hn/components/calendar'
import type { FieldProps } from '@hn/components/field'

export type DatePickerProps = FieldProps & Pick<CalendarProps, 'minDate' | 'maxDate'>
