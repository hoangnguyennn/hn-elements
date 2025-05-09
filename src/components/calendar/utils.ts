import dayjs from 'dayjs'

/**
 * Lấy nhẫn thập kỷ của ngày được cung cấp.
 *
 * @param date Ngày.
 *
 * @returns Nhãn thập kỷ của ngày được cung cấp.
 */
export const getDecadeLabel = (date: Date): string => {
  const startYear = Math.floor(date.getFullYear() / 10) * 10 + 1
  const endYear = startYear + 9
  return `${startYear} - ${endYear}`
}

/**
 * Lấy nhãn của thập kỷ trước của ngày được cung cấp.
 *
 * @param date Ngày.
 *
 * @returns Nhãn thập kỷ trước của ngày được cung cấp.
 */
export const getPreviousDecadeLabel = (date: Date): string => {
  const previousDecadeDate = dayjs(date).subtract(10, 'year')
  return getDecadeLabel(previousDecadeDate.toDate())
}

/**
 * Lấy nhãn của thập kỷ sau của ngày được cung cấp.
 *
 * @param date Ngày.
 *
 * @returns Nhãn thập kỷ sau của ngày được cung cấp.
 */
export const getNextDecadeLabel = (date: Date): string => {
  const nextDecadeDate = dayjs(date).add(10, 'year')
  return getDecadeLabel(nextDecadeDate.toDate())
}
