import { mount } from '@vue/test-utils'
import { default as HnButton } from '.'

describe('button', () => {
  it('component render thành công', () => {
    const wrapper = mount(HnButton)
    expect(wrapper.classes()).toContain('hn-button')
    expect(wrapper.exists()).toBe(true)
  })

  describe('truyền props', () => {
    describe('size', () => {
      it('button hiển thị với kích thước mặc định là medium', () => {
        const wrapper = mount(HnButton)
        expect(wrapper.attributes('data-size')).toBe('medium')
      })

      it('button hiển thị với kích thước small khi truyền size là small', () => {
        const wrapper = mount(HnButton, { props: { size: 'small' } })
        expect(wrapper.attributes('data-size')).toBe('small')
      })

      it('button hiển thị với kích thước medium khi truyền size là medium', () => {
        const wrapper = mount(HnButton, { props: { size: 'medium' } })
        expect(wrapper.attributes('data-size')).toBe('medium')
      })

      it('button hiển thị với kích thước large khi truyền size là large', () => {
        const wrapper = mount(HnButton, { props: { size: 'large' } })
        expect(wrapper.attributes('data-size')).toBe('large')
      })
    })

    describe('variant', () => {
      it('button hiển thị với mẫu sắc mặc định là primary', () => {
        const wrapper = mount(HnButton)
        expect(wrapper.attributes('data-variant')).toBe('primary')
      })

      it('button hiển thị với mẫu sắc primary khi truyền variant là primary', () => {
        const wrapper = mount(HnButton, { props: { variant: 'primary' } })
        expect(wrapper.attributes('data-variant')).toBe('primary')
      })

      it('button hiển thị với mẫu sắc secondary khi truyền variant là secondary', () => {
        const wrapper = mount(HnButton, { props: { variant: 'secondary' } })
        expect(wrapper.attributes('data-variant')).toBe('secondary')
      })

      it('button hiển thị với mẫu sắc text khi truyền variant là text', () => {
        const wrapper = mount(HnButton, { props: { variant: 'text' } })
        expect(wrapper.attributes('data-variant')).toBe('text')
      })
    })

    describe('disabled', () => {
      it('button bi disable khi truyền disabled', () => {
        const wrapper = mount(HnButton, { props: { disabled: true } })
        expect(wrapper.attributes('disabled')).toBe('')
      })
    })
  })

  describe('truyền slot', () => {
    it('nội dung truyền vào slot default được hiển thị', () => {
      const wrapper = mount(HnButton, { slots: { default: () => 'Button' } })
      expect(wrapper.text()).contains('Button')
    })

    it('nội dung truyền vào slot leading được hiển thị', () => {
      const wrapper = mount(HnButton, {
        slots: { leading: () => 'Leading Slot' }
      })
      expect(wrapper.text()).contains('Leading Slot')
    })

    it('nội dung truyền vào slot trailing được hiển thị', () => {
      const wrapper = mount(HnButton, {
        slots: { trailing: () => 'Trailing Slot' }
      })
      expect(wrapper.text()).contains('Trailing Slot')
    })
  })

  describe('thao tác', () => {
    it('click vào button thì emit click', () => {
      const wrapper = mount(HnButton)
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted('click')).toBeTruthy()
    })

    it('click vào button sẽ không emit click nếu button bị disabled', () => {
      const wrapper = mount(HnButton, { props: { disabled: true } })
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })
})
