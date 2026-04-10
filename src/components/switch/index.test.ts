import { render, screen } from '@testing-library/vue'
import { HnSwitch } from '.'

describe('switch', () => {
  it('component render thành công', () => {
    render(HnSwitch)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  describe('truyền props', () => {
    describe('showLabel', () => {
      it('hiển thị label khi truyền showLabel', () => {
        render(HnSwitch, { props: { showLabel: true } })
        expect(screen.getByText('Off')).toBeInTheDocument()
      })

      it('không hiển thị label khi không truyền showLabel', () => {
        render(HnSwitch)
        expect(screen.queryByText('Off')).not.toBeInTheDocument()
      })
    })

    describe('labelOn và labelOff', () => {
      it('hiển thị label tùy chỉnh khi truyền labelOn và labelOff', () => {
        render(HnSwitch, { props: { showLabel: true, labelOn: 'Bật', labelOff: 'Tắt' } })
        expect(screen.getByText('Tắt')).toBeInTheDocument()
      })
    })

    describe('disabled', () => {
      it('switch bị disable khi truyền disabled', () => {
        render(HnSwitch, { props: { disabled: true } })
        expect(screen.getByRole('switch')).toBeDisabled()
      })
    })

    describe('ariaLabel', () => {
      it('switch có aria-label tùy chỉnh khi truyền ariaLabel', () => {
        render(HnSwitch, { props: { ariaLabel: 'Custom switch' } })
        expect(screen.getByRole('switch')).toHaveAttribute('aria-label', 'Custom switch')
      })
    })
  })
})
