import { getAcronym } from '.'

describe('string', () => {
  describe('getAcronym', () => {
    it('Nếu truyền vào chuỗi ký tự, sẽ trả về các ký tự đầu của từ ở dạng in hoa', () => {
      expect(getAcronym('Hoang Nguyen')).toBe('HN')
    })

    it('Nếu truyền vào chuỗi rỗng, sẽ trả về ròng', () => {
      expect(getAcronym('')).toBe('')
    })
  })
})
