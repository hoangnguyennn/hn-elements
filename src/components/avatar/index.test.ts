import { getAcronym } from '@hn/utils/string'
import { mount } from '@vue/test-utils'
import { default as HnAvatar } from '.'

describe('avatar', () => {
  it('component render thành công', () => {
    const wrapper = mount(HnAvatar)
    expect(wrapper.classes()).toContain('hn-avatar')
    expect(wrapper.exists()).toBe(true)
  })

  describe('truyền props', () => {
    describe('size', () => {
      it('avatar hiển thị với kích thước mặc định là medium', () => {
        const wrapper = mount(HnAvatar)
        expect(wrapper.attributes('data-size')).toBe('medium')
      })

      it('avatar hiển thị với kích thước small khi truyền size là small', () => {
        const wrapper = mount(HnAvatar, { props: { size: 'small' } })
        expect(wrapper.attributes('data-size')).toBe('small')
      })

      it('avatar hiển thị với kích thước medium khi truyền size là medium', () => {
        const wrapper = mount(HnAvatar, { props: { size: 'medium' } })
        expect(wrapper.attributes('data-size')).toBe('medium')
      })

      it('avatar hiển thị với kích thước large khi truyền size là large', () => {
        const wrapper = mount(HnAvatar, { props: { size: 'large' } })
        expect(wrapper.attributes('data-size')).toBe('large')
      })
    })

    describe('src và name', () => {
      it('nếu truyền src, avatar hiển thị với src', () => {
        const avatar = 'https://via.placeholder.com/150'
        const wrapper = mount(HnAvatar, { props: { src: avatar } })
        expect(wrapper.find('.hn-avatar--image').exists()).toBe(true)
        expect(wrapper.find('.hn-avatar--image').attributes('src')).toBe(avatar)
      })

      it('nếu truyền name, avatar hiển thị với name', () => {
        const name = 'Hoang Nguyen'
        const wrapper = mount(HnAvatar, { props: { name } })
        expect(wrapper.find('.hn-avatar--name').exists()).toBe(true)
        expect(wrapper.find('.hn-avatar--name').text()).toBe(getAcronym(name))
      })

      it('nếu truyền cả src và name thì src được sử dụng làm image và name là alt', () => {
        const avatar = 'https://via.placeholder.com/150'
        const name = 'Hoang Nguyen'
        const wrapper = mount(HnAvatar, { props: { src: avatar, name } })
        expect(wrapper.find('.hn-avatar--image').exists()).toBe(true)
        expect(wrapper.find('.hn-avatar--image').attributes('src')).toBe(avatar)
        expect(wrapper.find('.hn-avatar--image').attributes('alt')).toBe(name)
        expect(wrapper.find('.hn-avatar--name').exists()).toBe(false)
      })
    })
  })
})
