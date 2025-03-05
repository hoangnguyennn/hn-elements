/**
 * @param value Giá trị muốn kiểm tra.
 *
 * @returns Trả về `true` nếu `value` là object.
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null
}

/**
 * @param value Giá trị muốn kiểm tra.
 *
 * @returns Trả về `true` nếu `value` là array.
 */
export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

/**
 * @param value Giá trị muốn kiểm tra.
 *
 * @returns Trả về `true` nếu `value` là number.
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !Number.isNaN(value)
}
