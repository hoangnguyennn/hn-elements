import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { h } from 'vue'
import { HnTab, HnTabGroup } from '.'

describe('tabs', () => {
  it('component render thành công', () => {
    render(HnTabGroup, {
      slots: {
        default: () => [h(HnTab, {}, { default: () => 'Tab 1' }), h(HnTab, {}, { default: () => 'Tab 2' })]
      }
    })
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(2)
  })

  describe('truyền props', () => {
    describe('direction', () => {
      it('tablist có direction mặc định', () => {
        render(HnTabGroup, {
          slots: {
            default: () => h(HnTab, {}, { default: () => 'Tab 1' })
          }
        })
        expect(screen.getByRole('tablist')).toHaveAttribute('aria-orientation', 'horizontal')
      })

      it('tablist có direction tùy chỉnh', () => {
        render(HnTabGroup, {
          props: { direction: 'vertical' },
          slots: {
            default: () => h(HnTab, {}, { default: () => 'Tab 1' })
          }
        })
        expect(screen.getByRole('tablist')).toHaveAttribute('aria-orientation', 'vertical')
      })
    })

    describe('ariaLabel', () => {
      it('tablist có aria-label tùy chỉnh', () => {
        render(HnTabGroup, {
          props: { ariaLabel: 'Custom tabs' },
          slots: {
            default: () => h(HnTab, {}, { default: () => 'Tab 1' })
          }
        })
        expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Custom tabs')
      })
    })
  })

  describe('tab', () => {
    describe('truyền slot', () => {
      it('hiển thị nội dung slot', () => {
        render(HnTabGroup, {
          slots: {
            default: () => h(HnTab, {}, { default: () => 'Custom Tab Content' })
          }
        })
        expect(screen.getByRole('tab', { name: 'Custom Tab Content' })).toBeInTheDocument()
      })
    })

    describe('trạng thái active', () => {
      it('tab đầu tiên được active mặc định', () => {
        render(HnTabGroup, {
          slots: {
            default: () => [h(HnTab, {}, { default: () => 'Tab 1' }), h(HnTab, {}, { default: () => 'Tab 2' })]
          }
        })

        const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
        const tab2 = screen.getByRole('tab', { name: 'Tab 2' })

        expect(tab1).toHaveAttribute('aria-selected', 'true')
        expect(tab2).toHaveAttribute('aria-selected', 'false')
      })

      it('tab được active khi truyền modelValue', () => {
        render(HnTabGroup, {
          props: { modelValue: 1 },
          slots: {
            default: () => [h(HnTab, {}, { default: () => 'Tab 1' }), h(HnTab, {}, { default: () => 'Tab 2' })]
          }
        })

        const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
        const tab2 = screen.getByRole('tab', { name: 'Tab 2' })

        expect(tab1).toHaveAttribute('aria-selected', 'false')
        expect(tab2).toHaveAttribute('aria-selected', 'true')
      })
    })
  })

  describe('thao tác', () => {
    it('có thể click vào tab để chọn', async () => {
      render(HnTabGroup, {
        slots: {
          default: () => [h(HnTab, {}, { default: () => 'Tab 1' }), h(HnTab, {}, { default: () => 'Tab 2' })]
        }
      })

      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })
      await userEvent.click(tab2)

      expect(tab2).toHaveAttribute('aria-selected', 'true')
    })

    it('emit update:modelValue khi click tab', async () => {
      const { emitted } = render(HnTabGroup, {
        slots: {
          default: () => [h(HnTab, {}, { default: () => 'Tab 1' }), h(HnTab, {}, { default: () => 'Tab 2' })]
        }
      })

      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })
      await userEvent.click(tab2)

      expect(emitted()['update:modelValue']).toBeTruthy()
      expect(emitted()['update:modelValue'][0]).toStrictEqual([1])
    })

    it('emit change khi click tab', async () => {
      const { emitted } = render(HnTabGroup, {
        slots: {
          default: () => [h(HnTab, {}, { default: () => 'Tab 1' }), h(HnTab, {}, { default: () => 'Tab 2' })]
        }
      })

      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })
      await userEvent.click(tab2)

      expect(emitted('change')).toBeTruthy()
      expect(emitted('change')[0]).toStrictEqual([1])
    })

    it('tabindex thay đổi khi tab được chọn', async () => {
      render(HnTabGroup, {
        slots: {
          default: () => [h(HnTab, {}, { default: () => 'Tab 1' }), h(HnTab, {}, { default: () => 'Tab 2' })]
        }
      })

      const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })

      expect(tab1).toHaveAttribute('tabindex', '0')
      expect(tab2).toHaveAttribute('tabindex', '-1')

      await userEvent.click(tab2)

      expect(tab1).toHaveAttribute('tabindex', '-1')
      expect(tab2).toHaveAttribute('tabindex', '0')
    })
  })
})
