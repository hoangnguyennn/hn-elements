import { useList } from '.'

describe('useList', () => {
  it('Giá trị ban đầu của map là rỗng', () => {
    const { map } = useList()
    expect(map.value.size).toBe(0)
  })

  it('Giá trị ban đầu của map không chia sẻ với nhau nếu gọi useList nhiều lần', () => {
    const { map } = useList()
    const { map: map2 } = useList()

    expect(map.value.size).toBe(0)
    expect(map2.value.size).toBe(0)
    expect(map.value).not.toBe(map2.value)
  })

  it('Khi gọi register, map sẽ tằng kích thước', () => {
    const { map, register } = useList()

    expect(map.value.size).toBe(0)

    register(document.createElement('div'))
    expect(map.value.size).toBe(1)

    register(document.createElement('div'))
    expect(map.value.size).toBe(2)
  })

  it('Khi gọi unregister, map sẽ giảm kích thước', () => {
    const { map, register, unregister } = useList()

    const div1 = document.createElement('div')
    register(div1)
    expect(map.value.size).toBe(1)

    unregister(div1)
    expect(map.value.size).toBe(0)

    const div2 = document.createElement('div')
    register(div2)
    expect(map.value.size).toBe(1)
  })
})
