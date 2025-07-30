export type TagSize = 'small' | 'medium' | 'large'

export type TagProps = {
  /**
   * Kích thước của tag.
   *
   * @default 'medium'
   */
  size?: TagSize
  /** Chỉ ra rằng tag có thể đóng hay không. */
  closeable?: boolean
  /** Nhãn aria cho button đóng tag. */
  closeAriaLabel?: string
}

export type TagEmits = {
  /** Sự kiện khi tag được đóng. */
  close: []
}
