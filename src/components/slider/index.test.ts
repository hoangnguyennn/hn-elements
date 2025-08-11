import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { HnSlider } from '.'

describe('slider', () => {
  it('component render thành công', () => {
    render(HnSlider)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  describe('truyền props', () => {
    describe('min và max', () => {
      it('slider có min và max mặc định', () => {
        render(HnSlider)
        const slider = screen.getByRole('slider')
        expect(slider).toHaveAttribute('aria-valuemin', '0')
        expect(slider).toHaveAttribute('aria-valuemax', '100')
      })

      it('slider có min và max tùy chỉnh', () => {
        render(HnSlider, { props: { min: 10, max: 90 } })
        const slider = screen.getByRole('slider')
        expect(slider).toHaveAttribute('aria-valuemin', '10')
        expect(slider).toHaveAttribute('aria-valuemax', '90')
      })
    })

    describe('step', () => {
      it('slider có step mặc định', () => {
        render(HnSlider)
        const slider = screen.getByRole('slider')
        expect(slider).toHaveAttribute('step', '1')
      })

      it('slider có step tùy chỉnh', () => {
        render(HnSlider, { props: { step: 5 } })
        const slider = screen.getByRole('slider')
        expect(slider).toHaveAttribute('step', '5')
      })
    })

    describe('disabled', () => {
      it('slider bị disable khi truyền disabled', () => {
        render(HnSlider, { props: { disabled: true } })
        expect(screen.getByRole('slider')).toBeDisabled()
      })
    })

    describe('ariaLabel', () => {
      it('slider có aria-label mặc định', () => {
        render(HnSlider)
        expect(screen.getByRole('slider')).toHaveAttribute('aria-label', 'Thanh trượt')
      })

      it('slider có aria-label tùy chỉnh', () => {
        render(HnSlider, { props: { ariaLabel: 'Custom slider' } })
        expect(screen.getByRole('slider')).toHaveAttribute('aria-label', 'Custom slider')
      })
    })

    describe('withLabel', () => {
      it('hiển thị labels khi truyền withLabel', () => {
        render(HnSlider, { props: { withLabel: true } })
        expect(screen.getByText('0%')).toBeInTheDocument()
        expect(screen.getByText('100%')).toBeInTheDocument()
      })

      it('không hiển thị labels khi không truyền withLabel', () => {
        render(HnSlider)
        expect(screen.queryByText('0%')).not.toBeInTheDocument()
        expect(screen.queryByText('100%')).not.toBeInTheDocument()
      })
    })

    describe('tooltip', () => {
      it('hiển thị tooltip khi truyền tooltip', async () => {
        render(HnSlider, { props: { tooltip: true, modelValue: 50 } })
        await userEvent.hover(screen.getByRole('slider', { name: 'Thanh trượt' }))
        expect(screen.getByRole('tooltip', { name: 'Thông tin bổ sung' })).toHaveTextContent('50')
      })

      it('không hiển thị tooltip khi không truyền tooltip', async () => {
        render(HnSlider, { props: { tooltip: false, modelValue: 50 } })
        await userEvent.hover(screen.getByRole('slider', { name: 'Thanh trượt' }))
        expect(screen.queryByRole('tooltip', { name: 'Thông tin bổ sung' })).not.toBeInTheDocument()
      })
    })
  })
})
