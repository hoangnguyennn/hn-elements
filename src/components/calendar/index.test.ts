import { render, screen } from '@testing-library/vue'
import dayjs from 'dayjs'
import { HnCalendar } from '.'

describe('calendar', () => {
  it('component render thành công', () => {
    const { container } = render(HnCalendar)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('hn-calendar')
  })

  describe('truyền props', () => {
    it('Khi không truyền modelValue, lịch sẽ hiển thị tháng hiện tại', () => {
      const now = new Date()

      render(HnCalendar)
      expect(screen.getByRole('button', { name: 'Chọn tháng' })).toBeInTheDocument()

      const firstDateOfMonth = dayjs(now).startOf('month').format('DD-MM-YYYY')
      const lastDateOfMonth = dayjs(now).endOf('month').format('DD-MM-YYYY')

      expect(screen.getByRole('button', { name: firstDateOfMonth })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: lastDateOfMonth })).toBeInTheDocument()
    })

    it.each<{ date: Date; month: number }>([
      { date: new Date(2025, 0, 1), month: 1 },
      { date: new Date(2025, 1, 1), month: 2 },
      { date: new Date(2025, 2, 1), month: 3 },
      { date: new Date(2025, 3, 1), month: 4 },
      { date: new Date(2025, 4, 1), month: 5 },
      { date: new Date(2025, 5, 1), month: 6 },
      { date: new Date(2025, 6, 1), month: 7 },
      { date: new Date(2025, 7, 1), month: 8 },
      { date: new Date(2025, 8, 1), month: 9 },
      { date: new Date(2025, 9, 1), month: 10 },
      { date: new Date(2025, 10, 1), month: 11 },
      { date: new Date(2025, 11, 1), month: 12 }
    ])('Khi truyền modelValue trong tháng $month năm 2025, lịch sẽ hiển thị $month năm 2025', ({ date }) => {
      render(HnCalendar, { props: { modelValue: date } })

      const daysInMonth = dayjs(date).daysInMonth()
      for (let day = 1; day <= daysInMonth; day++) {
        const targetDate = dayjs(date).date(day).format('DD-MM-YYYY')
        expect(screen.getByRole('button', { name: targetDate })).toBeInTheDocument()
      }
    })

    it('Khi truyền modelValue, ngày mục tiêu sẽ được highlight', () => {
      const date = new Date(2025, 0, 1) // 2025-01-01
      render(HnCalendar, { props: { modelValue: date } })

      const targetDate = dayjs(date).format('DD-MM-YYYY')
      expect(screen.getByRole('button', { name: targetDate })).toHaveClass('active')
    })

    it('Khi truyền minDate, lịch sẽ hiển thị tháng của minDate', () => {
      const minDate = new Date(2025, 0, 5) // 2025-01-05
      render(HnCalendar, { props: { minDate } })

      expect(screen.getByRole('button', { name: 'Chọn tháng' })).toBeInTheDocument()

      const daysInMonth = dayjs(minDate).daysInMonth()
      for (let day = 1; day <= daysInMonth; day++) {
        const targetDate = dayjs(minDate).date(day).format('DD-MM-YYYY')
        expect(screen.getByRole('button', { name: targetDate })).toBeInTheDocument()
      }
    })

    it('Khi truyền minDate, các ngày trước minDate sẽ bị disabled và không thể chọn', () => {
      const minDate = new Date(2025, 0, 5) // 2025-01-05
      render(HnCalendar, { props: { minDate } })

      const targetDate = dayjs(minDate).subtract(1, 'day').format('DD-MM-YYYY')
      expect(screen.getByRole('button', { name: targetDate })).toHaveClass('disabled')
    })

    it('Khi truyền maxDate, lịch sẽ hiển thị tháng của maxDate', () => {
      const maxDate = new Date(2025, 0, 5) // 2025-01-05
      render(HnCalendar, { props: { maxDate } })

      expect(screen.getByRole('button', { name: 'Chọn tháng' })).toBeInTheDocument()

      const daysInMonth = dayjs(maxDate).daysInMonth()
      for (let day = 1; day <= daysInMonth; day++) {
        const targetDate = dayjs(maxDate).date(day).format('DD-MM-YYYY')
        expect(screen.getByRole('button', { name: targetDate })).toBeInTheDocument()
      }
    })

    it('Khi truyền maxDate, các ngày sau maxDate sẽ bị disabled và không thể chọn', () => {
      const maxDate = new Date(2025, 0, 5) // 2025-01-05
      render(HnCalendar, { props: { maxDate } })

      const targetDate = dayjs(maxDate).add(1, 'day').format('DD-MM-YYYY')
      expect(screen.getByRole('button', { name: targetDate })).toHaveClass('disabled')
    })

    it('Nếu truyền modelValue là ngày trước minDate, lịch sẽ hiển thị tháng của modelValue', () => {
      const modelValue = new Date(2025, 0, 5) // 2025-01-05
      const minDate = new Date(2025, 0, 15) // 2025-01-15
      render(HnCalendar, { props: { modelValue: modelValue, minDate } })

      const daysInMonth = dayjs(modelValue).daysInMonth()
      for (let day = 1; day <= daysInMonth; day++) {
        const targetDate = dayjs(modelValue).date(day).format('DD-MM-YYYY')
        expect(screen.getByRole('button', { name: targetDate })).toBeInTheDocument()
      }
    })

    it('Nếu truyền modelValue là ngày trước minDate, ngày mục tiêu sẽ được highlight', () => {
      const modelValue = new Date(2025, 0, 5) // 2025-01-05
      const minDate = new Date(2025, 0, 15) // 2025-01-15
      render(HnCalendar, { props: { modelValue: modelValue, minDate } })

      expect(screen.getByRole('button', { name: dayjs(modelValue).format('DD-MM-YYYY') })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: dayjs(modelValue).format('DD-MM-YYYY') })).toHaveClass('active')
    })

    it('Nếu truyền modelValue là ngày sau maxDate, lịch sẽ hiển thị tháng của modelValue', () => {
      const modelValue = new Date(2025, 0, 15) // 2025-01-15
      const maxDate = new Date(2025, 0, 5) // 2025-01-05
      render(HnCalendar, { props: { modelValue: modelValue, maxDate } })

      const daysInMonth = dayjs(maxDate).daysInMonth()
      for (let day = 1; day <= daysInMonth; day++) {
        const targetDate = dayjs(maxDate).date(day).format('DD-MM-YYYY')
        expect(screen.getByRole('button', { name: targetDate })).toBeInTheDocument()
      }
    })

    it('Nếu truyền modelValue là ngày sau maxDate, ngày mục tiêu sẽ được highlight', () => {
      const modelValue = new Date(2025, 0, 15) // 2025-01-15
      const maxDate = new Date(2025, 0, 5) // 2025-01-05
      render(HnCalendar, { props: { modelValue: modelValue, maxDate } })

      expect(screen.getByRole('button', { name: dayjs(modelValue).format('DD-MM-YYYY') })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: dayjs(modelValue).format('DD-MM-YYYY') })).toHaveClass('active')
    })
  })
})
