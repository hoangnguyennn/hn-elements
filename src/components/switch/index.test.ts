import userEvent from '@testing-library/user-event'
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

  describe('thao tác', () => {
    it('có thể toggle switch', async () => {
      render(HnSwitch)
      const switchElement = screen.getByRole('switch')

      expect(switchElement).toHaveAttribute('aria-checked', 'false')

      await userEvent.click(switchElement)
      expect(switchElement).toHaveAttribute('aria-checked', 'true')

      await userEvent.click(switchElement)
      expect(switchElement).toHaveAttribute('aria-checked', 'false')
    })

    it('emit update:modelValue khi toggle switch', async () => {
      const { emitted } = render(HnSwitch)
      const switchElement = screen.getByRole('switch')

      await userEvent.click(switchElement)
      expect(emitted()['update:modelValue']).toBeTruthy()
      expect(emitted()['update:modelValue'][0]).toStrictEqual([true])

      await userEvent.click(switchElement)
      expect(emitted()['update:modelValue'][1]).toStrictEqual([false])
    })

    it('không thể toggle switch khi bị disable', async () => {
      render(HnSwitch, { props: { disabled: true } })
      const switchElement = screen.getByRole('switch')

      await userEvent.click(switchElement)
      expect(switchElement).toHaveAttribute('aria-checked', 'false')
    })

    it('label thay đổi khi toggle switch', async () => {
      render(HnSwitch, { props: { showLabel: true, labelOn: 'Bật', labelOff: 'Tắt' } })
      const switchElement = screen.getByRole('switch')

      expect(screen.getByText('Tắt')).toBeInTheDocument()

      await userEvent.click(switchElement)
      expect(screen.getByText('Bật')).toBeInTheDocument()
    })
  })
})
