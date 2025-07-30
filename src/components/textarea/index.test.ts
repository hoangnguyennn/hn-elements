import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { HnTextarea } from '.'

describe('textarea', () => {
  it('component render thành công', () => {
    render(HnTextarea)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  describe('truyền props', () => {
    describe('label', () => {
      it('hiển thị label khi truyền prop label', () => {
        render(HnTextarea, { props: { label: 'Test Label' } })
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
      })
    })

    describe('placeholder', () => {
      it('hiển thị placeholder khi truyền prop placeholder', () => {
        render(HnTextarea, { props: { placeholder: 'Test placeholder' } })
        expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument()
      })
    })

    describe('disabled', () => {
      it('textarea bị disable khi truyền disabled', () => {
        render(HnTextarea, { props: { disabled: true } })
        expect(screen.getByRole('textbox')).toBeDisabled()
      })
    })

    describe('maxLength', () => {
      it('textarea có maxLength khi truyền maxLength', () => {
        render(HnTextarea, { props: { maxLength: 100 } })
        expect(screen.getByRole('textbox')).toHaveAttribute('maxlength', '100')
      })
    })

    describe('showCounter', () => {
      it('hiển thị counter khi truyền showCounter', () => {
        render(HnTextarea, { props: { showCounter: true, modelValue: 'test' } })
        expect(screen.getByText('4')).toBeInTheDocument()
      })

      it('hiển thị counter với maxLength khi truyền cả showCounter và maxLength', () => {
        render(HnTextarea, { props: { showCounter: true, maxLength: 100, modelValue: 'test' } })
        expect(screen.getByText('4/100')).toBeInTheDocument()
      })
    })
  })

  describe('thao tác', () => {
    it('có thể nhập text vào textarea', async () => {
      render(HnTextarea)
      const textarea = screen.getByRole('textbox')
      await userEvent.type(textarea, 'test text')
      expect(textarea).toHaveValue('test text')
    })

    it('emit change khi nhập text', async () => {
      const { emitted } = render(HnTextarea)
      const textarea = screen.getByRole('textbox')
      await userEvent.type(textarea, 'test')
      expect(emitted('change')).toBeTruthy()
      expect(emitted('change')[0]).toStrictEqual(['test'])
    })

    it('counter cập nhật khi nhập text', async () => {
      render(HnTextarea, { props: { showCounter: true } })
      const textarea = screen.getByRole('textbox')
      await userEvent.type(textarea, 'hello')
      expect(screen.getByText('5')).toBeInTheDocument()
    })
  })
})
