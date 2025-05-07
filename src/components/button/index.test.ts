import { userEvent } from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { type ButtonSize, type ButtonVariant, HnButton } from '.'

describe('button', () => {
  it('component render thành công', () => {
    render(HnButton)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('hn-button')
  })

  describe('truyền props', () => {
    describe('size', () => {
      it('button hiển thị với kích thước mặc định là medium', () => {
        render(HnButton)
        expect(screen.getByRole('button')).toHaveAttribute('data-size', 'medium')
      })

      it.each<{ size: ButtonSize }>([{ size: 'small' }, { size: 'medium' }, { size: 'large' }])(
        'button hiển thị với kích thước $size khi truyền size là $size',
        ({ size }) => {
          render(HnButton, { props: { size } })
          expect(screen.getByRole('button')).toHaveAttribute('data-size', size)
        }
      )
    })

    describe('variant', () => {
      it('button hiển thị với mẫu sắc mặc định là primary', () => {
        render(HnButton)
        expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'primary')
      })

      it.each<{ variant: ButtonVariant }>([{ variant: 'primary' }, { variant: 'secondary' }, { variant: 'text' }])(
        'button hiển thị với mẫu sắc $variant khi truyền variant là $variant',
        ({ variant }) => {
          render(HnButton, { props: { variant } })
          expect(screen.getByRole('button')).toHaveAttribute('data-variant', variant)
        }
      )
    })

    describe('disabled', () => {
      it('button bi disable khi truyền disabled', () => {
        render(HnButton, { props: { disabled: true } })
        expect(screen.getByRole('button')).toHaveAttribute('disabled')
        expect(screen.getByRole('button')).toHaveAttribute('data-disabled', 'true')
      })
    })
  })

  describe('truyền slot', () => {
    it('nội dung truyền vào slot default được hiển thị', () => {
      render(HnButton, { slots: { default: () => 'Button' } })
      expect(screen.getByRole('button')).toHaveTextContent('Button')
    })

    it('nội dung truyền vào slot leading được hiển thị', () => {
      render(HnButton, { slots: { leading: () => 'Leading Slot' } })
      expect(screen.getByRole('button')).toHaveTextContent('Leading Slot')
    })

    it('nội dung truyền vào slot trailing được hiển thị', () => {
      render(HnButton, { slots: { trailing: () => 'Trailing Slot' } })
      expect(screen.getByRole('button')).toHaveTextContent('Trailing Slot')
    })
  })

  describe('thao tác', () => {
    it('click vào button thì emit click', async () => {
      const { emitted } = render(HnButton)
      await userEvent.click(screen.getByRole('button'))
      expect(emitted('click')).toBeTruthy()
    })

    it('click vào button sẽ không emit click nếu button bị disabled', async () => {
      const { emitted } = render(HnButton, { props: { disabled: true } })
      await userEvent.click(screen.getByRole('button'))
      expect(emitted('click')).toBeUndefined()
    })
  })
})
