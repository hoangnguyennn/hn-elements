export type AvatarSize = 'small' | 'medium' | 'large'

export type AvatarProps = {
  /**
   * Kích thước của avatar.
   *
   * @default 'medium'
   */
  size?: AvatarSize
  /** Đường dẫn file hình ảnh của avatar. */
  src?: string
  /** Tên người dùng. */
  name?: string
}
