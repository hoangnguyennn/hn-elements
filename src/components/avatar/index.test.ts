import { getAcronym } from '@hn/utils/string'
import { render, screen } from '@testing-library/vue'
import { HnAvatar, type AvatarSize } from '.'

describe('avatar', () => {
  it('component render thành công', () => {
    const { container } = render(HnAvatar)
    const rootElement = container.firstChild
    expect(rootElement).toHaveClass('hn-avatar')
    expect(rootElement).toBeInTheDocument()
  })

  describe('truyền props', () => {
    describe('size', () => {
      it('avatar hiển thị với kích thước mặc định là medium', () => {
        const { container } = render(HnAvatar)
        const rootElement = container.firstChild
        expect(rootElement).toHaveAttribute('data-size', 'medium')
      })

      it.each<{ size: AvatarSize }>([{ size: 'small' }, { size: 'medium' }, { size: 'large' }])(
        'avatar hiển thị với kích thước $size khi truyền size là $size',
        ({ size }) => {
          const { container } = render(HnAvatar, { props: { size } })
          const rootElement = container.firstChild
          expect(rootElement).toHaveAttribute('data-size', size)
        }
      )
    })

    describe('src và name', () => {
      it('nếu truyền src, avatar hiển thị với src', () => {
        const avatar = 'https://via.placeholder.com/150'
        render(HnAvatar, { props: { src: avatar } })
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', avatar)
      })

      it('nếu truyền name, avatar hiển thị với name', () => {
        const name = 'Hoang Nguyen'
        render(HnAvatar, { props: { name } })
        const image = screen.queryByRole('img')
        expect(image).not.toBeInTheDocument()
        const nameElement = screen.getByText(getAcronym(name))
        expect(nameElement).toBeInTheDocument()
      })

      it('nếu truyền cả src và name thì src được sử dụng làm image và name là alt', () => {
        const avatar = 'https://via.placeholder.com/150'
        const name = 'Hoang Nguyen'
        render(HnAvatar, { props: { src: avatar, name } })
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', avatar)
        expect(image).toHaveAttribute('alt', name)
        const nameElement = screen.queryByText(getAcronym(name))
        expect(nameElement).not.toBeInTheDocument()
      })
    })
  })
})
