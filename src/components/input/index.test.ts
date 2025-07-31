import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { HnInput } from '.'

describe('input', () => {
  it('component render thành công', () => {
    render(HnInput)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  describe('truyền props', () => {
    describe('label', () => {
      it('hiển thị label khi truyền prop label', () => {
        render(HnInput, { props: { label: 'Test Label' } })
        expect(screen.getByText('Test Label')).toBeInTheDocument()
      })
    })

    describe('placeholder', () => {
      it('hiển thị placeholder khi truyền prop placeholder', () => {
        render(HnInput, { props: { placeholder: 'Test placeholder' } })
        const input = screen.getByRole('textbox')
        expect(input).toHaveAttribute('aria-placeholder', 'Test placeholder')
      })
    })

    describe('disabled', () => {
      it('input bị disable khi truyền disabled', () => {
        render(HnInput, { props: { disabled: true } })
        expect(screen.getByRole('textbox')).toBeDisabled()
      })
    })

    describe('password', () => {
      it('input có type password khi truyền password', () => {
        render(HnInput, { props: { password: true } })
        const input = screen.getByDisplayValue('')
        expect(input).toHaveAttribute('type', 'password')
      })

      it('có button toggle password khi truyền password', () => {
        render(HnInput, { props: { password: true } })
        expect(screen.getByRole('button', { name: /ẩn mật khẩu/i })).toBeInTheDocument()
      })
    })

    describe('clearable', () => {
      it('có button clear khi truyền clearable và có giá trị', async () => {
        render(HnInput, { props: { clearable: true, modelValue: 'test' } })
        const input = screen.getByRole('textbox')
        await userEvent.hover(input)
        expect(screen.getByRole('button', { name: /xóa nội dung/i })).toBeInTheDocument()
      })
    })
  })

  describe('thao tác', () => {
    it('có thể nhập text vào input', async () => {
      render(HnInput)
      const input = screen.getByRole('textbox')
      await userEvent.type(input, 'test text')
      expect(input).toHaveValue('test text')
    })

    it('emit change khi nhập text', async () => {
      const { emitted } = render(HnInput)
      const input = screen.getByRole('textbox')
      await userEvent.type(input, 'test')
      await userEvent.tab() // Trigger change event
      expect(emitted('change')).toBeTruthy()
      expect(emitted('change')[0]).toStrictEqual(['test'])
    })

    it('emit clear khi click button clear', async () => {
      const { emitted } = render(HnInput, { props: { clearable: true, modelValue: 'test' } })
      const input = screen.getByRole('textbox')
      await userEvent.hover(input)
      const clearButton = screen.getByRole('button', { name: /xóa nội dung/i })
      await userEvent.click(clearButton)
      expect(emitted('clear')).toBeTruthy()
    })

    it('toggle password visibility khi click button password', async () => {
      render(HnInput, { props: { password: true } })
      const input = screen.getByDisplayValue('')
      const toggleButton = screen.getByRole('button', { name: /ẩn mật khẩu/i })

      expect(input).toHaveAttribute('type', 'password')

      await userEvent.click(toggleButton)
      expect(screen.getByRole('button', { name: /hiện mật khẩu/i })).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'text')
    })
  })
})
