import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { useDebounce } from '.'

describe('useDebouce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
  })

  it('debounce hoạt động bình thường, callback chỉ được thực thi 1 lần dù gọi nhiều lần trong 1 khoảng thời gian', () => {
    const mockFn = vi.fn()

    const TestComponent = defineComponent({
      setup() {
        const debounced = useDebounce(mockFn, 200)
        return { debounced }
      },
      template: `<div></div>`
    })

    const wrapper = mount(TestComponent)

    wrapper.vm.debounced('A')
    wrapper.vm.debounced('B')
    wrapper.vm.debounced('C')

    expect(mockFn).not.toBeCalled()

    vi.advanceTimersByTime(199)
    expect(mockFn).not.toBeCalled()

    vi.advanceTimersByTime(1)
    expect(mockFn).toBeCalledTimes(1)
    expect(mockFn).toBeCalledWith('C')
  })

  it.todo('debounce bị huỷ khi component unmount')
})
