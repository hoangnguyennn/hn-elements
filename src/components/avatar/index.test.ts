import { getAcronym } from '@hn/utils/string'
import { render, screen } from '@testing-library/vue'
import { HnAvatar, type AvatarSize } from '.'

describe('avatar', () => {
  it('component render thành công', () => {
    const { container } = render(HnAvatar)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('hn-avatar')
  })

  describe('truyền props', () => {
    describe('size', () => {
      it('avatar hiển thị với kích thước mặc định là medium', () => {
        const { container } = render(HnAvatar)
        expect(container.firstChild).toHaveAttribute('data-size', 'medium')
      })

      it.each<{ size: AvatarSize }>([{ size: 'small' }, { size: 'medium' }, { size: 'large' }])(
        'avatar hiển thị với kích thước $size khi truyền size là $size',
        ({ size }) => {
          const { container } = render(HnAvatar, { props: { size } })
          expect(container.firstChild).toHaveAttribute('data-size', size)
        }
      )
    })

    describe('src và name', () => {
      it('nếu truyền src, avatar hiển thị với src', () => {
        const avatar = 'https://via.placeholder.com/150'
        render(HnAvatar, { props: { src: avatar } })
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', avatar)
      })

      it('nếu truyền name, avatar hiển thị với name', () => {
        const name = 'Hoang Nguyen'
        render(HnAvatar, { props: { name } })
        expect(screen.queryByRole('img')).not.toBeInTheDocument()
        expect(screen.getByText(getAcronym(name))).toBeInTheDocument()
      })

      it('nếu truyền cả src và name thì src được sử dụng làm image và name là alt', () => {
        const avatar = 'https://via.placeholder.com/150'
        const name = 'Hoang Nguyen'
        render(HnAvatar, { props: { src: avatar, name } })
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', avatar)
        expect(screen.getByRole('img')).toHaveAttribute('alt', name)
        expect(screen.queryByText(getAcronym(name))).not.toBeInTheDocument()
      })
    })
  })
})
