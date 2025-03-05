import { isArray, isNumber, isObject } from '.'

describe('types', () => {
  it('isNumber', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(-Infinity)).toBe(true)
    expect(isNumber(Math.PI)).toBe(true)

    expect(isNumber('1')).toBe(false)
    expect(isNumber(false)).toBe(false)
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
  })

  it('isArray', () => {
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(1)).toBe(false)
  })

  it('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(1)).toBe(false)
  })
})
