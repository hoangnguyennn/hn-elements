/**
 * Tạo một mảng các số liên tiếp trong một khoảng.
 *
 * @example
 *   // Truyền cả `from` và `to`
 *   range(3, 6) // [3, 4, 5]
 *
 * @example
 *   // Chỉ truyền `from`
 *   range(4) // [0, 1, 2, 3]
 *
 * @example
 *   // Không tạo phần tử khi `from` bằng `to`
 *   range(5, 5) // []
 *
 * @param from - Giá trị bắt đầu của khoảng (bao gồm).
 * @param to - Giá trị kết thúc của khoảng (không bao gồm).
 *
 * @returns Một mảng các số liên tiếp từ `from` đến `to` (không bao gồm `to`).
 */
export const range = (from: number, to?: number): number[] => {
  if (to === undefined) {
    to = from
    from = 0
  }

  return Array.from({ length: to - from }, (_, i) => i + from)
}
