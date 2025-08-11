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
})
