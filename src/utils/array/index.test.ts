import { range } from '.'

describe('array', () => {
  it('Nếu truyền cả `from` vả `to`, một mảng các số liên tiếp từ `from` đến `to` sẽ được trả về', () => {
    expect(range(3, 6)).toEqual([3, 4, 5])
  })

  it('Nếu chỉ truyền `from`, một mảng các số liên tiếp từ 0 đến `from` sẽ được trả về', () => {
    expect(range(4)).toEqual([0, 1, 2, 3])
  })

  it('Nếu truyền `from` lớn hơn hoặc bằng `to`, một mảng rỗng sẽ được trả về', () => {
    expect(range(5, 5)).toEqual([])
  })
})
