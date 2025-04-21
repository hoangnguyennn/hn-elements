import { mount } from '@vue/test-utils'
import dayjs from 'dayjs'
import { HnCalendar } from '.'

describe('calendar', () => {
  it('component render thành công', () => {
    const wrapper = mount(HnCalendar)
    expect(wrapper.classes()).toContain('hn-calendar')
    expect(wrapper.exists()).toBe(true)
  })

  describe('truyền props', () => {
    it('Khi không truyền modelValue, lịch sẽ hiển thị tháng hiện tại', () => {
      const wrapper = mount(HnCalendar)
      const datePane = wrapper.find('.hn-calendar--date-pane')
      expect(datePane.exists()).toBe(true)

      const now = new Date()
      const paneTitle = wrapper.find('.hn-calendar--header-title')
      expect(paneTitle.exists()).toBe(true)
      expect(paneTitle.text()).toBe(dayjs(now).format('MMMM YYYY'))

      const firstDateOfMonth = dayjs(now).startOf('month').format('DD-MM-YYYY')
      const lastDateOfMonth = dayjs(now).endOf('month').format('DD-MM-YYYY')

      const firstDateElement = wrapper.find(`[data-date="${firstDateOfMonth}"]`)
      expect(firstDateElement.exists()).toBe(true)

      const lastDateElement = wrapper.find(`[data-date="${lastDateOfMonth}"]`)
      expect(lastDateElement.exists()).toBe(true)
    })

    it.each([
      { date: new Date(2025, 0, 1), rows: 5, month: 1 },
      { date: new Date(2025, 1, 1), rows: 5, month: 2 },
      { date: new Date(2025, 2, 1), rows: 6, month: 3 },
      { date: new Date(2025, 3, 1), rows: 5, month: 4 },
      { date: new Date(2025, 4, 1), rows: 5, month: 5 },
      { date: new Date(2025, 5, 1), rows: 6, month: 6 },
      { date: new Date(2025, 6, 1), rows: 5, month: 7 },
      { date: new Date(2025, 7, 1), rows: 6, month: 8 },
      { date: new Date(2025, 8, 1), rows: 5, month: 9 },
      { date: new Date(2025, 9, 1), rows: 5, month: 10 },
      { date: new Date(2025, 10, 1), rows: 6, month: 11 },
      { date: new Date(2025, 11, 1), rows: 5, month: 12 }
    ])(
      'Khi truyền modelValue trong tháng $month năm 2025, lịch sẽ hiển thị $month năm 2025',
      ({ date, rows }) => {
        const wrapper = mount(HnCalendar, { props: { modelValue: date } })

        const dateItems = wrapper.findAll('.hn-calendar--date-item')
        expect(dateItems.length).toBe(rows * 7 + 7) // rows of dates and 7 weekdays

        const paneTitle = wrapper.find('.hn-calendar--header-title')
        expect(paneTitle.exists()).toBe(true)
        expect(paneTitle.text()).toBe(dayjs(date).format('MMMM YYYY'))

        const firstDateOfMonth = dayjs(date)
          .startOf('month')
          .format('DD-MM-YYYY')
        const lastDateOfMonth = dayjs(date).endOf('month').format('DD-MM-YYYY')

        const firstDateElement = wrapper.find(
          `[data-date="${firstDateOfMonth}"]`
        )
        expect(firstDateElement.exists()).toBe(true)

        const lastDateElement = wrapper.find(`[data-date="${lastDateOfMonth}"]`)
        expect(lastDateElement.exists()).toBe(true)
      }
    )

    it('Khi truyền modelValue, ngày mục tiêu sẽ được highlight', () => {
      const date = new Date(2025, 0, 1) // 2025-01-01
      const wrapper = mount(HnCalendar, { props: { modelValue: date } })

      const targetDate = dayjs(date).format('DD-MM-YYYY')
      const targetDateElement = wrapper.find(`[data-date="${targetDate}"]`)
      expect(targetDateElement.classes()).toContain('active')
    })

    it('Khi truyền minDate, lịch sẽ hiển thị tháng của minDate', () => {
      const minDate = new Date(2025, 0, 5) // 2025-01-05
      const wrapper = mount(HnCalendar, { props: { minDate } })

      const paneTitle = wrapper.find('.hn-calendar--header-title')
      expect(paneTitle.exists()).toBe(true)
      expect(paneTitle.text()).toBe(dayjs(minDate).format('MMMM YYYY'))

      const firstDateOfMonth = dayjs(minDate)
        .startOf('month')
        .format('DD-MM-YYYY')
      const lastDateOfMonth = dayjs(minDate).endOf('month').format('DD-MM-YYYY')

      const firstDateElement = wrapper.find(`[data-date="${firstDateOfMonth}"]`)
      expect(firstDateElement.exists()).toBe(true)

      const lastDateElement = wrapper.find(`[data-date="${lastDateOfMonth}"]`)
      expect(lastDateElement.exists()).toBe(true)
    })

    it('Khi truyền minDate, các ngày trước minDate sẽ bị disabled và không thể chọn', () => {
      const minDate = new Date(2025, 0, 5) // 2025-01-05
      const wrapper = mount(HnCalendar, { props: { minDate } })

      const targetDate = dayjs(minDate).subtract(1, 'day').format('DD-MM-YYYY')
      const targetDateElement = wrapper.find(`[data-date="${targetDate}"]`)
      expect(targetDateElement.classes()).toContain('disabled')
    })

    it('Khi truyền maxDate, lịch sẽ hiển thị tháng của maxDate', () => {
      const maxDate = new Date(2025, 0, 5) // 2025-01-05
      const wrapper = mount(HnCalendar, { props: { maxDate } })

      const paneTitle = wrapper.find('.hn-calendar--header-title')
      expect(paneTitle.exists()).toBe(true)
      expect(paneTitle.text()).toBe(dayjs(maxDate).format('MMMM YYYY'))

      const firstDateOfMonth = dayjs(maxDate)
        .startOf('month')
        .format('DD-MM-YYYY')
      const lastDateOfMonth = dayjs(maxDate).endOf('month').format('DD-MM-YYYY')

      const firstDateElement = wrapper.find(`[data-date="${firstDateOfMonth}"]`)
      expect(firstDateElement.exists()).toBe(true)

      const lastDateElement = wrapper.find(`[data-date="${lastDateOfMonth}"]`)
      expect(lastDateElement.exists()).toBe(true)
    })

    it('Khi truyền maxDate, các ngày sau maxDate sẽ bị disabled và không thể chọn', () => {
      const maxDate = new Date(2025, 0, 5) // 2025-01-05
      const wrapper = mount(HnCalendar, { props: { maxDate } })

      const targetDate = dayjs(maxDate).add(1, 'day').format('DD-MM-YYYY')
      const targetDateElement = wrapper.find(`[data-date="${targetDate}"]`)
      expect(targetDateElement.classes()).toContain('disabled')
    })

    it('Nếu truyền modelValue là ngày trước minDate, lịch sẽ hiển thị tháng của modelValue', () => {
      const modelValue = new Date(2025, 0, 5) // 2025-01-05
      const minDate = new Date(2025, 0, 15) // 2025-01-15
      const wrapper = mount(HnCalendar, {
        props: { modelValue: modelValue, minDate }
      })

      const firstDateOfMonth = dayjs(modelValue)
        .startOf('month')
        .format('DD-MM-YYYY')
      const lastDateOfMonth = dayjs(modelValue)
        .endOf('month')
        .format('DD-MM-YYYY')

      const firstDateElement = wrapper.find(`[data-date="${firstDateOfMonth}"]`)
      expect(firstDateElement.exists()).toBe(true)

      const lastDateElement = wrapper.find(`[data-date="${lastDateOfMonth}"]`)
      expect(lastDateElement.exists()).toBe(true)
    })

    it('Nếu truyền modelValue là ngày trước minDate, ngày mục tiêu sẽ được highlight', () => {
      const modelValue = new Date(2025, 0, 5) // 2025-01-05
      const minDate = new Date(2025, 0, 15) // 2025-01-15
      const wrapper = mount(HnCalendar, {
        props: { modelValue: modelValue, minDate }
      })

      const targetDate = dayjs(modelValue).format('DD-MM-YYYY')
      const targetDateElement = wrapper.find(`[data-date="${targetDate}"]`)
      expect(targetDateElement.classes()).toContain('active')
    })

    it('Nếu truyền modelValue là ngày sau maxDate, lịch sẽ hiển thị tháng của modelValue', () => {
      const modelValue = new Date(2025, 0, 15) // 2025-01-15
      const maxDate = new Date(2025, 0, 5) // 2025-01-05
      const wrapper = mount(HnCalendar, {
        props: { modelValue: modelValue, maxDate }
      })

      const firstDateOfMonth = dayjs(modelValue)
        .startOf('month')
        .format('DD-MM-YYYY')
      const lastDateOfMonth = dayjs(modelValue)
        .endOf('month')
        .format('DD-MM-YYYY')

      const firstDateElement = wrapper.find(`[data-date="${firstDateOfMonth}"]`)
      expect(firstDateElement.exists()).toBe(true)

      const lastDateElement = wrapper.find(`[data-date="${lastDateOfMonth}"]`)
      expect(lastDateElement.exists()).toBe(true)
    })

    it('Nếu truyền modelValue là ngày sau maxDate, ngày mục tiêu sẽ được highlight', () => {
      const modelValue = new Date(2025, 0, 15) // 2025-01-15
      const maxDate = new Date(2025, 0, 5) // 2025-01-05
      const wrapper = mount(HnCalendar, {
        props: { modelValue: modelValue, maxDate }
      })

      const targetDate = dayjs(modelValue).format('DD-MM-YYYY')
      const targetDateElement = wrapper.find(`[data-date="${targetDate}"]`)
      expect(targetDateElement.classes()).toContain('active')
    })
  })

  describe.todo('thao tác', () => {
    describe('di chuyển', () => {
      it.todo(
        'Nếu đang hiển thị bảng chọn ngày, click button prev sẽ hiển thị các ngày của tháng trước'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn ngày, click button next sẽ hiển thị các ngày của tháng sau'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn ngày, click vào header sẽ chuyển sang bảng chọn tháng'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn tháng, click button prev sẽ hiển thị các tháng của năm trước'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn tháng, click button next sẽ hiển thị các tháng của năm sau'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn tháng, click vào header sẽ chuyển sang bảng chọn năm'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn năm, click vào button prev sẽ hiển thị các năm trong thập kỷ trước'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn năm, click vào button next sẽ hiển thị các năm trong thập kỷ sau'
      )
    })

    describe('chọn ngày', () => {
      it.todo(
        'Nếu đang hiển thị bảng chọn ngày, chọn ngày bất kỳ sẽ emit event change'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn ngày, chọn ngày bất kỳ sẽ thay đổi giá trị modelValue'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn tháng, chọn tháng bất kỳ sẽ chuyển sang bảng chọn ngày và modelValue sẽ bị reset'
      )

      it.todo(
        'Nếu đang hiển thị bảng chọn năm, chọn năm bất kỳ sẽ chuyển sang bảng chọn tháng và modelValue sẽ bị reset'
      )

      it.todo(
        'Nếu chọn tháng bằng tháng của modelValue thì giá trị modelValue không bị reset'
      )

      it.todo(
        'Nếu chọn năm bằng nằm của modelValue thì giá trị modelValue không bị reset'
      )
    })
  })
})
