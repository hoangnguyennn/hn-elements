import { userEvent } from '@testing-library/user-event'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { usePressEsc } from '.'

describe('usePressEsc', () => {
  it('Khi click phím ESC thì callback được gọi', async () => {
    const mockFn = vi.fn()
    const TestComponent = defineComponent({
      setup() {
        usePressEsc({ callback: mockFn })
        return () => null
      }
    })

    mount(TestComponent)

    await userEvent.keyboard('{Escape}')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
