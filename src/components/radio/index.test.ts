import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { HnRadio } from '.'

describe('radio', () => {
  it('component render thành công', () => {
    render(HnRadio)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  describe('truyền props', () => {
    describe('label', () => {
      it('hiển thị label khi truyền prop label', () => {
        render(HnRadio, { props: { label: 'Test Label' } })
        expect(screen.getByRole('radio', { name: 'Test Label' })).toBeInTheDocument()
      })
    })

    describe('value', () => {
      it('radio có value khi truyền prop value', () => {
        render(HnRadio, { props: { value: 'test-value' } })
        expect(screen.getByRole('radio')).toHaveAttribute('value', 'test-value')
      })
    })

    describe('disabled', () => {
      it('radio bị disable khi truyền disabled', () => {
        render(HnRadio, { props: { disabled: true } })
        expect(screen.getByRole('radio')).toBeDisabled()
      })
    })

    describe('name', () => {
      it('radio có name khi truyền prop name', () => {
        render(HnRadio, { props: { name: 'test-group' } })
        expect(screen.getByRole('radio')).toHaveAttribute('name', 'test-group')
      })
    })
  })

  describe('thao tác', () => {
    it('có thể chọn radio', async () => {
      render(HnRadio)
      const radio = screen.getByRole('radio')
      await userEvent.click(radio)
      expect(radio).toBeChecked()
    })

    it('emit update:modelValue khi chọn radio', async () => {
      const { emitted } = render(HnRadio, { props: { value: 'test-value' } })
      const radio = screen.getByRole('radio')
      await userEvent.click(radio)
      expect(emitted()['update:modelValue']).toBeTruthy()
      expect(emitted()['update:modelValue'][0]).toStrictEqual(['test-value'])
    })

    it('không thể chọn radio khi bị disable', async () => {
      render(HnRadio, { props: { disabled: true } })
      const radio = screen.getByRole('radio')
      await userEvent.click(radio)
      expect(radio).not.toBeChecked()
    })
  })
})
