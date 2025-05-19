import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { HnCheckbox } from '.'

describe('checkbox', () => {
  it('component render thành công', () => {
    const { container } = render(HnCheckbox)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('hn-checkbox')
  })

  describe('truyền props', () => {
    it('hiển thị label khi truyền prop label', async () => {
      render(HnCheckbox, { props: { label: 'Label' } })
      expect(await screen.findByRole('checkbox', { name: 'Label' })).toBeInTheDocument()
    })

    it('nếu truyền prop trueValue, thì khi checkbox được check, sẽ emit giá trị trueValue', async () => {
      const { emitted } = render(HnCheckbox, {
        props: {
          modelValue: true,
          trueValue: 'trueValue'
        }
      })

      await userEvent.click(screen.getByRole('checkbox'))
      expect(emitted()['update:modelValue'][0]).toStrictEqual(['trueValue'])
    })

    it('nếu truyền prop falseValue, thì khi checkbox không được check, sẽ emit giá trị falseValue', async () => {
      const { emitted } = render(HnCheckbox, {
        props: {
          modelValue: false,
          trueValue: 'trueValue',
          falseValue: 'falseValue'
        }
      })

      await userEvent.click(screen.getByRole('checkbox'))
      await userEvent.click(screen.getByRole('checkbox'))

      expect(emitted()['update:modelValue']).toHaveLength(2)
      expect(emitted()['update:modelValue'][0]).toStrictEqual(['trueValue'])
      expect(emitted()['update:modelValue'][1]).toStrictEqual(['falseValue'])
    })
  })

  describe('thao tác', () => {
    it('khi click vào checkbox thì emit update:modelValue', async () => {
      const { emitted } = render(HnCheckbox)
      await userEvent.click(screen.getByRole('checkbox'))
      expect(emitted()['update:modelValue']).toHaveLength(1)
      expect(emitted()['update:modelValue']).toBeTruthy()
    })

    it('khi click vào checkbox thì emit change', async () => {
      const { emitted } = render(HnCheckbox)
      await userEvent.click(screen.getByRole('checkbox'))
      expect(emitted().change).toHaveLength(1)
      expect(emitted().change).toBeTruthy()
    })

    it('nếu checkbox đang bị disable thì khi click vào sẽ không emit update:modelValue', async () => {
      const { emitted } = render(HnCheckbox, {
        props: {
          modelValue: true,
          disabled: true
        }
      })

      await userEvent.click(screen.getByRole('checkbox'))
      expect(emitted()['update:modelValue']).toBeUndefined()
    })

    it('nếu checkbox đang bị disable thì khi click vào sẽ không emit change', async () => {
      const { emitted } = render(HnCheckbox, {
        props: {
          modelValue: true,
          disabled: true
        }
      })

      await userEvent.click(screen.getByRole('checkbox'))
      expect(emitted().change).toBeUndefined()
    })
  })
})
