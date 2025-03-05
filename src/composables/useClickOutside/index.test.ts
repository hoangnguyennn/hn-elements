import { mount } from '@vue/test-utils'
import { defineComponent, ref } from 'vue'
import { useClickOutside } from '.'

describe('useClickOutside', () => {
  describe('refs null', () => {
    it('callback không được gọi nếu refs không trỏ tới bất kỳ mục tiêu nào', () => {
      const mockFn = vi.fn()

      mount(
        defineComponent({
          template: '<div><button>Inside</button></div>',
          setup() {
            const nullTarget = ref()
            useClickOutside({ refs: nullTarget, callback: mockFn })

            return { nullTarget }
          }
        })
      )

      document.body.click()
      expect(mockFn).not.toHaveBeenCalled()
    })
  })

  describe('refs là 1 mục tiêu', () => {
    it('callback được gọi khi click bên ngoài mục tiêu', () => {
      const mockFn = vi.fn()

      mount(
        defineComponent({
          template: '<div><button ref="target">Inside</button></div>',
          setup() {
            const target = ref()
            useClickOutside({ refs: target, callback: mockFn })

            return { target }
          }
        })
      )

      document.body.click()
      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('callback không được gọi khi click bên mục tiêu', async () => {
      const mockFn = vi.fn()

      const wrapper = mount(
        defineComponent({
          template: `
            <div>
              <button id="test-id" ref="target">Inside</button>
            </div>
          `,
          setup() {
            const target = ref()
            useClickOutside({ refs: target, callback: mockFn })

            return { target }
          }
        })
      )
      await wrapper.find('#test-id').trigger('click')
      expect(mockFn).not.toHaveBeenCalled()
    })
  })

  describe('refs là mảng nhiều mục tiêu', () => {
    it('refs là mảng thì callback được gọi khi click bên ngoài toàn bộ mục tiêu', () => {
      const mockFn = vi.fn()

      mount(
        defineComponent({
          template: `
            <div>
              <button ref="target1">Inside 1</button>
              <button ref="target2">Inside 2</button>
            </div>
          `,
          setup() {
            const target1 = ref()
            const target2 = ref()
            useClickOutside({ refs: [target1, target2], callback: mockFn })

            return { target1, target2 }
          }
        })
      )

      document.body.click()

      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('refs là mảng thì callback không được gọi khi click vào bất kỳ mục tiêu', async () => {
      const mockFn = vi.fn()

      const wrapper = mount(
        defineComponent({
          template: `
            <div>
              <button id="test-id1" ref="target1">Inside 1</button>
              <button id="test-id2" ref="target2">Inside 2</button>
            </div>
          `,
          setup() {
            const target1 = ref()
            const target2 = ref()
            useClickOutside({ refs: [target1, target2], callback: mockFn })

            return { target1, target2 }
          }
        })
      )

      await wrapper.find('#test-id1').trigger('click')
      expect(mockFn).not.toHaveBeenCalled()

      await wrapper.find('#test-id2').trigger('click')
      expect(mockFn).not.toHaveBeenCalled()
    })
  })

  it('khi component bị gỡ thì callback sẽ bị gỡ', () => {
    const mockFn = vi.fn()
    const removeEventListener = vi.spyOn(document, 'removeEventListener')

    const wrapper = mount(
      defineComponent({
        template: `
          <div>
            <button id="test-id" ref="target">Inside</button>
          </div>
        `,
        setup() {
          const target = ref()
          useClickOutside({ refs: target, callback: mockFn })

          return { target }
        }
      })
    )

    wrapper.unmount()
    expect(removeEventListener).toBeCalledWith('click', expect.any(Function))
  })
})
