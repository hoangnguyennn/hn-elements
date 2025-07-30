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
      it('hiển thị tooltip khi truyền tooltip', () => {
        render(HnSlider, { props: { tooltip: true, modelValue: 50 } })
        expect(screen.getByText('50')).toBeInTheDocument()
      })

      it('không hiển thị tooltip khi không truyền tooltip', () => {
        render(HnSlider, { props: { tooltip: false, modelValue: 50 } })
        expect(screen.queryByText('50')).not.toBeInTheDocument()
      })
    })
  })

  describe('thao tác', () => {
    it('có thể thay đổi giá trị slider', async () => {
      render(HnSlider)
      const slider = screen.getByRole('slider')

      expect(slider).toHaveAttribute('aria-valuenow', '0')

      await userEvent.type(slider, '{arrowright}')
      expect(slider).toHaveAttribute('aria-valuenow', '1')
    })

    it('emit update:modelValue khi thay đổi giá trị', async () => {
      const { emitted } = render(HnSlider)
      const slider = screen.getByRole('slider')

      await userEvent.type(slider, '{arrowright}')
      expect(emitted()['update:modelValue']).toBeTruthy()
      expect(emitted()['update:modelValue'][0]).toStrictEqual([1])
    })

    it('không thể thay đổi giá trị khi bị disable', async () => {
      render(HnSlider, { props: { disabled: true } })
      const slider = screen.getByRole('slider')

      await userEvent.type(slider, '{arrowright}')
      expect(slider).toHaveAttribute('aria-valuenow', '0')
    })

    it('aria-valuetext cập nhật khi thay đổi giá trị', async () => {
      render(HnSlider, { props: { modelValue: 25 } })
      const slider = screen.getByRole('slider')

      expect(slider).toHaveAttribute('aria-valuetext', '25%')

      await userEvent.type(slider, '{arrowright}')
      expect(slider).toHaveAttribute('aria-valuetext', '26%')
    })
  })
})
