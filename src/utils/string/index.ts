/**
 * Lấy ra các ký tự đầu tiên của các từ.
 *
 * @param text Chuỗi muốn lấy ra ký tự đầu tiên.
 *
 * @returns Chuỗi gồm các ký tự đầu tiên của các từ.
 */
export const getAcronym = (text: string): string => {
  return text
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
}
